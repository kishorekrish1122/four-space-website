// import { useEffect, useState } from 'react'
// import { Building2, Building, Briefcase, Palette, Cpu } from 'lucide-react'
// import Reveal from './Reveal'
// import useInView from '../hooks/useInView'

// const milestones = [
//   {
//     year: 2010,
//     icon: Building2,
//     iconMotion: 'group-hover:rotate-[360deg]',
//     title: 'Inception in Coimbatore',
//     text: 'Founded a boutique advisory for private villas and heritage homes in the city’s finest neighbourhoods.',
//     place: 'Race Course Desk',
//   },
//   {
//     year: 2014,
//     icon: Building,
//     iconMotion: 'group-hover:-translate-y-1 group-hover:scale-125',
//     title: 'Asset Expansion',
//     text: 'Added facility engineering and extended our mandates to commercial offices and boutique headquarters.',
//     place: 'Engineering Division',
//   },
//   {
//     year: 2018,
//     icon: Briefcase,
//     iconMotion: 'group-hover:-rotate-12 group-hover:scale-125',
//     title: 'Investor Desk',
//     text: 'Opened a dedicated desk for family businesses and NRI investors with high-value property holdings.',
//     place: 'Investor Advisory',
//   },
//   {
//     year: 2021,
//     icon: Palette,
//     iconMotion: 'group-hover:rotate-[20deg] group-hover:scale-125',
//     title: 'Turnkey Architecture',
//     text: 'Launched in-house interior repositioning, bespoke renovations, and municipal permit liaising.',
//     place: 'Design Studio',
//   },
//   {
//     year: 2026,
//     icon: Cpu,
//     iconMotion: 'group-hover:animate-pulse group-hover:scale-125',
//     title: 'Smart Infrastructure',
//     text: 'Deployed smart monitoring, compliance sensors, and automated rent reporting across our portfolio.',
//     place: 'Next-Gen Telemetry',
//   },
// ]

// /* Year that counts up when the card appears */
// function CountUp({ to, active, delay = 0 }) {
//   const [value, setValue] = useState(to - 15)

//   useEffect(() => {
//     if (!active) return

//     let frame
//     const start = performance.now() + delay
//     const duration = 1400

//     const tick = (now) => {
//       const progress = Math.min(Math.max((now - start) / duration, 0), 1)
//       const eased = 1 - Math.pow(1 - progress, 3)
//       setValue(Math.round(to - 15 + 15 * eased))
//       if (progress < 1) frame = requestAnimationFrame(tick)
//     }

//     frame = requestAnimationFrame(tick)
//     return () => cancelAnimationFrame(frame)
//   }, [active, to, delay])

//   return <>{value}</>
// }

// /* One square card */
// function MilestoneCard({ item, index }) {
//   const [ref, inView] = useInView(0.25)
//   const Icon = item.icon
//   const number = String(index + 1).padStart(2, '0')
//   const delay = (index % 3) * 200

//   return (
//     /* OUTER box: square shape + scroll entrance */
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`aspect-square w-full max-w-[360px] transition-all duration-1000 ease-out ${
//         inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
//       }`}
//     >
//       {/* INNER box: hover effects */}
//       <div className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/15">

//         {/* Brown line drawing across the top */}
//         <span className="absolute left-0 top-0 h-1 w-0 bg-[#7a5c46] transition-all duration-700 group-hover:w-full"></span>

//         {/* Warm glow in the corner */}
//         <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f3dcc0]/0 blur-2xl transition-all duration-700 group-hover:bg-[#f3dcc0]/60"></span>

//         {/* Year circle */}
//         <div className="relative h-14 w-14 shrink-0">
//           <span className="absolute inset-0 rounded-full bg-[#7a5c46]/40 opacity-0 group-hover:animate-ping group-hover:opacity-100"></span>
//           <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#171d36] text-[11px] font-bold tracking-[0.12em] text-[#f3dcc0] shadow-lg shadow-slate-900/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#7a5c46] group-hover:text-white">
//             <CountUp to={item.year} active={inView} delay={delay} />
//           </div>
//         </div>

//         {/* Label */}
//         <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] transition-transform duration-500 group-hover:translate-x-1">
//           Milestone {number}
//         </p>

//         {/* Title (one line, so every paragraph starts at the same height) */}
//         <h3 className="relative mt-2 font-serif text-2xl leading-tight text-[#171d36]">
//           {item.title}
//         </h3>
//         <span className="mt-3 block h-0.5 w-0 shrink-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-14"></span>

//         {/* Paragraph */}
//         <p className="relative mt-3 text-[14px] leading-6 text-slate-600 transition-colors duration-500 group-hover:text-[#171d36]">
//           {item.text}
//         </p>

