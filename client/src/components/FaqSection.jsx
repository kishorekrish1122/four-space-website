// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {
//   ShieldCheck,
//   Handshake,
//   KeyRound,
//   Building2,
//   FileText,
//   Plus,
//   Minus,
//   Phone,
//   Mail,
//   Clock,
//   Lock,
//   Quote,
//   ArrowRight,
//   ArrowUpRight,
//   BadgeCheck,
//   Check,
// } from 'lucide-react'

// /* ---------- CONTACT DETAILS (edit here) ---------- */
// const CONTACT = {
//   phone: '+44 (0) 20 7946 0912',
//   phoneLink: '+442079460912',
//   email: 'concierge@four-space.com',
//   hours: 'Mon – Sat: 08:00 – 19:00 EST',
// }

// /* Put a real PDF in public/ (for example /advisory-dossier.pdf) and write its path here.
//    If this is empty, the button downloads a text file made from the FAQ below. */
// const DOSSIER_URL = ''

// /* ---------- THE FAQ (edit the text here) ---------- */
// const categories = [
//   {
//     tab: 'General',
//     title: 'General Inquiries',
//     icon: ShieldCheck,
//     items: [
//       {
//         q: "What distinguishes Four-Space's asset management from traditional brokers?",
//         a: 'We act as a dedicated fiduciary partner, offering end-to-end stewardship, transparent contractor costs, and long-term wealth preservation for private estates.',
//         tags: ['Audited compliance', 'Forensic accounting'],
//       },
//       {
//         q: 'How are private mandates and off-market transactions handled?',
//         a: 'Through a confidential network of vetted buyers and sellers. Details are shared only after identity and funds are verified.',
//         tags: ['NDA protected', 'Verified parties'],
//       },
//       {
//         q: 'What is your typical geographic scope and portfolio threshold?',
//         a: 'We advise on landed and residential portfolios in our core markets. There is no fixed minimum, as each mandate is assessed individually.',
//         tags: ['Core markets', 'No fixed minimum'],
//       },
//       {
//         q: 'How do you verify and audit contractor fee structures?',
//         a: 'Every quote is itemised and benchmarked against local market rates, and we add zero markup on contractor costs.',
//         tags: ['Zero markup', 'Rate benchmarking'],
//       },
//       {
//         q: 'Can Four-Space ensure complete discretion on high-value acquisitions?',
//         a: 'Yes. Every engagement is covered by a confidentiality agreement, and information is shared strictly on a need-to-know basis.',
//         tags: ['Confidential', 'Need-to-know access'],
//       },
//     ],
//   },
//   {
//     tab: 'Buying & Selling',
//     title: 'Buying & Selling',
//     icon: Handshake,
//     items: [
//       {
//         q: 'Do you offer off-market and pre-launch properties?',
//         a: 'Yes. Our network gives clients early access to properties that are never listed publicly.',
//         tags: ['Off-market access', 'Pre-launch'],
//       },
//       {
//         q: 'How do you verify a property before purchase?',
//         a: 'We check the title, approvals, patta, and encumbrance certificate, and report any issues before you commit.',
//         tags: ['Title check', 'Approvals'],
//       },
//       {
//         q: 'How is the asking price decided?',
//         a: 'Pricing is based on recent local sales and current demand, not guesswork.',
//         tags: ['Market data', 'Fair pricing'],
//       },
//       {
//         q: 'Do you support the deal through to registration?',
//         a: 'Yes. We negotiate, coordinate the paperwork, and stay with you until registration is complete.',
//         tags: ['End-to-end', 'Registration'],
//       },
//     ],
//   },
//   {
//     tab: 'Tenancy & Leasing',
//     title: 'Tenancy & Leasing',
//     icon: KeyRound,
//     items: [
//       {
//         q: 'How do you screen tenants?',
//         a: 'We verify identity, employment, and rental history before any tenant is shortlisted.',
//         tags: ['Verified tenants', 'Background checks'],
//       },
//       {
//         q: 'Who collects the rent and holds the deposit?',
//         a: 'We collect rent on time and hold deposits securely, with a clear monthly statement for you.',
//         tags: ['Prompt collection', 'Monthly statements'],
//       },
//       {
//         q: 'What happens at move-in and move-out?',
//         a: 'We inspect the property at both stages and record its condition with photographs.',
//         tags: ['Inspections', 'Photo reports'],
//       },
//       {
//         q: 'Who handles tenant complaints?',
//         a: 'We do. Tenants contact us directly, so you are not disturbed with day-to-day issues.',
//         tags: ['Single contact', 'Hands-off'],
//       },
//     ],
//   },
//   {
//     tab: 'Property Management',
//     title: 'Property Management',
//     icon: Building2,
//     items: [
//       {
//         q: 'What does property management include?',
//         a: 'Preventive maintenance, staff oversight, rent collection, and regular reporting on your property.',
//         tags: ['Maintenance', 'Reporting'],
//       },
//       {
//         q: 'How often will I receive reports?',
//         a: 'You receive a transparent statement every month, plus photo reports after each condition audit.',
//         tags: ['Monthly statements', 'Photo audits'],
//       },
//       {
//         q: 'Is there support for urgent repairs?',
//         a: 'Yes. Technical support is available around the clock for urgent issues.',
//         tags: ['24/7 support', 'Vetted vendors'],
//       },
//       {
//         q: 'Can you manage a property while I live abroad?',
//         a: 'Yes. Many of our clients are overseas owners, and we handle everything on site on their behalf.',
//         tags: ['Overseas owners', 'Remote updates'],
//       },
//     ],
//   },
//   {
//     tab: 'Documentation & Loans',
//     title: 'Documentation & Loans',
//     icon: FileText,
//     items: [
//       {
//         q: 'Can you help with home loans and mortgages?',
//         a: 'Yes. We compare lenders, prepare your documents, and negotiate on your behalf.',
//         tags: ['Multi-bank options', 'Paperwork handled'],
//       },
//       {
//         q: 'Do you assist with refinancing or top-up loans?',
//         a: 'Yes. We review your current loan and arrange better terms where they are available.',
//         tags: ['Refinancing', 'Top-up loans'],
//       },
//       {
//         q: 'Which documents do I need to prepare?',
//         a: 'We give you a short checklist for your case and review each document before submission.',
//         tags: ['Checklist', 'Document review'],
//       },
//       {
//         q: 'Can you arrange property insurance?',
//         a: 'Yes. We arrange cover for the property and landlord liability, matched to your needs.',
//         tags: ['Property cover', 'Landlord liability'],
//       },
//     ],
//   },
// ]

