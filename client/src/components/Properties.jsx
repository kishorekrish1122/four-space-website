// // import { useState } from 'react'
// // import { Link } from 'react-router-dom'
// // import {
// //   ArrowRight,
// //   BedDouble,
// //   Bath,
// //   Car,
// //   Waves,
// //   Compass,
// //   FileCheck,
// //   Ruler,
// //   Building,
// //   Users,
// //   KeyRound,
// //   Eye,
// // } from 'lucide-react'
// // import Reveal from './Reveal'
// // import villa from '../assets/images/villa.png'
// // import re from '../assets/images/re.png'

// // /* ---------- DATA (the admin/backend will replace this later) ---------- */
// // const listings = [
// //   {
// //     id: 1,
// //     title: 'The Race Course Heritage Villa',
// //     category: 'residential',
// //     status: 'sale',
// //     price: 38500000,
// //     location: 'Race Course',
// //     areaSqft: 4200,
// //     description:
// //       'Private landscaped courtyard, double-height living hall, modular Italian kitchen, and a dedicated home theatre.',
// //     image: villa,
// //     features: [
// //       { icon: 'bed', label: '4 Beds' },
// //       { icon: 'bath', label: '5 Baths' },
// //       { icon: 'car', label: '2 Parking' },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     title: 'Saravanampatti Skyline Residence',
// //     category: 'residential',
// //     status: 'rent',
// //     price: 145000,
// //     location: 'Saravanampatti',
// //     areaSqft: 3100,
// //     description:
// //       'Fully furnished high-rise residence with panoramic city views, smart security, and a private clubhouse and pool.',
// //     image: re,
// //     features: [
// //       { icon: 'bed', label: '3 Beds' },
// //       { icon: 'bath', label: '4 Baths' },
// //       { icon: 'pool', label: 'Pool' },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     title: 'Avinashi Road Executive Office Floor',
// //     category: 'commercial',
// //     status: 'managed',
// //     price: 82000000,
// //     location: 'Avinashi Road',
// //     areaSqft: 9800,
// //     description:
// //       'Whole-floor commercial asset with bespoke boardroom finishes, private reception, and high-efficiency HVAC.',
// //     image: '/properties/property-3.jpg',
// //     features: [
// //       { icon: 'building', label: 'Grade-A' },
// //       { icon: 'users', label: '60+ Desks' },
// //       { icon: 'key', label: 'Leased' },
// //     ],
// //   },
// //   {
// //     id: 4,
// //     title: 'Vadavalli Hillside Estate Plot',
// //     category: 'plots',
// //     status: 'sale',
// //     price: 21000000,
// //     location: 'Vadavalli',
// //     areaSqft: 9600,
// //     description:
// //       'Premium gated-layout plot near the Western Ghats foothills, with wide approach roads and all utilities ready.',
// //     image: '/properties/property-4.jpg',
// //     features: [
// //       { icon: 'compass', label: 'East Facing' },
// //       { icon: 'check', label: 'DTCP Approved' },
// //       { icon: 'ruler', label: '9,600 sq.ft' },
// //     ],
// //   },
// //   {
// //     id: 5,
// //     title: 'Peelamedu Garden Villa',
// //     category: 'residential',
// //     status: 'sale',
// //     price: 24500000,
// //     location: 'Peelamedu',
// //     areaSqft: 3400,
// //     description:
// //       'Contemporary villa with a private garden, covered parking, solar power, and a rooftop entertainment deck.',
// //     image: '/properties/property-5.jpg',
// //     features: [
// //       { icon: 'bed', label: '4 Beds' },
// //       { icon: 'bath', label: '4 Baths' },
// //       { icon: 'car', label: '3 Parking' },
// //     ],
// //   },
// //   {
// //     id: 6,
// //     title: 'Singanallur Corner Estate Plot',
// //     category: 'plots',
// //     status: 'sale',
// //     price: 15500000,
// //     location: 'Singanallur',
// //     areaSqft: 6000,
// //     description:
// //       'Corner plot in an approved layout with tar roads, underground drainage, and strong appreciation potential.',
// //     image: '/properties/property-6.jpg',
// //     features: [
// //       { icon: 'compass', label: 'North Facing' },
// //       { icon: 'check', label: 'Clear Title' },
// //       { icon: 'ruler', label: '6,000 sq.ft' },
// //     ],
// //   },
// // ]

// // const filters = [
// //   { id: 'all', label: 'All' },
// //   { id: 'residential', label: 'Residential' },
// //   { id: 'plots', label: 'Plots & Estates' },
// //   { id: 'commercial', label: 'Commercial' },
// // ]

// // const iconMap = {
// //   bed: BedDouble,
// //   bath: Bath,
// //   car: Car,
// //   pool: Waves,
// //   compass: Compass,
// //   check: FileCheck,
// //   ruler: Ruler,
// //   building: Building,
// //   users: Users,
// //   key: KeyRound,
// // }

