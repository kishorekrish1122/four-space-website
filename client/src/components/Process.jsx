// import Reveal from './Reveal'
// import useInView from '../hooks/useInView'

// const steps = [
//   {
//     number: '01',
//     title: 'Consult',
//     text: 'In-depth discovery session, portfolio asset valuation, and alignment of financial benchmarks with exit timelines.',
//   },
//   {
//     number: '02',
//     title: 'Choose',
//     text: 'Bespoke tier selection, contractual SLA parameters, and tailored onboarding roadmap for target properties.',
//   },
//   {
//     number: '03',
//     title: 'Manage',
//     text: 'Immediate execution of facility audits, vetted tenant handovers, and continuous real-time ledger accounting.',
//   },
//   {
//     number: '04',
//     title: 'Grow',
//     text: 'Continuous cap-rate refinement, yield reinvestment structures, and proactive strategic portfolio scaling.',
//   },
// ]

// function Process() {
//   const [ref, inView] = useInView(0.25)

//   return (
//     <section className="bg-[#f6f2ec] py-20 lg:py-28">
//       <div className="mx-auto max-w-6xl px-6">

//         {/* Heading */}
//         <Reveal>
//           <div className="mx-auto max-w-2xl text-center">
//             <div className="flex items-center justify-center gap-3">
//               <span className="h-px w-10 bg-[#7a5c46]"></span>
//               <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//                 Methodology
//               </p>
//               <span className="h-px w-10 bg-[#7a5c46]"></span>
//             </div>

//             <h2 className="mt-6 font-serif text-4xl leading-tight text-[#171d36] md:text-5xl">
//               Our Four-Step Approach to Effortless Ownership
//             </h2>

//             <p className="mt-6 text-[15px] leading-7 text-slate-600">
//               Engineered for complete alignment with your goals and
//               high-yield mandates.
//             </p>
//           </div>
//         </Reveal>

//         {/* Steps */}
//         <div
//           ref={ref}
//           className="relative mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
//         >
//           {/* Connecting line (draws itself from left to right) */}
//           <div className="absolute left-[4%] right-[4%] top-8 hidden lg:block">
//             <div
//               className={`h-px origin-left bg-slate-300 transition-transform duration-[2000ms] ease-out ${
//                 inView ? 'scale-x-100' : 'scale-x-0'
//               }`}
//             ></div>
//           </div>

//           {steps.map((step, index) => {
//             const isDark = index % 2 === 0

//             return (
//               <div
//                 key={step.number}
//                 style={{ transitionDelay: `${300 + index * 350}ms` }}
//                 className={`group relative text-center transition-all duration-1000 ease-out ${
//                   inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                 }`}
//               >
//                 {/* Number circle */}
//                 <div className="relative mx-auto h-16 w-16">
//                   {/* Ring that pulses on hover */}
//                   <span className="absolute inset-0 rounded-full bg-[#7a5c46]/40 opacity-0 group-hover:animate-ping group-hover:opacity-100"></span>

//                   <div
//                     className={`relative flex h-16 w-16 items-center justify-center rounded-full font-serif text-xl text-[#f3dcc0] shadow-lg ring-4 ring-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${
//                       isDark
//                         ? 'bg-[#171d36] group-hover:bg-[#7a5c46]'
//                         : 'bg-[#7a5c46] group-hover:bg-[#171d36]'
//                     }`}
//                   >
//                     {step.number}
//                   </div>
//                 </div>

//                 {/* Text */}
//                 <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
//                   Step {step.number}
//                 </p>

//                 <h3 className="mt-2 font-serif text-2xl text-[#171d36] transition-transform duration-500 group-hover:-translate-y-1">
//                   {step.title}
//                 </h3>

//                 {/* Small line that grows under the title on hover */}
//                 <span className="mx-auto mt-2 block h-0.5 w-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-10"></span>

//                 <p className="mt-4 text-[13px] leading-6 text-slate-600">
//                   {step.text}
//                 </p>
//               </div>
//             )
//           })}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Process


import Reveal from './Reveal'
import useInView from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Consult',
    text: 'In-depth discovery session, portfolio asset valuation, and alignment of financial benchmarks with exit timelines.',
  },
  {
    number: '02',
    title: 'Choose',
    text: 'Bespoke tier selection, contractual SLA parameters, and tailored onboarding roadmap for target properties.',
  },
  {
    number: '03',
    title: 'Manage',
    text: 'Immediate execution of facility audits, vetted tenant handovers, and continuous real-time ledger accounting.',
  },
  {
    number: '04',
    title: 'Grow',
    text: 'Continuous cap-rate refinement, yield reinvestment structures, and proactive strategic portfolio scaling.',
  },
]

function Process() {
  const [ref, inView] = useInView(0.25)

  return (
    <section className="overflow-hidden bg-[#f6f2ec] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-6 shrink-0 bg-[#7a5c46] sm:w-10"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
                Methodology
              </p>
              <span className="h-px w-6 shrink-0 bg-[#7a5c46] sm:w-10"></span>
            </div>

            <h2 className="mt-5 break-words font-serif text-3xl leading-tight text-[#171d36] sm:mt-6 sm:text-4xl md:text-5xl">
              Our Four-Step Approach to Effortless Ownership
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600 sm:mt-6">
              Engineered for complete alignment with your goals and
              high-yield mandates.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div
          ref={ref}
          className="relative mt-12 grid gap-12 sm:mt-20 sm:grid-cols-2 sm:gap-14 lg:grid-cols-4 lg:gap-6"
        >
          {/* Connecting line (draws itself from left to right) */}
          <div className="absolute left-[4%] right-[4%] top-8 hidden lg:block">
            <div
              className={`h-px origin-left bg-slate-300 transition-transform duration-[2000ms] ease-out ${
                inView ? 'scale-x-100' : 'scale-x-0'
              }`}
            ></div>
          </div>

          {steps.map((step, index) => {
            const isDark = index % 2 === 0

            return (
              <div
                key={step.number}
                style={{ transitionDelay: `${300 + index * 350}ms` }}
                className={`group relative mx-auto w-full min-w-0 max-w-sm text-center transition-all duration-1000 ease-out ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {/* Number circle */}
                <div className="relative mx-auto h-16 w-16 shrink-0">
                  {/* Ring that pulses on hover */}
                  <span className="absolute inset-0 rounded-full bg-[#7a5c46]/40 opacity-0 group-hover:animate-ping group-hover:opacity-100"></span>

                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full font-serif text-xl text-[#f3dcc0] shadow-lg ring-4 ring-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${
                      isDark
                        ? 'bg-[#171d36] group-hover:bg-[#7a5c46]'
                        : 'bg-[#7a5c46] group-hover:bg-[#171d36]'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
                  Step {step.number}
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#171d36] transition-transform duration-500 group-hover:-translate-y-1">
                  {step.title}
                </h3>

                {/* Small line that grows under the title on hover */}
                <span className="mx-auto mt-2 block h-0.5 w-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-10"></span>

                <p className="mt-4 text-[14px] leading-6 text-slate-600 sm:text-[13px]">
                  {step.text}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Process