// /* Builds a text file from the FAQ and downloads it */
// function downloadDossier() {
//   if (DOSSIER_URL) {
//     const link = document.createElement('a')
//     link.href = DOSSIER_URL
//     link.download = 'Four-Space-Advisory-Dossier'
//     document.body.appendChild(link)
//     link.click()
//     link.remove()
//     return
//   }

//   const lines = ['FOUR-SPACE ADVISORY DOSSIER', '===========================', '']
//   categories.forEach((category) => {
//     lines.push(category.title.toUpperCase(), '-'.repeat(category.title.length), '')
//     category.items.forEach((item, index) => {
//       lines.push(`${index + 1}. ${item.q}`, item.a, '')
//     })
//   })
//   lines.push(
//     'CONTACT',
//     '-------',
//     `Telephone: ${CONTACT.phone}`,
//     `Email: ${CONTACT.email}`,
//     `Hours: ${CONTACT.hours}`,
//   )

//   const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
//   const url = URL.createObjectURL(blob)
//   const link = document.createElement('a')
//   link.href = url
//   link.download = 'Four-Space-Advisory-Dossier.txt'
//   document.body.appendChild(link)
//   link.click()
//   link.remove()
//   setTimeout(() => URL.revokeObjectURL(url), 1000)
// }

// function FaqSection() {
//   const [tab, setTab] = useState(0)
//   const [open, setOpen] = useState(0)
//   const [downloaded, setDownloaded] = useState(false)

//   const category = categories[tab]
//   const CategoryIcon = category.icon

//   const chooseTab = (index) => {
//     setTab(index)
//     setOpen(0)
//   }

