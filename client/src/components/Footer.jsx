// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Phone, Mail, MapPin, ArrowUp, Check } from 'lucide-react'
// import Reveal from './Reveal'
// import logo from '../assets/images/logo.png'

// /* ---------- EDIT YOUR DETAILS HERE (only here) ---------- */
// const CONTACT = {
//   phoneDisplay: '+91 00000 00000',
//   phoneLink: '+910000000000',
//   whatsapp: '910000000000', // country code + number, digits only
//   email: 'info@example.com',
//   address: '[Office Address], Coimbatore',
//   instagram: 'https://instagram.com/',
//   linkedin: 'https://linkedin.com/',
// }

// const quickLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About Four-Space', path: '/about' },
//   { name: 'Prime Properties', path: '/properties' },
//   { name: 'Advisory FAQ', path: '/faq' },
// ]

// /* Each service link has its own page */
// const serviceLinks = [
//   { name: 'Property Management', path: '/services' },
//   { name: 'Buy / Sell / Rent', path: '/properties' },
//   { name: 'Real Estate Consultancy', path: '/properties' },
//   { name: 'Interiors & Turnkey', path: '/contact' },
//   { name: 'Loans & Financing', path: '/contact' },
// ]

// const legalLinks = [
//   { name: 'Privacy Policy', path: '/privacy-policy' },
//   { name: 'Terms of Mandate', path: null },
//   { name: 'Regulatory Disclosures', path: null },
// ]

// /* ---------- BRAND ICONS (drawn as small SVGs) ---------- */
// function InstagramIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
//       <rect x="3" y="3" width="18" height="18" rx="5" />
//       <circle cx="12" cy="12" r="4" />
//       <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
//     </svg>
//   )
// }

// function LinkedinIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect x="2" y="9" width="4" height="12" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   )
// }

// function WhatsappIcon(props) {
//   return (
//     <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
//       <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
//     </svg>
//   )
// }

// /* ---------- SMALL REUSABLE PIECES ---------- */
// function FooterLink({ to, children }) {
//   return (
//     <Link
//       to={to}
//       className="group inline-flex items-center text-[14px] text-slate-400 transition-colors duration-300 hover:text-white"
//     >
//       <span className="h-px w-0 bg-[#f3dcc0] transition-all duration-300 group-hover:mr-2 group-hover:w-3"></span>
//       {children}
//     </Link>
//   )
// }

// function SocialLink({ href, label, children }) {
//   return (
//     <a
//       href={href}
//       target={href.startsWith('http') ? '_blank' : undefined}
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#f3dcc0] hover:text-[#171d36] hover:shadow-lg hover:shadow-black/30"
//     >
//       {children}
//     </a>
//   )
// }

// function ContactRow({ icon: Icon, text, href }) {
//   const content = (
//     <>
//       <Icon size={16} className="mt-0.5 shrink-0 text-[#f3dcc0] transition-transform duration-300 group-hover:scale-125" />
//       <span>{text}</span>
//     </>
//   )
//   const style =
//     'group flex items-start gap-3 text-[14px] text-slate-400 transition-colors duration-300 hover:text-white'

//   return href ? (
//     <a href={href} className={style}>{content}</a>
//   ) : (
//     <p className={style}>{content}</p>
//   )
// }

// /* ---------- WHATSAPP + BACK TO TOP (float on every page) ---------- */
// function FloatingButtons() {
//   const [showTop, setShowTop] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setShowTop(window.scrollY > 400)
//     onScroll()
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

//   const message = encodeURIComponent(
//     'Hello Four-Space, I would like to know more about your properties.'
//   )

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

//       {/* Back to top */}
//       <button
//         onClick={goTop}
//         aria-label="Back to top"
//         className={`group flex h-12 w-12 items-center justify-center rounded-full bg-[#7a5c46] text-white shadow-xl shadow-black/25 transition-all duration-500 hover:bg-[#f3dcc0] hover:text-[#171d36] ${
//           showTop
//             ? 'translate-y-0 opacity-100'
//             : 'pointer-events-none translate-y-6 opacity-0'
//         }`}
//       >
//         <ArrowUp
//           size={20}
//           className="transition-transform duration-300 group-hover:-translate-y-1"
//         />
//       </button>