// // const statusStyles = {
// //   sale: { label: 'For Sale', className: 'bg-[#7a5c46] text-white' },
// //   rent: { label: 'For Rent', className: 'bg-[#171d36] text-white' },
// //   managed: { label: 'Sold / Managed', className: 'bg-[#f9e3c8] text-[#7a5c46]' },
// // }

// // /* ---------- PRICE FORMAT: 38500000 -> ₹3.85 Cr ---------- */
// // function formatPrice(price, isRent) {
// //   if (isRent) return `₹${price.toLocaleString('en-IN')}`
// //   const trim = (n) => n.toFixed(2).replace(/\.?0+$/, '')
// //   if (price >= 10000000) return `₹${trim(price / 10000000)} Cr`
// //   if (price >= 100000) return `₹${trim(price / 100000)} Lakh`
// //   return `₹${price.toLocaleString('en-IN')}`
// // }

// // /* ---------- ONE CARD ---------- */
// // function PropertyCard({ property }) {
// //   const [imageFailed, setImageFailed] = useState(false)
// //   const status = statusStyles[property.status]
// //   const isRent = property.status === 'rent'

// //   return (
// //     <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-slate-900/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/20">

// //       {/* Image area */}
// //       <div className="relative h-56 overflow-hidden bg-slate-200">
// //         {!imageFailed ? (
// //           <img
// //             src={property.image}
// //             alt={property.title}
// //             onError={() => setImageFailed(true)}
// //             className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
// //           />
// //         ) : (
// //           <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46] transition-transform duration-[1500ms] ease-out group-hover:scale-110">
// //             <Building size={56} className="text-white/30" strokeWidth={1.2} />
// //           </div>
// //         )}

// //         {/* Dark tint + "View details" pill on hover */}
// //         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#171d36]/0 transition-colors duration-500 group-hover:bg-[#171d36]/35">
// //           <span className="flex translate-y-4 items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#171d36] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
// //             <Eye size={14} /> View details
// //           </span>
// //         </div>

// //         {/* Light shine sweeping across the image */}
// //         <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></div>

// //         {/* Status badge */}
// //         <span
// //           className={`absolute left-4 top-4 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-transform duration-500 group-hover:translate-x-1 ${status.className}`}
// //         >
// //           {status.label}
// //         </span>

// //         {/* Price tag */}
// //         <div className="absolute bottom-4 left-4 rounded-lg bg-[#171d36]/85 px-4 py-2 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
// //           <span className="font-serif text-2xl text-white">
// //             {formatPrice(property.price, isRent)}
// //           </span>
// //           {isRent && <span className="ml-1 text-xs text-slate-300">/mo</span>}
// //         </div>
// //       </div>

// //       {/* Card body */}
// //       <div className="flex flex-1 flex-col p-6">
// //         <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
// //           <span>{property.location}</span>
// //           <span>{property.areaSqft.toLocaleString('en-IN')} sq.ft</span>
// //         </div>

// //         <h3 className="mt-4 font-serif text-2xl leading-snug text-[#171d36]">
// //           {property.title}
// //         </h3>

// //         <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
// //           {property.description}
// //         </p>

// //         {/* Features */}
// //         <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-200 pt-5">
// //           {property.features.map((feature) => {
// //             const Icon = iconMap[feature.icon]
// //             return (
// //               <div
// //                 key={feature.label}
// //                 className="flex items-center gap-2 text-[13px] text-slate-600"
// //               >
// //                 {Icon && (
// //                   <Icon
// //                     size={16}
// //                     className="shrink-0 text-slate-500 transition-colors duration-500 group-hover:text-[#7a5c46]"
// //                   />
// //                 )}
// //                 <span>{feature.label}</span>
// //               </div>
// //             )
// //           })}
// //         </div>

// //         {/* Button with a colour sweep on hover */}
// //         <Link
// //           to="/properties"
// //           className="group/btn relative mt-6 flex items-center justify-center overflow-hidden rounded-lg bg-[#171d36] py-3.5 text-[11px] font-bold uppercase tracking-widest text-white"
// //         >
// //           <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
// //           <span className="relative flex items-center gap-2">
// //             Explore Estate
// //             <ArrowRight
// //               size={14}
// //               className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
// //             />
// //           </span>
// //         </Link>
// //       </div>
// //     </article>
// //   )
// // }

// // /* ---------- THE WHOLE SECTION ---------- */
// // function Properties({ limit }) {
// //   const [filter, setFilter] = useState('all')

// //   const filtered =
// //     filter === 'all'
// //       ? listings
// //       : listings.filter((item) => item.category === filter)

// //   const visible = limit ? filtered.slice(0, limit) : filtered

// //   return (
// //     <section className="bg-white py-20 lg:py-28">
// //       <div className="mx-auto max-w-7xl px-6">

// //         {/* Heading + filter tabs */}
// //         <Reveal>
// //           <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
// //             <div>
// //               <div className="flex items-center gap-3">
// //                 <span className="h-px w-8 bg-[#7a5c46]"></span>
// //                 <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
// //                   Exclusive Inventory
// //                 </p>
// //               </div>
// //               <h2 className="mt-4 font-serif text-4xl leading-tight text-[#171d36] md:text-5xl">
// //                 Curated Architectural Holdings
// //               </h2>
// //             </div>

