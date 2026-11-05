// import { useState } from 'react'
// import {
//   Phone,
//   Mail,
//   Building2,
//   Clock,
//   ChevronDown,
//   ArrowRight,
//   Briefcase,
//   KeyRound,
//   Shield,
//   BookOpen,
//   Send,
//   Loader2,
// } from 'lucide-react'
// import Reveal from './Reveal'
// import useInView from '../hooks/useInView'

// /* ---------- CONTACT DETAILS (edit here) ---------- */
// const PHONES = [
//   { number: '+1 (800) 472-3800', link: '+18004723800', desk: 'Americas Desk' },
//   { number: '+44 (0) 20 7946 0912', link: '+442079460912', desk: 'Europe Desk' },
// ]
// const EMAIL = 'concierge@fourspace.com'
// const PGP = 'PGP Key fingerprint: 7F29 A041 D683 E8B2'
// const OFFICES = [
//   { city: 'New York', address: '740 Park Avenue, Penthouse Suite, NY 10021' },
//   { city: 'London', address: '12 Berkeley Square, Mayfair, London W1J 6BD' },
// ]

// /* Where the form is sent. Leave empty to just show the success message.
//    Example for your MERN server: '/api/contact' */
// const API_URL = ''

// /* ---------- DROPDOWN OPTIONS (edit here) ---------- */
// const INTERESTS = [
//   'Turnkey Property & Asset Management',
//   'Buy / Sell Advisory',
//   'Financial Assistance & Debt Structuring',
//   'Real Estate Consultancy',
//   'Tenancy Concierge',
//   'Interiors & Staging',
//   'Something else',
// ]

// const PORTFOLIO_VALUES = [
//   'Under $1M',
//   '$1M – $5M (Premium Residential)',
//   '$5M – $15M (Luxury Estates)',
//   '$15M – $50M (Prime Estates / Multi-Unit)',
//   '$50M+ (Institutional Portfolio)',
// ]

// const emptyForm = {
//   name: '',
//   email: '',
//   phone: '',
//   interest: '',
//   value: '',
//   details: '',
// }

// /* ---------- SMALL PIECES ---------- */

// /* A line that draws itself when it scrolls into view */
// function Divider() {
//   const [ref, inView] = useInView(0.6)

//   return (
//     <div ref={ref} className="my-5 h-px bg-white/10">
//       <div
//         className={`h-px origin-left bg-white/25 transition-transform duration-[1400ms] ease-out ${
//           inView ? 'scale-x-100' : 'scale-x-0'
//         }`}
//       ></div>
//     </div>
//   )
// }

// /* One row in the dark card: icon circle + title + content */
// function InfoRow({ icon: Icon, motion, title, children }) {
//   return (
//     <div className="group/row -mx-3 flex gap-5 rounded-2xl px-3 py-3 transition-all duration-500 hover:translate-x-1.5 hover:bg-white/5">
//       <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f3dcc0] transition-all duration-500 group-hover/row:scale-110 group-hover/row:bg-[#f3dcc0] group-hover/row:text-[#1b2038]">
//         <Icon
//           size={22}
//           strokeWidth={1.8}
//           className={`transition-transform duration-500 ${motion}`}
//         />
//       </span>
//       <div className="min-w-0">
//         <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#f3dcc0]">
//           {title}
//         </p>
//         {children}
//       </div>
//     </div>
//   )
// }

// /* Fades and rises into place, one after another (used inside the form card) */
// function Rise({ show, i = 0, className = '', children }) {
//   return (
//     <div
//       style={{ transitionDelay: show ? `${300 + i * 90}ms` : '0ms' }}
//       className={`min-w-0 transition-all duration-700 ease-out ${
//         show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//       } ${className}`}
//     >
//       {children}
//     </div>
//   )
// }

// /* One label + field + error message. The label turns brown while you type in the field. */
// function Field({ label, required, error, children }) {
//   return (
//     <div className="group min-w-0">
//       <label className="block text-[12px] font-bold uppercase tracking-[0.1em] text-slate-700 transition-colors duration-300 group-focus-within:text-[#7a5c46]">
//         {label}
//         {required && <span className="text-[#7a5c46]"> *</span>}
//       </label>
//       <div className="mt-3">{children}</div>
//       {error && (
//         <p
//           key={error}
//           className="mt-2 animate-[errIn_300ms_ease-out] text-[13px] font-medium text-[#b4452f]"
//         >
//           {error}
//         </p>
//       )}
//     </div>
//   )
// }