//       {/* WhatsApp */}
//       <a
//         href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/30 transition-transform duration-300 hover:scale-110"
//       >
//         <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50"></span>
//         <WhatsappIcon className="relative h-7 w-7" />

//         {/* Label that slides out on hover */}
//         <span className="pointer-events-none absolute right-full mr-3 translate-x-2 whitespace-nowrap rounded-md bg-[#171d36] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
//           Chat on WhatsApp
//         </span>
//       </a>
//     </div>
//   )
// }

// /* ---------- THE FOOTER ---------- */
// function Footer() {
//   const [email, setEmail] = useState('')
//   const [joined, setJoined] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Later: send this email to the backend (POST /api/newsletter)
//     setJoined(true)
//     setEmail('')
//     setTimeout(() => setJoined(false), 4000)
//   }

//   return (
//     <footer className="relative overflow-hidden bg-[#171d36] text-white">

//       {/* ===== CTA BAND ===== */}
//       <div className="relative">
//         <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#7a5c46]/20 blur-3xl"></div>

//         <svg
//           viewBox="0 0 197 315"
//           fill="currentColor"
//           className="pointer-events-none absolute right-[8%] top-12 hidden h-72 w-auto animate-float text-white/5 lg:block"
//         >
//           <path d="M0 58 L118 0 L118 116 L197 58 L197 315 L138 315 L138 159 L60 197 L60 315 L0 315 Z" />
//         </svg>

//         <div className="relative mx-auto max-w-3xl px-6 pt-10 pb-20 text-center lg:pt-14 lg:pb-28">
//           <Reveal>
//             <div className="flex items-center justify-center gap-3">
//               <span className="h-px w-10 bg-[#f3dcc0]"></span>
//               <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f3dcc0]">
//                 Your Private Invitation
//               </p>
//               <span className="h-px w-10 bg-[#f3dcc0]"></span>
//             </div>
//             <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
//               Ready to simplify your property journey?
//             </h2>
//           </Reveal>

//           <Reveal delay={150}>
//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
//               Discover seamless asset stewardship and exceptional off-market
//               acquisition opportunities with the Four-Space advisory desk.
//             </p>
//           </Reveal>

//           <Reveal delay={300}>
//             <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
//               {/* Opens the contact page */}
//               <Link
//                 to="/contact"
//                 className="group relative overflow-hidden rounded-lg bg-[#f3dcc0] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-[#171d36] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
//               >
//                 <span className="absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/50 transition-transform duration-700 ease-out group-hover:translate-x-[400%]"></span>
//                 <span className="relative">Get in Touch</span>
//               </Link>

//               {/* Opens the phone dialer */}
//               <a
//                 href={`tel:${CONTACT.phoneLink}`}
//                 className="group flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-white"
//               >
//                 <Phone
//                   size={20}
//                   className="text-[#f3dcc0] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125"
//                 />
//                 <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#f3dcc0]">
//                   Speak directly: {CONTACT.phoneDisplay}
//                 </span>
//               </a>
//             </div>
//           </Reveal>
//         </div>
//       </div>

//       {/* ===== FOOTER COLUMNS ===== */}
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid gap-12 pb-14 pt-4 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.9fr_1.5fr]">

//           {/* Brand */}
//           <Reveal>
//             <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 transition-transform duration-500 hover:rotate-3 hover:scale-105">
//               <img src={logo} alt="Four-Space" className="h-full w-full object-contain" />
//             </div>
//             <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-400">
//               Mastering architectural exclusivity, premium real estate
//               acquisition, and meticulous asset stewardship for discerning
//               owners and investors across Coimbatore.
//             </p>
//             <div className="mt-8 flex gap-3">
//               <SocialLink href={CONTACT.instagram} label="Instagram">
//                 <InstagramIcon className="h-[18px] w-[18px]" />
//               </SocialLink>
//               <SocialLink href={CONTACT.linkedin} label="LinkedIn">
//                 <LinkedinIcon className="h-[18px] w-[18px]" />
//               </SocialLink>
//               <SocialLink href={`mailto:${CONTACT.email}`} label="Email">
//                 <Mail size={18} />
//               </SocialLink>
//             </div>
//           </Reveal>

