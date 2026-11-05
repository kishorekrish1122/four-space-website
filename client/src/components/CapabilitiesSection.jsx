// import { useState } from 'react'
// import { ArrowRight, Armchair, TrendingUp, Landmark, PaintRoller, Handshake } from 'lucide-react'
// import box1 from '../assets/images/box1.png'
// import box2 from '../assets/images/box2.png'
// import box3 from '../assets/images/box3.png'
// import box4 from '../assets/images/box4.png'
// import box5 from '../assets/images/box5.png'
// import box6 from '../assets/images/box6.png'
// /* ---------- THE SIX CARDS (edit the text and images here) ----------
//    First three are always visible.
//    The last three appear when "Explore all 6 practices" is clicked.
//    "more" is the extra 2 lines that open when "Read more" is clicked. */
// const capabilities = [
//   {
//     tag: 'Refurbishment',
//     title: 'Interiors & Turnkey Refurbishment',
//     text: 'Transformative interior architectural curation, historic preservation, and furnishing services managed under single-point accountability.',
//     more: 'One design team handles planning, sourcing, and site work, and hands over a finished, move-in ready property.',
//     image: box1,
//     icon: Armchair,
//     tone: 'bg-linear-to-br from-[#5e4535] via-[#2a3156] to-[#171d36]',
//   },
//   {
//     tag: 'Advisory',
//     title: 'Real Estate Consultancy',
//     text: 'Valuation underwriting, planning permission negotiation, and development strategy for high-value landed portfolios and historic assets.',
//     more: 'Every recommendation comes with local market data, clear numbers, and a plan for when to hold or sell.',
//     image: box2,
//     icon: TrendingUp,
//     tone: 'bg-linear-to-br from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
//   },
//   {
//     tag: 'Fiduciary',
//     title: 'Financial Assistance & Debt Structuring',
//     text: 'Discreet liquidity facilities, bridge financing, and bespoke institutional debt architecture arranged through international tier-1 private desks.',
//     more: 'We compare lenders, prepare your documents, and negotiate terms on your behalf from start to sanction.',
//     image: box3,
//     icon: Landmark,
//     tone: 'bg-linear-to-br from-[#2a3156] via-[#171d36] to-[#5e4535]',
//   },
//   {
//   tag: 'Tenancy',
//   title: 'Tenancy Concierge',
//   text: 'We find, screen, and welcome the right tenants, then look after them throughout the lease so you earn steady rent without the daily phone calls.',
//   more: 'Agreements, deposits, rent collection, and move-in and move-out inspections are all handled for you.',
//   image: box4,
//   tone: 'bg-linear-to-br from-[#33385a] via-[#171d36] to-[#7a5c46]',
// },
//   {
//     tag: 'Finishing',
//     title: 'Painting',
//     text: 'Interior and exterior painting, texture finishes, and waterproofing carried out by trained crews with tidy, on-time delivery.',
//     more: 'We prepare every surface, use quality paints, and finish with a final walk-through before handover.',
//     image: box5,
//     icon: PaintRoller,
//     tone: 'bg-linear-to-br from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
//   },
//   {
//     tag: 'Advisory',
//     title: 'Buy / Sell Advisory',
//     text: 'Confidential buying and selling support with verified titles, off-market access, and firm negotiation through to registration.',
//     more: 'We check DTCP approvals, patta, and EC, then price your deal using real local market data.',
//     image: box6,
//     icon: Handshake,
//     tone: 'bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46]',
//   },
// ]

// /* Card photo, or a coloured placeholder if the file is missing */
// function CardImage({ item }) {
//   const [failed, setFailed] = useState(false)
//   const Icon = item.icon

//   return (
//     <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
//       {!failed ? (
//         <img
//           src={item.image}
//           alt={item.title}
//           onError={() => setFailed(true)}
//           className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
//         />
//       ) : (
//         <div className={`flex h-full w-full items-center justify-center ${item.tone}`}>
//           <Icon size={90} strokeWidth={0.8} className="text-white/20" />
//         </div>
//       )}