// const inputClass = (hasError) =>
//   `h-14 w-full rounded-xl border bg-white px-5 text-[17px] text-[#171d36] placeholder:text-slate-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 ${
//     hasError
//       ? 'border-[#b4452f] focus-visible:border-[#b4452f] focus-visible:ring-[#b4452f]/15'
//       : 'border-[#e6e0d6] hover:border-[#c9b8a4] focus-visible:border-[#171d36] focus-visible:ring-[#171d36]/10'
//   }`

// /* A dropdown that never overflows: long text is cut with "..." and the arrow stays inside */
// function Select({ value, onChange, options, placeholder, hasError, id }) {
//   return (
//     <div className="relative">
//       <select
//         id={id}
//         value={value}
//         onChange={onChange}
//         className={`${inputClass(hasError)} cursor-pointer appearance-none truncate pr-12 ${
//           value ? '' : 'text-slate-400'
//         }`}
//       >
//         <option value="">{placeholder}</option>
//         {options.map((option) => (
//           <option key={option} value={option} className="text-[#171d36]">
//             {option}
//           </option>
//         ))}
//       </select>
//       <ChevronDown
//         size={20}
//         className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 transition-transform duration-300 group-focus-within:rotate-180"
//       />
//     </div>
//   )
// }

// /* ---------- THE SECTION ---------- */
// function ContactSection() {
//   const [form, setForm] = useState(emptyForm)
//   const [errors, setErrors] = useState({})
//   const [status, setStatus] = useState('idle') // idle | sending | success | failed
//   const [shake, setShake] = useState(false)
//   const [cardRef, cardIn] = useInView(0.2)

//   // Saves the mouse position so the glow can follow it
//   const handleMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
//     e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
//   }

//   const update = (field) => (event) => {
//     const value = event.target.value
//     setForm((current) => ({ ...current, [field]: value }))
//     if (errors[field]) setErrors((current) => ({ ...current, [field]: '' }))
//   }

//   const validate = () => {
//     const found = {}
//     if (!form.name.trim()) found.name = 'Please enter your full name.'
//     if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) found.email = 'Please enter a valid email.'
//     if (form.phone.replace(/\D/g, '').length < 7) found.phone = 'Please enter a valid phone number.'
//     if (!form.interest) found.interest = 'Please choose a service.'
//     return found
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const found = validate()
//     setErrors(found)

//     if (Object.keys(found).length > 0) {
//       // Shake the button so it is obvious something needs fixing
//       setShake(true)
//       setTimeout(() => setShake(false), 600)
//       return
//     }

//     setStatus('sending')
//     try {
//       if (API_URL) {
//         const response = await fetch(API_URL, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(form),
//         })
//         if (!response.ok) throw new Error('Request failed')
//       }
//       setStatus('success')
//     } catch (error) {
//       console.error('Contact form failed:', error)
//       setStatus('failed')
//     }
//   }

//   const reset = () => {
//     setForm(emptyForm)
//     setErrors({})
//     setStatus('idle')
//   }

//   return (
//     <section className="w-full overflow-hidden bg-[#faf8f4] px-6 py-12 lg:px-12 lg:py-16">

//       {/* Keyframes used by the effects below */}
//       <style>{`
//         @keyframes shake { 0%,100% { transform: translateX(0) } 20% { transform: translateX(-8px) } 40% { transform: translateX(8px) } 60% { transform: translateX(-5px) } 80% { transform: translateX(5px) } }
//         @keyframes errIn { from { opacity: 0; transform: translateY(-6px) } to { opacity: 1; transform: translateY(0) } }
//         @keyframes popIn { from { opacity: 0; transform: scale(0.6) } to { opacity: 1; transform: scale(1) } }
//       `}</style>

//       <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-10">

//         {/* ================= LEFT: DARK CONTACT CARD ================= */}
//         <Reveal direction="left" className="min-w-0">
//           <div
//             onMouseMove={handleMove}
//             className="group relative overflow-hidden rounded-3xl bg-[#1b2038] p-8 text-white shadow-xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/30 md:p-10"
//           >
//             {/* Glow that follows the mouse */}
//             <div
//               className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               style={{
//                 background:
//                   'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(243, 220, 192, 0.12), transparent 65%)',
//               }}
//             ></div>

//             <div className="relative">
//               <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#f3dcc0]">
//                 <span className="relative flex h-2 w-2">
//                   <span className="absolute inset-0 animate-ping rounded-full bg-[#f3dcc0]/60"></span>
//                   <span className="relative h-2 w-2 rounded-full bg-[#f3dcc0]"></span>
//                 </span>
//                 Direct Mandate Desk
//               </p>
//               <h2 className="mt-6 font-serif text-5xl">Get in touch</h2>
//               <p className="mt-5 max-w-md text-[18px] leading-8 text-slate-400">
//                 Direct access to our senior partners and asset custodians with zero
//                 intermediary delays.
//               </p>

