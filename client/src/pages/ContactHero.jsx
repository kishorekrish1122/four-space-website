// import { Link } from 'react-router-dom'
// import { ShieldCheck, Lock, Clock, BadgeCheck } from 'lucide-react'

// /* ---------- YOUR LOGO: change this path to your own logo file ---------- */
// import logo from '../assets/images/logo.png'

// /* ---------- THE THREE SMALL POINTS (edit the text here) ---------- */
// const points = [
//   { icon: ShieldCheck, text: 'Direct senior partner access' },
//   { icon: Lock, text: 'Encrypted bilateral mandate' },
//   { icon: Clock, text: 'Two-hour response commitment' },
// ]

// function ContactHero() {
//   return (
//     <section className="w-full bg-[#f5f2ed] px-6 pt-6 pb-14 lg:px-12 lg:pt-10 lg:pb-20">
//       <div className="mx-auto max-w-7xl">

//         {/* ===== Top row: label + breadcrumb ===== */}
//         <div className="flex items-center justify-between gap-4">
//           <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#7a5c46]">
//             <span className="h-2.5 w-2.5 rounded-full bg-[#7a5c46]"></span>
//             Contact Us
//           </p>

//           <nav
//             aria-label="Breadcrumb"
//             className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em]"
//           >
//             <Link to="/" className="text-[#171d36] transition-colors hover:text-[#7a5c46]">
//               Home
//             </Link>
//             <span className="text-slate-400">/</span>
//             <span className="text-[#171d36]">Contact</span>
//           </nav>
//         </div>

//         {/* ===== Main row: text + logo card ===== */}
//         <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">

//           {/* LEFT */}
//           <div>
//             <h1 className="font-serif text-5xl leading-[1.15] text-[#171d36] md:text-6xl lg:text-7xl">
//               Let&apos;s talk about
//               <span className="block italic text-[#7a5c46]">your property.</span>
//             </h1>

//             <p className="mt-8 max-w-3xl text-[19px] leading-9 text-slate-600">
//               Whether you are entrusting us with asset stewardship, seeking an off-market
//               acquisition, or exploring turnkey estate governance, our private advisory
//               desk is at your disposal.
//             </p>

//             <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
//               {points.map((item) => {
//                 const Icon = item.icon
//                 return (
//                   <li
//                     key={item.text}
//                     className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#7a5c46]"
//                   >
//                     <Icon size={18} strokeWidth={1.8} className="shrink-0" />
//                     {item.text}
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>

//           {/* RIGHT: logo card (same design as the FAQ page card) */}
//           <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:justify-self-end">
//             <div className="rounded-3xl border border-[#e8e2d9] bg-[#fdfcfa] px-8 pb-8 pt-10 shadow-xl shadow-slate-900/5">
//               {/* Logo image, centred inside the card */}
//               <div className="flex h-56 items-center justify-center">
//                 <img
//                   src={logo}
//                   alt="Four-Space logo"
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>

//               <div className="mt-8 flex items-center justify-between border-t border-[#e8e2d9] pt-5">
//                 <span className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#171d36]">
//                   <BadgeCheck size={18} strokeWidth={1.6} className="text-[#9b8268]" />
//                   Institutional Grade
//                 </span>
//                 <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
//                   Est. 2011
//                 </span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactHero


import { Link } from 'react-router-dom'
import { ShieldCheck, Lock, Clock, BadgeCheck } from 'lucide-react'

/* ---------- YOUR LOGO: change this path to your own logo file ---------- */
import logo from '../assets/images/logo.png'

/* ---------- THE THREE SMALL POINTS (edit the text here) ---------- */
const points = [
  { icon: ShieldCheck, text: 'Direct senior partner access' },
  { icon: Lock, text: 'Encrypted bilateral mandate' },
  { icon: Clock, text: 'Two-hour response commitment' },
]

function ContactHero() {
  return (
    <section className="w-full bg-[#f5f2ed] px-6 pt-6 pb-14 lg:px-12 lg:pt-10 lg:pb-20">
      <div className="mx-auto max-w-7xl">

        {/* ===== Top row: label + breadcrumb ===== */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] text-[#7a5c46] sm:text-[13px] sm:tracking-[0.2em]">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#7a5c46]"></span>
            Contact Us
          </p>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] sm:text-[13px] sm:tracking-[0.12em]"
          >
            <Link to="/" className="text-[#171d36] transition-colors hover:text-[#7a5c46]">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#171d36]">Contact</span>
          </nav>
        </div>

        {/* ===== Main row: text + logo card ===== */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">

          {/* LEFT */}
          <div className="min-w-0">
            <h1 className="break-words font-serif text-4xl leading-[1.15] text-[#171d36] sm:text-5xl md:text-6xl lg:text-7xl">
             Let’s Build  
              <span className="block italic text-[#7a5c46]">Your Future Together.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-[19px] sm:leading-9">
             Ready to buy, sell, manage, or design your property? Reach out to the Four Space team today for a personalized consultation.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4 sm:mt-10">
              {points.map((item) => {
                const Icon = item.icon
                return (
                  <li
                    key={item.text}
                    className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#7a5c46] sm:text-[13px] sm:tracking-[0.12em]"
                  >
                    <Icon size={18} strokeWidth={1.8} className="shrink-0" />
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* RIGHT: logo card (same design as the FAQ page card) */}
          <div className="mx-auto w-full max-w-[420px] min-w-0 lg:mx-0 lg:justify-self-end">
            <div className="rounded-3xl border border-[#e8e2d9] bg-[#fdfcfa] px-6 pb-6 pt-8 shadow-xl shadow-slate-900/5 sm:px-8 sm:pb-8 sm:pt-10">
              {/* Logo image, centred inside the card */}
              <div className="flex h-44 items-center justify-center sm:h-56">
                <img
                  src={logo}
                  alt="Four-Space logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-[#e8e2d9] pt-5 sm:mt-8">
                <span className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#171d36] sm:text-[12px] sm:tracking-[0.2em]">
                  <BadgeCheck size={18} strokeWidth={1.6} className="shrink-0 text-[#9b8268]" />
                  Institutional Grade
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
                  Est. 2011
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactHero