// import { useState } from 'react'
// import { ShieldCheck, Compass, KeyRound } from 'lucide-react'

// /* ---------- TOP THREE CARDS (edit the text here) ---------- */
// const highlights = [
//   {
//     icon: ShieldCheck,
//     label: 'Asset Security',
//     title: 'Institutional Protection',
//     text: 'Verified titles, insured assets, and documented controls on every property we hold in trust.',
//   },
//   {
//     icon: Compass,
//     label: 'Senior Attention',
//     title: 'Direct Partner Access',
//     text: 'You deal with a senior partner from the first call, not a rotating support desk.',
//   },
//   {
//     icon: KeyRound,
//     label: 'Client Profile',
//     title: 'Discreet Global Owners',
//     text: 'Private, confidential service for owners and families based in India and abroad.',
//   },
// ]

// /* ---------- THE FOUR STEPS (edit the text here) ---------- */
// const steps = [
//   {
//     number: '01',
//     title: 'Consult',
//     text: 'Confidential intake interview, title review, and portfolio mandate alignment.',
//   },
//   {
//     number: '02',
//     title: 'Choose',
//     text: 'Tailored scope of stewardship, governance bounds, and SLA covenant drafting.',
//   },
//   {
//     number: '03',
//     title: 'Manage',
//     text: 'Instant onboarding, forensic condition audit, physical lock audit, and ledger setup.',
//   },
//   {
//     number: '04',
//     title: 'Grow',
//     text: 'Long-term asset appreciation, yield optimization, and bi-annual fiduciary reviews.',
//   },
// ]

// function ProcessSection() {
//   // Step that is hovered or tapped. The line fills up to it.
//   const [active, setActive] = useState(0)

//   return (
//     <section className="w-full">

//       {/* ===== TOP BAND: three cards (they overlap into the section below) ===== */}
//       <div className="relative z-10 -mt-16 w-full bg-[#faf8f4] px-6 pt-6 lg:px-12">
//         <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:-mb-20">
//           {highlights.map((item) => {
//             const Icon = item.icon
//             return (
//               <div
//                 key={item.title}
//                 tabIndex={0}
//                 className="group relative cursor-pointer overflow-hidden rounded-xl bg-white p-8 shadow-sm outline-none transition-all duration-500 [-webkit-tap-highlight-color:transparent] hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 focus-visible:-translate-y-2 focus-visible:shadow-2xl active:scale-[0.97]"
//               >
//                 {/* Bar that grows along the bottom on hover / touch */}
//                 <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-full group-focus-visible:w-full group-active:w-full"></span>

//                 <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6f2ec] text-[#7a5c46] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0] group-active:scale-110 group-active:bg-[#171d36] group-active:text-[#f3dcc0]">
//                   <Icon size={24} strokeWidth={1.8} />
//                 </span>

//                 <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//                   {item.label}
//                 </p>
//                 <h3 className="mt-3 font-serif text-3xl text-[#171d36]">{item.title}</h3>
//                 <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.text}</p>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* ===== PROCESS: full-width band ===== */}
//       <div className="w-full bg-[#f6f2ec] px-6 pb-20 pt-20 md:pt-36 lg:px-12 lg:pb-28">
//         <div className="mx-auto max-w-7xl">

//           {/* Heading */}
//           <div className="text-center">
//             <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#7a5c46]">
//               Process Architecture
//             </p>
//             <h2 className="mt-5 font-serif text-5xl text-[#171d36] md:text-6xl">
//               Methodology &amp; Onboarding
//             </h2>
//             <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-slate-600">
//               A seamless transition designed to insulate estate proprietors from
//               day-to-day friction.
//             </p>
//           </div>

//           {/* Steps */}
//           <div className="relative mt-20">

//             {/* Connecting line (desktop). Grey track + brown fill up to the active step */}
//             <div className="absolute left-[12.5%] top-10 hidden h-px w-[75%] bg-slate-300 lg:block">
//               <div
//                 className="h-full bg-[#7a5c46] transition-all duration-700 ease-out"
//                 style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
//               ></div>
//             </div>

//             <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
//               {steps.map((step, index) => {
//                 const isActive = index === active
//                 const isDone = index <= active

//                 return (
//                   <button
//                     key={step.number}
//                     type="button"
//                     onMouseEnter={() => setActive(index)}
//                     onFocus={() => setActive(index)}
//                     onClick={() => setActive(index)}
//                     onTouchStart={() => setActive(index)}
//                     className="group relative flex cursor-pointer flex-col items-center rounded-2xl px-4 text-center outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-[#7a5c46]"
//                   >
//                     {/* Numbered circle */}
//                     <span
//                       className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border font-serif text-3xl transition-all duration-500 group-active:scale-90 ${
//                         isActive
//                           ? 'scale-110 border-[#171d36] bg-[#171d36] text-[#f3dcc0] shadow-xl shadow-slate-900/25'
//                           : isDone
//                             ? 'border-[#7a5c46] bg-white text-[#7a5c46] shadow-md'
//                             : 'border-slate-200 bg-white text-[#171d36] shadow-md'
//                       }`}
//                     >
//                       {/* Soft ring that pulses on the active step */}
//                       {isActive && (
//                         <span className="absolute inset-0 animate-ping rounded-full bg-[#7a5c46]/20 [animation-iteration-count:2]"></span>
//                       )}
//                       <span className="relative">{step.number}</span>
//                     </span>

//                     <h3
//                       className={`mt-8 font-serif text-3xl transition-all duration-500 ${
//                         isActive ? '-translate-y-1 text-[#7a5c46]' : 'text-[#171d36]'
//                       }`}
//                     >
//                       {step.title}
//                     </h3>

//                     <p
//                       className={`mt-3 max-w-[260px] text-[15px] leading-7 transition-all duration-500 ${
//                         isActive ? 'text-[#171d36]' : 'text-slate-600'
//                       }`}
//                     >
//                       {step.text}
//                     </p>

//                     {/* Small bar under the active step */}
//                     <span
//                       className={`mt-5 h-0.5 bg-[#7a5c46] transition-all duration-500 ${
//                         isActive ? 'w-12' : 'w-0'
//                       }`}
//                     ></span>
//                   </button>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProcessSection


import { useState } from 'react'
import { ShieldCheck, Compass, KeyRound } from 'lucide-react'

/* ---------- TOP THREE CARDS (edit the text here) ---------- */
const highlights = [
  {
    icon: ShieldCheck,
    label: 'Asset Security',
    title: 'Institutional Protection',
    text: 'Verified titles, insured assets, and documented controls on every property we hold in trust.',
  },
  {
    icon: Compass,
    label: 'Senior Attention',
    title: 'Direct Partner Access',
    text: 'You deal with a senior partner from the first call, not a rotating support desk.',
  },
  {
    icon: KeyRound,
    label: 'Client Profile',
    title: 'Discreet Global Owners',
    text: 'Private, confidential service for owners and families based in India and abroad.',
  },
]

/* ---------- THE FOUR STEPS (edit the text here) ---------- */
const steps = [
  {
    number: '01',
    title: 'Consult',
    text: 'Confidential intake interview, title review, and portfolio mandate alignment.',
  },
  {
    number: '02',
    title: 'Choose',
    text: 'Tailored scope of stewardship, governance bounds, and SLA covenant drafting.',
  },
  {
    number: '03',
    title: 'Manage',
    text: 'Instant onboarding, forensic condition audit, physical lock audit, and ledger setup.',
  },
  {
    number: '04',
    title: 'Grow',
    text: 'Long-term asset appreciation, yield optimization, and bi-annual fiduciary reviews.',
  },
]

function ProcessSection() {
  // Step that is hovered or tapped. The line fills up to it.
  const [active, setActive] = useState(0)

  return (
    <section className="w-full overflow-x-hidden">

      {/* ===== TOP BAND: three cards (they overlap into the section below) ===== */}
      <div className="relative z-10 -mt-16 w-full bg-[#faf8f4] px-5 pt-6 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 sm:gap-6 md:grid-cols-3 md:-mb-20">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                tabIndex={0}
                className="group relative h-full min-w-0 cursor-pointer overflow-hidden rounded-xl bg-white p-6 shadow-sm outline-none transition-all duration-500 [-webkit-tap-highlight-color:transparent] hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 focus-visible:-translate-y-2 focus-visible:shadow-2xl active:scale-[0.97] sm:p-8"
              >
                {/* Bar that grows along the bottom on hover / touch */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-full group-focus-visible:w-full group-active:w-full"></span>

                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f6f2ec] text-[#7a5c46] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0] group-active:scale-110 group-active:bg-[#171d36] group-active:text-[#f3dcc0]">
                  <Icon size={24} strokeWidth={1.8} />
                </span>

                <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#7a5c46] sm:mt-6">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#171d36] sm:text-3xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ===== PROCESS: full-width band ===== */}
      <div className="w-full bg-[#f6f2ec] px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 md:pt-36 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] sm:text-[13px] sm:tracking-[0.3em]">
              Process Architecture
            </p>
            <h2 className="mt-4 break-words font-serif text-4xl leading-tight text-[#171d36] sm:mt-5 sm:text-5xl md:text-6xl">
              Methodology &amp; Onboarding
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-slate-600 sm:mt-5 sm:text-[18px] sm:leading-8">
              A seamless transition designed to insulate estate proprietors from
              day-to-day friction.
            </p>
          </div>

          {/* Steps */}
          <div className="relative mt-12 sm:mt-20">

            {/* Connecting line (desktop). Grey track + brown fill up to the active step */}
            <div className="absolute left-[12.5%] top-10 hidden h-px w-[75%] bg-slate-300 lg:block">
              <div
                className="h-full bg-[#7a5c46] transition-all duration-700 ease-out"
                style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, index) => {
                const isActive = index === active
                const isDone = index <= active

                return (
                  <button
                    key={step.number}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    onTouchStart={() => setActive(index)}
                    className="group relative flex min-w-0 cursor-pointer flex-col items-center rounded-2xl px-4 py-2 text-center outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-[#7a5c46]"
                  >
                    {/* Numbered circle */}
                    <span
                      className={`relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border font-serif text-3xl transition-all duration-500 group-active:scale-90 ${
                        isActive
                          ? 'scale-110 border-[#171d36] bg-[#171d36] text-[#f3dcc0] shadow-xl shadow-slate-900/25'
                          : isDone
                            ? 'border-[#7a5c46] bg-white text-[#7a5c46] shadow-md'
                            : 'border-slate-200 bg-white text-[#171d36] shadow-md'
                      }`}
                    >
                      {/* Soft ring that pulses on the active step */}
                      {isActive && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#7a5c46]/20 [animation-iteration-count:2]"></span>
                      )}
                      <span className="relative">{step.number}</span>
                    </span>

                    <h3
                      className={`mt-7 font-serif text-2xl transition-all duration-500 sm:mt-8 sm:text-3xl ${
                        isActive ? '-translate-y-1 text-[#7a5c46]' : 'text-[#171d36]'
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`mt-3 w-full max-w-[260px] text-[15px] leading-7 transition-all duration-500 ${
                        isActive ? 'text-[#171d36]' : 'text-slate-600'
                      }`}
                    >
                      {step.text}
                    </p>

                    {/* Small bar under the active step */}
                    <span
                      className={`mt-5 h-0.5 shrink-0 bg-[#7a5c46] transition-all duration-500 ${
                        isActive ? 'w-12' : 'w-0'
                      }`}
                    ></span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection