// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {
//   BadgeCheck,
//   Receipt,
//   Asterisk,
//   Landmark,
//   Lock,
//   Banknote,
//   Calculator,
//   FileText,
//   ShieldCheck,
//   TrendingUp,
//   Search,
//   FileCheck,
//   Handshake,
//   Scale,
//   Ruler,
//   ClipboardCheck,
//   Users,
//   Clock,
//   Phone,
//   Paintbrush,
//   Camera,
//   Wrench,
//   KeyRound,
//   CalendarDays,
//   FileDown,
//   Check,
// } from 'lucide-react'
// import Reveal from './Reveal'

// /* ---------- EDIT YOUR DETAILS HERE (printed on the PDF) ---------- */
// const CONTACT = {
//   phone: '+91 00000 00000',
//   email: 'info@example.com',
//   address: '[Office Address], Coimbatore',
// }

// /* ---------- SCOPE FOR EACH SERVICE ----------
//    Same order as the list in ServiceExplorer.jsx.
//    Keep the text plain (no special symbols) so the PDF prints correctly. */
// const scopes = [
//   {
//     name: 'Property Management',
//     heading: 'What is Included in Our Custodial Mandate',
//     summary:
//       'Complete day-to-day care of your property, from maintenance and tenants to rent and reporting, handled by one accountable team in Coimbatore.',
//     deliverables: [
//       { icon: BadgeCheck, title: 'Facility Condition Audits', text: 'Scheduled preventive maintenance and thorough inspection of plumbing, electrical, and structure by qualified engineers, to catch problems before they cost you.' },
//       { icon: Receipt, title: 'Zero-Markup Contractor Transparency', text: 'Trade rates passed directly to you, with every bill and receipt logged and shared in your monthly statement.' },
//       { icon: Asterisk, title: '24/7 Emergency Response', text: 'A round-the-clock helpline with trusted local technicians reaching your property within hours for urgent repairs.' },
//       { icon: Landmark, title: 'Civic and Regulatory Compliance', text: 'Property tax, utility bills, and local body requirements tracked and paid on time, so you never face a penalty.' },
//       { icon: Lock, title: 'Discretion and Tenant Privacy', text: 'Strict confidentiality for all staff, caretakers, and visits, protecting both your details and your tenants.' },
//     ],
//   },
//   {
//     name: 'Financial Assistance',
//     heading: 'What is Included in Our Financing Support',
//     summary:
//       'End-to-end help with funding and protecting your property, from choosing the right bank to arranging the right insurance.',
//     deliverables: [
//       { icon: Banknote, title: 'Loan and Mortgage Arrangement', text: 'We compare offers from leading banks and arrange the home loan or mortgage that fits your profile and budget.' },
//       { icon: Calculator, title: 'Eligibility and Cost Planning', text: 'Clear calculation of eligibility, EMI, and total cost, so you know exactly what you can afford before you commit.' },
//       { icon: FileText, title: 'Complete Documentation Support', text: 'We prepare and verify every document the bank needs, and follow up until the loan is sanctioned and paid out.' },
//       { icon: ShieldCheck, title: 'Property Insurance Cover', text: 'Cover for fire, natural hazards, and landlord liability, chosen to match the real value of your asset.' },
//       { icon: TrendingUp, title: 'Refinancing and Top-Up Options', text: 'A review of your existing loans for lower rates, balance transfers, and top-ups that cut your interest cost.' },
//     ],
//   },
//   {
//     name: 'Buy / Sell Advisory',
//     heading: 'What is Included in Our Transaction Advisory',
//     summary:
//       'Discreet, verified, and well-negotiated property transactions across Coimbatore, from the first search to the final registration.',
//     deliverables: [
//       { icon: Search, title: 'Property Search and Shortlisting', text: 'Verified options that match your needs, including off-market and pre-launch properties across Coimbatore.' },
//       { icon: FileCheck, title: 'Title and Approval Verification', text: 'Thorough checks of title deeds, DTCP approvals, patta, and encumbrance certificates before you pay a rupee.' },
//       { icon: TrendingUp, title: 'Market-Based Pricing', text: 'Valuation grounded in real local transactions, so you buy fairly and sell at the right price.' },
//       { icon: Handshake, title: 'Negotiation on Your Behalf', text: 'Firm, professional negotiation with buyers, sellers, and tenants to protect your interests and your price.' },
//       { icon: Scale, title: 'Registration and Handover', text: 'Support through agreement, stamp duty, registration, and possession, until the keys are in your hand.' },
//     ],
//   },
//   {
//     name: 'Estate Consultancy',
//     heading: 'What is Included in Our Advisory Mandate',
//     summary:
//       'Data-led guidance on what to keep, improve, or sell, so every property you own works harder for you.',
//     deliverables: [
//       { icon: TrendingUp, title: 'Valuation and Yield Analysis', text: 'Realistic valuation and rental-yield modelling for each asset, based on current Coimbatore market data.' },
//       { icon: Ruler, title: 'Repositioning Strategy', text: 'Advice on renovation, change of use, or redevelopment that lifts both income and resale value.' },
//       { icon: ClipboardCheck, title: 'Portfolio Review', text: 'A clear review of everything you own, with what to keep, improve, or sell, and a timeline for each.' },
//       { icon: Users, title: 'Succession and Inheritance Planning', text: 'Guidance on structuring, transferring, and dividing property across family members with minimal friction.' },
//       { icon: Clock, title: 'Exit and Timing Advice', text: 'Data-led guidance on the right moment to sell or hold, so you do not leave value on the table.' },
//     ],
//   },
//   {
//     name: 'Tenancy Concierge',
//     heading: 'What is Included in Our Tenancy Care',
//     summary:
//       'From the first viewing to the final handover, we find, manage, and look after your tenants so you earn steady rent without the stress.',
//     deliverables: [
//       { icon: Users, title: 'Tenant Screening', text: 'Verification of identity, employment, and references, so you rent to dependable people.' },
//       { icon: FileText, title: 'Agreements and Deposits', text: 'Legally sound rental agreements, security deposits, and registration handled for you.' },
//       { icon: Banknote, title: 'Rent Collection', text: 'On-time rent collection with clear receipts and a monthly statement sent to you.' },
//       { icon: Phone, title: 'Tenant Support', text: 'One point of contact for tenant requests and complaints, resolved without involving you.' },
//       { icon: ClipboardCheck, title: 'Move-In and Move-Out Inspections', text: 'Documented condition reports with photos at the start and end, protecting your deposit and your property.' },
//     ],
//   },
//   {
//     name: 'Interiors & Staging',
//     heading: 'What is Included in Our Turnkey Interiors',
//     summary:
//       'Design, furnishing, and staging delivered by one team, so your property looks right, rents faster, and sells better.',
//     deliverables: [
//       { icon: Ruler, title: 'Space Planning and Design', text: 'Layouts and design concepts planned around how the space will be used, with 3D previews where needed.' },
//       { icon: Paintbrush, title: 'Bespoke Furniture and Finishes', text: 'Custom furniture, modular kitchens, and wardrobes, built to suit your property and your budget.' },
//       { icon: Camera, title: 'Staging for Sale and Rent', text: 'Styling and photography that make a property look its best and attract better offers sooner.' },
//       { icon: Wrench, title: 'Execution and Quality Control', text: 'Our team supervises every trade on site, with regular progress updates and quality checks.' },
//       { icon: KeyRound, title: 'Turnkey Handover', text: 'A finished, cleaned, ready-to-use property handed over on the date we promised.' },
//     ],
//   },
// ]

// /* ---------- BUILDS THE PDF (runs only when the button is clicked) ---------- */
// function buildDossier(jsPDF, item) {
//   const doc = new jsPDF({ unit: 'mm', format: 'a4' })
//   const W = 210
//   const H = 297
//   const M = 18
//   const textW = W - M * 2

//   const navy = [23, 29, 54]
//   const brown = [122, 92, 70]
//   const peach = [243, 220, 192]
//   const grey = [85, 92, 106]

//   doc.setLineHeightFactor(1.35)
//   const lh = (size) => size * 0.3528 * 1.35 // line height in mm

//   const date = new Date().toLocaleDateString('en-IN', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   })

//   /* Header band */
//   doc.setFillColor(...navy)
//   doc.rect(0, 0, W, 50, 'F')
//   doc.setFillColor(...brown)
//   doc.rect(0, 50, W, 1.2, 'F')

//   doc.setTextColor(...peach)
//   doc.setFont('helvetica', 'bold')
//   doc.setFontSize(9)
//   doc.text('SERVICE DOSSIER', M, 20)
//   doc.setFont('helvetica', 'normal')
//   doc.text(date, W - M, 20, { align: 'right' })

//   doc.setTextColor(255, 255, 255)
//   doc.setFont('times', 'bold')
//   doc.setFontSize(30)
//   doc.text('Four-Space', M, 33)