//           {/* Quick links */}
//           <Reveal delay={150}>
//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f3dcc0]">
//               Quick Links
//             </h3>
//             <ul className="mt-6 space-y-3.5">
//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <FooterLink to={item.path}>{item.name}</FooterLink>
//                 </li>
//               ))}
//             </ul>
//           </Reveal>

//           {/* Services */}
//           <Reveal delay={300}>
//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f3dcc0]">
//               Services
//             </h3>
//             <ul className="mt-6 space-y-3.5">
//               {serviceLinks.map((item) => (
//                 <li key={item.name}>
//                   <FooterLink to={item.path}>{item.name}</FooterLink>
//                 </li>
//               ))}
//             </ul>
//           </Reveal>

//           {/* Contact + newsletter */}
//           <Reveal delay={450}>
//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f3dcc0]">
//               Private Client Advisory
//             </h3>
//             <div className="mt-6 space-y-3.5">
//               <ContactRow icon={MapPin} text={CONTACT.address} />
//               <ContactRow
//                 icon={Phone}
//                 text={CONTACT.phoneDisplay}
//                 href={`tel:${CONTACT.phoneLink}`}
//               />
//               <ContactRow
//                 icon={Mail}
//                 text={CONTACT.email}
//                 href={`mailto:${CONTACT.email}`}
//               />
//             </div>

//             <h3 className="mt-8 text-[11px] font-bold uppercase tracking-widest text-white">
//               Private Briefing Newsletter
//             </h3>
//             <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email address"
//                 className="min-w-0 flex-1 rounded-lg bg-white/5 px-4 py-3 text-sm text-white outline-none ring-1 ring-transparent transition-all duration-300 placeholder:text-slate-500 focus:bg-white/10 focus:ring-[#f3dcc0]/60"
//               />
//               <button
//                 type="submit"
//                 className="flex min-w-[76px] items-center justify-center rounded-lg bg-[#f3dcc0] px-5 text-[11px] font-bold uppercase tracking-widest text-[#171d36] transition-all duration-300 hover:bg-white hover:shadow-lg active:scale-95"
//               >
//                 {joined ? <Check size={16} /> : 'Join'}
//               </button>
//             </form>
//             <p
//               className={`mt-3 text-[13px] text-[#f3dcc0] transition-all duration-500 ${
//                 joined ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
//               }`}
//             >
//               Thank you, you are on the list.
//             </p>
//           </Reveal>
//         </div>

//         {/* Bottom bar */}
//         <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:flex-row md:items-center md:justify-between md:pr-20">
//           <p>© {new Date().getFullYear()} Four-Space Luxury Real Estate. All rights reserved.</p>

//           <div className="flex flex-wrap gap-x-6 gap-y-2">
//             {legalLinks.map((item) =>
//               item.path ? (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className="transition-colors duration-300 hover:text-[#f3dcc0]"
//                 >
//                   {item.name}
//                 </Link>
//               ) : (
//                 <span key={item.name} className="cursor-default">
//                   {item.name}
//                 </span>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       <FloatingButtons />
//     </footer>
//   )
// }

// export default Footer



import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, Check } from 'lucide-react'
import Reveal from './Reveal'
import logo from '../assets/images/logo.png'