// //             <div className="flex flex-wrap gap-x-8 border-b border-slate-300">
// //               {filters.map((item) => (
// //                 <button
// //                   key={item.id}
// //                   onClick={() => setFilter(item.id)}
// //                   className={`relative pb-3 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${
// //                     filter === item.id
// //                       ? 'text-[#171d36]'
// //                       : 'text-slate-500 hover:text-[#171d36]'
// //                   }`}
// //                 >
// //                   {item.label}
// //                   <span
// //                     className={`absolute -bottom-px left-0 h-0.5 w-full origin-left bg-[#7a5c46] transition-transform duration-500 ${
// //                       filter === item.id ? 'scale-x-100' : 'scale-x-0'
// //                     }`}
// //                   ></span>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </Reveal>

// //         {/* Cards */}
// //         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// //           {visible.map((property, index) => (
// //             <Reveal
// //               key={`${filter}-${property.id}`}
// //               delay={(index % 3) * 150}
// //               className="h-full"
// //             >
// //               <PropertyCard property={property} />
// //             </Reveal>
// //           ))}
// //         </div>

// //         {/* Browse all button (Home page only) */}
// //         {limit && (
// //           <Reveal delay={200}>
// //             <div className="mt-16 text-center">
// //               <Link
// //                 to="/properties"
// //                 className="group inline-flex items-center gap-3 rounded-lg bg-[#f6f2ec] px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-[#171d36] transition-all duration-300 hover:bg-[#171d36] hover:text-white hover:shadow-xl hover:shadow-slate-900/20"
// //               >
// //                 Browse all curated properties
// //                 <ArrowRight
// //                   size={14}
// //                   className="transition-transform duration-300 group-hover:translate-x-1.5"
// //                 />
// //               </Link>
// //             </div>
// //           </Reveal>
// //         )}

// //       </div>
// //     </section>
// //   )
// // }

// // export default Properties

// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import {
//   ArrowRight,
//   BedDouble,
//   Bath,
//   Car,
//   Waves,
//   Compass,
//   FileCheck,
//   Ruler,
//   Building,
//   Users,
//   KeyRound,
//   Eye,
// } from 'lucide-react'
// import Reveal from './Reveal'
// import villa from '../assets/images/villa.png'
// import re from '../assets/images/re.png'

// /* ---------- WHERE THE PROPERTIES COME FROM ----------
//    This must be the SAME address your admin dashboard uses to LOAD its property list.
//    Example: if the admin calls  http://localhost:5000/api/properties  then leave this as it is.
//    You can also set VITE_API_URL in client/.env  (for example VITE_API_URL=http://localhost:5000) */
// const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'
// const PROPERTIES_URL = `${API_BASE}/api/properties`

// /* ---------- SAMPLE DATA (only used if the server cannot be reached) ---------- */
// const FALLBACK_LISTINGS = [
//   {
//     id: 1,
//     title: 'The Race Course Heritage Villa',
//     category: 'residential',
//     status: 'sale',
//     price: 38500000,
//     location: 'Race Course',
//     areaSqft: 4200,
//     description:
//       'Private landscaped courtyard, double-height living hall, modular Italian kitchen, and a dedicated home theatre.',
//     image: villa,
//     features: [
//       { icon: 'bed', label: '4 Beds' },
//       { icon: 'bath', label: '5 Baths' },
//       { icon: 'car', label: '2 Parking' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Saravanampatti Skyline Residence',
//     category: 'residential',
//     status: 'rent',
//     price: 145000,
//     location: 'Saravanampatti',
//     areaSqft: 3100,
//     description:
//       'Fully furnished high-rise residence with panoramic city views, smart security, and a private clubhouse and pool.',
//     image: re,
//     features: [
//       { icon: 'bed', label: '3 Beds' },
//       { icon: 'bath', label: '4 Baths' },
//       { icon: 'pool', label: 'Pool' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Avinashi Road Executive Office Floor',
//     category: 'commercial',
//     status: 'managed',
//     price: 82000000,
//     location: 'Avinashi Road',
//     areaSqft: 9800,
//     description:
//       'Whole-floor commercial asset with bespoke boardroom finishes, private reception, and high-efficiency HVAC.',
//     image: '/properties/property-3.jpg',
//     features: [
//       { icon: 'building', label: 'Grade-A' },
//       { icon: 'users', label: '60+ Desks' },
//       { icon: 'key', label: 'Leased' },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Vadavalli Hillside Estate Plot',
//     category: 'plots',
//     status: 'sale',
//     price: 21000000,
//     location: 'Vadavalli',
//     areaSqft: 9600,
//     description:
//       'Premium gated-layout plot near the Western Ghats foothills, with wide approach roads and all utilities ready.',
//     image: '/properties/property-4.jpg',
//     features: [
//       { icon: 'compass', label: 'East Facing' },
//       { icon: 'check', label: 'DTCP Approved' },
//       { icon: 'ruler', label: '9,600 sq.ft' },
//     ],
//   },
//   {
//     id: 5,
//     title: 'Peelamedu Garden Villa',
//     category: 'residential',
//     status: 'sale',
//     price: 24500000,
//     location: 'Peelamedu',
//     areaSqft: 3400,
//     description:
//       'Contemporary villa with a private garden, covered parking, solar power, and a rooftop entertainment deck.',
//     image: '/properties/property-5.jpg',
//     features: [
//       { icon: 'bed', label: '4 Beds' },
//       { icon: 'bath', label: '4 Baths' },
//       { icon: 'car', label: '3 Parking' },
//     ],
//   },
//   {
//     id: 6,
//     title: 'Singanallur Corner Estate Plot',
//     category: 'plots',
//     status: 'sale',
//     price: 15500000,
//     location: 'Singanallur',
//     areaSqft: 6000,
//     description:
//       'Corner plot in an approved layout with tar roads, underground drainage, and strong appreciation potential.',
//     image: '/properties/property-6.jpg',
//     features: [
//       { icon: 'compass', label: 'North Facing' },
//       { icon: 'check', label: 'Clear Title' },
//       { icon: 'ruler', label: '6,000 sq.ft' },
//     ],
//   },
// ]