//   doc.setTextColor(...peach)
//   doc.setFont('helvetica', 'normal')
//   doc.setFontSize(10)
//   doc.text('Property Advisory | Coimbatore', M, 41)

//   let y = 70
//   const ensureSpace = (needed) => {
//     if (y + needed > H - 26) {
//       doc.addPage()
//       y = M + 4
//     }
//   }

//   /* Service name */
//   doc.setTextColor(...navy)
//   doc.setFont('times', 'bold')
//   doc.setFontSize(26)
//   const nameLines = doc.splitTextToSize(item.name, textW)
//   doc.text(nameLines, M, y)
//   y += nameLines.length * lh(26) + 1

//   doc.setFillColor(...brown)
//   doc.rect(M, y, 22, 0.9, 'F')
//   y += 9

//   /* Summary */
//   doc.setTextColor(...grey)
//   doc.setFont('helvetica', 'normal')
//   doc.setFontSize(11.5)
//   const summaryLines = doc.splitTextToSize(item.summary, textW)
//   doc.text(summaryLines, M, y)
//   y += summaryLines.length * lh(11.5) + 12

//   /* Section heading */
//   doc.setTextColor(...brown)
//   doc.setFont('helvetica', 'bold')
//   doc.setFontSize(9)
//   doc.text('OPERATIONAL SCOPE', M, y)
//   y += 8

//   doc.setTextColor(...navy)
//   doc.setFont('times', 'bold')
//   doc.setFontSize(17)
//   const headingLines = doc.splitTextToSize(item.heading, textW)
//   doc.text(headingLines, M, y)
//   y += headingLines.length * lh(17) + 3

//   doc.setDrawColor(225, 220, 212)
//   doc.setLineWidth(0.3)
//   doc.line(M, y, W - M, y)
//   y += 9

//   /* Deliverables */
//   item.deliverables.forEach((d, i) => {
//     doc.setFont('helvetica', 'normal')
//     doc.setFontSize(10.5)
//     const lines = doc.splitTextToSize(d.text, textW - 16)
//     ensureSpace(14 + lines.length * lh(10.5))

//     doc.setFillColor(...peach)
//     doc.circle(M + 5, y + 3.5, 5, 'F')
//     doc.setTextColor(...brown)
//     doc.setFont('helvetica', 'bold')
//     doc.setFontSize(10)
//     doc.text(String(i + 1), M + 5, y + 4.9, { align: 'center' })

//     doc.setTextColor(...navy)
//     doc.setFont('times', 'bold')
//     doc.setFontSize(13.5)
//     doc.text(d.title, M + 16, y + 4.2)

//     doc.setTextColor(...grey)
//     doc.setFont('helvetica', 'normal')
//     doc.setFontSize(10.5)
//     doc.text(lines, M + 16, y + 10.5)

//     y += 10.5 + lines.length * lh(10.5) + 3
//     doc.setDrawColor(225, 220, 212)
//     doc.line(M, y, W - M, y)
//     y += 8
//   })

//   /* Contact box */
//   ensureSpace(46)
//   y += 4
//   doc.setFillColor(...navy)
//   doc.roundedRect(M, y, textW, 40, 3, 3, 'F')

//   doc.setTextColor(255, 255, 255)
//   doc.setFont('times', 'bold')
//   doc.setFontSize(16)
//   doc.text('Book a consultation', M + 8, y + 12)

//   doc.setTextColor(...peach)
//   doc.setFont('helvetica', 'normal')
//   doc.setFontSize(10)
//   doc.text(`Phone: ${CONTACT.phone}`, M + 8, y + 21)
//   doc.text(`Email: ${CONTACT.email}`, M + 8, y + 27)
//   doc.text(doc.splitTextToSize(`Office: ${CONTACT.address}`, textW - 16), M + 8, y + 33)

//   /* Footer on every page */
//   const pages = doc.getNumberOfPages()
//   for (let p = 1; p <= pages; p++) {
//     doc.setPage(p)
//     doc.setDrawColor(225, 220, 212)
//     doc.line(M, H - 16, W - M, H - 16)
//     doc.setTextColor(...grey)
//     doc.setFont('helvetica', 'normal')
//     doc.setFontSize(8.5)
//     doc.text('Four-Space | Service Dossier', M, H - 10)
//     doc.text(`Page ${p} of ${pages}`, W - M, H - 10, { align: 'right' })
//   }

