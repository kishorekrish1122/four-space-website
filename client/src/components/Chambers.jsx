// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Building2, MapPin, Car, Navigation, CalendarCheck } from 'lucide-react'
// import Reveal from './Reveal'

// /* ---------- EDIT YOUR DETAILS HERE ---------- */
// const OFFICE = {
//   name: 'Coimbatore Head Office',
//   addressLine1: '[Office Address]',
//   addressLine2: 'Coimbatore, Tamil Nadu · India',
//   note: 'Free visitor parking · Meetings by prior appointment',
//   lat: 11.0168, // Coimbatore city centre (replace with the real office location)
//   lng: 76.9558,
// }

// /* Free OpenStreetMap embed (no account or key needed) */
// const SPAN_LNG = 0.04
// const SPAN_LAT = 0.024
// const bbox = [
//   OFFICE.lng - SPAN_LNG,
//   OFFICE.lat - SPAN_LAT,
//   OFFICE.lng + SPAN_LNG,
//   OFFICE.lat + SPAN_LAT,
// ]
//   .map((n) => n.toFixed(4))
//   .join(',')

// const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${OFFICE.lat},${OFFICE.lng}`
// const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE.lat},${OFFICE.lng}`

// /* ---------- THE WHITE ADDRESS CARD ---------- */
// function AddressCard() {
//   return (
//     <div className="rounded-xl bg-white p-6 text-[#171d36] shadow-2xl shadow-black/30 md:p-7">

//       <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
//         <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest">
//           <MapPin size={20} strokeWidth={1.6} className="text-[#7a5c46]" />
//           {OFFICE.name}
//         </p>
//         <span className="shrink-0 rounded bg-[#fbeedd] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#7a5c46]">
//           By appointment
//         </span>
//       </div>

//       <h3 className="mt-5 text-[19px] font-semibold">{OFFICE.addressLine1}</h3>
//       <p className="mt-1.5 text-[16px] text-slate-600">{OFFICE.addressLine2}</p>

//       <p className="mt-4 flex items-center gap-2.5 text-[13px] text-[#7a5c46]">
//         <Car size={16} className="shrink-0" />
//         {OFFICE.note}
//       </p>

//       <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
//         {/* Get directions */}
//         <a
//           href={DIRECTIONS}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#0d1124] px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/30 active:translate-y-0 active:scale-95"
//         >
//           <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//           <span className="relative">Get directions</span>
//           <Navigation
//             size={16}
//             className="relative transition-transform duration-500 group-hover/btn:rotate-45 group-hover/btn:scale-125"
//           />
//         </a>

//         {/* Schedule a visit */}
//         <Link
//           to="/contact"
//           className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#f1ede6] px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-[#171d36] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 active:translate-y-0 active:scale-95"
//         >
//           <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#f3dcc0] transition-transform duration-500 ease-out group-hover/btn:scale-y-100"></span>
//           <CalendarCheck
//             size={16}
//             className="relative transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-125"
//           />
//           <span className="relative">Schedule a visit</span>
//         </Link>
//       </div>
//     </div>
//   )
// }

// /* ---------- THE SECTION ---------- */
// function Chambers() {
//   const [open, setOpen] = useState(false)           // true while hovering or after a tap
//   const [cardHover, setCardHover] = useState(false) // true while the mouse is on the white card

//   // The card slides down out of the way while the map is open,
//   // and slides back up when you point at it
//   const docked = open && !cardHover

//   return (
//      <section className="overflow-hidden bg-[#171d36] pt-6 pb-16 text-white lg:pt-10 lg:pb-24">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading + paragraph */}
//         <div className="grid items-end gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
//           <Reveal>
//             <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#f3dcc0]">
//               Our Presence
//             </p>
//             <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
//               Chambers &amp; Representation
//             </h2>
//           </Reveal>

//           <Reveal delay={200}>
//             <p className="text-[15px] leading-7 text-slate-400">
//               Our advisory office in Coimbatore is open by appointment for
//               confidential property consultations, valuations, and
//               ownership planning.
//             </p>
//           </Reveal>
//         </div>