//   const handleDownload = () => {
//     downloadDossier()
//     setDownloaded(true)
//     setTimeout(() => setDownloaded(false), 2500)
//   }

//   return (
//     <section className="w-full bg-[#faf8f4]">

//       {/* ===== TABS ===== */}
//       <div className="w-full border-b border-[#eee6dc] bg-white">
//         <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4 lg:px-12">
//           {categories.map((item, index) => {
//             const isActive = index === tab
//             return (
//               <button
//                 key={item.tab}
//                 type="button"
//                 onClick={() => chooseTab(index)}
//                 className={`shrink-0 cursor-pointer whitespace-nowrap rounded-lg border px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 ${
//                   isActive
//                     ? 'border-[#171d36] bg-[#171d36] text-white'
//                     : 'border-[#e8e0d4] bg-[#f4f1ec] text-slate-500 hover:border-[#7a5c46] hover:bg-white hover:text-[#7a5c46]'
//                 }`}
//               >
//                 {item.tab}
//               </button>
//             )
//           })}
//         </div>
//       </div>

//       {/* ===== MAIN ===== */}
//       <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-12 lg:py-16">

//         {/* ----- LEFT: questions ----- */}
//         <div className="min-w-0 rounded-3xl border border-[#eee6dc] bg-white p-6 shadow-xl shadow-slate-900/5 md:p-10">

//           {/* Header */}
//           <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eee6dc] pb-6">
//             <div className="flex items-center gap-4">
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8e0d4] bg-[#f4f1ec] text-[#7a5c46]">
//                 <CategoryIcon size={20} strokeWidth={1.6} />
//               </span>
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
//                   Inquiries Ledger
//                 </p>
//                 <h2 className="font-serif text-3xl text-[#171d36]">{category.title}</h2>
//               </div>
//             </div>
//             <span className="rounded-lg border border-[#e8e0d4] bg-[#f4f1ec] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//               {category.items.length} Questions
//             </span>
//           </div>

//           {/* Accordion */}
//           <div key={tab}>
//             {category.items.map((item, index) => {
//               const isOpen = index === open
//               return (
//                 <div key={item.q} className="border-b border-[#eee6dc]">
//                   <button
//                     type="button"
//                     onClick={() => setOpen(isOpen ? -1 : index)}
//                     aria-expanded={isOpen}
//                     className="group flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left"
//                   >
//                     <span
//                       className={`font-serif text-2xl leading-snug transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7a5c46] ${
//                         isOpen ? 'text-[#7a5c46]' : 'text-[#171d36]'
//                       }`}
//                     >
//                       {item.q}
//                     </span>
//                     <span
//                       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110 group-hover:border-[#7a5c46] group-hover:bg-[#7a5c46] group-hover:text-white group-active:scale-95 ${
//                         isOpen
//                           ? 'rotate-180 border-[#9b8268] bg-[#9b8268] text-white'
//                           : 'border-[#e8e0d4] bg-[#f4f1ec] text-[#7a5c46]'
//                       }`}
//                     >
//                       {isOpen ? <Minus size={18} /> : <Plus size={18} />}
//                     </span>
//                   </button>

//                   {/* Answer */}
//                   <div
//                     className={`grid transition-all duration-500 ease-out ${
//                       isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <p className="max-w-3xl pb-5 text-[17px] leading-8 text-slate-500">
//                         {item.a}
//                       </p>
//                       <div className="flex flex-wrap gap-3 pb-7">
//                         {item.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="inline-flex cursor-default items-center gap-2 rounded-lg border border-[#e8e0d4] bg-[#f4f1ec] px-3.5 py-2 text-[13px] font-medium text-[#7a5c46] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7a5c46] hover:text-white"
//                           >
//                             <BadgeCheck size={15} strokeWidth={1.8} />
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Advisory note */}
//           <div className="mt-8 flex gap-4 rounded-xl border border-[#e8e0d4] bg-[#f4f1ec] p-5">
//             <Quote size={18} className="mt-0.5 shrink-0 text-[#9b8268]" />
//             <p className="text-[14px] italic leading-6 text-slate-500">
//               <span className="font-bold not-italic text-[#171d36]">PRIVATE ADVISORY NOTE:</span>{' '}
//               Discretion is not an option in ultra-prime property; it is the structural
//               foundation of legacy capital governance.
//             </p>
//           </div>