//   return doc
// }

// /* ---------- THE PANEL ---------- */
// function ServiceScope({ index, shown }) {
//   const item = scopes[index]
//   const [status, setStatus] = useState('idle') // idle | working | done | error

//   const fade = shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//   const delay = (i) => ({ transitionDelay: shown ? `${100 + i * 100}ms` : '0ms' })

//   const download = async () => {
//     if (status === 'working') return
//     setStatus('working')

//     try {
//       const { jsPDF } = await import('jspdf')
//       const doc = buildDossier(jsPDF, item)
//       const fileName = `Four-Space-${item.name.replace(/[^a-z0-9]+/gi, '-')}-Dossier.pdf`
//       doc.save(fileName)

//       setStatus('done')
//       setTimeout(() => setStatus('idle'), 3000)
//     } catch (error) {
//       console.error('Could not create the PDF:', error)
//       setStatus('error')
//       setTimeout(() => setStatus('idle'), 3000)
//     }
//   }

//   const labels = {
//     idle: 'Download service dossier (PDF)',
//     working: 'Preparing PDF...',
//     done: 'Downloaded',
//     error: 'Try again',
//   }

//   return (
//     <div className="mx-auto mt-10 max-w-7xl px-6">
//       <Reveal>
//         <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/5 md:p-12">

//           {/* Heading + badge */}
//           <div
//             style={delay(0)}
//             className={`flex flex-col gap-5 border-b border-slate-200 pb-8 transition-all duration-700 ease-out md:flex-row md:items-center md:justify-between ${fade}`}
//           >
//             <div className="min-w-0 flex-1">
//               <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7a5c46]">
//                 Operational scope
//               </p>
//               <h2 className="mt-3 font-serif text-3xl leading-tight text-[#171d36] md:text-5xl">
//                 {item.heading}
//               </h2>
//             </div>

//             <span className="shrink-0 self-start rounded-lg bg-[#f6f2ec] px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-[#7a5c46] md:self-auto">
//               {item.deliverables.length} Core deliverables
//             </span>
//           </div>

//           {/* Deliverables */}
//           <ul>
//             {item.deliverables.map((d, i) => {
//               const Icon = d.icon

//               return (
//                 <li
//                   key={d.title}
//                   style={delay(i + 1)}
//                   className={`transition-all duration-700 ease-out ${fade}`}
//                 >
//                   <div className="group relative -mx-4 grid cursor-default grid-cols-[auto_1fr] items-start gap-x-6 rounded-xl border-b border-slate-200 px-4 py-7 transition-colors duration-500 hover:bg-[#faf8f4]">

//                     {/* Brown bar that draws on hover */}
//                     <span className="absolute bottom-6 left-0 top-6 w-0.5 origin-top scale-y-0 bg-[#7a5c46] transition-transform duration-500 group-hover:scale-y-100"></span>

//                     <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbeedd] text-[#7a5c46] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
//                       <Icon size={22} strokeWidth={1.6} />
//                     </span>

//                     <div className="min-w-0">
//                       <h3 className="font-serif text-2xl leading-tight text-[#171d36] transition-transform duration-500 group-hover:translate-x-1.5 md:text-[26px]">
//                         {d.title}
//                       </h3>
//                       <p className="mt-2 max-w-4xl text-[16px] leading-7 text-slate-600 transition-colors duration-500 group-hover:text-[#171d36]">
//                         {d.text}
//                       </p>
//                     </div>
//                   </div>
//                 </li>
//               )
//             })}
//           </ul>

//           {/* Buttons */}
//           <div
//             style={delay(7)}
//             className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out ${fade}`}
//           >
//             {/* Book a consultation */}
//             <Link
//               to="/contact"
//               className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#171d36] px-8 py-4 text-[12px] font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/30 active:translate-y-0 active:scale-95"
//             >
//               <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//               <span className="absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover/btn:translate-x-[400%]"></span>
//               <span className="relative">Book a consultation</span>
//               <CalendarDays
//                 size={18}
//                 className="relative transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-125"
//               />
//             </Link>