/* ---------- EDIT YOUR DETAILS HERE (only here) ---------- */
const CONTACT = {
  phoneDisplay: '+91 00000 00000',
  phoneLink: '+910000000000',
  whatsapp: '910000000000', // country code + number, digits only
  email: 'info@example.com',
  address: '[Office Address], Coimbatore',
  instagram: 'https://instagram.com/',
  linkedin: 'https://linkedin.com/',
}

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Four-Space', path: '/about' },
  { name: 'Prime Properties', path: '/properties' },
  { name: 'Advisory FAQ', path: '/faq' },
]

/* Each service link has its own page */
const serviceLinks = [
  { name: 'Property Management', path: '/services' },
  { name: 'Buy / Sell / Rent', path: '/properties' },
  { name: 'Real Estate Consultancy', path: '/properties' },
  { name: 'Interiors & Turnkey', path: '/contact' },
  { name: 'Loans & Financing', path: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Mandate', path: null },
  { name: 'Regulatory Disclosures', path: null },
]

/* ---------- BRAND ICONS (drawn as small SVGs) ---------- */
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function WhatsappIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

/* ---------- SMALL REUSABLE PIECES ---------- */
function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center text-[14px] text-slate-400 transition-colors duration-300 hover:text-white"
    >
      <span className="h-px w-0 shrink-0 bg-[#f3dcc0] transition-all duration-300 group-hover:mr-2 group-hover:w-3"></span>
      {children}
    </Link>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#f3dcc0] hover:text-[#171d36] hover:shadow-lg hover:shadow-black/30"
    >
      {children}
    </a>
  )
}

function ContactRow({ icon: Icon, text, href }) {
  const content = (
    <>
      <Icon size={16} className="mt-0.5 shrink-0 text-[#f3dcc0] transition-transform duration-300 group-hover:scale-125" />
      <span className="min-w-0 break-words">{text}</span>
    </>
  )
  const style =
    'group flex items-start gap-3 text-[14px] text-slate-400 transition-colors duration-300 hover:text-white'

  return href ? (
    <a href={href} className={style}>{content}</a>
  ) : (
    <p className={style}>{content}</p>
  )
}