//       {/* Tag chip */}
//       <span className="absolute left-5 top-5 rounded-md bg-[#f6f2ec]/95 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#7a5c46] shadow-sm backdrop-blur">
//         {item.tag}
//       </span>
//     </div>
//   )
// }

// /* One card. "Read more" opens 2 extra lines inside the card. */
// function CapabilityCard({ item }) {
//   const [open, setOpen] = useState(false)

//   return (
//     <div
//       className={`group flex flex-col overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-all duration-500 [-webkit-tap-highlight-color:transparent] hover:-translate-y-2 hover:border-[#7a5c46] hover:shadow-2xl hover:shadow-slate-900/10 focus-within:border-[#7a5c46] active:border-[#7a5c46] ${
//         open ? 'border-[#7a5c46]' : 'border-transparent'
//       }`}
//     >
//       <CardImage item={item} />

//       <div className="flex flex-1 flex-col p-8">
//         <h3 className="font-serif text-3xl leading-snug text-[#171d36]">{item.title}</h3>
//         <p className="mt-4 text-[16px] leading-8 text-slate-600">{item.text}</p>

//         {/* The extra 2 lines (smoothly open / close) */}
//         <div
//           className={`grid transition-all duration-500 ease-out ${
//             open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
//           }`}
//         >
//           <div className="overflow-hidden">
//             <p className="mt-3 border-l-2 border-[#7a5c46] pl-4 text-[16px] leading-8 text-[#171d36]">
//               {item.more}
//             </p>
//           </div>
//         </div>

//         {/* READ MORE / READ LESS */}
//         <button
//           type="button"
//           onClick={() => setOpen((value) => !value)}
//           aria-expanded={open}
//           className="group/more mt-8 inline-flex cursor-pointer items-center gap-2 self-start text-[13px] font-bold uppercase tracking-[0.12em] text-[#7a5c46] outline-none focus-visible:underline"
//         >
//           {open ? 'Read less' : 'Read more'}
//           <ArrowRight
//             size={18}
//             strokeWidth={2.2}
//             className={`transition-transform duration-300 group-hover/more:translate-x-2 ${
//               open ? '-rotate-90' : ''
//             }`}
//           />
//         </button>
//       </div>
//     </div>
//   )
// }

// function CapabilitiesSection() {
//   const [showAll, setShowAll] = useState(false)

//   const firstThree = capabilities.slice(0, 3)
//   const nextThree = capabilities.slice(3)

//   return (
//     <section className="w-full bg-[#faf8f4] px-6 py-16 lg:px-12 lg:py-24">
//       <div className="mx-auto max-w-7xl">

//         {/* ===== Heading row ===== */}
//         <div className="flex flex-wrap items-end justify-between gap-6">
//           <div>
//             <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#7a5c46]">
//               Synergistic Disciplines
//             </p>
//             <h2 className="mt-4 font-serif text-5xl text-[#171d36] md:text-6xl">
//               Complementary Capabilities
//             </h2>
//           </div>

//           {/* EXPLORE ALL 6 PRACTICES: shows / hides the next three cards */}
//           <button
//             type="button"
//             onClick={() => setShowAll((value) => !value)}
//             aria-expanded={showAll}
//             className="group/explore inline-flex cursor-pointer items-center gap-2 border-b-2 border-transparent pb-1 text-[13px] font-bold uppercase tracking-[0.12em] text-[#7a5c46] transition-all duration-300 hover:border-[#7a5c46] active:border-[#7a5c46] focus-visible:border-[#7a5c46] focus-visible:outline-none"
//           >
//             {showAll ? 'Show fewer practices' : 'Explore all 6 practices'}
//             <ArrowRight
//               size={18}
//               strokeWidth={2.2}
//               className={`transition-transform duration-300 group-hover/explore:translate-x-1.5 ${
//                 showAll ? '-rotate-90' : ''
//               }`}
//             />
//           </button>
//         </div>