//             {/* Download the PDF */}
//             <button
//               type="button"
//               onClick={download}
//               disabled={status === 'working'}
//               className="group/dl relative inline-flex items-center gap-3 overflow-hidden rounded-lg border border-slate-300 bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-widest text-[#7a5c46] transition-all duration-300 hover:-translate-y-1 hover:border-[#171d36] hover:text-white hover:shadow-xl hover:shadow-slate-900/20 active:translate-y-0 active:scale-95 disabled:cursor-wait"
//             >
//               <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#171d36] transition-transform duration-500 ease-out group-hover/dl:scale-y-100"></span>
//               <span className="relative flex items-center gap-3">
//                 {status === 'done' ? (
//                   <Check size={18} />
//                 ) : (
//                   <FileDown
//                     size={18}
//                     className={
//                       status === 'working'
//                         ? 'animate-bounce'
//                         : 'transition-transform duration-300 group-hover/dl:translate-y-0.5 group-hover/dl:animate-bounce'
//                     }
//                   />
//                 )}
//                 {labels[status]}
//               </span>
//             </button>
//           </div>

//         </div>
//       </Reveal>
//     </div>
//   )
// }

// export default ServiceScope


import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BadgeCheck,
  Receipt,
  Asterisk,
  Landmark,
  Lock,
  Banknote,
  Calculator,
  FileText,
  ShieldCheck,
  TrendingUp,
  Search,
  FileCheck,
  Handshake,
  Scale,
  Ruler,
  ClipboardCheck,
  Users,
  Clock,
  Phone,
  Paintbrush,
  Camera,
  Wrench,
  KeyRound,
  CalendarDays,
  FileDown,
  Check,
} from 'lucide-react'
import Reveal from './Reveal'

/* ---------- EDIT YOUR DETAILS HERE (printed on the PDF) ---------- */
const CONTACT = {
  phone: '+91 00000 00000',
  email: 'info@example.com',
  address: '[Office Address], Coimbatore',
}

/* ---------- SCOPE FOR EACH SERVICE ----------
   Same order as the list in ServiceExplorer.jsx.
   Keep the text plain (no special symbols) so the PDF prints correctly. */
