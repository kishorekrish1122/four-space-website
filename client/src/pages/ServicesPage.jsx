// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { BadgeCheck } from 'lucide-react'
// import logo from '../assets/images/logo.png'

// const headingWords = ['Every', 'service,', 'thoughtfully', 'designed.']

// function ServicesPage() {
//   const [mounted, setMounted] = useState(false)

//   // Page entrance
//   useEffect(() => {
//     const timer = setTimeout(() => setMounted(true), 60)
//     return () => clearTimeout(timer)
//   }, [])

//   const rise = mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'

//   return (
//     <section className="relative overflow-hidden bg-[#f6f2ec]">
//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pb-20 lg:pt-10">

//         {/* ========== LEFT: TEXT ========== */}
//         <div>

//           {/* Breadcrumb */}
//           <nav
//             style={{ transitionDelay: '100ms' }}
//             className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-1000 ease-out ${rise}`}
//           >
//             <Link to="/" className="text-[#7a5c46] transition-colors hover:text-[#171d36]">
//               Home
//             </Link>
//             <span className="text-slate-400">/</span>
//             <span className="text-[#171d36]">Services</span>
//           </nav>

//           {/* Label with a line that grows */}
//           <div className="mt-6 flex items-center gap-4">
//             <span
//               style={{ transitionDelay: '300ms' }}
//               className={`h-px bg-[#7a5c46] transition-all duration-1000 ease-out ${
//                 mounted ? 'w-10 opacity-100' : 'w-0 opacity-0'
//               }`}
//             ></span>
//             <p
//               style={{ transitionDelay: '400ms' }}
//               className={`text-[12px] font-bold uppercase tracking-[0.25em] text-[#7a5c46] transition-all duration-1000 ease-out ${rise}`}
//             >
//               Our Services
//             </p>
//           </div>

//           {/* Heading: words rise one by one */}
//           <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-[#171d36] md:text-7xl">
//             {headingWords.map((word, index) => (
//               <span
//                 key={word}
//                 style={{ transitionDelay: `${500 + index * 130}ms` }}
//                 className={`mr-[0.25em] inline-block transition-all duration-1000 ease-out ${rise}`}
//               >
//                 {word}
//               </span>
//             ))}
//           </h1>

//           {/* Paragraph */}
//           <p
//             style={{ transitionDelay: '1100ms' }}
//             className={`mt-6 max-w-2xl text-lg leading-8 text-slate-600 transition-all duration-1000 ease-out md:text-xl md:leading-9 ${rise}`}
//           >
//             Discreet, institutional-grade stewardship, transparent accounting,
//             and bespoke advisory for property owners and investors across
//             Coimbatore.
//           </p>
//         </div>

//         {/* ========== RIGHT: LOGO CARD (same design as the Contact and FAQ pages) ========== */}
//         <div
//           style={{ transitionDelay: '600ms' }}
//           className={`mx-auto w-full max-w-[420px] transition-all duration-1000 ease-out lg:mx-0 lg:w-[420px] lg:justify-self-end ${
//             mounted ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-12 scale-90 opacity-0'
//           }`}
//         >
//           <div className="rounded-3xl border border-[#e8e2d9] bg-[#fdfcfa] px-8 pb-8 pt-10 shadow-xl shadow-slate-900/5">
//             {/* Logo image, centred inside the card */}
//             <div className="flex h-56 items-center justify-center">
//               <img
//                 src={logo}
//                 alt="Four-Space logo"
//                 className="max-h-full max-w-full object-contain"
//               />
//             </div>

//             <div className="mt-8 flex items-center justify-between border-t border-[#e8e2d9] pt-5">
//               <span className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#171d36]">
//                 <BadgeCheck size={18} strokeWidth={1.6} className="text-[#9b8268]" />
//                 Institutional Grade
//               </span>
//               <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
//                 Est. 2011
//               </span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default ServicesPage


import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck } from 'lucide-react'
import logo from '../assets/images/logo.png'

const headingWords = ['Every', 'service,', 'thoughtfully', 'designed.']

function ServicesPage() {
  const [mounted, setMounted] = useState(false)

  // Page entrance
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(timer)
  }, [])

  const rise = mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'

  return (
    <section className="relative overflow-hidden bg-[#f6f2ec]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pb-20 lg:pt-10">

        {/* ========== LEFT: TEXT ========== */}
        <div className="min-w-0">

          {/* Breadcrumb */}
          <nav
            style={{ transitionDelay: '100ms' }}
            className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-1000 ease-out ${rise}`}
          >
            <Link to="/" className="text-[#7a5c46] transition-colors hover:text-[#171d36]">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#171d36]">Services</span>
          </nav>

          {/* Label with a line that grows */}
          <div className="mt-6 flex items-center gap-4">
            <span
              style={{ transitionDelay: '300ms' }}
              className={`h-px shrink-0 bg-[#7a5c46] transition-all duration-1000 ease-out ${
                mounted ? 'w-10 opacity-100' : 'w-0 opacity-0'
              }`}
            ></span>
            <p
              style={{ transitionDelay: '400ms' }}
              className={`text-[12px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] transition-all duration-1000 ease-out sm:tracking-[0.25em] ${rise}`}
            >
              Our Services
            </p>
          </div>

          {/* Heading: words rise one by one */}
          <h1 className="mt-8 break-words font-serif text-4xl leading-[1.05] text-[#171d36] sm:text-5xl md:text-7xl">
            {headingWords.map((word, index) => (
              <span
                key={word}
                style={{ transitionDelay: `${500 + index * 130}ms` }}
                className={`mr-[0.25em] inline-block transition-all duration-1000 ease-out ${rise}`}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Paragraph */}
          <p
            style={{ transitionDelay: '1100ms' }}
            className={`mt-6 max-w-2xl text-base leading-7 text-slate-600 transition-all duration-1000 ease-out sm:text-lg sm:leading-8 md:text-xl md:leading-9 ${rise}`}
          >
            Discreet, institutional-grade stewardship, transparent accounting,
            and bespoke advisory for property owners and investors across
            Coimbatore.
          </p>
        </div>

        {/* ========== RIGHT: LOGO CARD (same design as the Contact and FAQ pages) ========== */}
        <div
          style={{ transitionDelay: '600ms' }}
          className={`mx-auto w-full max-w-[420px] min-w-0 transition-all duration-1000 ease-out lg:mx-0 lg:w-[420px] lg:justify-self-end ${
            mounted ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-12 scale-90 opacity-0'
          }`}
        >
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
    </section>
  )
}

export default ServicesPage