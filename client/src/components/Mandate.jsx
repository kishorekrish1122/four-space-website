// import { Compass, Eye } from 'lucide-react'
// import Reveal from './Reveal'
// import useInView from '../hooks/useInView'

// const cards = [
//   {
//     variant: 'dark',
//     from: 'left',
//     icon: Compass,
//     iconMotion: 'group-hover:rotate-[360deg]',
//     eyebrow: 'Primary Commitment',
//     title: 'Our Mission',
//     text: 'To provide discerning owners, families, and investors with uncompromising property stewardship that maximizes tenant retention, enhances capital yields, and secures absolute peace of mind through bespoke operational excellence.',
//     points: [
//       'Bespoke asset stewardship across generations',
//       'Transparent reporting and honest advice',
//       'Care that protects every rupee of value',
//     ],
//   },
//   {
//     variant: 'light',
//     from: 'right',
//     icon: Eye,
//     iconMotion: 'group-hover:scale-125',
//     eyebrow: 'Future Horizon',
//     title: 'Our Vision',
//     text: "To remain Coimbatore's most trusted benchmark for premium property governance, bridging classical architectural appreciation with smart efficiency, transparent compliance, and sustainable legacy preservation across the city's finest neighbourhoods.",
//     points: [
//       "Coimbatore's benchmark for discerning owners",
//       'Technology that serves, never replaces, people',
//       'Legacies preserved for the next generation',
//     ],
//   },
// ]

// /* Classes are written out in full so Tailwind can find them */
// const hidden = {
//   left: '-translate-x-12',
//   right: 'translate-x-12',
// }

// const theme = {
//   dark: {
//     card: 'bg-[#171d36] shadow-xl shadow-slate-900/20',
//     icon: 'bg-white/10 text-[#f3dcc0] group-hover:bg-[#f3dcc0] group-hover:text-[#171d36]',
//     eyebrow: 'text-[#f3dcc0]',
//     title: 'text-white',
//     underline: 'bg-[#f3dcc0]',
//     text: 'text-slate-400 group-hover:text-slate-300',
//     divider: 'border-white/10',
//     point: 'text-white',
//     dot: 'bg-[#f3dcc0]',
//     ping: 'bg-[#f3dcc0]/60',
//     spotlight: 'rgba(243, 220, 192, 0.14)',
//   },
//   light: {
//     card: 'bg-white shadow-lg shadow-slate-900/5',
//     icon: 'bg-[#f6f2ec] text-[#7a5c46] group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]',
//     eyebrow: 'text-[#7a5c46]',
//     title: 'text-[#171d36]',
//     underline: 'bg-[#7a5c46]',
//     text: 'text-slate-600 group-hover:text-[#171d36]',
//     divider: 'border-slate-200',
//     point: 'text-[#171d36]',
//     dot: 'bg-[#7a5c46]',
//     ping: 'bg-[#7a5c46]/50',
//     spotlight: 'rgba(122, 92, 70, 0.10)',
//   },
// }

// function MandateCard({ card, index }) {
//   const [ref, inView] = useInView(0.2)
//   const t = theme[card.variant]
//   const isDark = card.variant === 'dark'
//   const Icon = card.icon

//   // Saves the mouse position so the spotlight can follow it
//   const handleMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
//     e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
//   }

