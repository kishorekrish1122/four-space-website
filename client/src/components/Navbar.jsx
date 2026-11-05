// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'
// import logo from "../assets/images/logo.png";

// const links = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Services', path: '/services' },
//   { name: 'Properties', path: '/properties' },
//   { name: 'FAQ', path: '/faq' },
//   { name: 'Contact', path: '/contact' },
// ]

// function Navbar() {
//   const [open, setOpen] = useState(false)

//   const linkClass = ({ isActive }) =>
//     `border-b-2 pb-1 text-[13px] font-bold uppercase tracking-wider transition-colors ${
//       isActive
//         ? 'border-[#7a5c46] text-[#171d36]'
//         : 'border-transparent text-slate-600 hover:text-[#171d36]'
//     }`

//   return (
//     <header className="border-b border-slate-200 bg-white">
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-2 py-1">

//         {/* Logo */}
//         <NavLink to="/">
//           <img src={logo} alt="Company logo" className="h-24 w-auto" />
//         </NavLink>

//         {/* Desktop links */}
//         <ul className="hidden items-center gap-10 md:flex">
//           {links.map((link) => (
//             <li key={link.name}>
//               <NavLink to={link.path} end={link.path === '/'} className={linkClass}>
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop button */}
//         <NavLink
//           to="/contact"
//           className="hidden rounded-md bg-[#171d36] px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#252d52] md:block"
//         >
//           Book a Consultation
//         </NavLink>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="text-[#171d36] md:hidden"
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile dropdown */}
//       {open && (
//         <div className="border-t border-slate-200 px-6 pb-6 md:hidden">
//           <ul className="flex flex-col gap-5 pt-5">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <NavLink
//                   to={link.path}
//                   end={link.path === '/'}
//                   onClick={() => setOpen(false)}
//                   className={linkClass}
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//           <NavLink
//             to="/contact"
//             onClick={() => setOpen(false)}
//             className="mt-6 block rounded-md bg-[#171d36] px-6 py-3 text-center text-[12px] font-bold uppercase tracking-wider text-white"
//           >
//             Book a Consultation
//           </NavLink>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar


import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from "../assets/images/logo.png";

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Properties', path: '/properties' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `border-b-2 pb-1 text-[13px] font-bold uppercase tracking-wider transition-colors ${
      isActive
        ? 'border-[#7a5c46] text-[#171d36]'
        : 'border-transparent text-slate-600 hover:text-[#171d36]'
    }`

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1 sm:px-6 md:px-2">

        {/* Logo */}
        <NavLink to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Company logo" className="h-16 w-auto sm:h-20 md:h-24" />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} end={link.path === '/'} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop button */}
        <NavLink
          to="/contact"
          className="hidden shrink-0 whitespace-nowrap rounded-md bg-[#171d36] px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#252d52] md:block lg:px-6"
        >
          Book a Consultation
        </NavLink>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[#171d36] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-200 px-5 pb-6 sm:px-6 md:hidden">
          <ul className="flex flex-col gap-2 pt-3">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setOpen(false)}
                  className={(state) =>
                    `block py-2 ${linkClass(state)}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-md bg-[#171d36] px-6 py-3.5 text-center text-[12px] font-bold uppercase tracking-wider text-white"
          >
            Book a Consultation
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Navbar