// const filters = [
//   { id: 'all', label: 'All' },
//   { id: 'residential', label: 'Residential' },
//   { id: 'plots', label: 'Plots & Estates' },
//   { id: 'commercial', label: 'Commercial' },
// ]

// const iconMap = {
//   bed: BedDouble,
//   bath: Bath,
//   car: Car,
//   pool: Waves,
//   compass: Compass,
//   check: FileCheck,
//   ruler: Ruler,
//   building: Building,
//   users: Users,
//   key: KeyRound,
// }

// const statusStyles = {
//   sale: { label: 'For Sale', className: 'bg-[#7a5c46] text-white' },
//   rent: { label: 'For Rent', className: 'bg-[#171d36] text-white' },
//   managed: { label: 'Sold / Managed', className: 'bg-[#f9e3c8] text-[#7a5c46]' },
// }

// /* ---------- TURN A SERVER PROPERTY INTO THE SHAPE THE CARD NEEDS ---------- */

// // Uploaded images are often saved as "/uploads/photo.jpg": add the server address in front
// function toImageUrl(src) {
//   if (!src) return ''
//   if (/^(https?:|data:|blob:)/i.test(src)) return src
//   return `${API_BASE}${src.startsWith('/') ? '' : '/'}${src}`
// }

// // If the admin did not save a features list, build one from the other fields
// function buildFeatures(p) {
//   const list = []
//   const beds = p.bedrooms ?? p.beds
//   const baths = p.bathrooms ?? p.baths
//   if (beds) list.push({ icon: 'bed', label: `${beds} Beds` })
//   if (baths) list.push({ icon: 'bath', label: `${baths} Baths` })
//   if (p.parking) list.push({ icon: 'car', label: `${p.parking} Parking` })
//   return list
// }

// function normalizeProperty(p) {
//   const firstImage = Array.isArray(p.images) ? p.images[0]?.url || p.images[0] : ''
//   const rawImage = p.image || p.imageUrl || p.photo || firstImage || ''

//   const features =
//     Array.isArray(p.features) && p.features.length > 0
//       ? p.features.map((f) => (typeof f === 'string' ? { icon: 'check', label: f } : f))
//       : buildFeatures(p)

//   return {
//     id: p._id || p.id,
//     title: p.title || 'Untitled property',
//     category: p.category || 'residential',
//     status: p.status || 'sale',
//     price: Number(p.price) || 0,
//     location: p.location || '',
//     areaSqft: Number(p.areaSqft ?? p.area) || 0,
//     description: p.description || '',
//     image: toImageUrl(rawImage),
//     features,
//     createdAt: p.createdAt,
//   }
// }

// /* ---------- PRICE FORMAT: 38500000 -> ₹3.85 Cr ---------- */
// function formatPrice(price, isRent) {
//   if (isRent) return `₹${price.toLocaleString('en-IN')}`
//   const trim = (n) => n.toFixed(2).replace(/\.?0+$/, '')
//   if (price >= 10000000) return `₹${trim(price / 10000000)} Cr`
//   if (price >= 100000) return `₹${trim(price / 100000)} Lakh`
//   return `₹${price.toLocaleString('en-IN')}`
// }

// /* ---------- ONE CARD ---------- */
// function PropertyCard({ property }) {
//   const [imageFailed, setImageFailed] = useState(false)
//   const status = statusStyles[property.status] || statusStyles.sale
//   const isRent = property.status === 'rent'

//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-slate-900/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/20">