//               <div className="mt-8">
//                 {/* Phones */}
//                 <Reveal delay={150}>
//                   <InfoRow
//                     icon={Phone}
//                     motion="group-hover/row:-rotate-12 group-hover/row:scale-110"
//                     title="Dedicated Partner Lines"
//                   >
//                     <div className="mt-2 space-y-1">
//                       {PHONES.map((phone) => (
//                         <a
//                           key={phone.link}
//                           href={`tel:${phone.link}`}
//                           className="block text-[19px] font-medium text-white transition-colors hover:text-[#f3dcc0]"
//                         >
//                           {phone.number}{' '}
//                           <span className="text-[17px] font-normal text-slate-400">
//                             ({phone.desk})
//                           </span>
//                         </a>
//                       ))}
//                     </div>
//                   </InfoRow>
//                 </Reveal>

//                 <Divider />

//                 {/* Email */}
//                 <Reveal delay={250}>
//                   <InfoRow
//                     icon={Mail}
//                     motion="group-hover/row:-translate-y-0.5 group-hover/row:scale-110"
//                     title="Encrypted Transmission Desk"
//                   >
//                     <a
//                       href={`mailto:${EMAIL}`}
//                       className="mt-2 block break-all text-[20px] font-medium text-white transition-colors hover:text-[#f3dcc0]"
//                     >
//                       {EMAIL}
//                     </a>
//                     <p className="mt-2 text-[14px] leading-6 text-slate-500">{PGP}</p>
//                   </InfoRow>
//                 </Reveal>

//                 <Divider />

//                 {/* Offices */}
//                 <Reveal delay={350}>
//                   <InfoRow
//                     icon={Building2}
//                     motion="group-hover/row:scale-125"
//                     title="Private Consultation Chambers"
//                   >
//                     <div className="mt-2 space-y-3 text-[17px] leading-7 text-white">
//                       {OFFICES.map((office) => (
//                         <p key={office.city}>
//                           <span className="font-medium text-[#f3dcc0]">{office.city}:</span>{' '}
//                           {office.address}
//                         </p>
//                       ))}
//                     </div>
//                   </InfoRow>
//                 </Reveal>

//                 <Divider />

//                 {/* Hours */}
//                 <Reveal delay={450}>
//                   <div className="group/row rounded-2xl bg-[#0d1226] p-6 ring-1 ring-transparent transition-all duration-500 hover:-translate-y-1 hover:ring-[#f3dcc0]/30">
//                     <div className="flex gap-4">
//                       <Clock
//                         size={22}
//                         strokeWidth={1.8}
//                         className="mt-0.5 shrink-0 text-[#f3dcc0] transition-transform duration-1000 group-hover/row:rotate-[360deg]"
//                       />
//                       <div>
//                         <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#f3dcc0]">
//                           Operating Desk Hours
//                         </p>
//                         <p className="mt-3 text-[17px] leading-8 text-slate-400">
//                           Monday – Saturday: 08:00 – 20:00 EST / GMT
//                         </p>
//                         <p className="mt-2 text-[15px] font-medium leading-7 text-[#f3dcc0]">
//                           24/7 Fiduciary Emergency Triage for Active Retainers
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Reveal>

//                 {/* Secure channels */}
//                 <Reveal delay={550}>
//                   <div className="mt-8 flex items-center justify-between gap-4">
//                     <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-300">
//                       Secure Dispatch Channels
//                     </p>
//                     <div className="flex gap-2.5">
//                       {[Briefcase, KeyRound, Shield, BookOpen].map((Icon, index) => (
//                         <span
//                           key={index}
//                           className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1.5 hover:rotate-6 hover:bg-[#f3dcc0] hover:text-[#1b2038] hover:shadow-lg hover:shadow-black/30"
//                         >
//                           <Icon size={18} strokeWidth={1.8} />
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </Reveal>
//               </div>
//             </div>
//           </div>
//         </Reveal>

//         {/* ================= RIGHT: FORM CARD ================= */}
//         <Reveal direction="right" delay={200} className="min-w-0">
//           <div
//             ref={cardRef}
//             className="relative min-w-0 overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-900/10 md:p-10"
//           >
//             {/* Brown line that draws across the top */}
//             <span
//               style={{ transitionDelay: '400ms' }}
//               className={`absolute left-0 top-0 h-1 w-full origin-left bg-[#7a5c46] transition-transform duration-[1500ms] ease-out ${
//                 cardIn ? 'scale-x-100' : 'scale-x-0'
//               }`}
//             ></span>

