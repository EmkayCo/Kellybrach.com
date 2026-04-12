import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

export const dynamic = 'force-dynamic'

const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  cityState: z.string().min(2),
  petType: z.enum(['dog', 'cat', 'other']),
  situation: z.string().min(10),
  howHeard: z.string().optional(),
})

// Lazily initialized — avoids Resend constructor throwing at build time
// when RESEND_API_KEY is not set in the build environment.
let _resend: Resend | null = null
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY ?? '')
  }
  return _resend
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid form data', details: result.error.flatten() },
      { status: 422 }
    )
  }

  const data = result.data
  const petTypeLabel = { dog: 'Dog', cat: 'Cat', other: 'Other' }[data.petType]

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1B2B3B;">

  <div style="background: #B91C1C; color: white; padding: 16px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 20px;">🚨 New Lost Pet Search Request</h1>
  </div>

  <div style="background: #F7F3ED; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">

    <table style="width: 100%; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 10px 0; font-weight: bold; width: 40%; color: #2D5016;">Full Name</td>
        <td style="padding: 10px 0;">${data.fullName}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 10px 0; font-weight: bold; color: #2D5016;">Phone</td>
        <td style="padding: 10px 0;">
          <a href="tel:${data.phone.replace(/\D/g, '')}" style="color: #C8922A; font-family: monospace; font-weight: bold;">${data.phone}</a>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 10px 0; font-weight: bold; color: #2D5016;">Email</td>
        <td style="padding: 10px 0;">
          <a href="mailto:${data.email}" style="color: #C8922A;">${data.email}</a>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 10px 0; font-weight: bold; color: #2D5016;">Location</td>
        <td style="padding: 10px 0;">${data.cityState}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 10px 0; font-weight: bold; color: #2D5016;">Pet Type</td>
        <td style="padding: 10px 0;">${petTypeLabel}</td>
      </tr>
      ${
        data.howHeard
          ? `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 10px 0; font-weight: bold; color: #2D5016;">How They Heard</td>
        <td style="padding: 10px 0;">${data.howHeard}</td>
      </tr>`
          : ''
      }
    </table>

    <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #B91C1C;">
      <p style="font-weight: bold; color: #2D5016; margin: 0 0 8px;">Situation Description:</p>
      <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.situation}</p>
    </div>

  </div>

  <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 16px;">
    This message was sent from the contact form at kellybrach.com
  </p>
</body>
</html>
`

  try {
    await getResend().emails.send({
      from: 'Kelly Brach Site <noreply@kellybrach.com>',
      to: ['kelly@kellybrach.com'],
      reply_to: data.email,
      subject: `🚨 Lost Pet Search Request — ${data.fullName} (${petTypeLabel} in ${data.cityState})`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json(
      { error: 'Failed to send email. Please call or text directly at 631-973-LOST.' },
      { status: 500 }
    )
  }
}
