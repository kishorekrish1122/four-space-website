// import { useState } from 'react'
// import { Search, BadgeCheck } from 'lucide-react'

// /* ---------- YOUR LOGO: change this path to your own logo file ---------- */
// import logo from '../assets/images/logo.png'

// function FaqHero({ onSearch }) {
//   const [query, setQuery] = useState('')

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     if (onSearch) onSearch(query.trim())
//   }

//   return (
//     <section className="w-full bg-[#f4f1ec] px-6 pt-6 pb-16 lg:px-12 lg:pt-10 lg:pb-24">
//       <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-20">

//         {/* ===== LEFT ===== */}
//         <div className="max-w-2xl">
//           {/* Pill */}
//           <span className="inline-flex items-center gap-2.5 rounded-full border border-[#e1dacf] bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5c46]">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#9b8268]"></span>
//             Curated Dossier · FAQ
//           </span>

//           <h1 className="mt-8 font-serif text-5xl font-semibold leading-[1.05] text-[#171d36] md:text-6xl lg:text-7xl">
//             Questions, answered.
//           </h1>

//           <p className="mt-6 max-w-xl text-[18px] leading-8 text-slate-500">
//             Everything you need to know about our fiduciary property stewardship,
//             asset protection, and bespoke advisory.
//           </p>

//           {/* Search bar */}
//           <form
//             onSubmit={handleSubmit}
//             role="search"
//             className="mt-10 flex items-center gap-3 rounded-2xl bg-white p-2.5 pl-5 shadow-xl shadow-slate-900/5"
//           >
//             <Search size={20} strokeWidth={1.8} className="shrink-0 text-[#9b8268]" />

//             <input
//               type="text"
//               value={query}
//               onChange={(event) => setQuery(event.target.value)}
//               placeholder="Search your question..."
//               aria-label="Search your question"
//               className="h-12 min-w-0 flex-1 rounded-md border border-slate-400/70 bg-white px-4 text-[16px] text-[#171d36] placeholder:text-slate-400 focus-visible:border-[#171d36] focus-visible:outline-none"
//             />

//             {/* Button: the only hover effect on this section */}
//             <button
//               type="submit"
//               className="group/btn relative h-12 shrink-0 overflow-hidden rounded-lg bg-[#171d36] px-7 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-md shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/30 active:translate-y-0 active:scale-95"
//             >
//               <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//               <span className="relative">Search</span>
//             </button>
//           </form>

//           {/* Note */}
//           <p className="mt-5 flex items-center gap-2.5 text-[13px] text-[#7a5c46]">
//             <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b8268]"></span>
//             Updated quarterly by the Four-Space Legal &amp; Estate Board
//           </p>
//         </div>

//         {/* ===== RIGHT: logo card ===== */}
//         <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:justify-self-end">
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

// export default FaqHero

import { useState } from 'react'
import { Search, BadgeCheck } from 'lucide-react'

/* ---------- YOUR LOGO: change this path to your own logo file ---------- */
import logo from '../assets/images/logo.png'

function FaqHero({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSearch) onSearch(query.trim())
  }

  return (
    <section className="w-full bg-[#f4f1ec] px-6 pt-6 pb-16 lg:px-12 lg:pt-10 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-20">

        {/* ===== LEFT ===== */}
        <div className="min-w-0 max-w-2xl">
          {/* Pill */}
          <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#e1dacf] bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a5c46] sm:tracking-[0.2em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b8268]"></span>
            Curated Dossier · FAQ
          </span>

          <h1 className="mt-8 break-words font-serif text-4xl font-semibold leading-[1.05] text-[#171d36] sm:text-5xl md:text-6xl lg:text-7xl">
            Questions, answered.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-[18px] sm:leading-8">
            Everything you need to know about our fiduciary property stewardship,
            asset protection, and bespoke advisory.
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSubmit}
            role="search"
            className="mt-10 flex items-center gap-2 rounded-2xl bg-white p-2 pl-4 shadow-xl shadow-slate-900/5 sm:gap-3 sm:p-2.5 sm:pl-5"
          >
            <Search size={20} strokeWidth={1.8} className="shrink-0 text-[#9b8268]" />

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search your question..."
              aria-label="Search your question"
              className="h-12 min-w-0 flex-1 rounded-md border border-slate-400/70 bg-white px-3 text-[16px] text-[#171d36] placeholder:text-slate-400 focus-visible:border-[#171d36] focus-visible:outline-none sm:px-4"
            />

            {/* Button: the only hover effect on this section */}
            <button
              type="submit"
              className="group/btn relative h-12 shrink-0 overflow-hidden rounded-lg bg-[#171d36] px-5 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/30 active:translate-y-0 active:scale-95 sm:px-7 sm:tracking-[0.18em]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
              <span className="relative">Search</span>
            </button>
          </form>

          {/* Note */}
          <p className="mt-5 flex items-start gap-2.5 text-[13px] text-[#7a5c46] sm:items-center">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b8268] sm:mt-0"></span>
            Updated quarterly by the Four-Space Legal &amp; Estate Board
          </p>
        </div>

        {/* ===== RIGHT: logo card ===== */}
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
    </section>
  )
}

export default FaqHero