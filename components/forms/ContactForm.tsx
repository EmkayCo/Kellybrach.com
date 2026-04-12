'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  cityState: z.string().min(2, 'Please enter the city and state where your pet is missing'),
  petType: z.enum(['dog', 'cat', 'other'], { required_error: 'Please select a pet type' }),
  situation: z.string().min(10, 'Please describe the situation (at least 10 characters)'),
  howHeard: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface ContactFormProps {
  phone?: string
}

export default function ContactForm({ phone = '631-973-LOST' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined) formData.append(key, value)
      })

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-2xl font-bold text-green-800 mb-2">
          Message Received
        </h3>
        <p className="text-green-700 font-body mb-4">
          Kelly will respond to your inquiry as quickly as possible. For the fastest
          response, please also call or text directly.
        </p>
        <a
          href={phoneHref}
          className="btn-primary inline-flex font-mono"
        >
          Call/Text {phone}
        </a>
      </div>
    )
  }

  const fieldClass =
    'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-navy font-body text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:border-transparent'
  const errorClass = 'mt-1 text-xs text-red-600 font-body'
  const labelClass = 'block text-sm font-semibold font-body text-navy mb-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          className={fieldClass}
          aria-invalid={!!errors.fullName}
          {...register('fullName')}
        />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
          className={fieldClass}
          aria-invalid={!!errors.phone}
          {...register('phone')}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          className={fieldClass}
          aria-invalid={!!errors.email}
          {...register('email')}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* City & State */}
      <div>
        <label htmlFor="cityState" className={labelClass}>
          City &amp; State Where Pet Is Missing <span className="text-red-500">*</span>
        </label>
        <input
          id="cityState"
          type="text"
          placeholder="Kings Park, NY"
          className={fieldClass}
          aria-invalid={!!errors.cityState}
          {...register('cityState')}
        />
        {errors.cityState && <p className={errorClass}>{errors.cityState.message}</p>}
      </div>

      {/* Pet Type */}
      <div>
        <label htmlFor="petType" className={labelClass}>
          Pet Type <span className="text-red-500">*</span>
        </label>
        <select
          id="petType"
          className={fieldClass}
          aria-invalid={!!errors.petType}
          {...register('petType')}
        >
          <option value="">Select pet type…</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="other">Other</option>
        </select>
        {errors.petType && <p className={errorClass}>{errors.petType.message}</p>}
      </div>

      {/* Situation */}
      <div>
        <label htmlFor="situation" className={labelClass}>
          Describe the Situation <span className="text-red-500">*</span>
        </label>
        <textarea
          id="situation"
          rows={5}
          placeholder="When did your pet go missing? What is their name, breed, and description? What was the last-known location? Any other details that might help."
          className={fieldClass}
          aria-invalid={!!errors.situation}
          {...register('situation')}
        />
        {errors.situation && <p className={errorClass}>{errors.situation.message}</p>}
      </div>

      {/* How heard */}
      <div>
        <label htmlFor="howHeard" className={labelClass}>
          How Did You Hear About Us?
        </label>
        <input
          id="howHeard"
          type="text"
          placeholder="Google, Facebook, word of mouth…"
          className={fieldClass}
          {...register('howHeard')}
        />
      </div>

      {/* Scam notice */}
      <div className="bg-red-alert/10 border border-red-alert/30 rounded-lg p-4 text-sm font-body text-red-900">
        <strong>Scam Notice:</strong> You will receive a contract from{' '}
        <span className="font-mono font-bold">kelly@kellybrach.com</span> before any
        payment is requested. Never send money without receiving a written contract first.
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-300 rounded-lg p-4 text-sm text-red-700 font-body">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send My Request →'}
      </button>

      <p className="text-center text-xs text-gray-500 font-body">
        Kelly responds to all urgent inquiries as quickly as possible. For immediate
        response, call or text:{' '}
        <a href={phoneHref} className="font-mono text-warm-gold font-bold hover:underline">
          {phone}
        </a>
      </p>
    </form>
  )
}