//       {/* Image area */}
//       <div className="relative h-56 overflow-hidden bg-slate-200">
//         {!imageFailed && property.image ? (
//           <img
//             src={property.image}
//             alt={property.title}
//             onError={() => setImageFailed(true)}
//             className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
//           />
//         ) : (
//           <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46] transition-transform duration-[1500ms] ease-out group-hover:scale-110">
//             <Building size={56} className="text-white/30" strokeWidth={1.2} />
//           </div>
//         )}

//         {/* Dark tint + "View details" pill on hover */}
//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#171d36]/0 transition-colors duration-500 group-hover:bg-[#171d36]/35">
//           <span className="flex translate-y-4 items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#171d36] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//             <Eye size={14} /> View details
//           </span>
//         </div>

//         {/* Light shine sweeping across the image */}
//         <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></div>

//         {/* Status badge */}
//         <span
//           className={`absolute left-4 top-4 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-transform duration-500 group-hover:translate-x-1 ${status.className}`}
//         >
//           {status.label}
//         </span>

//         {/* Price tag */}
//         <div className="absolute bottom-4 left-4 rounded-lg bg-[#171d36]/85 px-4 py-2 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
//           <span className="font-serif text-2xl text-white">
//             {formatPrice(property.price, isRent)}
//           </span>
//           {isRent && <span className="ml-1 text-xs text-slate-300">/mo</span>}
//         </div>
//       </div>

//       {/* Card body */}
//       <div className="flex flex-1 flex-col p-6">
//         <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
//           <span>{property.location}</span>
//           <span>{property.areaSqft.toLocaleString('en-IN')} sq.ft</span>
//         </div>

//         <h3 className="mt-4 font-serif text-2xl leading-snug text-[#171d36]">
//           {property.title}
//         </h3>

//         <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
//           {property.description}
//         </p>

//         {/* Features */}
//         {property.features.length > 0 && (
//           <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-200 pt-5">
//             {property.features.map((feature) => {
//               const Icon = iconMap[feature.icon]
//               return (
//                 <div
//                   key={feature.label}
//                   className="flex items-center gap-2 text-[13px] text-slate-600"
//                 >
//                   {Icon && (
//                     <Icon
//                       size={16}
//                       className="shrink-0 text-slate-500 transition-colors duration-500 group-hover:text-[#7a5c46]"
//                     />
//                   )}
//                   <span>{feature.label}</span>
//                 </div>
//               )
//             })}
//           </div>
//         )}

//         {/* Button with a colour sweep on hover */}
//         <Link
//           to="/properties"
//           className="group/btn relative mt-6 flex items-center justify-center overflow-hidden rounded-lg bg-[#171d36] py-3.5 text-[11px] font-bold uppercase tracking-widest text-white"
//         >
//           <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//           <span className="relative flex items-center gap-2">
//             Explore Estate
//             <ArrowRight
//               size={14}
//               className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
//             />
//           </span>
//         </Link>
//       </div>
//     </article>
//   )
// }

// /* ---------- THE WHOLE SECTION ---------- */
// function Properties({ limit }) {
//   const [filter, setFilter] = useState('all')
//   const [items, setItems] = useState([])
//   const [state, setState] = useState('loading') // loading | ready | fallback

//   // Load the properties that were added in the admin dashboard
//   useEffect(() => {
//     let cancelled = false

//     fetch(PROPERTIES_URL)
//       .then((response) => {
//         if (!response.ok) throw new Error(`Server answered with status ${response.status}`)
//         return response.json()
//       })
//       .then((data) => {
//         const list = Array.isArray(data) ? data : data.properties || data.data || []
//         const mapped = list
//           .map(normalizeProperty)
//           // newest first (only when the server sends a created date)
//           .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))

//         if (!cancelled) {
//           setItems(mapped)
//           setState('ready')
//         }
//       })
//       .catch((error) => {
//         console.error(`Could not load properties from ${PROPERTIES_URL}:`, error)
//         if (!cancelled) {
//           setItems(FALLBACK_LISTINGS)
//           setState('fallback')
//         }
//       })

//     return () => {
//       cancelled = true
//     }
//   }, [])

//   const filtered =
//     filter === 'all' ? items : items.filter((item) => item.category === filter)

//   const visible = limit ? filtered.slice(0, limit) : filtered

//   return (
//       <section className="bg-white pt-4 pb-15 lg:pt-5 lg:pb-18">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading + filter tabs */}
//         <Reveal>
//           <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#7a5c46]"></span>
//                 <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//                   Exclusive Inventory
//                 </p>
//               </div>
//               <h2 className="mt-4 font-serif text-4xl leading-tight text-[#171d36] md:text-5xl">
//                 Curated Architectural Holdings
//               </h2>
//             </div>

//             <div className="flex flex-wrap gap-x-8 border-b border-slate-300">
//               {filters.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => setFilter(item.id)}
//                   className={`relative pb-3 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${
//                     filter === item.id
//                       ? 'text-[#171d36]'
//                       : 'text-slate-500 hover:text-[#171d36]'
//                   }`}
//                 >
//                   {item.label}
//                   <span
//                     className={`absolute -bottom-px left-0 h-0.5 w-full origin-left bg-[#7a5c46] transition-transform duration-500 ${
//                       filter === item.id ? 'scale-x-100' : 'scale-x-0'
//                     }`}
//                   ></span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </Reveal>