//           {/* Footer row with the download button */}
//           <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#eee6dc] pt-6">
//             <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7a5c46]">
//               Looking for something else?
//             </span>

//             <button
//               type="button"
//               onClick={handleDownload}
//               className="group/dl inline-flex cursor-pointer items-center gap-2 border-b-2 border-transparent pb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[#171d36] transition-all duration-300 hover:border-[#7a5c46] hover:text-[#7a5c46] active:scale-95"
//             >
//               {downloaded ? 'Downloaded' : 'Download advisory dossier'}
//               {downloaded ? (
//                 <Check size={16} strokeWidth={2.4} />
//               ) : (
//                 <ArrowUpRight
//                   size={16}
//                   strokeWidth={2.2}
//                   className="transition-transform duration-300 group-hover/dl:-translate-y-1 group-hover/dl:translate-x-1"
//                 />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* ----- RIGHT: sidebar ----- */}
//         <aside className="flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">

//           {/* Bespoke concierge */}
//           <div className="overflow-hidden rounded-3xl border border-[#eee6dc] bg-white shadow-xl shadow-slate-900/5">
//             <div className="h-1.5 bg-[#9b8268]"></div>
//             <div className="p-7">
//               <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5c46]">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#9b8268]"></span>
//                 Bespoke Concierge
//               </p>
//               <h3 className="mt-4 font-serif text-3xl text-[#171d36]">Still have questions?</h3>
//               <p className="mt-3 text-[14px] leading-6 text-slate-500">
//                 Our private advisory desk is available around the clock to address custom
//                 mandates, contract audits, or asset transitions.
//               </p>

//               <div className="mt-6 space-y-4 rounded-2xl border border-[#e8e0d4] bg-[#f4f1ec] p-5">
//                 <a href={`tel:${CONTACT.phoneLink}`} className="group flex items-center gap-4">
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e8e0d4] bg-white text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:border-[#171d36] group-hover:bg-[#171d36] group-hover:text-white">
//                     <Phone size={16} />
//                   </span>
//                   <span>
//                     <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
//                       Telephone
//                     </span>
//                     <span className="text-[14px] font-semibold text-[#171d36] transition-colors group-hover:text-[#7a5c46]">
//                       {CONTACT.phone}
//                     </span>
//                   </span>
//                 </a>

//                 <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4">
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e8e0d4] bg-white text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:border-[#171d36] group-hover:bg-[#171d36] group-hover:text-white">
//                     <Mail size={16} />
//                   </span>
//                   <span className="min-w-0">
//                     <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
//                       Direct Desk
//                     </span>
//                     <span className="break-all text-[14px] font-semibold text-[#171d36] transition-colors group-hover:text-[#7a5c46]">
//                       {CONTACT.email}
//                     </span>
//                   </span>
//                 </a>

//                 <div className="group flex items-center gap-4">
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e8e0d4] bg-white text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:border-[#171d36] group-hover:bg-[#171d36] group-hover:text-white">
//                     <Clock size={16} />
//                   </span>
//                   <span>
//                     <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
//                       Operating Hours
//                     </span>
//                     <span className="text-[14px] text-slate-500">{CONTACT.hours}</span>
//                   </span>
//                 </div>
//               </div>

//               <Link
//                 to="/contact"
//                 className="group/btn relative mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#9b8268] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
//               >
//                 <span className="absolute inset-0 -translate-x-full bg-[#171d36] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//                 <span className="relative">Contact us</span>
//                 <ArrowRight
//                   size={16}
//                   className="relative transition-transform duration-300 group-hover/btn:translate-x-1.5"
//                 />
//               </Link>

//               <p className="mt-5 flex items-center gap-3 text-[11px] font-bold uppercase leading-5 tracking-[0.12em] text-[#7a5c46]">
//                 <Lock size={14} className="shrink-0" />
//                 Discretion assured. 100% confidential advisory.
//               </p>
//             </div>
//           </div>

//           {/* Private representation */}
//           <div className="rounded-3xl bg-[#171d36] p-7 text-white shadow-xl shadow-slate-900/20">
//             <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9b88f]">
//               <Building2 size={15} />
//               Private Representation
//             </p>
//             <h3 className="mt-4 font-serif text-3xl">Need immediate representation?</h3>
//             <p className="mt-3 text-[14px] leading-6 text-slate-400">
//               Connect directly with our senior directors for immediate consultation
//               regarding your portfolio.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-6 block rounded-lg bg-[#c4a57b] px-6 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.2em] text-[#171d36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3dcc0] hover:shadow-lg active:scale-95"
//             >
//               Get in touch
//             </Link>

//             <a
//               href={`tel:${CONTACT.phoneLink}`}
//               className="mt-3 block rounded-lg border border-white/20 px-6 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c4a57b] hover:bg-white/10 hover:text-[#f3dcc0] active:scale-95"
//             >
//               Call {CONTACT.phone}
//             </a>
//           </div>
//         </aside>
//       </div>
//     </section>
//   )
// }

// export default FaqSection


import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Handshake,
  KeyRound,
  Building2,
  FileText,
  Plus,
  Minus,
  Phone,
  Mail,
  Clock,
  Lock,
  Quote,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
} from 'lucide-react'