/* ---------- WHATSAPP + BACK TO TOP (float on every page) ---------- */
function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const message = encodeURIComponent(
    'Hello Four-Space, I would like to know more about your properties.'
  )

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6 sm:gap-4">

      {/* Back to top */}
      <button
        onClick={goTop}
        aria-label="Back to top"
        className={`group flex h-11 w-11 items-center justify-center rounded-full bg-[#7a5c46] text-white shadow-xl shadow-black/25 transition-all duration-500 hover:bg-[#f3dcc0] hover:text-[#171d36] sm:h-12 sm:w-12 ${
          showTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <ArrowUp
          size={20}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/30 transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50"></span>
        <WhatsappIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />

        {/* Label that slides out on hover */}
        <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-md bg-[#171d36] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}

/* ---------- THE FOOTER ---------- */
function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Later: send this email to the backend (POST /api/newsletter)
    setJoined(true)
    setEmail('')
    setTimeout(() => setJoined(false), 4000)
  }

  return (
    <footer className="relative overflow-hidden bg-[#171d36] text-white">

      {/* ===== CTA BAND ===== */}
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-[#7a5c46]/20 blur-3xl"></div>

        <svg
          viewBox="0 0 197 315"
          fill="currentColor"
          className="pointer-events-none absolute right-[8%] top-12 hidden h-72 w-auto animate-float text-white/5 lg:block"
        >
          <path d="M0 58 L118 0 L118 116 L197 58 L197 315 L138 315 L138 159 L60 197 L60 315 L0 315 Z" />
        </svg>

        <div className="relative mx-auto max-w-3xl px-5 pt-10 pb-16 text-center sm:px-6 sm:pb-20 lg:pt-14 lg:pb-28">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-6 shrink-0 bg-[#f3dcc0] sm:w-10"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f3dcc0]">
                Your Private Invitation
              </p>
              <span className="h-px w-6 shrink-0 bg-[#f3dcc0] sm:w-10"></span>
            </div>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Ready to simplify your property journey?
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              Discover seamless asset stewardship and exceptional off-market
              acquisition opportunities with the Four-Space advisory desk.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {/* Opens the contact page */}
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-lg bg-[#f3dcc0] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-[#171d36] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
              >
                <span className="absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/50 transition-transform duration-700 ease-out group-hover:translate-x-[400%]"></span>
                <span className="relative">Get in Touch</span>
              </Link>

              {/* Opens the phone dialer */}
              <a
                href={`tel:${CONTACT.phoneLink}`}
                className="group flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-widest text-white"
              >
                <Phone
                  size={20}
                  className="shrink-0 text-[#f3dcc0] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125"
                />
                <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#f3dcc0]">
                  Speak directly: {CONTACT.phoneDisplay}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===== FOOTER COLUMNS ===== */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 pb-12 pt-4 sm:grid-cols-2 sm:gap-12 sm:pb-14 lg:grid-cols-[1.6fr_0.8fr_0.9fr_1.5fr]">

          {/* Brand */}
          <Reveal className="min-w-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 transition-transform duration-500 hover:rotate-3 hover:scale-105">
              <img src={logo} alt="Four-Space" className="h-full w-full object-contain" />
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-400">
              Mastering architectural exclusivity, premium real estate
              acquisition, and meticulous asset stewardship for discerning
              owners and investors across Coimbatore.
            </p>
            <div className="mt-8 flex gap-3">
              <SocialLink href={CONTACT.instagram} label="Instagram">
                <InstagramIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={CONTACT.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={`mailto:${CONTACT.email}`} label="Email">
                <Mail size={18} />
              </SocialLink>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={150} className="min-w-0">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f3dcc0]">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink to={item.path}>{item.name}</FooterLink>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Services */}
          <Reveal delay={300} className="min-w-0">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f3dcc0]">
              Services
            </h3>
            <ul className="mt-6 space-y-3.5">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink to={item.path}>{item.name}</FooterLink>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact + newsletter */}
          <Reveal delay={450} className="min-w-0">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f3dcc0]">
              Private Client Advisory
            </h3>
            <div className="mt-6 space-y-3.5">
              <ContactRow icon={MapPin} text={CONTACT.address} />
              <ContactRow
                icon={Phone}
                text={CONTACT.phoneDisplay}
                href={`tel:${CONTACT.phoneLink}`}
              />
              <ContactRow
                icon={Mail}
                text={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
            </div>

            <h3 className="mt-8 text-[11px] font-bold uppercase tracking-widest text-white">
              Private Briefing Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-lg bg-white/5 px-4 py-3 text-base text-white outline-none ring-1 ring-transparent transition-all duration-300 placeholder:text-slate-500 focus:bg-white/10 focus:ring-[#f3dcc0]/60 sm:text-sm"
              />
              <button
                type="submit"
                className="flex min-w-[76px] shrink-0 items-center justify-center rounded-lg bg-[#f3dcc0] px-5 text-[11px] font-bold uppercase tracking-widest text-[#171d36] transition-all duration-300 hover:bg-white hover:shadow-lg active:scale-95"
              >
                {joined ? <Check size={16} /> : 'Join'}
              </button>
            </form>
            <p
              className={`mt-3 text-[13px] text-[#f3dcc0] transition-all duration-500 ${
                joined ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
              }`}
            >
              Thank you, you are on the list.
            </p>
          </Reveal>
        </div>

        {/* Bottom bar (extra bottom padding on phones so the floating buttons never cover the links) */}
        <div className="flex flex-col gap-4 border-t border-white/10 pb-24 pt-6 text-[10px] font-bold uppercase leading-5 tracking-widest text-slate-400 md:flex-row md:items-center md:justify-between md:py-6 md:pr-20">
          <p>© {new Date().getFullYear()} Four-Space Luxury Real Estate. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) =>
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="transition-colors duration-300 hover:text-[#f3dcc0]"
                >
                  {item.name}
                </Link>
              ) : (
                <span key={item.name} className="cursor-default">
                  {item.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <FloatingButtons />
    </footer>
  )
}

export default Footer