//   return (
//     /* OUTER box: the scroll entrance */
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${index * 250}ms` }}
//       className={`h-full transition-all duration-1000 ease-out ${
//         inView ? 'translate-x-0 opacity-100' : `${hidden[card.from]} opacity-0`
//       }`}
//     >
//       {/* INNER box: the hover effects */}
//       <div
//         onMouseMove={handleMove}
//         className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-8 ${t.card}`}
//       >
//         {/* Mouse-following spotlight */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//           style={{
//             background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${t.spotlight}, transparent 65%)`,
//           }}
//         ></div>

//         {/* Top line */}
//         {isDark ? (
//           <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#f3dcc0] transition-all duration-700 group-hover:w-full"></span>
//         ) : (
//           <span
//             style={{ transitionDelay: '500ms' }}
//             className={`absolute left-0 top-0 h-1.5 w-full origin-left bg-[#7a5c46] transition-transform duration-[1400ms] ease-out ${
//               inView ? 'scale-x-100' : 'scale-x-0'
//             }`}
//           ></span>
//         )}

//         {/* Building shapes in the corner (dark card only) */}
//         {isDark && (
//           <svg
//             viewBox="0 0 240 240"
//             fill="currentColor"
//             className="pointer-events-none absolute -bottom-6 -right-6 h-56 w-56 text-white/5 transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-110 group-hover:text-white/10"
//           >
//             <rect x="70" y="50" width="90" height="190" />
//             <rect x="160" y="110" width="80" height="130" />
//             <rect x="20" y="150" width="50" height="90" />
//             <rect x="90" y="75" width="18" height="18" fill="#171d36" />
//             <rect x="120" y="75" width="18" height="18" fill="#171d36" />
//             <rect x="90" y="115" width="18" height="18" fill="#171d36" />
//             <rect x="120" y="115" width="18" height="18" fill="#171d36" />
//           </svg>
//         )}

//         {/* Icon box */}
//         <div
//           className={`relative flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${t.icon}`}
//         >
//           <Icon
//             size={28}
//             strokeWidth={1.5}
//             className={`transition-transform duration-1000 ease-out ${card.iconMotion}`}
//           />
//         </div>

//         {/* Text */}
//         <p
//           className={`relative mt-10 text-[12px] font-bold uppercase tracking-[0.3em] ${t.eyebrow}`}
//         >
//           {card.eyebrow}
//         </p>

//         <h3 className={`relative mt-4 font-serif text-4xl ${t.title}`}>
//           {card.title}
//         </h3>
//         <span
//           className={`mt-4 block h-0.5 w-0 transition-all duration-500 group-hover:w-16 ${t.underline}`}
//         ></span>

//         <p
//           className={`relative mt-6 text-[17px] leading-8 transition-colors duration-500 md:text-lg md:leading-9 ${t.text}`}
//         >
//           {card.text}
//         </p>

//         {/* Bullet points (pushed to the bottom) */}
//         <div className="relative mt-auto pt-8">
//           <ul className={`space-y-3 border-t pt-4 ${t.divider}`}>
//             {card.points.map((point, i) => (
//               <li
//                 key={point}
//                 style={{ transitionDelay: `${700 + i * 180}ms` }}
//                 className={`transition-all duration-700 ease-out ${
//                   inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//                 }`}
//               >
//                 <div
//                   className={`flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest transition-transform duration-300 hover:translate-x-2 ${t.point}`}
//                 >
//                   <span className="relative flex h-2 w-2 shrink-0">
//                     <span
//                       className={`absolute inset-0 animate-ping rounded-full ${t.ping}`}
//                     ></span>
//                     <span className={`relative h-2 w-2 rounded-full ${t.dot}`}></span>
//                   </span>
//                   {point}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Mandate() {
//   return (
//     <section className="overflow-hidden bg-[#f6f2ec] pt-8 pb-20 lg:pt-12 lg:pb-24">
//       <div className="mx-auto max-w-7xl px-6">

//         <Reveal>
//           <div className="text-center">
//             <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#7a5c46]">
//               Core Mandate
//             </p>
//             <h2 className="mt-5 font-serif text-4xl leading-tight text-[#171d36] md:text-6xl">
//               Purpose-Driven Architecture of Wealth
//             </h2>
//           </div>
//         </Reveal>

//         <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
//           {cards.map((card, index) => (
//             <MandateCard key={card.title} card={card} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Mandate


import { Compass, Eye } from 'lucide-react'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'

const cards = [
  {
    variant: 'dark',
    from: 'left',
    icon: Compass,
    iconMotion: 'group-hover:rotate-[360deg]',
    eyebrow: 'Primary Commitment',
    title: 'Our Mission',
    text: 'To deliver seamless, end-to-end real estate solutions encompassing property transactions, management, interiors, insurance, and financial advisory through unmatched professionalism, transparency, and tailored expertise that exceeds our clients’ expectations.',
    points: [
      'Property transactions, management, and interiors',
      'Insurance and financial advisory',
      'Professionalism, transparency, and tailored expertise',
    ],
  },
  {
    variant: 'light',
    from: 'right',
    icon: Eye,
    iconMotion: 'group-hover:scale-125',
    eyebrow: 'Future Horizon',
    title: 'Our Vision',
    text: 'To be the most trusted and innovative real estate partner, transforming spaces into thriving environments and investments into lasting generational wealth.',
    points: [
      'The most trusted and innovative real estate partner',
      'Spaces transformed into thriving environments',
      'Investments built into lasting generational wealth',
    ],
  },
]

/* Classes are written out in full so Tailwind can find them */
const hidden = {
  left: '-translate-x-12',
  right: 'translate-x-12',
}

const theme = {
  dark: {
    card: 'bg-[#171d36] shadow-xl shadow-slate-900/20',
    icon: 'bg-white/10 text-[#f3dcc0] group-hover:bg-[#f3dcc0] group-hover:text-[#171d36]',
    eyebrow: 'text-[#f3dcc0]',
    title: 'text-white',
    underline: 'bg-[#f3dcc0]',
    text: 'text-slate-400 group-hover:text-slate-300',
    divider: 'border-white/10',
    point: 'text-white',
    dot: 'bg-[#f3dcc0]',
    ping: 'bg-[#f3dcc0]/60',
    spotlight: 'rgba(243, 220, 192, 0.14)',
  },
  light: {
    card: 'bg-white shadow-lg shadow-slate-900/5',
    icon: 'bg-[#f6f2ec] text-[#7a5c46] group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]',
    eyebrow: 'text-[#7a5c46]',
    title: 'text-[#171d36]',
    underline: 'bg-[#7a5c46]',
    text: 'text-slate-600 group-hover:text-[#171d36]',
    divider: 'border-slate-200',
    point: 'text-[#171d36]',
    dot: 'bg-[#7a5c46]',
    ping: 'bg-[#7a5c46]/50',
    spotlight: 'rgba(122, 92, 70, 0.10)',
  },
}

function MandateCard({ card, index }) {
  const [ref, inView] = useInView(0.2)
  const t = theme[card.variant]
  const isDark = card.variant === 'dark'
  const Icon = card.icon

  // Saves the mouse position so the spotlight can follow it
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    /* OUTER box: the scroll entrance */
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 250}ms` }}
      className={`h-full min-w-0 transition-all duration-1000 ease-out ${
        inView ? 'translate-x-0 opacity-100' : `${hidden[card.from]} opacity-0`
      }`}
    >
      {/* INNER box: the hover effects */}
      <div
        onMouseMove={handleMove}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-6 md:p-8 ${t.card}`}
      >
        {/* Mouse-following spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${t.spotlight}, transparent 65%)`,
          }}
        ></div>

        {/* Top line */}
        {isDark ? (
          <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#f3dcc0] transition-all duration-700 group-hover:w-full"></span>
        ) : (
          <span
            style={{ transitionDelay: '500ms' }}
            className={`absolute left-0 top-0 h-1.5 w-full origin-left bg-[#7a5c46] transition-transform duration-[1400ms] ease-out ${
              inView ? 'scale-x-100' : 'scale-x-0'
            }`}
          ></span>
        )}

        {/* Building shapes in the corner (dark card only) */}
        {isDark && (
          <svg
            viewBox="0 0 240 240"
            fill="currentColor"
            className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-white/5 transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-110 group-hover:text-white/10 sm:h-56 sm:w-56"
          >
            <rect x="70" y="50" width="90" height="190" />
            <rect x="160" y="110" width="80" height="130" />
            <rect x="20" y="150" width="50" height="90" />
            <rect x="90" y="75" width="18" height="18" fill="#171d36" />
            <rect x="120" y="75" width="18" height="18" fill="#171d36" />
            <rect x="90" y="115" width="18" height="18" fill="#171d36" />
            <rect x="120" y="115" width="18" height="18" fill="#171d36" />
          </svg>
        )}

        {/* Icon box */}
        <div
          className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-16 sm:w-16 ${t.icon}`}
        >
          <Icon
            size={28}
            strokeWidth={1.5}
            className={`transition-transform duration-1000 ease-out ${card.iconMotion}`}
          />
        </div>

        {/* Text */}
        <p
          className={`relative mt-8 text-[12px] font-bold uppercase tracking-[0.2em] sm:mt-10 sm:tracking-[0.3em] ${t.eyebrow}`}
        >
          {card.eyebrow}
        </p>

        <h3 className={`relative mt-4 font-serif text-3xl sm:text-4xl ${t.title}`}>
          {card.title}
        </h3>
        <span
          className={`mt-4 block h-0.5 w-0 transition-all duration-500 group-hover:w-16 ${t.underline}`}
        ></span>

        <p
          className={`relative mt-6 text-[16px] leading-7 transition-colors duration-500 sm:text-[17px] sm:leading-8 md:text-lg md:leading-9 ${t.text}`}
        >
          {card.text}
        </p>

        {/* Bullet points (pushed to the bottom) */}
        <div className="relative mt-auto pt-8">
          <ul className={`space-y-3 border-t pt-4 ${t.divider}`}>
            {card.points.map((point, i) => (
              <li
                key={point}
                style={{ transitionDelay: `${700 + i * 180}ms` }}
                className={`transition-all duration-700 ease-out ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div
                  className={`flex items-start gap-3 text-[11px] font-bold uppercase leading-5 tracking-wider transition-transform duration-300 hover:translate-x-2 sm:items-center sm:gap-4 sm:tracking-widest ${t.point}`}
                >
                  <span className="relative mt-1.5 flex h-2 w-2 shrink-0 sm:mt-0">
                    <span
                      className={`absolute inset-0 animate-ping rounded-full ${t.ping}`}
                    ></span>
                    <span className={`relative h-2 w-2 rounded-full ${t.dot}`}></span>
                  </span>
                  <span className="min-w-0">{point}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Mandate() {
  return (
    <section className="overflow-hidden bg-[#f6f2ec] pt-8 pb-16 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <Reveal>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] sm:tracking-[0.3em]">
              Core Mandate
            </p>
            <h2 className="mt-4 break-words font-serif text-3xl leading-tight text-[#171d36] sm:mt-5 sm:text-4xl md:text-6xl">
              Purpose-Driven Architecture of Wealth
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {cards.map((card, index) => (
            <MandateCard key={card.title} card={card} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Mandate