/* ---------- CONTACT DETAILS (edit here) ---------- */
const CONTACT = {
  phone: '+44 (0) 20 7946 0912',
  phoneLink: '+442079460912',
  email: 'concierge@four-space.com',
  hours: 'Mon – Sat: 08:00 – 19:00 EST',
}

/* Put a real PDF in public/ (for example /advisory-dossier.pdf) and write its path here.
   If this is empty, the button downloads a text file made from the FAQ below. */
const DOSSIER_URL = ''

/* ---------- THE FAQ (edit the text here) ---------- */
const categories = [
  {
    tab: 'General',
    title: 'General Inquiries',
    icon: ShieldCheck,
    items: [
      {
        q: "What distinguishes Four-Space's asset management from traditional brokers?",
        a: 'We act as a dedicated fiduciary partner, offering end-to-end stewardship, transparent contractor costs, and long-term wealth preservation for private estates.',
        tags: ['Audited compliance', 'Forensic accounting'],
      },
      {
        q: 'How are private mandates and off-market transactions handled?',
        a: 'Through a confidential network of vetted buyers and sellers. Details are shared only after identity and funds are verified.',
        tags: ['NDA protected', 'Verified parties'],
      },
      {
        q: 'What is your typical geographic scope and portfolio threshold?',
        a: 'We advise on landed and residential portfolios in our core markets. There is no fixed minimum, as each mandate is assessed individually.',
        tags: ['Core markets', 'No fixed minimum'],
      },
      {
        q: 'How do you verify and audit contractor fee structures?',
        a: 'Every quote is itemised and benchmarked against local market rates, and we add zero markup on contractor costs.',
        tags: ['Zero markup', 'Rate benchmarking'],
      },
      {
        q: 'Can Four-Space ensure complete discretion on high-value acquisitions?',
        a: 'Yes. Every engagement is covered by a confidentiality agreement, and information is shared strictly on a need-to-know basis.',
        tags: ['Confidential', 'Need-to-know access'],
      },
    ],
  },
  {
    tab: 'Buying & Selling',
    title: 'Buying & Selling',
    icon: Handshake,
    items: [
      {
        q: 'Do you offer off-market and pre-launch properties?',
        a: 'Yes. Our network gives clients early access to properties that are never listed publicly.',
        tags: ['Off-market access', 'Pre-launch'],
      },
      {
        q: 'How do you verify a property before purchase?',
        a: 'We check the title, approvals, patta, and encumbrance certificate, and report any issues before you commit.',
        tags: ['Title check', 'Approvals'],
      },
      {
        q: 'How is the asking price decided?',
        a: 'Pricing is based on recent local sales and current demand, not guesswork.',
        tags: ['Market data', 'Fair pricing'],
      },
      {
        q: 'Do you support the deal through to registration?',
        a: 'Yes. We negotiate, coordinate the paperwork, and stay with you until registration is complete.',
        tags: ['End-to-end', 'Registration'],
      },
    ],
  },
  {
    tab: 'Tenancy & Leasing',
    title: 'Tenancy & Leasing',
    icon: KeyRound,
    items: [
      {
        q: 'How do you screen tenants?',
        a: 'We verify identity, employment, and rental history before any tenant is shortlisted.',
        tags: ['Verified tenants', 'Background checks'],
      },
      {
        q: 'Who collects the rent and holds the deposit?',
        a: 'We collect rent on time and hold deposits securely, with a clear monthly statement for you.',
        tags: ['Prompt collection', 'Monthly statements'],
      },
      {
        q: 'What happens at move-in and move-out?',
        a: 'We inspect the property at both stages and record its condition with photographs.',
        tags: ['Inspections', 'Photo reports'],
      },
      {
        q: 'Who handles tenant complaints?',
        a: 'We do. Tenants contact us directly, so you are not disturbed with day-to-day issues.',
        tags: ['Single contact', 'Hands-off'],
      },
    ],
  },
  {
    tab: 'Property Management',
    title: 'Property Management',
    icon: Building2,
    items: [
      {
        q: 'What does property management include?',
        a: 'Preventive maintenance, staff oversight, rent collection, and regular reporting on your property.',
        tags: ['Maintenance', 'Reporting'],
      },
      {
        q: 'How often will I receive reports?',
        a: 'You receive a transparent statement every month, plus photo reports after each condition audit.',
        tags: ['Monthly statements', 'Photo audits'],
      },
      {
        q: 'Is there support for urgent repairs?',
        a: 'Yes. Technical support is available around the clock for urgent issues.',
        tags: ['24/7 support', 'Vetted vendors'],
      },
      {
        q: 'Can you manage a property while I live abroad?',
        a: 'Yes. Many of our clients are overseas owners, and we handle everything on site on their behalf.',
        tags: ['Overseas owners', 'Remote updates'],
      },
    ],
  },
  {
    tab: 'Documentation & Loans',
    title: 'Documentation & Loans',
    icon: FileText,
    items: [
      {
        q: 'Can you help with home loans and mortgages?',
        a: 'Yes. We compare lenders, prepare your documents, and negotiate on your behalf.',
        tags: ['Multi-bank options', 'Paperwork handled'],
      },
      {
        q: 'Do you assist with refinancing or top-up loans?',
        a: 'Yes. We review your current loan and arrange better terms where they are available.',
        tags: ['Refinancing', 'Top-up loans'],
      },
      {
        q: 'Which documents do I need to prepare?',
        a: 'We give you a short checklist for your case and review each document before submission.',
        tags: ['Checklist', 'Document review'],
      },
      {
        q: 'Can you arrange property insurance?',
        a: 'Yes. We arrange cover for the property and landlord liability, matched to your needs.',
        tags: ['Property cover', 'Landlord liability'],
      },
    ],
  },
]