//             <Rise show={cardIn} i={0}>
//               <h2 className="font-serif text-4xl text-[#171d36] md:text-[40px]">
//                 Initiate Private Dialogue
//               </h2>
//             </Rise>
//             <Rise show={cardIn} i={1}>
//               <p className="mt-3 max-w-md text-[17px] leading-8 text-slate-600">
//                 Complete the brief below. Senior custodians review all dossiers within two hours.
//               </p>
//             </Rise>

//             <div className="mt-8 h-px bg-[#eee6dc]"></div>

//             {status === 'success' ? (
//               /* ----- Success message ----- */
//               <div className="flex animate-[popIn_500ms_ease-out] flex-col items-center py-16 text-center">
//                 <span className="relative flex h-16 w-16 items-center justify-center">
//                   <span className="absolute inset-0 animate-ping rounded-full bg-[#171d36]/30"></span>
//                   <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#171d36] text-[#f3dcc0]">
//                     <Send size={26} strokeWidth={1.8} />
//                   </span>
//                 </span>
//                 <h3 className="mt-6 font-serif text-3xl text-[#171d36]">Message received</h3>
//                 <p className="mt-3 max-w-sm text-[16px] leading-7 text-slate-600">
//                   Thank you, {form.name.split(' ')[0] || 'friend'}. A senior custodian will
//                   review your brief and respond within two hours.
//                 </p>
//                 <button
//                   type="button"
//                   onClick={reset}
//                   className="mt-8 cursor-pointer text-[12px] font-bold uppercase tracking-[0.18em] text-[#7a5c46] underline-offset-8 transition-colors hover:text-[#171d36] hover:underline"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               /* ----- The form ----- */
//               <form onSubmit={handleSubmit} noValidate className="mt-8">
//                 <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
//                   <Rise show={cardIn} i={2}>
//                     <Field label="Full legal name" required error={errors.name}>
//                       <input
//                         type="text"
//                         value={form.name}
//                         onChange={update('name')}
//                         placeholder="Johnathan Vance"
//                         autoComplete="name"
//                         className={inputClass(errors.name)}
//                       />
//                     </Field>
//                   </Rise>

//                   <Rise show={cardIn} i={3}>
//                     <Field label="Institutional / personal email" required error={errors.email}>
//                       <input
//                         type="email"
//                         value={form.email}
//                         onChange={update('email')}
//                         placeholder="jvance@privateholdings.com"
//                         autoComplete="email"
//                         className={inputClass(errors.email)}
//                       />
//                     </Field>
//                   </Rise>

//                   <Rise show={cardIn} i={4}>
//                     <Field label="Direct phone number" required error={errors.phone}>
//                       <input
//                         type="tel"
//                         value={form.phone}
//                         onChange={update('phone')}
//                         placeholder="+1 (555) 019-2834"
//                         autoComplete="tel"
//                         className={inputClass(errors.phone)}
//                       />
//                     </Field>
//                   </Rise>

//                   <Rise show={cardIn} i={5}>
//                     <Field label="I'm interested in" required error={errors.interest}>
//                       <Select
//                         value={form.interest}
//                         onChange={update('interest')}
//                         options={INTERESTS}
//                         placeholder="Select a service"
//                         hasError={errors.interest}
//                       />
//                     </Field>
//                   </Rise>
//                 </div>

//                 <Rise show={cardIn} i={6} className="mt-7">
//                   <Field label="Estimated portfolio or asset value">
//                     <Select
//                       value={form.value}
//                       onChange={update('value')}
//                       options={PORTFOLIO_VALUES}
//                       placeholder="Select a range (optional)"
//                     />
//                   </Field>
//                 </Rise>

//                 <Rise show={cardIn} i={7} className="mt-7">
//                   <Field label="Mandate context & property details">
//                     <textarea
//                       rows={5}
//                       value={form.details}
//                       onChange={update('details')}
//                       placeholder="Tell us briefly about your property and what you need."
//                       className="w-full resize-y rounded-xl border border-[#e6e0d6] bg-white px-5 py-4 text-[17px] leading-8 text-[#171d36] transition-all duration-300 placeholder:text-slate-400 hover:border-[#c9b8a4] focus-visible:border-[#171d36] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#171d36]/10"
//                     ></textarea>
//                   </Field>
//                 </Rise>

//                 {status === 'failed' && (
//                   <p className="mt-5 animate-[errIn_300ms_ease-out] text-[14px] font-medium text-[#b4452f]">
//                     Something went wrong. Please try again, or call us directly.
//                   </p>
//                 )}

