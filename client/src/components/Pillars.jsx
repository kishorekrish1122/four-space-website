// import { Wallet, ShieldPlus, ShieldCheck, TrendingUp } from 'lucide-react'
// import Reveal from './Reveal'
// import useInView from '../hooks/useInView'

// const pillars = [
//   {
//     icon: Wallet,
//     iconMotion: 'group-hover:-rotate-12',
//     title: 'Transparency',
//     text: 'Open ledger accounting, live financial dashboards, zero hidden markups, and unvarnished quarterly condition appraisals.',
//   },
//   {
//     icon: ShieldPlus,
//     iconMotion: 'group-hover:scale-125',
//     title: 'Care',
//     text: 'Proactive preventative maintenance frameworks, dedicated white-glove concierges, and rapid-response technical teams.',
//   },
//   {
//     icon: ShieldCheck,
//     iconMotion: 'group-hover:-translate-y-1',
//     title: 'Integrity',
//     text: 'Total fiduciary alignment, discreet non-disclosure agreements, strict regulatory compliance, and uncompromised ethics.',
//   },
//   {
//     icon: TrendingUp,
//     iconMotion: 'group-hover:-translate-y-1 group-hover:translate-x-1',
//     title: 'Results',
//     text: 'Proven yield optimization, long and stable tenant tenure, sustained capital growth, and enduring architectural preservation.',
//   },
// ]

// function Pillars() {
//   const [ref, inView] = useInView(0.2)

//   return (
//     <section className="overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-20">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading + side paragraph */}
//         <div className="grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
//           <Reveal>
//             <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#7a5c46]">
//               The Four Pillars
//             </p>
//             <h2 className="mt-5 font-serif text-4xl leading-tight text-[#171d36] md:text-6xl">
//               Principles That Guide Every Mandate
//             </h2>
//           </Reveal>

//           {/* <Reveal delay={200}>
//             <p className="text-[16px] leading-8 text-slate-600">
//               Built on trust, guided by integrity, and driven by excellence, we deliver
//   exceptional property management and lasting value for every client.
//             </p>
//           </Reveal> */}
//         </div>

//         {/* Cards */}
//         <div
//           ref={ref}
//           className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {pillars.map((item, index) => {
//             const Icon = item.icon
//             const number = String(index + 1).padStart(2, '0')

//             return (
//               /* OUTER box: the scroll entrance */
//               <div
//                 key={item.title}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//                 className={`h-full transition-all duration-1000 ease-out ${
//                   inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
//                 }`}
//               >
//                 {/* INNER box: the hover effects */}
//                 <div className="group relative flex h-full min-h-[380px] cursor-default flex-col overflow-hidden rounded-2xl bg-[#f6f2ec] p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/25">

//                   {/* Navy colour that fills the card from the bottom */}
//                   <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#171d36] transition-transform duration-700 ease-out group-hover:scale-y-100"></span>

//                   {/* Big faded number */}
//                   <span className="pointer-events-none absolute right-6 top-4 font-serif text-8xl leading-none text-[#171d36]/5 transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-white/10">
//                     {number}
//                   </span>

//                   {/* Icon box */}
//                   <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-white text-[#7a5c46] shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#f3dcc0] group-hover:text-[#171d36]">
//                     <Icon
//                       size={28}
//                       strokeWidth={1.5}
//                       className={`transition-transform duration-500 ${item.iconMotion}`}
//                     />
//                   </div>

//                   {/* Text */}
//                   <h3 className="relative mt-9 font-serif text-3xl text-[#171d36] transition-colors duration-500 group-hover:text-white">
//                     {item.title}
//                   </h3>

//                   <p className="relative mt-4 text-[15px] leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
//                     {item.text}
//                   </p>

//                   {/* Pillar label (pushed to the bottom) */}
//                   <div className="relative mt-auto flex items-center gap-3 pt-10 text-[11px] font-bold uppercase tracking-widest text-[#7a5c46] transition-colors duration-500 group-hover:text-[#f3dcc0]">
//                     Pillar {number}
//                     <span className="h-px w-5 bg-current transition-all duration-500 group-hover:w-14"></span>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Pillars

import { Wallet, ShieldPlus, ShieldCheck, TrendingUp } from 'lucide-react'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'
import {  Award, Lightbulb, HeartHandshake } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    iconMotion: 'group-hover:scale-125',
    title: 'Integrity',
    text: 'We operate with absolute transparency and honesty in every transaction.',
  },
  {
    icon: Award,
    iconMotion: 'group-hover:-translate-y-1 group-hover:rotate-12',
    title: 'Excellence',
    text: 'We are committed to delivering the highest quality of service across all our divisions.',
  },
  {
    icon: Lightbulb,
    iconMotion: 'group-hover:-translate-y-1 group-hover:scale-125',
    title: 'Innovation',
    text: 'We provide modern solutions for property management, design, and investment.',
  },
  {
    icon: HeartHandshake,
    iconMotion: 'group-hover:scale-125',
    title: 'Client-Centricity',
    text: 'Your goals, financial security, and peace of mind are at the heart of everything we do.',
  },
]

function Pillars() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="overflow-hidden bg-white pt-8 pb-12 sm:pb-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading + side paragraph */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal className="min-w-0">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] sm:tracking-[0.3em]">
              The Four Pillars
            </p>
            <h2 className="mt-4 break-words font-serif text-3xl leading-tight text-[#171d36] sm:mt-5 sm:text-4xl md:text-6xl">
              Principles That Guide Every Mandate
            </h2>
          </Reveal>

          {/* <Reveal delay={200}>
            <p className="text-[16px] leading-8 text-slate-600">
              Built on trust, guided by integrity, and driven by excellence, we deliver
  exceptional property management and lasting value for every client.
            </p>
          </Reveal> */}
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {pillars.map((item, index) => {
            const Icon = item.icon
            const number = String(index + 1).padStart(2, '0')

            return (
              /* OUTER box: the scroll entrance */
              <div
                key={item.title}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`h-full min-w-0 transition-all duration-1000 ease-out ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                {/* INNER box: the hover effects */}
                <div className="group relative flex h-full min-h-[320px] cursor-default flex-col overflow-hidden rounded-2xl bg-[#f6f2ec] p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/25 sm:min-h-[380px] sm:p-8">

                  {/* Navy colour that fills the card from the bottom */}
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#171d36] transition-transform duration-700 ease-out group-hover:scale-y-100"></span>

                  {/* Big faded number */}
                  <span className="pointer-events-none absolute right-5 top-4 font-serif text-7xl leading-none text-[#171d36]/5 transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-white/10 sm:right-6 sm:text-8xl">
                    {number}
                  </span>

                  {/* Icon box */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-[#7a5c46] shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#f3dcc0] group-hover:text-[#171d36] sm:h-16 sm:w-16">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className={`transition-transform duration-500 ${item.iconMotion}`}
                    />
                  </div>

                  {/* Text */}
                  <h3 className="relative mt-7 font-serif text-2xl text-[#171d36] transition-colors duration-500 group-hover:text-white sm:mt-9 sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 text-[15px] leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                    {item.text}
                  </p>

                  {/* Pillar label (pushed to the bottom) */}
                  <div className="relative mt-auto flex items-center gap-3 pt-8 text-[11px] font-bold uppercase tracking-widest text-[#7a5c46] transition-colors duration-500 group-hover:text-[#f3dcc0] sm:pt-10">
                    Pillar {number}
                    <span className="h-px w-5 shrink-0 bg-current transition-all duration-500 group-hover:w-14"></span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Pillars