//         {/* Map + card */}
//         <Reveal delay={150} className="mt-12">
//           <div
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => {
//               setOpen(false)
//               setCardHover(false)
//             }}
//           >

//             {/* ===== THE MAP (always fills the whole box) ===== */}
//             <div className="relative h-[460px] overflow-hidden rounded-2xl bg-slate-800 shadow-2xl shadow-black/40 md:h-[680px]">

//               <iframe
//                 title="Four-Space office location in Coimbatore"
//                 src={MAP_SRC}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className={`absolute inset-0 h-full w-full border-0 transition-all duration-[1400ms] ease-out ${
//                   open ? 'scale-100 blur-0 grayscale-0' : 'scale-110 blur-[6px] grayscale'
//                 }`}
//               ></iframe>

//               {/* Navy tint (gone completely when open) */}
//               <div
//                 className={`pointer-events-none absolute inset-0 bg-[#171d36] transition-opacity duration-1000 ${
//                   open ? 'opacity-0' : 'opacity-70'
//                 }`}
//               ></div>

//               {/* Pin in the middle (gone when open) */}
//               <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
//                 <div
//                   className={`flex flex-col items-center transition-all duration-700 ${
//                     open ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
//                   }`}
//                 >
//                   <span className="relative flex h-16 w-16 items-center justify-center">
//                     <span className="absolute inset-0 animate-ping rounded-full bg-[#f3dcc0]/40"></span>
//                     <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#171d36] text-[#f3dcc0] shadow-xl ring-2 ring-[#f3dcc0]/60">
//                       <Building2 size={24} strokeWidth={1.6} />
//                     </span>
//                   </span>
//                   <span className="mt-3 rounded-md bg-[#0d1124] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg">
//                     Four-Space Office, Coimbatore
//                   </span>
//                 </div>
//               </div>

//               {/* Hint (gone when open) */}
//               <div
//                 className={`pointer-events-none absolute left-1/2 top-6 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#171d36] backdrop-blur transition-all duration-500 ${
//                   open ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
//                 }`}
//               >
//                 Hover or tap to reveal the map
//               </div>

//               {/* Invisible cover so a phone tap can open the map.
//                   It switches itself off once the map is open. */}
//               <div
//                 onClick={() => setOpen(true)}
//                 className={`absolute inset-0 z-20 ${
//                   open ? 'pointer-events-none' : 'cursor-pointer'
//                 }`}
//               ></div>
//             </div>

//             {/* ===== DESKTOP: card sits over the map and slides away when it opens ===== */}
//             <div className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-2xl md:block">
//               <div className="absolute bottom-8 left-8 w-[480px] max-w-[calc(100%-4rem)]">
//                 <Reveal direction="left" delay={400}>
//                   <div
//                     onMouseEnter={() => setCardHover(true)}
//                     onMouseLeave={() => setCardHover(false)}
//                     className={`pointer-events-auto transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                       docked ? 'translate-y-[calc(100%_-_52px)]' : 'translate-y-0'
//                     }`}
//                   >
//                     <AddressCard />
//                   </div>
//                 </Reveal>
//               </div>
//             </div>

//             {/* ===== PHONE: card sits under the map ===== */}
//             <div className="mt-4 md:hidden">
//               <Reveal delay={200}>
//                 <AddressCard />
//               </Reveal>
//             </div>

//           </div>
//         </Reveal>

//       </div>
//     </section>
//   )
// }

// export default Chambers

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, MapPin, Car, Navigation, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal'

/* ---------- EDIT YOUR DETAILS HERE ---------- */
const OFFICE = {
  name: 'Coimbatore Head Office',
  addressLine1: '[Office Address]',
  addressLine2: 'Coimbatore, Tamil Nadu · India',
  note: 'Free visitor parking · Meetings by prior appointment',
  lat: 11.0168, // Coimbatore city centre (replace with the real office location)
  lng: 76.9558,
}

/* Free OpenStreetMap embed (no account or key needed) */
const SPAN_LNG = 0.04
const SPAN_LAT = 0.024
const bbox = [
  OFFICE.lng - SPAN_LNG,
  OFFICE.lat - SPAN_LAT,
  OFFICE.lng + SPAN_LNG,
  OFFICE.lat + SPAN_LAT,
]
  .map((n) => n.toFixed(4))
  .join(',')

const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${OFFICE.lat},${OFFICE.lng}`
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE.lat},${OFFICE.lng}`

/* ---------- THE WHITE ADDRESS CARD ---------- */
function AddressCard() {
  return (
    <div className="w-full rounded-xl bg-white p-5 text-[#171d36] shadow-2xl shadow-black/30 sm:p-6 md:p-7">

      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 border-b border-slate-200 pb-4">
        <p className="flex min-w-0 items-center gap-3 text-[12px] font-bold uppercase tracking-widest">
          <MapPin size={20} strokeWidth={1.6} className="shrink-0 text-[#7a5c46]" />
          {OFFICE.name}
        </p>
        <span className="shrink-0 whitespace-nowrap rounded bg-[#fbeedd] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#7a5c46]">
          By appointment
        </span>
      </div>

      <h3 className="mt-5 break-words text-[19px] font-semibold">{OFFICE.addressLine1}</h3>
      <p className="mt-1.5 text-[15px] text-slate-600 sm:text-[16px]">{OFFICE.addressLine2}</p>

      <p className="mt-4 flex items-start gap-2.5 text-[13px] leading-5 text-[#7a5c46]">
        <Car size={16} className="mt-0.5 shrink-0" />
        <span>{OFFICE.note}</span>
      </p>

      <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:flex-wrap">
        {/* Get directions */}
        <a
          href={DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#0d1124] px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/30 active:translate-y-0 active:scale-95 sm:w-auto"
        >
          <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
          <span className="relative">Get directions</span>
          <Navigation
            size={16}
            className="relative transition-transform duration-500 group-hover/btn:rotate-45 group-hover/btn:scale-125"
          />
        </a>

        {/* Schedule a visit */}
        <Link
          to="/contact"
          className="group/btn relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#f1ede6] px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-[#171d36] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 active:translate-y-0 active:scale-95 sm:w-auto"
        >
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#f3dcc0] transition-transform duration-500 ease-out group-hover/btn:scale-y-100"></span>
          <CalendarCheck
            size={16}
            className="relative transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-125"
          />
          <span className="relative">Schedule a visit</span>
        </Link>
      </div>
    </div>
  )
}

/* ---------- THE SECTION ---------- */
function Chambers() {
  const [open, setOpen] = useState(false)           // true while hovering or after a tap
  const [cardHover, setCardHover] = useState(false) // true while the mouse is on the white card

  // The card slides down out of the way while the map is open,
  // and slides back up when you point at it
  const docked = open && !cardHover

  return (
    <section className="overflow-hidden bg-[#171d36] pt-6 pb-12 text-white sm:pb-16 lg:pt-10 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading + paragraph */}
        <div className="grid items-end gap-5 sm:gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#f3dcc0] sm:tracking-[0.3em]">
              Our Presence
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Chambers &amp; Representation
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[15px] leading-7 text-slate-400">
              Our advisory office in Coimbatore is open by appointment for
              confidential property consultations, valuations, and
              ownership planning.
            </p>
          </Reveal>
        </div>

        {/* Map + card */}
        <Reveal delay={150} className="mt-8 sm:mt-12">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
              setOpen(false)
              setCardHover(false)
            }}
          >

            {/* ===== THE MAP (always fills the whole box) ===== */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-slate-800 shadow-2xl shadow-black/40 sm:h-[460px] md:h-[680px]">

              <iframe
                title="Four-Space office location in Coimbatore"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`absolute inset-0 h-full w-full border-0 transition-all duration-[1400ms] ease-out ${
                  open ? 'scale-100 blur-0 grayscale-0' : 'scale-110 blur-[6px] grayscale'
                }`}
              ></iframe>

              {/* Navy tint (gone completely when open) */}
              <div
                className={`pointer-events-none absolute inset-0 bg-[#171d36] transition-opacity duration-1000 ${
                  open ? 'opacity-0' : 'opacity-70'
                }`}
              ></div>

              {/* Pin in the middle (gone when open) */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-full max-w-full -translate-x-1/2 -translate-y-1/2 px-4">
                <div
                  className={`flex flex-col items-center transition-all duration-700 ${
                    open ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
                  }`}
                >
                  <span className="relative flex h-16 w-16 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#f3dcc0]/40"></span>
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#171d36] text-[#f3dcc0] shadow-xl ring-2 ring-[#f3dcc0]/60">
                      <Building2 size={24} strokeWidth={1.6} />
                    </span>
                  </span>
                  <span className="mt-3 rounded-md bg-[#0d1124] px-3 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-white shadow-lg sm:px-4 sm:text-[11px]">
                    Four-Space Office, Coimbatore
                  </span>
                </div>
              </div>

              {/* Hint (gone when open) */}
              <div
                className={`pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#171d36] backdrop-blur transition-all duration-500 sm:top-6 sm:tracking-widest ${
                  open ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                Hover or tap to reveal the map
              </div>

              {/* Invisible cover so a phone tap can open the map.
                  It switches itself off once the map is open. */}
              <div
                onClick={() => setOpen(true)}
                className={`absolute inset-0 z-20 ${
                  open ? 'pointer-events-none' : 'cursor-pointer'
                }`}
              ></div>
            </div>

            {/* ===== DESKTOP: card sits over the map and slides away when it opens ===== */}
            <div className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-2xl md:block">
              <div className="absolute bottom-6 left-6 w-[480px] max-w-[calc(100%-3rem)] lg:bottom-8 lg:left-8 lg:max-w-[calc(100%-4rem)]">
                <Reveal direction="left" delay={400}>
                  <div
                    onMouseEnter={() => setCardHover(true)}
                    onMouseLeave={() => setCardHover(false)}
                    className={`pointer-events-auto transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      docked ? 'translate-y-[calc(100%_-_52px)]' : 'translate-y-0'
                    }`}
                  >
                    <AddressCard />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* ===== PHONE: card sits under the map ===== */}
            <div className="mt-4 md:hidden">
              <Reveal delay={200}>
                <AddressCard />
              </Reveal>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Chambers