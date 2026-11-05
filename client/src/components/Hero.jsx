// import { Link } from 'react-router-dom'
// import { ArrowRight, Building2 } from 'lucide-react'
// import hp from "../assets/images/hp.png"

// const stats = [
//   { value: '$1.8B+', label: 'Assets under mandate' },
//   { value: '99.4%', label: 'Occupancy retained' },
// ]

// function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#f6f2ec]">
//       <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-8 pb-16 lg:grid-cols-2 lg:pt-10 lg:pb-20">

//         {/* LEFT: text content */}
//         <div>
//           {/* Small label with line */}
//           <div className="flex items-center gap-3">
//             <span className="h-px w-8 bg-[#7a5c46]"></span>
//             <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//               Premium Property Management & Real Estate
//             </p>
//           </div>

//           {/* Headline */}
//           <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-[#171d36] md:text-7xl">
//             Spaces managed.
//             <span className="block italic text-[#7a5c46]">Value multiplied.</span>
//           </h1>

//           {/* Paragraph */}
//           <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
//             Bespoke asset management, institutional-grade acquisition, and
//             turnkey advisory tailored exclusively for discerning global
//             property owners, family offices, and investors.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-wrap gap-4">
//             <Link
//               to="/properties"
//               className="rounded-md bg-[#171d36] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-xl shadow-slate-900/20 transition-colors hover:bg-[#252d52]"
//             >
//               Browse Properties
//             </Link>
//             <Link
//               to="/contact"
//               className="flex items-center gap-2 rounded-md bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-[#171d36] transition-colors hover:bg-slate-100"
//             >
//               Talk to us <ArrowRight size={16} />
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="mt-16 flex items-center gap-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={stat.label}
//                 className={index > 0 ? 'border-l border-slate-300 pl-8' : ''}
//               >
//                 <p className="font-serif text-2xl text-[#171d36]">{stat.value}</p>
//                 <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: image card */}
//         <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

//           {/* Main image */}
//           <div className="h-[420px] overflow-hidden rounded-2xl shadow-2xl md:h-[560px]">
//             <img
//               src={hp}
//               alt="Lumina Tower terrace"
//               className="h-full w-full object-cover transition duration-300 hover:blur-sm"
//             />
//           </div>

//           {/* Decorative squares */}
//           <div className="absolute -right-3 -top-6 h-36 w-32 rounded-xl bg-slate-500/30"></div>
//           <div className="absolute -bottom-6 -left-4 h-48 w-44 rounded-xl bg-[#f3dcc0]/60"></div>

//           {/* Floating info card */}
//           <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur">
//             <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-600 text-[#f3dcc0]">
//               <Building2 size={22} />
//             </div>
//             <div className="flex-1">
//               <p className="text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
//                 Flagship Residence
//               </p>
//               <p className="font-serif text-xl text-[#171d36]">The Lumina Tower</p>
//             </div>
//             <span className="rounded-md bg-[#f9e3c8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
//               Curated
//             </span>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


import { Link } from 'react-router-dom'
import { ArrowRight, Building2 } from 'lucide-react'
import hp from '../assets/images/hp.png'

/* These two numbers are from the original design, not from the client.
   Replace them with the real figures, or delete the stats block below. */
const stats = [
  { value: '$1.8B+', label: 'Assets under mandate' },
  { value: '99.4%', label: 'Occupancy retained' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f2ec]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:pb-20 lg:pt-10">

        {/* LEFT: text content */}
        <div className="min-w-0">

          {/* Small label with line */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#7a5c46]"></span>
            <p className="text-[11px] font-bold uppercase leading-5 tracking-[0.12em] text-[#7a5c46] sm:tracking-[0.15em]">
              Premium Property Management &amp; Real Estate
            </p>
          </div>

          {/* Headline */}
          <h1 className="mt-6 break-words font-serif text-4xl leading-[1.05] text-[#171d36] sm:mt-8 sm:text-5xl md:text-7xl">
            Welcome to
            <span className="block italic text-[#7a5c46]">Four Space</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 max-w-xl text-lg font-medium leading-7 text-[#171d36] sm:mt-6 sm:text-xl sm:leading-8 md:text-2xl md:leading-9">
            Your 360-Degree Real Estate &amp; Property Management
          </p>

          {/* Introduction */}
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-[17px]">
            At Four Space, we believe that real estate is more than just
            transactions. It’s about building futures, securing investments,
            and creating spaces where people and businesses thrive. As a
            premier property management and real estate firm, we offer a
            complete suite of services under one roof. Whether you are buying
            your dream home, managing a commercial portfolio, designing an
            inspiring interior, or seeking expert financial advisory, Four
            Space is your trusted partner every step of the way.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to="/properties"
              className="flex items-center justify-center rounded-md bg-[#171d36] px-8 py-4 text-center text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-xl shadow-slate-900/20 transition-colors hover:bg-[#252d52]"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-center text-[12px] font-bold uppercase tracking-[0.15em] text-[#171d36] transition-colors hover:bg-slate-100"
            >
              Talk to us <ArrowRight size={16} className="shrink-0" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex items-start gap-6 sm:mt-14 sm:items-center sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={index > 0 ? 'border-l border-slate-300 pl-6 sm:pl-8' : ''}
              >
                <p className="font-serif text-2xl text-[#171d36]">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase leading-4 tracking-widest text-[#7a5c46]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: image card */}
        <div className="relative mx-auto w-full min-w-0 max-w-lg lg:max-w-none">

          {/* Main image */}
          <div className="h-[320px] overflow-hidden rounded-2xl shadow-2xl sm:h-[420px] md:h-[520px] lg:h-[620px]">
            <img
              src={hp}
              alt="Premium residence managed by Four Space"
              className="h-full w-full object-cover transition duration-300 hover:blur-sm"
            />
          </div>

          {/* Decorative squares */}
          <div className="absolute -right-1 -top-4 h-28 w-24 rounded-xl bg-slate-500/30 sm:-right-3 sm:-top-6 sm:h-36 sm:w-32"></div>
          <div className="absolute -bottom-4 -left-1 h-36 w-32 rounded-xl bg-[#f3dcc0]/60 sm:-bottom-6 sm:-left-4 sm:h-48 sm:w-44"></div>

          {/* Floating info card */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:gap-4 sm:p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-600 text-[#f3dcc0] sm:h-11 sm:w-11">
              <Building2 size={22} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
                Flagship Residence
              </p>
              <p className="truncate font-serif text-lg text-[#171d36] sm:text-xl">
                The Lumina Tower
              </p>
            </div>
            <span className="shrink-0 whitespace-nowrap rounded-md bg-[#f9e3c8] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#7a5c46] sm:px-3">
              Curated
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero