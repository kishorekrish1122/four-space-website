// import { Link } from 'react-router-dom'
// import { Eye, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react'
// import Reveal from './Reveal'
// import about1 from '../assets/images/about1.png'
// import about2 from '../assets/images/about2.png'

// const values = [
//   {
//     icon: Eye,
//     title: 'Transparency',
//     text: 'Real-time ledger access, transparent bidding, and crystalline accounting.',
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Care',
//     text: 'Preventive engineering and 24/7 dedicated tenant concierge.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Results',
//     text: 'Optimized rental premiums with steady capital value growth.',
//   },
// ]

// function About() {
//   return (
//     <section className="overflow-hidden bg-white py-20 lg:py-28">
//       <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

//         {/* LEFT: images */}
//         <Reveal direction="left">
//           <div className="relative h-[480px] md:h-[620px]">

//             {/* Main image */}
//             <div className="group absolute left-0 top-0 h-[85%] w-[75%] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(23,29,54,0.45)]">
//               <img
//                 src={about1}
//                 alt="Courtyard residence"
//                 className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-[#171d36]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
//               <p className="absolute bottom-5 left-5 translate-y-6 font-serif text-xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//                 Courtyard Residence
//               </p>
//             </div>

//             {/* Overlapping image */}
//             <div className="group absolute bottom-0 right-0 z-10 h-[55%] w-[60%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(23,29,54,0.45)]">
//               <img
//                 src={about2}
//                 alt="Interior living room"
//                 className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-[#171d36]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
//             </div>

//             {/* Est. badge */}
//             <div className="absolute left-6 top-6 z-20 flex h-20 w-20 animate-float flex-col items-center justify-center rounded-full bg-white shadow-xl">
//               <span className="text-[9px] font-bold uppercase tracking-widest text-[#7a5c46]">
//                 Est.
//               </span>
//               <span className="font-serif text-xl font-medium text-[#171d36]">2010</span>
//             </div>
//           </div>
//         </Reveal>

//         {/* RIGHT: content */}
//         <div>
//           <Reveal>
//             <div className="flex items-center gap-3">
//               <span className="h-px w-8 bg-[#7a5c46]"></span>
//               <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//                 About Four-Space
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={100}>
//             <h2 className="mt-6 font-serif text-4xl leading-tight text-[#171d36] md:text-5xl">
//               Crafting Enduring Value in Every Square Foot
//             </h2>
//           </Reveal>

//           <Reveal delay={200}>
//             <p className="mt-6 text-lg leading-8 text-slate-600">
//               At Four-Space, real estate transcends pure square footage. We treat
//               architectural assets as living organisms that demand rigorous
//               financial oversight, uncompromising stewardship, and discreet
//               executive execution.
//             </p>
//             <p className="mt-4 text-[15px] leading-7 text-slate-700">
//               From single prime homes in Coimbatore's finest neighbourhoods to
//               multi-family portfolios across the city, our integrated operational
//               model safeguards asset dignity while unlocking hidden yields.
//             </p>
//           </Reveal>

//           {/* Value cards */}
//           <div className="mt-10 grid gap-4 sm:grid-cols-3">
//             {values.map((item, index) => (
//               <Reveal key={item.title} delay={300 + index * 150}>
//                 <div className="group h-full rounded-xl bg-[#f6f2ec] p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#7a5c46] transition-colors duration-500 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
//                     <item.icon size={20} />
//                   </div>
//                   <h3 className="mt-5 font-serif text-2xl text-[#171d36]">
//                     {item.title}
//                   </h3>
//                   <p className="mt-2 text-[13px] leading-6 text-slate-600">
//                     {item.text}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//           <Reveal delay={750}>
//             <Link
//               to="/about"
//               className="group mt-10 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-[#171d36]"
//             >
//               <span className="border-b-2 border-[#7a5c46] pb-1 transition-colors group-hover:border-[#171d36]">
//                 Read our philosophy
//               </span>
//               <ArrowRight
//                 size={16}
//                 className="transition-transform duration-300 group-hover:translate-x-2"
//               />
//             </Link>
//           </Reveal>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default About


import { Link } from 'react-router-dom'
import { Eye, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    text: 'Real-time ledger access, transparent bidding, and crystalline accounting.',
  },
  {
    icon: ShieldCheck,
    title: 'Care',
    text: 'Preventive engineering and 24/7 dedicated tenant concierge.',
  },
  {
    icon: TrendingUp,
    title: 'Results',
    text: 'Optimized rental premiums with steady capital value growth.',
  },
]

function About() {
  return (
    <section className="overflow-hidden bg-white py-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT: images */}
        <Reveal direction="left">
          {/* The shape is set by a ratio, so it scales on every screen */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg lg:aspect-[5/6] lg:max-w-none">

            {/* Main image */}
            <div className="group absolute left-0 top-0 h-[85%] w-[75%] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(23,29,54,0.45)]">
              <img
                src={about1}
                alt="Courtyard residence"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#171d36]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <p className="absolute bottom-5 left-5 translate-y-6 font-serif text-xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Courtyard Residence
              </p>
            </div>

            {/* Overlapping image */}
            <div className="group absolute bottom-0 right-0 z-10 h-[55%] w-[60%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(23,29,54,0.45)]">
              <img
                src={about2}
                alt="Interior living room"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#171d36]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>

            {/* Est. badge */}
            <div className="absolute left-3 top-3 z-20 flex h-16 w-16 animate-float flex-col items-center justify-center rounded-full bg-white shadow-xl sm:left-6 sm:top-6 sm:h-20 sm:w-20">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#7a5c46]">
                Est.
              </span>
              <span className="font-serif text-lg font-medium text-[#171d36] sm:text-xl">2010</span>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: content */}
        <div className="min-w-0">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#7a5c46]"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
                About Four-Space
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#171d36] sm:text-4xl xl:text-5xl">
              Crafting Enduring Value in Every Square Foot
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              At Four-Space, real estate transcends pure square footage. We treat
              architectural assets as living organisms that demand rigorous
              financial oversight, uncompromising stewardship, and discreet
              executive execution.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-slate-700">
              From single prime homes in Coimbatore's finest neighbourhoods to
              multi-family portfolios across the city, our integrated operational
              model safeguards asset dignity while unlocking hidden yields.
            </p>
          </Reveal>

          {/* Value cards:
              phone = 1 column (icon left), tablet = 3 columns,
              small laptop = 1 column (icon left), large screen = 3 columns */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={300 + index * 150} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-xl bg-[#f6f2ec] p-5 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10 active:scale-[0.98] sm:flex-col sm:gap-0 lg:flex-row lg:gap-4 xl:flex-col xl:gap-0 xl:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#7a5c46] transition-colors duration-500 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
                    <item.icon size={20} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="break-words font-serif text-xl leading-tight text-[#171d36] sm:mt-5 lg:mt-0 xl:mt-5">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-slate-600 sm:mt-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={750}>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-[#171d36]"
            >
              <span className="border-b-2 border-[#7a5c46] pb-1 transition-colors group-hover:border-[#171d36]">
                Read our philosophy
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  )
}

export default About