//                 {/* Submit row */}
//                 <Rise show={cardIn} i={8} className="mt-8">
//                   <div className="flex flex-wrap items-center justify-between gap-5">
//                     <button
//                       type="submit"
//                       disabled={status === 'sending'}
//                       className={`group/btn relative inline-flex h-16 cursor-pointer items-center gap-3 overflow-hidden rounded-xl bg-[#171d36] px-10 text-[14px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/25 active:scale-95 disabled:cursor-wait disabled:opacity-70 ${
//                         shake ? 'animate-[shake_500ms_ease-in-out]' : ''
//                       }`}
//                     >
//                       {/* Brown colour sweeping across */}
//                       <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//                       {/* Light streak */}
//                       <span className="absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover/btn:translate-x-[400%]"></span>

//                       <span className="relative">
//                         {status === 'sending' ? 'Sending…' : 'Send message'}
//                       </span>
//                       {status === 'sending' ? (
//                         <Loader2 size={20} className="relative animate-spin" />
//                       ) : (
//                         <ArrowRight
//                           size={20}
//                           strokeWidth={2.2}
//                           className="relative transition-transform duration-300 group-hover/btn:translate-x-1.5"
//                         />
//                       )}
//                     </button>

//                     <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] text-[#171d36]">
//                       <span className="relative flex h-2.5 w-2.5">
//                         <span className="absolute inset-0 animate-ping rounded-full bg-[#7a5c46]/60"></span>
//                         <span className="relative h-2.5 w-2.5 rounded-full bg-[#7a5c46]"></span>
//                       </span>
//                       Average partner triage: 47 minutes
//                     </p>
//                   </div>
//                 </Rise>
//               </form>
//             )}
//           </div>
//         </Reveal>

//       </div>
//     </section>
//   )
// }

// export default ContactSection

import { useState } from 'react'
import {
  Phone,
  Mail,
  Building2,
  Clock,
  ChevronDown,
  ArrowRight,
  Briefcase,
  KeyRound,
  Shield,
  BookOpen,
  Send,
  Loader2,
} from 'lucide-react'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'

/* ---------- CONTACT DETAILS (edit here) ---------- */
const PHONES = [
  { number: '+1 (800) 472-3800', link: '+18004723800', desk: 'Americas Desk' },
  { number: '+44 (0) 20 7946 0912', link: '+442079460912', desk: 'Europe Desk' },
]
const EMAIL = 'concierge@fourspace.com'
const PGP = 'PGP Key fingerprint: 7F29 A041 D683 E8B2'
const OFFICES = [
  { city: 'New York', address: '740 Park Avenue, Penthouse Suite, NY 10021' },
  { city: 'London', address: '12 Berkeley Square, Mayfair, London W1J 6BD' },
]

/* Where the form is sent. Leave empty to just show the success message.
   Example for your MERN server: '/api/contact' */
const API_URL = ''

/* ---------- DROPDOWN OPTIONS (edit here) ---------- */
const INTERESTS = [
  'Turnkey Property & Asset Management',
  'Buy / Sell Advisory',
  'Financial Assistance & Debt Structuring',
  'Real Estate Consultancy',
  'Tenancy Concierge',
  'Interiors & Staging',
  'Something else',
]

const PORTFOLIO_VALUES = [
  'Under $1M',
  '$1M – $5M (Premium Residential)',
  '$5M – $15M (Luxury Estates)',
  '$15M – $50M (Prime Estates / Multi-Unit)',
  '$50M+ (Institutional Portfolio)',
]

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  value: '',
  details: '',
}

/* ---------- SMALL PIECES ---------- */

/* A line that draws itself when it scrolls into view */
function Divider() {
  const [ref, inView] = useInView(0.6)

  return (
    <div ref={ref} className="my-5 h-px bg-white/10">
      <div
        className={`h-px origin-left bg-white/25 transition-transform duration-[1400ms] ease-out ${
          inView ? 'scale-x-100' : 'scale-x-0'
        }`}
      ></div>
    </div>
  )
}

/* One row in the dark card: icon circle + title + content */
function InfoRow({ icon: Icon, motion, title, children }) {
  return (
    <div className="group/row -mx-3 flex gap-4 rounded-2xl px-3 py-3 transition-all duration-500 hover:translate-x-1.5 hover:bg-white/5 sm:gap-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f3dcc0] transition-all duration-500 group-hover/row:scale-110 group-hover/row:bg-[#f3dcc0] group-hover/row:text-[#1b2038] sm:h-14 sm:w-14">
        <Icon
          size={22}
          strokeWidth={1.8}
          className={`transition-transform duration-500 ${motion}`}
        />
      </span>
      <div className="min-w-0">
        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#f3dcc0]">
          {title}
        </p>
        {children}
      </div>
    </div>
  )
}