const scopes = [
  {
    name: 'Property Management',
    heading: 'What is Included in Our Custodial Mandate',
    summary:
      'Complete day-to-day care of your property, from maintenance and tenants to rent and reporting, handled by one accountable team in Coimbatore.',
    deliverables: [
      { icon: BadgeCheck, title: 'Facility Condition Audits', text: 'Scheduled preventive maintenance and thorough inspection of plumbing, electrical, and structure by qualified engineers, to catch problems before they cost you.' },
      { icon: Receipt, title: 'Zero-Markup Contractor Transparency', text: 'Trade rates passed directly to you, with every bill and receipt logged and shared in your monthly statement.' },
      { icon: Asterisk, title: '24/7 Emergency Response', text: 'A round-the-clock helpline with trusted local technicians reaching your property within hours for urgent repairs.' },
      { icon: Landmark, title: 'Civic and Regulatory Compliance', text: 'Property tax, utility bills, and local body requirements tracked and paid on time, so you never face a penalty.' },
      { icon: Lock, title: 'Discretion and Tenant Privacy', text: 'Strict confidentiality for all staff, caretakers, and visits, protecting both your details and your tenants.' },
    ],
  },
  {
    name: 'Financial Assistance',
    heading: 'What is Included in Our Financing Support',
    summary:
      'End-to-end help with funding and protecting your property, from choosing the right bank to arranging the right insurance.',
    deliverables: [
      { icon: Banknote, title: 'Loan and Mortgage Arrangement', text: 'We compare offers from leading banks and arrange the home loan or mortgage that fits your profile and budget.' },
      { icon: Calculator, title: 'Eligibility and Cost Planning', text: 'Clear calculation of eligibility, EMI, and total cost, so you know exactly what you can afford before you commit.' },
      { icon: FileText, title: 'Complete Documentation Support', text: 'We prepare and verify every document the bank needs, and follow up until the loan is sanctioned and paid out.' },
      { icon: ShieldCheck, title: 'Property Insurance Cover', text: 'Cover for fire, natural hazards, and landlord liability, chosen to match the real value of your asset.' },
      { icon: TrendingUp, title: 'Refinancing and Top-Up Options', text: 'A review of your existing loans for lower rates, balance transfers, and top-ups that cut your interest cost.' },
    ],
  },
  {
    name: 'Buy / Sell Advisory',
    heading: 'What is Included in Our Transaction Advisory',
    summary:
      'Discreet, verified, and well-negotiated property transactions across Coimbatore, from the first search to the final registration.',
    deliverables: [
      { icon: Search, title: 'Property Search and Shortlisting', text: 'Verified options that match your needs, including off-market and pre-launch properties across Coimbatore.' },
      { icon: FileCheck, title: 'Title and Approval Verification', text: 'Thorough checks of title deeds, DTCP approvals, patta, and encumbrance certificates before you pay a rupee.' },
      { icon: TrendingUp, title: 'Market-Based Pricing', text: 'Valuation grounded in real local transactions, so you buy fairly and sell at the right price.' },
      { icon: Handshake, title: 'Negotiation on Your Behalf', text: 'Firm, professional negotiation with buyers, sellers, and tenants to protect your interests and your price.' },
      { icon: Scale, title: 'Registration and Handover', text: 'Support through agreement, stamp duty, registration, and possession, until the keys are in your hand.' },
    ],
  },
  {
    name: 'Estate Consultancy',
    heading: 'What is Included in Our Advisory Mandate',
    summary:
      'Data-led guidance on what to keep, improve, or sell, so every property you own works harder for you.',
    deliverables: [
      { icon: TrendingUp, title: 'Valuation and Yield Analysis', text: 'Realistic valuation and rental-yield modelling for each asset, based on current Coimbatore market data.' },
      { icon: Ruler, title: 'Repositioning Strategy', text: 'Advice on renovation, change of use, or redevelopment that lifts both income and resale value.' },
      { icon: ClipboardCheck, title: 'Portfolio Review', text: 'A clear review of everything you own, with what to keep, improve, or sell, and a timeline for each.' },
      { icon: Users, title: 'Succession and Inheritance Planning', text: 'Guidance on structuring, transferring, and dividing property across family members with minimal friction.' },
      { icon: Clock, title: 'Exit and Timing Advice', text: 'Data-led guidance on the right moment to sell or hold, so you do not leave value on the table.' },
    ],
  },
  {
    name: 'Tenancy Concierge',
    heading: 'What is Included in Our Tenancy Care',
    summary:
      'From the first viewing to the final handover, we find, manage, and look after your tenants so you earn steady rent without the stress.',
    deliverables: [
      { icon: Users, title: 'Tenant Screening', text: 'Verification of identity, employment, and references, so you rent to dependable people.' },
      { icon: FileText, title: 'Agreements and Deposits', text: 'Legally sound rental agreements, security deposits, and registration handled for you.' },
      { icon: Banknote, title: 'Rent Collection', text: 'On-time rent collection with clear receipts and a monthly statement sent to you.' },
      { icon: Phone, title: 'Tenant Support', text: 'One point of contact for tenant requests and complaints, resolved without involving you.' },
      { icon: ClipboardCheck, title: 'Move-In and Move-Out Inspections', text: 'Documented condition reports with photos at the start and end, protecting your deposit and your property.' },
    ],
  },
  {
    name: 'Interiors & Staging',
    heading: 'What is Included in Our Turnkey Interiors',
    summary:
      'Design, furnishing, and staging delivered by one team, so your property looks right, rents faster, and sells better.',
    deliverables: [
      { icon: Ruler, title: 'Space Planning and Design', text: 'Layouts and design concepts planned around how the space will be used, with 3D previews where needed.' },
      { icon: Paintbrush, title: 'Bespoke Furniture and Finishes', text: 'Custom furniture, modular kitchens, and wardrobes, built to suit your property and your budget.' },
      { icon: Camera, title: 'Staging for Sale and Rent', text: 'Styling and photography that make a property look its best and attract better offers sooner.' },
      { icon: Wrench, title: 'Execution and Quality Control', text: 'Our team supervises every trade on site, with regular progress updates and quality checks.' },
      { icon: KeyRound, title: 'Turnkey Handover', text: 'A finished, cleaned, ready-to-use property handed over on the date we promised.' },
    ],
  },
]