//         {/* Shown only while you are developing, when the server could not be reached */}
//         {import.meta.env.DEV && state === 'fallback' && (
//           <p className="mt-8 rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
//             Showing sample properties because the server could not be reached at{' '}
//             <strong>{PROPERTIES_URL}</strong>. Check the browser console (F12) for the reason.
//           </p>
//         )}

//         {/* Cards */}
//         {state === 'loading' ? (
//           <p className="mt-16 text-center text-slate-500">Loading properties…</p>
//         ) : visible.length === 0 ? (
//           <p className="mt-16 text-center text-slate-500">
//             No properties to show in this category yet.
//           </p>
//         ) : (
//           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {visible.map((property, index) => (
//               <Reveal
//                 key={`${filter}-${property.id}`}
//                 delay={(index % 3) * 150}
//                 className="h-full"
//               >
//                 <PropertyCard property={property} />
//               </Reveal>
//             ))}
//           </div>
//         )}

//         {/* Browse all button (Home page only) */}
//         {limit && (
//           <Reveal delay={200}>
//             <div className="mt-16 text-center">
//               <Link
//                 to="/properties"
//                 className="group inline-flex items-center gap-3 rounded-lg bg-[#f6f2ec] px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-[#171d36] transition-all duration-300 hover:bg-[#171d36] hover:text-white hover:shadow-xl hover:shadow-slate-900/20"
//               >
//                 Browse all curated properties
//                 <ArrowRight
//                   size={14}
//                   className="transition-transform duration-300 group-hover:translate-x-1.5"
//                 />
//               </Link>
//             </div>
//           </Reveal>
//         )}

//       </div>
//     </section>
//   )
// }

// export default Properties


import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BedDouble,
  Bath,
  Car,
  Waves,
  Compass,
  FileCheck,
  Ruler,
  Building,
  Users,
  KeyRound,
  Eye,
} from 'lucide-react'
import Reveal from './Reveal'
import villa from '../assets/images/villa.png'
import re from '../assets/images/re.png'

/* ---------- WHERE THE PROPERTIES COME FROM ----------
   This must be the SAME address your admin dashboard uses to LOAD its property list.
   Example: if the admin calls  http://localhost:5000/api/properties  then leave this as it is.
   You can also set VITE_API_URL in client/.env  (for example VITE_API_URL=http://localhost:5000) */
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const PROPERTIES_URL = `${API_BASE}/api/properties`

/* ---------- SAMPLE DATA (only used if the server cannot be reached) ---------- */
const FALLBACK_LISTINGS = [
  {
    id: 1,
    title: 'The Race Course Heritage Villa',
    category: 'residential',
    status: 'sale',
    price: 38500000,
    location: 'Race Course',
    areaSqft: 4200,
    description:
      'Private landscaped courtyard, double-height living hall, modular Italian kitchen, and a dedicated home theatre.',
    image: villa,
    features: [
      { icon: 'bed', label: '4 Beds' },
      { icon: 'bath', label: '5 Baths' },
      { icon: 'car', label: '2 Parking' },
    ],
  },
  {
    id: 2,
    title: 'Saravanampatti Skyline Residence',
    category: 'residential',
    status: 'rent',
    price: 145000,
    location: 'Saravanampatti',
    areaSqft: 3100,
    description:
      'Fully furnished high-rise residence with panoramic city views, smart security, and a private clubhouse and pool.',
    image: re,
    features: [
      { icon: 'bed', label: '3 Beds' },
      { icon: 'bath', label: '4 Baths' },
      { icon: 'pool', label: 'Pool' },
    ],
  },
  {
    id: 3,
    title: 'Avinashi Road Executive Office Floor',
    category: 'commercial',
    status: 'managed',
    price: 82000000,
    location: 'Avinashi Road',
    areaSqft: 9800,
    description:
      'Whole-floor commercial asset with bespoke boardroom finishes, private reception, and high-efficiency HVAC.',
    image: '/properties/property-3.jpg',
    features: [
      { icon: 'building', label: 'Grade-A' },
      { icon: 'users', label: '60+ Desks' },
      { icon: 'key', label: 'Leased' },
    ],
  },
  {
    id: 4,
    title: 'Vadavalli Hillside Estate Plot',
    category: 'plots',
    status: 'sale',
    price: 21000000,
    location: 'Vadavalli',
    areaSqft: 9600,
    description:
      'Premium gated-layout plot near the Western Ghats foothills, with wide approach roads and all utilities ready.',
    image: '/properties/property-4.jpg',
    features: [
      { icon: 'compass', label: 'East Facing' },
      { icon: 'check', label: 'DTCP Approved' },
      { icon: 'ruler', label: '9,600 sq.ft' },
    ],
  },
  {
    id: 5,
    title: 'Peelamedu Garden Villa',
    category: 'residential',
    status: 'sale',
    price: 24500000,
    location: 'Peelamedu',
    areaSqft: 3400,
    description:
      'Contemporary villa with a private garden, covered parking, solar power, and a rooftop entertainment deck.',
    image: '/properties/property-5.jpg',
    features: [
      { icon: 'bed', label: '4 Beds' },
      { icon: 'bath', label: '4 Baths' },
      { icon: 'car', label: '3 Parking' },
    ],
  },
  {
    id: 6,
    title: 'Singanallur Corner Estate Plot',
    category: 'plots',
    status: 'sale',
    price: 15500000,
    location: 'Singanallur',
    areaSqft: 6000,
    description:
      'Corner plot in an approved layout with tar roads, underground drainage, and strong appreciation potential.',
    image: '/properties/property-6.jpg',
    features: [
      { icon: 'compass', label: 'North Facing' },
      { icon: 'check', label: 'Clear Title' },
      { icon: 'ruler', label: '6,000 sq.ft' },
    ],
  },
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'plots', label: 'Plots & Estates' },
  { id: 'commercial', label: 'Commercial' },
]