/* Builds a text file from the FAQ and downloads it */
function downloadDossier() {
  if (DOSSIER_URL) {
    const link = document.createElement('a')
    link.href = DOSSIER_URL
    link.download = 'Four-Space-Advisory-Dossier'
    document.body.appendChild(link)
    link.click()
    link.remove()
    return
  }

  const lines = ['FOUR-SPACE ADVISORY DOSSIER', '===========================', '']
  categories.forEach((category) => {
    lines.push(category.title.toUpperCase(), '-'.repeat(category.title.length), '')
    category.items.forEach((item, index) => {
      lines.push(`${index + 1}. ${item.q}`, item.a, '')
    })
  })
  lines.push(
    'CONTACT',
    '-------',
    `Telephone: ${CONTACT.phone}`,
    `Email: ${CONTACT.email}`,
    `Hours: ${CONTACT.hours}`,
  )

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Four-Space-Advisory-Dossier.txt'
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function FaqSection() {
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(0)
  const [downloaded, setDownloaded] = useState(false)

  const category = categories[tab]
  const CategoryIcon = category.icon

  const chooseTab = (index) => {
    setTab(index)
    setOpen(0)
  }

  const handleDownload = () => {
    downloadDossier()
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2500)
  }

  return (
    <section className="w-full overflow-x-hidden bg-[#faf8f4]">

      {/* ===== TABS ===== */}
      <div className="w-full border-b border-[#eee6dc] bg-white">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:gap-3 sm:px-6 sm:py-4 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((item, index) => {
            const isActive = index === tab
            return (
              <button
                key={item.tab}
                type="button"
                onClick={() => chooseTab(index)}
                className={`shrink-0 cursor-pointer whitespace-nowrap rounded-lg border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 sm:px-6 sm:py-3 sm:text-[12px] sm:tracking-[0.18em] ${
                  isActive
                    ? 'border-[#171d36] bg-[#171d36] text-white'
                    : 'border-[#e8e0d4] bg-[#f4f1ec] text-slate-500 hover:border-[#7a5c46] hover:bg-white hover:text-[#7a5c46]'
                }`}
              >
                {item.tab}
              </button>
            )
          })}
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:gap-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-12 lg:py-16">

        {/* ----- LEFT: questions ----- */}
        <div className="min-w-0 rounded-3xl border border-[#eee6dc] bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6 md:p-10">

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eee6dc] pb-6">
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e8e0d4] bg-[#f4f1ec] text-[#7a5c46]">
                <CategoryIcon size={20} strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
                  Inquiries Ledger
                </p>
                <h2 className="font-serif text-2xl leading-tight text-[#171d36] sm:text-3xl">{category.title}</h2>
              </div>
            </div>
            <span className="shrink-0 whitespace-nowrap rounded-lg border border-[#e8e0d4] bg-[#f4f1ec] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
              {category.items.length} Questions
            </span>
          </div>

          {/* Accordion */}
          <div key={tab}>
            {category.items.map((item, index) => {
              const isOpen = index === open
              return (
                <div key={item.q} className="border-b border-[#eee6dc]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left sm:gap-6 sm:py-7"
                  >
                    <span
                      className={`min-w-0 font-serif text-[19px] leading-snug transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7a5c46] sm:text-2xl ${
                        isOpen ? 'text-[#7a5c46]' : 'text-[#171d36]'
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110 group-hover:border-[#7a5c46] group-hover:bg-[#7a5c46] group-hover:text-white group-active:scale-95 ${
                        isOpen
                          ? 'rotate-180 border-[#9b8268] bg-[#9b8268] text-white'
                          : 'border-[#e8e0d4] bg-[#f4f1ec] text-[#7a5c46]'
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-5 text-[16px] leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
                        {item.a}
                      </p>
                      <div className="flex flex-wrap gap-2 pb-6 sm:gap-3 sm:pb-7">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex cursor-default items-center gap-2 rounded-lg border border-[#e8e0d4] bg-[#f4f1ec] px-3 py-2 text-[13px] font-medium text-[#7a5c46] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7a5c46] hover:text-white sm:px-3.5"
                          >
                            <BadgeCheck size={15} strokeWidth={1.8} className="shrink-0" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Advisory note */}
          <div className="mt-8 flex gap-4 rounded-xl border border-[#e8e0d4] bg-[#f4f1ec] p-4 sm:p-5">
            <Quote size={18} className="mt-0.5 shrink-0 text-[#9b8268]" />
            <p className="min-w-0 text-[14px] italic leading-6 text-slate-500">
              <span className="font-bold not-italic text-[#171d36]">PRIVATE ADVISORY NOTE:</span>{' '}
              Discretion is not an option in ultra-prime property; it is the structural
              foundation of legacy capital governance.
            </p>
          </div>

          {/* Footer row with the download button */}
          <div className="mt-8 flex flex-col items-start gap-4 border-t border-[#eee6dc] pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7a5c46]">
              Looking for something else?
            </span>

            <button
              type="button"
              onClick={handleDownload}
              className="group/dl inline-flex cursor-pointer items-center gap-2 border-b-2 border-transparent pb-1 text-left text-[12px] font-bold uppercase tracking-[0.14em] text-[#171d36] transition-all duration-300 hover:border-[#7a5c46] hover:text-[#7a5c46] active:scale-95 sm:tracking-[0.18em]"
            >
              {downloaded ? 'Downloaded' : 'Download advisory dossier'}
              {downloaded ? (
                <Check size={16} strokeWidth={2.4} className="shrink-0" />
              ) : (
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.2}
                  className="shrink-0 transition-transform duration-300 group-hover/dl:-translate-y-1 group-hover/dl:translate-x-1"
                />
              )}
            </button>
          </div>
        </div>

        {/* ----- RIGHT: sidebar ----- */}
        <aside className="flex min-w-0 flex-col gap-6 lg:sticky lg:top-6 lg:self-start">

          {/* Bespoke concierge */}
          <div className="overflow-hidden rounded-3xl border border-[#eee6dc] bg-white shadow-xl shadow-slate-900/5">
            <div className="h-1.5 bg-[#9b8268]"></div>
            <div className="p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5c46]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b8268]"></span>
                Bespoke Concierge
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-[#171d36] sm:text-3xl">Still have questions?</h3>
              <p className="mt-3 text-[14px] leading-6 text-slate-500">
                Our private advisory desk is available around the clock to address custom
                mandates, contract audits, or asset transitions.
              </p>

              <div className="mt-6 space-y-4 rounded-2xl border border-[#e8e0d4] bg-[#f4f1ec] p-4 sm:p-5">
                <a href={`tel:${CONTACT.phoneLink}`} className="group flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e8e0d4] bg-white text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:border-[#171d36] group-hover:bg-[#171d36] group-hover:text-white">
                    <Phone size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
                      Telephone
                    </span>
                    <span className="text-[14px] font-semibold text-[#171d36] transition-colors group-hover:text-[#7a5c46]">
                      {CONTACT.phone}
                    </span>
                  </span>
                </a>

                <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e8e0d4] bg-white text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:border-[#171d36] group-hover:bg-[#171d36] group-hover:text-white">
                    <Mail size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
                      Direct Desk
                    </span>
                    <span className="break-all text-[14px] font-semibold text-[#171d36] transition-colors group-hover:text-[#7a5c46]">
                      {CONTACT.email}
                    </span>
                  </span>
                </a>

                <div className="group flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e8e0d4] bg-white text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:border-[#171d36] group-hover:bg-[#171d36] group-hover:text-white">
                    <Clock size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b8268]">
                      Operating Hours
                    </span>
                    <span className="text-[14px] text-slate-500">{CONTACT.hours}</span>
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="group/btn relative mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#9b8268] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#171d36] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
                <span className="relative">Contact us</span>
                <ArrowRight
                  size={16}
                  className="relative transition-transform duration-300 group-hover/btn:translate-x-1.5"
                />
              </Link>

              <p className="mt-5 flex items-center gap-3 text-[11px] font-bold uppercase leading-5 tracking-[0.12em] text-[#7a5c46]">
                <Lock size={14} className="shrink-0" />
                Discretion assured. 100% confidential advisory.
              </p>
            </div>
          </div>

          {/* Private representation */}
          <div className="rounded-3xl bg-[#171d36] p-6 text-white shadow-xl shadow-slate-900/20 sm:p-7">
            <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9b88f]">
              <Building2 size={15} className="shrink-0" />
              Private Representation
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight sm:text-3xl">Need immediate representation?</h3>
            <p className="mt-3 text-[14px] leading-6 text-slate-400">
              Connect directly with our senior directors for immediate consultation
              regarding your portfolio.
            </p>

            <Link
              to="/contact"
              className="mt-6 block rounded-lg bg-[#c4a57b] px-6 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.2em] text-[#171d36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3dcc0] hover:shadow-lg active:scale-95"
            >
              Get in touch
            </Link>

            <a
              href={`tel:${CONTACT.phoneLink}`}
              className="mt-3 block rounded-lg border border-white/20 px-4 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c4a57b] hover:bg-white/10 hover:text-[#f3dcc0] active:scale-95 sm:px-6 sm:tracking-[0.15em]"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default FaqSection