/* Fades and rises into place, one after another (used inside the form card) */
function Rise({ show, i = 0, className = '', children }) {
  return (
    <div
      style={{ transitionDelay: show ? `${300 + i * 90}ms` : '0ms' }}
      className={`min-w-0 transition-all duration-700 ease-out ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* One label + field + error message. The label turns brown while you type in the field. */
function Field({ label, required, error, children }) {
  return (
    <div className="group min-w-0">
      <label className="block text-[12px] font-bold uppercase tracking-[0.1em] text-slate-700 transition-colors duration-300 group-focus-within:text-[#7a5c46]">
        {label}
        {required && <span className="text-[#7a5c46]"> *</span>}
      </label>
      <div className="mt-3">{children}</div>
      {error && (
        <p
          key={error}
          className="mt-2 animate-[errIn_300ms_ease-out] text-[13px] font-medium text-[#b4452f]"
        >
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (hasError) =>
  `h-14 w-full rounded-xl border bg-white px-5 text-[17px] text-[#171d36] placeholder:text-slate-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 ${
    hasError
      ? 'border-[#b4452f] focus-visible:border-[#b4452f] focus-visible:ring-[#b4452f]/15'
      : 'border-[#e6e0d6] hover:border-[#c9b8a4] focus-visible:border-[#171d36] focus-visible:ring-[#171d36]/10'
  }`

/* A dropdown that never overflows: long text is cut with "..." and the arrow stays inside */
function Select({ value, onChange, options, placeholder, hasError, id }) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`${inputClass(hasError)} cursor-pointer appearance-none truncate pr-12 ${
          value ? '' : 'text-slate-400'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[#171d36]">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        size={20}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 transition-transform duration-300 group-focus-within:rotate-180"
      />
    </div>
  )
}

/* ---------- THE SECTION ---------- */
function ContactSection() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | failed
  const [shake, setShake] = useState(false)
  const [cardRef, cardIn] = useInView(0.2)

  // Saves the mouse position so the glow can follow it
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  const update = (field) => (event) => {
    const value = event.target.value
    setForm((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: '' }))
  }

  const validate = () => {
    const found = {}
    if (!form.name.trim()) found.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) found.email = 'Please enter a valid email.'
    if (form.phone.replace(/\D/g, '').length < 7) found.phone = 'Please enter a valid phone number.'
    if (!form.interest) found.interest = 'Please choose a service.'
    return found
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)

    if (Object.keys(found).length > 0) {
      // Shake the button so it is obvious something needs fixing
      setShake(true)
      setTimeout(() => setShake(false), 600)
      return
    }

    setStatus('sending')
    try {
      if (API_URL) {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!response.ok) throw new Error('Request failed')
      }
      setStatus('success')
    } catch (error) {
      console.error('Contact form failed:', error)
      setStatus('failed')
    }
  }

  const reset = () => {
    setForm(emptyForm)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section className="w-full overflow-hidden bg-[#faf8f4] px-5 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">

      {/* Keyframes used by the effects below */}
      <style>{`
        @keyframes shake { 0%,100% { transform: translateX(0) } 20% { transform: translateX(-8px) } 40% { transform: translateX(8px) } 60% { transform: translateX(-5px) } 80% { transform: translateX(5px) } }
        @keyframes errIn { from { opacity: 0; transform: translateY(-6px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.6) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      <div className="mx-auto grid max-w-7xl items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-10">

        {/* ================= LEFT: DARK CONTACT CARD ================= */}
        <Reveal direction="left" className="min-w-0">
          <div
            onMouseMove={handleMove}
            className="group relative overflow-hidden rounded-3xl bg-[#1b2038] p-6 text-white shadow-xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/30 sm:p-8 md:p-10"
          >
            {/* Glow that follows the mouse */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(243, 220, 192, 0.12), transparent 65%)',
              }}
            ></div>

            <div className="relative">
              <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#f3dcc0]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#f3dcc0]/60"></span>
                  <span className="relative h-2 w-2 rounded-full bg-[#f3dcc0]"></span>
                </span>
                Direct Mandate Desk
              </p>
              <h2 className="mt-5 font-serif text-4xl sm:mt-6 sm:text-5xl">Get in touch</h2>
              <p className="mt-4 max-w-md text-[16px] leading-7 text-slate-400 sm:mt-5 sm:text-[18px] sm:leading-8">
                Direct access to our senior partners and asset custodians with zero
                intermediary delays.
              </p>

              <div className="mt-6 sm:mt-8">
                {/* Phones */}
                <Reveal delay={150}>
                  <InfoRow
                    icon={Phone}
                    motion="group-hover/row:-rotate-12 group-hover/row:scale-110"
                    title="Dedicated Partner Lines"
                  >
                    <div className="mt-2 space-y-2 sm:space-y-1">
                      {PHONES.map((phone) => (
                        <a
                          key={phone.link}
                          href={`tel:${phone.link}`}
                          className="block text-[18px] font-medium text-white transition-colors hover:text-[#f3dcc0] sm:text-[19px]"
                        >
                          {phone.number}{' '}
                          <span className="block text-[15px] font-normal text-slate-400 sm:inline sm:text-[17px]">
                            ({phone.desk})
                          </span>
                        </a>
                      ))}
                    </div>
                  </InfoRow>
                </Reveal>

                <Divider />

                {/* Email */}
                <Reveal delay={250}>
                  <InfoRow
                    icon={Mail}
                    motion="group-hover/row:-translate-y-0.5 group-hover/row:scale-110"
                    title="Encrypted Transmission Desk"
                  >
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-2 block break-all text-[17px] font-medium text-white transition-colors hover:text-[#f3dcc0] sm:text-[20px]"
                    >
                      {EMAIL}
                    </a>
                    <p className="mt-2 break-words text-[14px] leading-6 text-slate-500">{PGP}</p>
                  </InfoRow>
                </Reveal>

                <Divider />

                {/* Offices */}
                <Reveal delay={350}>
                  <InfoRow
                    icon={Building2}
                    motion="group-hover/row:scale-125"
                    title="Private Consultation Chambers"
                  >
                    <div className="mt-2 space-y-3 text-[16px] leading-7 text-white sm:text-[17px]">
                      {OFFICES.map((office) => (
                        <p key={office.city}>
                          <span className="font-medium text-[#f3dcc0]">{office.city}:</span>{' '}
                          {office.address}
                        </p>
                      ))}
                    </div>
                  </InfoRow>
                </Reveal>

                <Divider />

                {/* Hours */}
                <Reveal delay={450}>
                  <div className="group/row rounded-2xl bg-[#0d1226] p-5 ring-1 ring-transparent transition-all duration-500 hover:-translate-y-1 hover:ring-[#f3dcc0]/30 sm:p-6">
                    <div className="flex gap-4">
                      <Clock
                        size={22}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-[#f3dcc0] transition-transform duration-1000 group-hover/row:rotate-[360deg]"
                      />
                      <div className="min-w-0">
                        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#f3dcc0]">
                          Operating Desk Hours
                        </p>
                        <p className="mt-3 text-[16px] leading-7 text-slate-400 sm:text-[17px] sm:leading-8">
                          Monday – Saturday: 08:00 – 20:00 EST / GMT
                        </p>
                        <p className="mt-2 text-[15px] font-medium leading-7 text-[#f3dcc0]">
                          24/7 Fiduciary Emergency Triage for Active Retainers
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Secure channels */}
                <Reveal delay={550}>
                  <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-300">
                      Secure Dispatch Channels
                    </p>
                    <div className="flex gap-2.5">
                      {[Briefcase, KeyRound, Shield, BookOpen].map((Icon, index) => (
                        <span
                          key={index}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1.5 hover:rotate-6 hover:bg-[#f3dcc0] hover:text-[#1b2038] hover:shadow-lg hover:shadow-black/30"
                        >
                          <Icon size={18} strokeWidth={1.8} />
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= RIGHT: FORM CARD ================= */}
        <Reveal direction="right" delay={200} className="min-w-0">
          <div
            ref={cardRef}
            className="relative min-w-0 overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-900/10 sm:p-8 md:p-10"
          >
            {/* Brown line that draws across the top */}
            <span
              style={{ transitionDelay: '400ms' }}
              className={`absolute left-0 top-0 h-1 w-full origin-left bg-[#7a5c46] transition-transform duration-[1500ms] ease-out ${
                cardIn ? 'scale-x-100' : 'scale-x-0'
              }`}
            ></span>

            <Rise show={cardIn} i={0}>
              <h2 className="font-serif text-3xl leading-tight text-[#171d36] sm:text-4xl md:text-[40px]">
                Initiate Private Dialogue
              </h2>
            </Rise>
            <Rise show={cardIn} i={1}>
              <p className="mt-3 max-w-md text-[16px] leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
                Complete the brief below. Senior custodians review all dossiers within two hours.
              </p>
            </Rise>

            <div className="mt-6 h-px bg-[#eee6dc] sm:mt-8"></div>

            {status === 'success' ? (
              /* ----- Success message ----- */
              <div className="flex animate-[popIn_500ms_ease-out] flex-col items-center py-12 text-center sm:py-16">
                <span className="relative flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#171d36]/30"></span>
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#171d36] text-[#f3dcc0]">
                    <Send size={26} strokeWidth={1.8} />
                  </span>
                </span>
                <h3 className="mt-6 font-serif text-3xl text-[#171d36]">Message received</h3>
                <p className="mt-3 max-w-sm text-[16px] leading-7 text-slate-600">
                  Thank you, {form.name.split(' ')[0] || 'friend'}. A senior custodian will
                  review your brief and respond within two hours.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 cursor-pointer text-[12px] font-bold uppercase tracking-[0.18em] text-[#7a5c46] underline-offset-8 transition-colors hover:text-[#171d36] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ----- The form ----- */
              <form onSubmit={handleSubmit} noValidate className="mt-6 sm:mt-8">
                <div className="grid gap-x-6 gap-y-6 sm:gap-y-7 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <Rise show={cardIn} i={2}>
                    <Field label="Full legal name" required error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Johnathan Vance"
                        autoComplete="name"
                        className={inputClass(errors.name)}
                      />
                    </Field>
                  </Rise>

                  <Rise show={cardIn} i={3}>
                    <Field label="Institutional / personal email" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="jvance@privateholdings.com"
                        autoComplete="email"
                        className={inputClass(errors.email)}
                      />
                    </Field>
                  </Rise>

                  <Rise show={cardIn} i={4}>
                    <Field label="Direct phone number" required error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+1 (555) 019-2834"
                        autoComplete="tel"
                        className={inputClass(errors.phone)}
                      />
                    </Field>
                  </Rise>

                  <Rise show={cardIn} i={5}>
                    <Field label="I'm interested in" required error={errors.interest}>
                      <Select
                        value={form.interest}
                        onChange={update('interest')}
                        options={INTERESTS}
                        placeholder="Select a service"
                        hasError={errors.interest}
                      />
                    </Field>
                  </Rise>
                </div>

                <Rise show={cardIn} i={6} className="mt-6 sm:mt-7">
                  <Field label="Estimated portfolio or asset value">
                    <Select
                      value={form.value}
                      onChange={update('value')}
                      options={PORTFOLIO_VALUES}
                      placeholder="Select a range (optional)"
                    />
                  </Field>
                </Rise>

                <Rise show={cardIn} i={7} className="mt-6 sm:mt-7">
                  <Field label="Mandate context & property details">
                    <textarea
                      rows={5}
                      value={form.details}
                      onChange={update('details')}
                      placeholder="Tell us briefly about your property and what you need."
                      className="w-full resize-y rounded-xl border border-[#e6e0d6] bg-white px-5 py-4 text-[16px] leading-7 text-[#171d36] transition-all duration-300 placeholder:text-slate-400 hover:border-[#c9b8a4] focus-visible:border-[#171d36] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#171d36]/10 sm:text-[17px] sm:leading-8"
                    ></textarea>
                  </Field>
                </Rise>

                {status === 'failed' && (
                  <p className="mt-5 animate-[errIn_300ms_ease-out] text-[14px] font-medium text-[#b4452f]">
                    Something went wrong. Please try again, or call us directly.
                  </p>
                )}

                {/* Submit row */}
                <Rise show={cardIn} i={8} className="mt-8">
                  <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={`group/btn relative inline-flex h-16 w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#171d36] px-6 text-[14px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/25 active:scale-95 disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-10 ${
                        shake ? 'animate-[shake_500ms_ease-in-out]' : ''
                      }`}
                    >
                      {/* Brown colour sweeping across */}
                      <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
                      {/* Light streak */}
                      <span className="absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover/btn:translate-x-[400%]"></span>

                      <span className="relative">
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                      </span>
                      {status === 'sending' ? (
                        <Loader2 size={20} className="relative animate-spin" />
                      ) : (
                        <ArrowRight
                          size={20}
                          strokeWidth={2.2}
                          className="relative transition-transform duration-300 group-hover/btn:translate-x-1.5"
                        />
                      )}
                    </button>

                    <p className="flex items-center gap-3 text-[12px] font-bold uppercase leading-5 tracking-[0.15em] text-[#171d36]">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#7a5c46]/60"></span>
                        <span className="relative h-2.5 w-2.5 rounded-full bg-[#7a5c46]"></span>
                      </span>
                      Average partner triage: 47 minutes
                    </p>
                  </div>
                </Rise>
              </form>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default ContactSection