//         {/* ===== First three cards ===== */}
//         <div className="mt-12 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {firstThree.map((item) => (
//             <CapabilityCard key={item.title} item={item} />
//           ))}
//         </div>

//         {/* ===== Next three cards (open when Explore is clicked) ===== */}
//         <div
//           className={`grid transition-all duration-700 ease-out ${
//             showAll ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
//           }`}
//         >
//           <div className="-mx-3 overflow-hidden px-3 pb-6 pt-3">
//             <div className="mt-5 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {nextThree.map((item) => (
//                 <CapabilityCard key={item.title} item={item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CapabilitiesSection



import { useState } from 'react'
import { ArrowRight, Armchair, TrendingUp, Landmark, PaintRoller, Handshake, KeyRound } from 'lucide-react'
import box1 from '../assets/images/box1.png'
import box2 from '../assets/images/box2.png'
import box3 from '../assets/images/box3.png'
import box4 from '../assets/images/box4.png'
import box5 from '../assets/images/box5.png'
import box6 from '../assets/images/box6.png'
/* ---------- THE SIX CARDS (edit the text and images here) ----------
   First three are always visible.
   The last three appear when "Explore all 6 practices" is clicked.
   "more" is the extra 2 lines that open when "Read more" is clicked. */
const capabilities = [
  {
    tag: 'Refurbishment',
    title: 'Interiors & Turnkey Refurbishment',
    text: 'Transformative interior architectural curation, historic preservation, and furnishing services managed under single-point accountability.',
    more: 'One design team handles planning, sourcing, and site work, and hands over a finished, move-in ready property.',
    image: box1,
    icon: Armchair,
    tone: 'bg-linear-to-br from-[#5e4535] via-[#2a3156] to-[#171d36]',
  },
  {
    tag: 'Advisory',
    title: 'Real Estate Consultancy',
    text: 'Valuation underwriting, planning permission negotiation, and development strategy for high-value landed portfolios and historic assets.',
    more: 'Every recommendation comes with local market data, clear numbers, and a plan for when to hold or sell.',
    image: box2,
    icon: TrendingUp,
    tone: 'bg-linear-to-br from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
  },
  {
    tag: 'Fiduciary',
    title: 'Financial Assistance & Debt Structuring',
    text: 'Discreet liquidity facilities, bridge financing, and bespoke institutional debt architecture arranged through international tier-1 private desks.',
    more: 'We compare lenders, prepare your documents, and negotiate terms on your behalf from start to sanction.',
    image: box3,
    icon: Landmark,
    tone: 'bg-linear-to-br from-[#2a3156] via-[#171d36] to-[#5e4535]',
  },
  {
    tag: 'Tenancy',
    title: 'Tenancy Concierge',
    text: 'We find, screen, and welcome the right tenants, then look after them throughout the lease so you earn steady rent without the daily phone calls.',
    more: 'Agreements, deposits, rent collection, and move-in and move-out inspections are all handled for you.',
    image: box4,
    icon: KeyRound,
    tone: 'bg-linear-to-br from-[#33385a] via-[#171d36] to-[#7a5c46]',
  },
  {
    tag: 'Finishing',
    title: 'Painting',
    text: 'Interior and exterior painting, texture finishes, and waterproofing carried out by trained crews with tidy, on-time delivery.',
    more: 'We prepare every surface, use quality paints, and finish with a final walk-through before handover.',
    image: box5,
    icon: PaintRoller,
    tone: 'bg-linear-to-br from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
  },
  {
    tag: 'Advisory',
    title: 'Buy / Sell Advisory',
    text: 'Confidential buying and selling support with verified titles, off-market access, and firm negotiation through to registration.',
    more: 'We check DTCP approvals, patta, and EC, then price your deal using real local market data.',
    image: box6,
    icon: Handshake,
    tone: 'bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46]',
  },
]

