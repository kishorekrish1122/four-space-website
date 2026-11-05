// import { Link } from 'react-router-dom'
// import {
//   Building2,
//   Handshake,
//   TrendingUp,
//   Armchair,
//   CreditCard,
//   ShieldCheck,
//   ArrowRight,
// } from 'lucide-react'
// import Reveal from './Reveal'

// const services = [
//   {
//     icon: Building2,
//     title: 'Property Management',
//     text: 'Complete operational management encompassing preventive maintenance, staff oversight, and 24/7 technical surveillance.',
//   },
//   {
//     icon: Handshake,
//     title: 'Buy / Sell / Rent',
//     text: 'Confidential, off-market transaction brokerage for premium residential estates and prime mixed-use urban properties.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Real Estate Consultancy',
//     text: 'Strategic yield modeling, asset valuation, repositioning strategies, and generational inheritance advisory.',
//   },
//   {
//     icon: Armchair,
//     title: 'Interiors & Turnkey',
//     text: 'Curated architectural transformations, bespoke furniture provisioning, and turnkey staging engineered to elevate net asset yield.',
//   },
//   {
//     icon: CreditCard,
//     title: 'Bank Loans & Financing',
//     text: 'Home loan assistance, mortgage arrangement, and debt refinancing through leading banks and financial institutions.',
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Property Insurance',
//     text: 'High-value asset indemnification, hazard coverage, and tailored landlord liability protection.',
//   },
// ]

// function Services() {
//   return (
//     <section className="bg-[#f6f2ec] py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Section heading */}
//         <Reveal>
//           <div className="mx-auto max-w-2xl text-center">
//             <div className="flex items-center justify-center gap-3">
//               <span className="h-px w-10 bg-[#7a5c46]"></span>
//               <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//                 Our Services
//               </p>
//               <span className="h-px w-10 bg-[#7a5c46]"></span>
//             </div>

//             <h2 className="mt-6 font-serif text-4xl leading-tight text-[#171d36] md:text-5xl">
//               Comprehensive Real Estate &amp; Asset Solutions
//             </h2>

//             <p className="mt-6 text-[15px] leading-7 text-slate-600">
//               Complete lifecycle coverage for premium property holdings,
//               tailored to institutional standards.
//             </p>
//           </div>
//         </Reveal>

//         {/* Cards */}
//         <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((item, index) => (
//             <Reveal
//               key={item.title}
//               delay={(index % 3) * 150}
//               className="h-full"
//             >
//               <Link
//                 to="/services"
//                 className="group relative block h-full overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10"
//               >
//                 {/* Brown line that grows on hover */}
//                 <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-full"></span>

//                 {/* Icon */}
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eeebe4] text-[#7a5c46] transition-colors duration-300 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
//                   <item.icon size={22} />
//                 </div>

//                 <h3 className="mt-8 font-serif text-2xl text-[#171d36]">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-[15px] leading-7 text-slate-600">
//                   {item.text}
//                 </p>

//                 {/* Read more */}
//                 <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#7a5c46]">
//                   Read more
//                   <ArrowRight
//                     size={14}
//                     className="transition-transform duration-300 group-hover:translate-x-1.5"
//                   />
//                 </span>
//               </Link>
//             </Reveal>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Services



import { Link } from 'react-router-dom'
import {
  Building2,
  Handshake,
  TrendingUp,
  Armchair,
  CreditCard,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Building2,
    title: 'Property Management',
    text: 'Complete operational management encompassing preventive maintenance, staff oversight, and 24/7 technical surveillance.',
  },
  {
    icon: Handshake,
    title: 'Buy / Sell / Rent',
    text: 'Confidential, off-market transaction brokerage for premium residential estates and prime mixed-use urban properties.',
  },
  {
    icon: TrendingUp,
    title: 'Real Estate Consultancy',
    text: 'Strategic yield modeling, asset valuation, repositioning strategies, and generational inheritance advisory.',
  },
  {
    icon: Armchair,
    title: 'Interiors & Turnkey',
    text: 'Curated architectural transformations, bespoke furniture provisioning, and turnkey staging engineered to elevate net asset yield.',
  },
  {
    icon: CreditCard,
    title: 'Bank Loans & Financing',
    text: 'Home loan assistance, mortgage arrangement, and debt refinancing through leading banks and financial institutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Property Insurance',
    text: 'High-value asset indemnification, hazard coverage, and tailored landlord liability protection.',
  },
]

function Services() {
  return (
    <section className="overflow-hidden bg-[#f6f2ec] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-6 shrink-0 bg-[#7a5c46] sm:w-10"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
                Our Services
              </p>
              <span className="h-px w-6 shrink-0 bg-[#7a5c46] sm:w-10"></span>
            </div>

            <h2 className="mt-5 break-words font-serif text-3xl leading-tight text-[#171d36] sm:mt-6 sm:text-4xl md:text-5xl">
              Comprehensive Real Estate &amp; Asset Solutions
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600 sm:mt-6">
              Complete lifecycle coverage for premium property holdings,
              tailored to institutional standards.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 3) * 150}
              className="h-full min-w-0"
            >
              <Link
                to="/services"
                className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 sm:p-8"
              >
                {/* Brown line that grows on hover */}
                <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#7a5c46] transition-all duration-500 group-hover:w-full"></span>

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eeebe4] text-[#7a5c46] transition-colors duration-300 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
                  <item.icon size={22} />
                </div>

                <h3 className="mt-6 break-words font-serif text-2xl text-[#171d36] sm:mt-8">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {item.text}
                </p>

                {/* Read more (pinned to the bottom so every card lines up) */}
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-widest text-[#7a5c46] sm:pt-8">
                  Read more
                  <ArrowRight
                    size={14}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services