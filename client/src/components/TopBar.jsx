// import { Phone, Mail } from 'lucide-react'

// function TopBar() {
//   return (
//     <div className="bg-[#171d36] text-[11px] font-medium uppercase tracking-widest">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

//         {/* Left side: contact info */}
//         <div className="flex items-center gap-6 text-slate-400">
//           <a
//             href="tel:+910000000000"
//             className="flex items-center gap-2 transition-colors hover:text-white"
//           >
//             <Phone size={14} />
//             <span>[Phone Number]</span>
//           </a>

//           <a
//             href="mailto:info@example.com"
//             className="flex items-center gap-2 transition-colors hover:text-white"
//           >
//             <Mail size={14} />
//             <span>[Email Address]</span>
//           </a>
//         </div>

//         {/* Right side: tagline and portal link */}
//         <div className="hidden items-center gap-4 md:flex">
//           <span className="text-[#e0b98a]">Architectural Asset Management</span>
//           <span className="h-1 w-1 rounded-full bg-white"></span>
//           <a href="#" className="text-slate-400 transition-colors hover:text-white">
//             Client Portal
//           </a>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default TopBar

import { Phone, Mail } from 'lucide-react'

function TopBar() {
  return (
    <div className="bg-[#171d36] text-[11px] font-medium uppercase tracking-wider sm:tracking-widest">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 md:justify-between">

        {/* Left side: contact info */}
        <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-slate-400 sm:gap-x-6">
          <a
            href="tel:+910000000000"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone size={14} className="shrink-0" />
            <span>[Phone Number]</span>
          </a>

          <a
            href="mailto:info@example.com"
            className="flex min-w-0 items-center gap-2 transition-colors hover:text-white"
          >
            <Mail size={14} className="shrink-0" />
            <span className="break-all">[Email Address]</span>
          </a>
        </div>

        {/* Right side: tagline and portal link */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="text-[#e0b98a]">Architectural Asset Management</span>
          <span className="h-1 w-1 rounded-full bg-white"></span>
          <a href="#" className="text-slate-400 transition-colors hover:text-white">
            Client Portal
          </a>
        </div>

      </div>
    </div>
  )
}

export default TopBar