const iconMap = {
  bed: BedDouble,
  bath: Bath,
  car: Car,
  pool: Waves,
  compass: Compass,
  check: FileCheck,
  ruler: Ruler,
  building: Building,
  users: Users,
  key: KeyRound,
}

const statusStyles = {
  sale: { label: 'For Sale', className: 'bg-[#7a5c46] text-white' },
  rent: { label: 'For Rent', className: 'bg-[#171d36] text-white' },
  managed: { label: 'Sold / Managed', className: 'bg-[#f9e3c8] text-[#7a5c46]' },
}

/* ---------- TURN A SERVER PROPERTY INTO THE SHAPE THE CARD NEEDS ---------- */

// Uploaded images are often saved as "/uploads/photo.jpg": add the server address in front
function toImageUrl(src) {
  if (!src) return ''
  if (/^(https?:|data:|blob:)/i.test(src)) return src
  return `${API_BASE}${src.startsWith('/') ? '' : '/'}${src}`
}

// If the admin did not save a features list, build one from the other fields
function buildFeatures(p) {
  const list = []
  const beds = p.bedrooms ?? p.beds
  const baths = p.bathrooms ?? p.baths
  if (beds) list.push({ icon: 'bed', label: `${beds} Beds` })
  if (baths) list.push({ icon: 'bath', label: `${baths} Baths` })
  if (p.parking) list.push({ icon: 'car', label: `${p.parking} Parking` })
  return list
}

function normalizeProperty(p) {
  const firstImage = Array.isArray(p.images) ? p.images[0]?.url || p.images[0] : ''
  const rawImage = p.image || p.imageUrl || p.photo || firstImage || ''

  const features =
    Array.isArray(p.features) && p.features.length > 0
      ? p.features.map((f) => (typeof f === 'string' ? { icon: 'check', label: f } : f))
      : buildFeatures(p)

  return {
    id: p._id || p.id,
    title: p.title || 'Untitled property',
    category: p.category || 'residential',
    status: p.status || 'sale',
    price: Number(p.price) || 0,
    location: p.location || '',
    areaSqft: Number(p.areaSqft ?? p.area) || 0,
    description: p.description || '',
    image: toImageUrl(rawImage),
    features,
    createdAt: p.createdAt,
  }
}

/* ---------- PRICE FORMAT: 38500000 -> ₹3.85 Cr ---------- */
function formatPrice(price, isRent) {
  if (isRent) return `₹${price.toLocaleString('en-IN')}`
  const trim = (n) => n.toFixed(2).replace(/\.?0+$/, '')
  if (price >= 10000000) return `₹${trim(price / 10000000)} Cr`
  if (price >= 100000) return `₹${trim(price / 100000)} Lakh`
  return `₹${price.toLocaleString('en-IN')}`
}