//         {/* Footer (pushed to the bottom of the square) */}
//         <div className="relative mt-auto flex items-center gap-3 pt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7a5c46]">
//           <Icon
//             size={18}
//             strokeWidth={1.6}
//             className={`shrink-0 transition-transform duration-700 ease-out ${item.iconMotion}`}
//           />
//           <span className="transition-transform duration-500 group-hover:translate-x-1.5">
//             {item.place}
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Milestones() {
//   return (
//     <section className="overflow-hidden bg-[#f6f2ec] pt-8 pb-16 lg:pt-12 lg:pb-20">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading */}
//         <Reveal>
//           <div className="text-center">
//             <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#7a5c46]">
//               Our Milestones
//             </p>
//             <h2 className="mt-5 font-serif text-4xl leading-tight text-[#171d36] md:text-6xl">
//               The Four-Space Trajectory
//             </h2>
//           </div>
//         </Reveal>

//         {/* Square cards: 3 on the first row, 2 centred on the second */}
//         <div className="mt-10 flex flex-wrap items-start justify-center gap-6">
//           {milestones.map((item, index) => (
//             <MilestoneCard key={item.year} item={item} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Milestones


import { useEffect, useState } from 'react'
import { Building2, Building, Briefcase, Palette, Cpu } from 'lucide-react'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'

const milestones = [
  {
    year: 2010,
    icon: Building2,
    iconMotion: 'group-hover:rotate-[360deg]',
    title: 'Inception in Coimbatore',
    text: 'Founded a boutique advisory for private villas and heritage homes in the city’s finest neighbourhoods.',
    place: 'Race Course Desk',
  },
  {
    year: 2014,
    icon: Building,
    iconMotion: 'group-hover:-translate-y-1 group-hover:scale-125',
    title: 'Asset Expansion',
    text: 'Added facility engineering and extended our mandates to commercial offices and boutique headquarters.',
    place: 'Engineering Division',
  },
  {
    year: 2018,
    icon: Briefcase,
    iconMotion: 'group-hover:-rotate-12 group-hover:scale-125',
    title: 'Investor Desk',
    text: 'Opened a dedicated desk for family businesses and NRI investors with high-value property holdings.',
    place: 'Investor Advisory',
  },
  {
    year: 2021,
    icon: Palette,
    iconMotion: 'group-hover:rotate-[20deg] group-hover:scale-125',
    title: 'Turnkey Architecture',
    text: 'Launched in-house interior repositioning, bespoke renovations, and municipal permit liaising.',
    place: 'Design Studio',
  },
  {
    year: 2026,
    icon: Cpu,
    iconMotion: 'group-hover:animate-pulse group-hover:scale-125',
    title: 'Smart Infrastructure',
    text: 'Deployed smart monitoring, compliance sensors, and automated rent reporting across our portfolio.',
    place: 'Next-Gen Telemetry',
  },
]

/* Year that counts up when the card appears */
function CountUp({ to, active, delay = 0 }) {
  const [value, setValue] = useState(to - 15)

  useEffect(() => {
    if (!active) return

    let frame
    const start = performance.now() + delay
    const duration = 1400

    const tick = (now) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(to - 15 + 15 * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, to, delay])

  return <>{value}</>
}

/* One square card (square from sm up; on phones it grows to fit its text) */
function MilestoneCard({ item, index }) {
  const [ref, inView] = useInView(0.25)
  const Icon = item.icon
  const number = String(index + 1).padStart(2, '0')
  const delay = (index % 3) * 200

  return (
    /* OUTER box: square shape + scroll entrance */
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full min-w-0 max-w-[360px] transition-all duration-1000 ease-out sm:aspect-square ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* INNER box: hover effects */}
      <div className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/15 sm:p-7">

        {/* Brown line drawing across the top */}
        <span className="absolute left-0 top-0 h-1 w-0 bg-[#7a5c46] transition-all duration-700 group-hover:w-full"></span>

        {/* Warm glow in the corner */}
        <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f3dcc0]/0 blur-2xl transition-all duration-700 group-hover:bg-[#f3dcc0]/60"></span>

        {/* Year circle */}
        <div className="relative h-14 w-14 shrink-0">
          <span className="absolute inset-0 rounded-full bg-[#7a5c46]/40 opacity-0 group-hover:animate-ping group-hover:opacity-100"></span>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#171d36] text-[11px] font-bold tracking-[0.12em] text-[#f3dcc0] shadow-lg shadow-slate-900/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#7a5c46] group-hover:text-white">
            <CountUp to={item.year} active={inView} delay={delay} />
          </div>
        </div>

        {/* Label */}
        <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] transition-transform duration-500 group-hover:translate-x-1">
          Milestone {number}
        </p>

        {/* Title (one line, so every paragraph starts at the same height) */}
        <h3 className="relative mt-2 font-serif text-2xl leading-tight text-[#171d36]">
          {item.title}
        </h3>
        <span className="mt-3 block h-0.5 w-0 shrink-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-14"></span>

        {/* Paragraph */}
        <p className="relative mt-3 text-[14px] leading-6 text-slate-600 transition-colors duration-500 group-hover:text-[#171d36]">
          {item.text}
        </p>

        {/* Footer (pushed to the bottom of the square) */}
        <div className="relative mt-auto flex items-center gap-3 pt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.18em] text-[#7a5c46]">
          <Icon
            size={18}
            strokeWidth={1.6}
            className={`shrink-0 transition-transform duration-700 ease-out ${item.iconMotion}`}
          />
          <span className="min-w-0 transition-transform duration-500 group-hover:translate-x-1.5">
            {item.place}
          </span>
        </div>
      </div>
    </div>
  )
}

function Milestones() {
  return (
    <section className="overflow-hidden bg-[#f6f2ec] pt-8 pb-12 sm:pb-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] sm:tracking-[0.3em]">
              Our Milestones
            </p>
            <h2 className="mt-4 break-words font-serif text-3xl leading-tight text-[#171d36] sm:mt-5 sm:text-4xl md:text-6xl">
              The Four-Space Trajectory
            </h2>
          </div>
        </Reveal>

        {/* Square cards: 3 on the first row, 2 centred on the second */}
        <div className="mt-8 flex flex-wrap items-start justify-center gap-5 sm:mt-10 sm:gap-6">
          {milestones.map((item, index) => (
            <MilestoneCard key={item.year} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Milestones