/* ---------- BUILDS THE PDF (runs only when the button is clicked) ---------- */
function buildDossier(jsPDF, item) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const W = 210
  const H = 297
  const M = 18
  const textW = W - M * 2

  const navy = [23, 29, 54]
  const brown = [122, 92, 70]
  const peach = [243, 220, 192]
  const grey = [85, 92, 106]

  doc.setLineHeightFactor(1.35)
  const lh = (size) => size * 0.3528 * 1.35 // line height in mm

  const date = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  /* Header band */
  doc.setFillColor(...navy)
  doc.rect(0, 0, W, 50, 'F')
  doc.setFillColor(...brown)
  doc.rect(0, 50, W, 1.2, 'F')

  doc.setTextColor(...peach)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.text('SERVICE DOSSIER', M, 20)
  doc.setFont('helvetica', 'normal')
  doc.text(date, W - M, 20, { align: 'right' })

  doc.setTextColor(255, 255, 255)
  doc.setFont('times', 'bold')
  doc.setFontSize(30)
  doc.text('Four-Space', M, 33)

  doc.setTextColor(...peach)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text('Property Advisory | Coimbatore', M, 41)

  let y = 70
  const ensureSpace = (needed) => {
    if (y + needed > H - 26) {
      doc.addPage()
      y = M + 4
    }
  }

  /* Service name */
  doc.setTextColor(...navy)
  doc.setFont('times', 'bold')
  doc.setFontSize(26)
  const nameLines = doc.splitTextToSize(item.name, textW)
  doc.text(nameLines, M, y)
  y += nameLines.length * lh(26) + 1

  doc.setFillColor(...brown)
  doc.rect(M, y, 22, 0.9, 'F')
  y += 9

  /* Summary */
  doc.setTextColor(...grey)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11.5)
  const summaryLines = doc.splitTextToSize(item.summary, textW)
  doc.text(summaryLines, M, y)
  y += summaryLines.length * lh(11.5) + 12

  /* Section heading */
  doc.setTextColor(...brown)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.text('OPERATIONAL SCOPE', M, y)
  y += 8

  doc.setTextColor(...navy)
  doc.setFont('times', 'bold')
  doc.setFontSize(17)
  const headingLines = doc.splitTextToSize(item.heading, textW)
  doc.text(headingLines, M, y)
  y += headingLines.length * lh(17) + 3

  doc.setDrawColor(225, 220, 212)
  doc.setLineWidth(0.3)
  doc.line(M, y, W - M, y)
  y += 9

  /* Deliverables */
  item.deliverables.forEach((d, i) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10.5)
    const lines = doc.splitTextToSize(d.text, textW - 16)
    ensureSpace(14 + lines.length * lh(10.5))

    doc.setFillColor(...peach)
    doc.circle(M + 5, y + 3.5, 5, 'F')
    doc.setTextColor(...brown)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text(String(i + 1), M + 5, y + 4.9, { align: 'center' })

    doc.setTextColor(...navy)
    doc.setFont('times', 'bold')
    doc.setFontSize(13.5)
    doc.text(d.title, M + 16, y + 4.2)

    doc.setTextColor(...grey)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10.5)
    doc.text(lines, M + 16, y + 10.5)

    y += 10.5 + lines.length * lh(10.5) + 3
    doc.setDrawColor(225, 220, 212)
    doc.line(M, y, W - M, y)
    y += 8
  })

  /* Contact box */
  ensureSpace(46)
  y += 4
  doc.setFillColor(...navy)
  doc.roundedRect(M, y, textW, 40, 3, 3, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFont('times', 'bold')
  doc.setFontSize(16)
  doc.text('Book a consultation', M + 8, y + 12)

  doc.setTextColor(...peach)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text(`Phone: ${CONTACT.phone}`, M + 8, y + 21)
  doc.text(`Email: ${CONTACT.email}`, M + 8, y + 27)
  doc.text(doc.splitTextToSize(`Office: ${CONTACT.address}`, textW - 16), M + 8, y + 33)

  /* Footer on every page */
  const pages = doc.getNumberOfPages()
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p)
    doc.setDrawColor(225, 220, 212)
    doc.line(M, H - 16, W - M, H - 16)
    doc.setTextColor(...grey)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.text('Four-Space | Service Dossier', M, H - 10)
    doc.text(`Page ${p} of ${pages}`, W - M, H - 10, { align: 'right' })
  }

  return doc
}

/* ---------- THE PANEL ---------- */
function ServiceScope({ index, shown }) {
  const item = scopes[index]
  const [status, setStatus] = useState('idle') // idle | working | done | error

  const fade = shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  const delay = (i) => ({ transitionDelay: shown ? `${100 + i * 100}ms` : '0ms' })

  const download = async () => {
    if (status === 'working') return
    setStatus('working')

    try {
      const { jsPDF } = await import('jspdf')
      const doc = buildDossier(jsPDF, item)
      const fileName = `Four-Space-${item.name.replace(/[^a-z0-9]+/gi, '-')}-Dossier.pdf`
      doc.save(fileName)

      setStatus('done')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('Could not create the PDF:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const labels = {
    idle: 'Download service dossier (PDF)',
    working: 'Preparing PDF...',
    done: 'Downloaded',
    error: 'Try again',
  }

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <Reveal>
        <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/5 md:p-12">

          {/* Heading + badge */}
          <div
            style={delay(0)}
            className={`flex flex-col gap-5 border-b border-slate-200 pb-8 transition-all duration-700 ease-out md:flex-row md:items-center md:justify-between ${fade}`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7a5c46]">
                Operational scope
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#171d36] md:text-5xl">
                {item.heading}
              </h2>
            </div>

            <span className="shrink-0 self-start rounded-lg bg-[#f6f2ec] px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-[#7a5c46] md:self-auto">
              {item.deliverables.length} Core deliverables
            </span>
          </div>

          {/* Deliverables */}
          <ul>
            {item.deliverables.map((d, i) => {
              const Icon = d.icon

              return (
                <li
                  key={d.title}
                  style={delay(i + 1)}
                  className={`transition-all duration-700 ease-out ${fade}`}
                >
                  <div className="group relative -mx-4 grid cursor-default grid-cols-[auto_1fr] items-start gap-x-4 rounded-xl border-b border-slate-200 px-4 py-7 transition-colors duration-500 hover:bg-[#faf8f4] md:gap-x-6">

                    {/* Brown bar that draws on hover */}
                    <span className="absolute bottom-6 left-0 top-6 w-0.5 origin-top scale-y-0 bg-[#7a5c46] transition-transform duration-500 group-hover:scale-y-100"></span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fbeedd] text-[#7a5c46] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0] md:h-12 md:w-12">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>

                    <div className="min-w-0">
                      <h3 className="break-words font-serif text-xl leading-tight text-[#171d36] transition-transform duration-500 group-hover:translate-x-1.5 md:text-[26px]">
                        {d.title}
                      </h3>
                      <p className="mt-2 max-w-4xl text-[15px] leading-7 text-slate-600 transition-colors duration-500 group-hover:text-[#171d36] md:text-[16px]">
                        {d.text}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* Buttons */}
          <div
            style={delay(7)}
            className={`mt-10 flex flex-col gap-4 transition-all duration-700 ease-out sm:flex-row sm:flex-wrap sm:items-center ${fade}`}
          >
            {/* Book a consultation */}
            <Link
              to="/contact"
              className="group/btn relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#171d36] px-6 py-4 text-center text-[12px] font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/30 active:translate-y-0 active:scale-95 sm:w-auto sm:px-8"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
              <span className="absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover/btn:translate-x-[400%]"></span>
              <span className="relative">Book a consultation</span>
              <CalendarDays
                size={18}
                className="relative transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-125"
              />
            </Link>

            {/* Download the PDF */}
            <button
              type="button"
              onClick={download}
              disabled={status === 'working'}
              className="group/dl relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg border border-slate-300 bg-white px-6 py-4 text-center text-[12px] font-bold uppercase tracking-widest text-[#7a5c46] transition-all duration-300 hover:-translate-y-1 hover:border-[#171d36] hover:text-white hover:shadow-xl hover:shadow-slate-900/20 active:translate-y-0 active:scale-95 disabled:cursor-wait sm:w-auto sm:px-8"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#171d36] transition-transform duration-500 ease-out group-hover/dl:scale-y-100"></span>
              <span className="relative flex items-center justify-center gap-3">
                {status === 'done' ? (
                  <Check size={18} />
                ) : (
                  <FileDown
                    size={18}
                    className={
                      status === 'working'
                        ? 'animate-bounce'
                        : 'transition-transform duration-300 group-hover/dl:translate-y-0.5 group-hover/dl:animate-bounce'
                    }
                  />
                )}
                {labels[status]}
              </span>
            </button>
          </div>

        </div>
      </Reveal>
    </div>
  )
}

export default ServiceScope