/* ---------- ONE CARD ---------- */
function PropertyCard({ property }) {
  const [imageFailed, setImageFailed] = useState(false)
  const status = statusStyles[property.status] || statusStyles.sale
  const isRent = property.status === 'rent'

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-slate-900/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/20">

      {/* Image area */}
      <div className="relative h-56 shrink-0 overflow-hidden bg-slate-200">
        {!imageFailed && property.image ? (
          <img
            src={property.image}
            alt={property.title}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46] transition-transform duration-[1500ms] ease-out group-hover:scale-110">
            <Building size={56} className="text-white/30" strokeWidth={1.2} />
          </div>
        )}

        {/* Dark tint + "View details" pill on hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#171d36]/0 transition-colors duration-500 group-hover:bg-[#171d36]/35">
          <span className="flex translate-y-4 items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#171d36] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Eye size={14} /> View details
          </span>
        </div>

        {/* Light shine sweeping across the image */}
        <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></div>

        {/* Status badge */}
        <span
          className={`absolute left-4 top-4 whitespace-nowrap rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-transform duration-500 group-hover:translate-x-1 ${status.className}`}
        >
          {status.label}
        </span>

        {/* Price tag */}
        <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-lg bg-[#171d36]/85 px-4 py-2 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
          <span className="font-serif text-xl text-white sm:text-2xl">
            {formatPrice(property.price, isRent)}
          </span>
          {isRent && <span className="ml-1 text-xs text-slate-300">/mo</span>}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 text-[10px] font-bold uppercase leading-4 tracking-widest text-[#7a5c46]">
          <span className="min-w-0">{property.location}</span>
          <span className="shrink-0 whitespace-nowrap">
            {property.areaSqft.toLocaleString('en-IN')} sq.ft
          </span>
        </div>

        <h3 className="mt-4 break-words font-serif text-xl leading-snug text-[#171d36] sm:text-2xl">
          {property.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {property.description}
        </p>

        {/* Features */}
        {property.features.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200 pt-5">
            {property.features.map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 whitespace-nowrap text-[13px] text-slate-600"
                >
                  {Icon && (
                    <Icon
                      size={16}
                      className="shrink-0 text-slate-500 transition-colors duration-500 group-hover:text-[#7a5c46]"
                    />
                  )}
                  <span>{feature.label}</span>
                </div>
              )
            })}
          </div>
        )}

        {/* Button with a colour sweep on hover */}
        <Link
          to="/properties"
          className="group/btn relative mt-6 flex items-center justify-center overflow-hidden rounded-lg bg-[#171d36] py-3.5 text-[11px] font-bold uppercase tracking-widest text-white"
        >
          <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
          <span className="relative flex items-center gap-2">
            Explore Estate
            <ArrowRight
              size={14}
              className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1.5"
            />
          </span>
        </Link>
      </div>
    </article>
  )
}

/* ---------- THE WHOLE SECTION ---------- */
function Properties({ limit }) {
  const [filter, setFilter] = useState('all')
  const [items, setItems] = useState([])
  const [state, setState] = useState('loading') // loading | ready | fallback

  // Load the properties that were added in the admin dashboard
  useEffect(() => {
    let cancelled = false

    fetch(PROPERTIES_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Server answered with status ${response.status}`)
        return response.json()
      })
      .then((data) => {
        const list = Array.isArray(data) ? data : data.properties || data.data || []
        const mapped = list
          .map(normalizeProperty)
          // newest first (only when the server sends a created date)
          .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))

        if (!cancelled) {
          setItems(mapped)
          setState('ready')
        }
      })
      .catch((error) => {
        console.error(`Could not load properties from ${PROPERTIES_URL}:`, error)
        if (!cancelled) {
          setItems(FALLBACK_LISTINGS)
          setState('fallback')
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const filtered =
    filter === 'all' ? items : items.filter((item) => item.category === filter)

  const visible = limit ? filtered.slice(0, limit) : filtered

  return (
    <section className="bg-white pt-4 pb-15 lg:pt-5 lg:pb-18">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading + filter tabs */}
        <Reveal>
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 shrink-0 bg-[#7a5c46]"></span>
                <p className="text-[11px] font-bold uppercase leading-5 tracking-[0.12em] text-[#7a5c46] sm:tracking-[0.15em]">
                  Exclusive Inventory
                </p>
              </div>
              <h2 className="mt-4 break-words font-serif text-3xl leading-tight text-[#171d36] sm:text-4xl md:text-5xl">
                Curated Architectural Holdings
              </h2>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1 border-b border-slate-300 sm:gap-x-8">
              {filters.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.id)}
                  className={`relative whitespace-nowrap pb-3 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                    filter === item.id
                      ? 'text-[#171d36]'
                      : 'text-slate-500 hover:text-[#171d36]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-px left-0 h-0.5 w-full origin-left bg-[#7a5c46] transition-transform duration-500 ${
                      filter === item.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Shown only while you are developing, when the server could not be reached */}
        {import.meta.env.DEV && state === 'fallback' && (
          <p className="mt-8 rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            Showing sample properties because the server could not be reached at{' '}
            <strong className="break-all">{PROPERTIES_URL}</strong>. Check the browser console (F12) for the reason.
          </p>
        )}

        {/* Cards */}
        {state === 'loading' ? (
          <p className="mt-12 text-center text-slate-500 sm:mt-16">Loading properties…</p>
        ) : visible.length === 0 ? (
          <p className="mt-12 text-center text-slate-500 sm:mt-16">
            No properties to show in this category yet.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((property, index) => (
              <Reveal
                key={`${filter}-${property.id}`}
                delay={(index % 3) * 150}
                className="h-full min-w-0"
              >
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        )}

        {/* Browse all button (Home page only) */}
        {limit && (
          <Reveal delay={200}>
            <div className="mt-10 text-center sm:mt-16">
              <Link
                to="/properties"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#f6f2ec] px-6 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-[#171d36] transition-all duration-300 hover:bg-[#171d36] hover:text-white hover:shadow-xl hover:shadow-slate-900/20 sm:w-auto sm:px-10"
              >
                Browse all curated properties
                <ArrowRight
                  size={14}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  )
}

export default Properties