/* Card photo, or a coloured placeholder if the file is missing */
function CardImage({ item }) {
  const [failed, setFailed] = useState(false)
  const Icon = item.icon

  return (
    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-200">
      {!failed ? (
        <img
          src={item.image}
          alt={item.title}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center ${item.tone}`}>
          {Icon && <Icon size={90} strokeWidth={0.8} className="text-white/20" />}
        </div>
      )}

      {/* Tag chip */}
      <span className="absolute left-4 top-4 rounded-md bg-[#f6f2ec]/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46] shadow-sm backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[12px]">
        {item.tag}
      </span>
    </div>
  )
}

/* One card. "Read more" opens 2 extra lines inside the card. */
function CapabilityCard({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-all duration-500 [-webkit-tap-highlight-color:transparent] hover:-translate-y-2 hover:border-[#7a5c46] hover:shadow-2xl hover:shadow-slate-900/10 focus-within:border-[#7a5c46] active:border-[#7a5c46] ${
        open ? 'border-[#7a5c46]' : 'border-transparent'
      }`}
    >
      <CardImage item={item} />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="font-serif text-2xl leading-snug text-[#171d36] sm:text-3xl">{item.title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-[16px] sm:leading-8">{item.text}</p>

        {/* The extra 2 lines (smoothly open / close) */}
        <div
          className={`grid transition-all duration-500 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="mt-3 border-l-2 border-[#7a5c46] pl-4 text-[15px] leading-7 text-[#171d36] sm:text-[16px] sm:leading-8">
              {item.more}
            </p>
          </div>
        </div>

        {/* READ MORE / READ LESS (pinned to the bottom so all cards line up) */}
        <div className="mt-auto pt-6 sm:pt-8">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="group/more inline-flex cursor-pointer items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#7a5c46] outline-none focus-visible:underline"
          >
            {open ? 'Read less' : 'Read more'}
            <ArrowRight
              size={18}
              strokeWidth={2.2}
              className={`transition-transform duration-300 group-hover/more:translate-x-2 ${
                open ? '-rotate-90' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

function CapabilitiesSection() {
  const [showAll, setShowAll] = useState(false)

  const firstThree = capabilities.slice(0, 3)
  const nextThree = capabilities.slice(3)

  return (
    <section className="w-full overflow-x-hidden bg-[#faf8f4] px-5 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* ===== Heading row ===== */}
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] sm:text-[13px] sm:tracking-[0.3em]">
              Synergistic Disciplines
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#171d36] sm:mt-4 sm:text-5xl md:text-6xl">
              Complementary Capabilities
            </h2>
          </div>

          {/* EXPLORE ALL 6 PRACTICES: shows / hides the next three cards */}
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            aria-expanded={showAll}
            className="group/explore inline-flex cursor-pointer items-center gap-2 border-b-2 border-transparent pb-1 text-[13px] font-bold uppercase tracking-[0.12em] text-[#7a5c46] transition-all duration-300 hover:border-[#7a5c46] active:border-[#7a5c46] focus-visible:border-[#7a5c46] focus-visible:outline-none"
          >
            {showAll ? 'Show fewer practices' : 'Explore all 6 practices'}
            <ArrowRight
              size={18}
              strokeWidth={2.2}
              className={`transition-transform duration-300 group-hover/explore:translate-x-1.5 ${
                showAll ? '-rotate-90' : ''
              }`}
            />
          </button>
        </div>

        {/* ===== First three cards ===== */}
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {firstThree.map((item) => (
            <CapabilityCard key={item.title} item={item} />
          ))}
        </div>

        {/* ===== Next three cards (open when Explore is clicked) ===== */}
        <div
          className={`grid transition-all duration-700 ease-out ${
            showAll ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="-mx-3 overflow-hidden px-3">
            <div className="pb-6 pt-3">
              <div className="mt-3 grid gap-6 sm:mt-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {nextThree.map((item) => (
                  <CapabilityCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection