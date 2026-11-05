// // import { useEffect, useRef, useState } from 'react'
// // import { Link } from 'react-router-dom'
// // import {
// //   Building2,
// //   Landmark,
// //   Handshake,
// //   TrendingUp,
// //   KeyRound,
// //   Armchair,
// //   ChevronRight,
// //   ArrowRight,
// //   Check,
// // } from 'lucide-react'
// // import Reveal from './Reveal'
// // import ServiceScope from './ServiceScope'
// // import propertImage from '../assets/images/propert.png'
// // import interiorsImage from '../assets/images/interiors.png'

// // // Videos live in public/services/ and are used by URL (no import needed)
// // const propertVideo = '/services/propert.mp4'
// // const interiorsVideo = '/services/interiors.mp4'

// // /* ---------- THE SERVICES (edit the text here) ---------- */
// // const services = [
// //   {
// //     label: 'Property Management',
// //     icon: Building2,
// //     chip: 'Coimbatore · Complete Care',
// //     headline: 'Complete Estate Custodianship',
// //     stats: ['98% Client Retention', '2,500+ Properties Managed'],
// //     title: 'Turnkey Property Management & Stewardship',
// //     text: 'From preventive maintenance and staff oversight to rent collection and transparent monthly reporting, we run your property like a premium asset, so you never have to chase a plumber or a tenant again.',
// //     points: [
// //       'Preventive maintenance and 24/7 technical support',
// //       'Rent collection with transparent monthly statements',
// //       'Vetted tenants and smooth handovers',
// //       'Regular condition audits with photo reports',
// //     ],
// //     // 1st = video, 2nd = image
// //     images: [propertVideo, propertImage],
// //     tones: [
// //       'bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46]',
// //       'bg-linear-to-tl from-[#171d36] via-[#2a3156] to-[#7a5c46]',
// //     ],
// //   },
// //   {
// //     label: 'Financial Assistance',
// //     icon: Landmark,
// //     chip: 'Coimbatore · Trusted Partners',
// //     headline: 'Loans, Mortgages & Insurance',
// //     stats: ['Multi-Bank Options', 'Paperwork Handled'],
// //     title: 'Home Loans, Financing & Insurance, Arranged for You',
// //     text: 'We guide you to the right bank, prepare your documents, and negotiate on your behalf, so funding your property is quick and stress-free. We also arrange the cover that protects your asset.',
// //     points: [
// //       'Home loan and mortgage assistance',
// //       'Debt refinancing and top-up loans',
// //       'Property insurance and landlord liability cover',
// //       'Eligibility checks and complete documentation support',
// //     ],
// //     images: ['/services/financial-assistance-1.jpg', '/services/financial-assistance-2.jpg'],
// //     tones: [
// //       'bg-linear-to-br from-[#2a3156] via-[#171d36] to-[#5e4535]',
// //       'bg-linear-to-tl from-[#2a3156] via-[#171d36] to-[#5e4535]',
// //     ],
// //   },
// //   {
// //     label: 'Buy / Sell Advisory',
// //     icon: Handshake,
// //     chip: 'Coimbatore · Discreet Dealings',
// //     headline: 'Confidential Transactions',
// //     stats: ['Off-Market Access', 'Verified Titles'],
// //     title: 'Buy, Sell & Rent with Complete Confidence',
// //     text: 'Whether you are buying a villa, selling an inherited plot, or renting out an apartment, we find the right counterparty, verify the paperwork, and negotiate firmly on your side.',
// //     points: [
// //       'Off-market and pre-launch opportunities',
// //       'Title and approval checks (DTCP, patta, EC)',
// //       'Pricing based on real local market data',
// //       'Negotiation through to registration',
// //     ],
// //     images: ['/services/buy-sell-1.jpg', '/services/buy-sell-2.jpg'],
// //     tones: [
// //       'bg-linear-to-br from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
// //       'bg-linear-to-tl from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
// //     ],
// //   },
// //   {
// //     label: 'Estate Consultancy',
// //     icon: TrendingUp,
// //     chip: 'Coimbatore · Data-Led Advice',
// //     headline: 'Strategic Valuation & Yield',
// //     stats: ['Local Market Data', 'Clear Exit Plans'],
// //     title: 'Estate Consultancy for Long-Term Value',
// //     text: 'We study your holdings and the Coimbatore market to tell you what to keep, what to improve, and when to sell, with clear numbers behind every recommendation.',
// //     points: [
// //       'Asset valuation and yield modelling',
// //       'Repositioning and redevelopment advice',
// //       'Portfolio reviews with clear action plans',
// //       'Succession and inheritance planning support',
// //     ],
// //     images: ['/services/estate-consultancy-1.jpg', '/services/estate-consultancy-2.jpg'],
// //     tones: [
// //       'bg-linear-to-br from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
// //       'bg-linear-to-tl from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
// //     ],
// //   },
// //   {
// //     label: 'Tenancy Concierge',
// //     icon: KeyRound,
// //     chip: 'Coimbatore · Tenant Care',
// //     headline: 'Tenants, Handled End to End',
// //     stats: ['Verified Tenants', 'Prompt Rent Collection'],
// //     title: 'Tenancy Concierge from First Viewing to Handover',
// //     text: 'We find, screen, and welcome the right tenants, then look after them throughout the lease, so you earn steady rent without the daily phone calls.',
// //     points: [
// //       'Marketing and tenant screening',
// //       'Agreements, deposits, and rent collection',
// //       'Tenant concerns handled on your behalf',
// //       'Move-in and move-out inspections',
// //     ],
// //     images: ['/services/tenancy-concierge-1.jpg', '/services/tenancy-concierge-2.jpg'],
// //     tones: [
// //       'bg-linear-to-br from-[#33385a] via-[#171d36] to-[#7a5c46]',
// //       'bg-linear-to-tl from-[#33385a] via-[#171d36] to-[#7a5c46]',
// //     ],
// //   },
// //   {
// //     label: 'Interiors & Staging',
// //     icon: Armchair,
// //     chip: 'Coimbatore · Design-Led',
// //     headline: 'Turnkey Interiors & Staging',
// //     stats: ['Design to Handover', 'Higher Rent & Resale'],
// //     title: 'Interiors & Staging That Lift Property Value',
// //     text: 'Our design studio plans, furnishes, and stages your property, from a single room to a complete villa, so it rents faster, sells better, and looks exactly as it should.',
// //     points: [
// //       'Space planning and bespoke furniture',
// //       'Modular kitchens and wardrobes',
// //       'Staging for faster sales and rentals',
// //       'One team managing the work to handover',
// //     ],
// //     // 1st = video, 2nd = image
// //     images: [interiorsVideo, interiorsImage],
// //     tones: [
// //       'bg-linear-to-br from-[#5e4535] via-[#2a3156] to-[#171d36]',
// //       'bg-linear-to-tl from-[#5e4535] via-[#2a3156] to-[#171d36]',
// //     ],
// //   },
// // ]

// // const AUTO_SLIDE = true // set to false to show only the first photo
// // const SLIDE_TIME = 5000 // milliseconds each photo stays

// // const isVideoSrc = (src) => typeof src === 'string' && /\.(mp4|webm|ogg)$/i.test(src)

// // /* One photo or video, or a coloured placeholder if the file is missing */
// // function SlideImage({ src, alt, service, tone, isCurrent, onEnded }) {
// //   const [failed, setFailed] = useState(false)
// //   const videoRef = useRef(null)
// //   const Icon = service.icon
// //   const isVideo = isVideoSrc(src)

// //   // Video starts from the beginning when its slide is shown, and stops when it is not
// //   useEffect(() => {
// //     const video = videoRef.current
// //     if (!video) return
// //     if (isCurrent) {
// //       video.currentTime = 0
// //       video.muted = true
// //       const playing = video.play()
// //       if (playing && playing.catch) playing.catch((err) => console.warn('Video play blocked:', err))
// //     } else {
// //       video.pause()
// //     }
// //   }, [isCurrent, src])

// //   return (
// //     <div className="h-full w-full shrink-0 overflow-hidden">
// //       {!failed ? (
// //         isVideo ? (
// //           <video
// //             ref={videoRef}
// //             src={src}
// //             muted
// //             playsInline
// //             preload="auto"
// //             loop={!AUTO_SLIDE}
// //             onEnded={() => isCurrent && onEnded()}
// //             onError={(e) => {
// //               console.error('Video failed to load:', src, e.currentTarget.error)
// //               setFailed(true)
// //               if (isCurrent) onEnded()
// //             }}
// //             className="h-full w-full object-cover"
// //           />
// //         ) : (
// //           <img
// //             src={src}
// //             alt={alt}
// //             onError={() => setFailed(true)}
// //             className="h-full w-full object-contain"
// //           />
// //         )
// //       ) : (
// //         <div className={`flex h-full w-full items-center justify-center ${tone}`}>
// //           <Icon size={110} strokeWidth={0.8} className="text-white/15" />
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // function ServiceExplorer() {
// //   const [active, setActive] = useState(0) // which service
// //   const [slide, setSlide] = useState(0)   // which of its two photos
// //   const [shown, setShown] = useState(true) // false for a moment while content swaps
// //   const timer = useRef(null)

// //   const service = services[active]

// //   // Change service: fade out, swap, fade in
// //   const choose = (index) => {
// //     if (index === active) return
// //     clearTimeout(timer.current)
// //     setShown(false)
// //     timer.current = setTimeout(() => {
// //       setActive(index)
// //       setSlide(0)
// //       setShown(true)
// //     }, 350)
// //   }

// //   useEffect(() => () => clearTimeout(timer.current), [])

// //   // Go to the next slide (used by the timer and when a video finishes)
// //   const nextSlide = () => setSlide((value) => (value + 1) % 2)

// //   // Photos change on their own every few seconds.
// //   // A video slide is NOT timed: it plays fully, then the next slide comes.
// //   useEffect(() => {
// //     if (!AUTO_SLIDE) return
// //     if (isVideoSrc(service.images[slide])) return
// //     const next = setTimeout(nextSlide, SLIDE_TIME)
// //     return () => clearTimeout(next)
// //   }, [active, slide])

// //   const fade = shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
// //   const delay = (i) => ({ transitionDelay: shown ? `${150 + i * 100}ms` : '0ms' })

// //   return (
// //     <section className="overflow-hidden bg-[#faf8f4] pb-16 pt-4 lg:pb-24 lg:pt-6">

// //       {/* Two columns, two rows. Children fill the grid left to right, top to bottom:
// //           row 1 = list + slider, row 2 = help card + content */}
// //       <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-10 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.4fr)] lg:gap-x-12">

// //         {/* ===== ROW 1 · LEFT: service list ===== */}
// //         <Reveal direction="left" className="lg:self-start">
// //           <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-hidden lg:rounded-xl lg:bg-white lg:pb-0 lg:shadow-lg lg:shadow-slate-900/5">
// //             {services.map((item, index) => {
// //               const Icon = item.icon
// //               const isActive = index === active

// //               return (
// //                 <button
// //                   key={item.label}
// //                   onClick={() => choose(index)}
// //                   className={`group relative flex shrink-0 items-center gap-4 whitespace-nowrap rounded-lg px-5 py-5 text-left transition-all duration-500 lg:rounded-none lg:border-b lg:border-slate-100 lg:last:border-b-0 ${
// //                     isActive
// //                       ? 'bg-[#171d36] text-white'
// //                       : 'bg-white text-[#171d36] hover:bg-[#f6f2ec] lg:hover:pl-7'
// //                   }`}
// //                 >
// //                   {/* Peach bar on the active item */}
// //                   <span
// //                     className={`absolute left-0 top-0 h-full w-1 origin-center bg-[#f3dcc0] transition-transform duration-500 ${
// //                       isActive ? 'scale-y-100' : 'scale-y-0'
// //                     }`}
// //                   ></span>

// //                   <Icon
// //                     size={22}
// //                     strokeWidth={1.6}
// //                     className={`shrink-0 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
// //                       isActive ? 'text-[#f3dcc0]' : 'text-[#7a5c46]'
// //                     }`}
// //                   />
// //                   <span className="flex-1 text-[17px] font-medium">{item.label}</span>
// //                   <ChevronRight
// //                     size={18}
// //                     className={`hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 lg:block ${
// //                       isActive ? 'text-white' : 'text-slate-400'
// //                     }`}
// //                   />
// //                 </button>
// //               )
// //             })}
// //           </div>
// //         </Reveal>

// //         {/* ===== ROW 1 · RIGHT: photo slider ===== */}
// //         <Reveal direction="right" delay={150} className="min-w-0">
// //           <div
// //             className={`transition-all duration-500 ease-out ${
// //               shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
// //             }`}
// //           >
// //             <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-2xl shadow-slate-900/20 sm:aspect-[16/9]">

// //               {/* Track with the two photos */}
// //               <div
// //                 className="flex h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
// //                 style={{ transform: `translateX(-${slide * 100}%)` }}
// //               >
// //                 {service.images.map((src, i) => (
// //                   <SlideImage
// //                     key={src}
// //                     src={src}
// //                     alt={`${service.label} ${i + 1}`}
// //                     service={service}
// //                     tone={service.tones[i]}
// //                     isCurrent={i === slide}
// //                     onEnded={nextSlide}
// //                   />
// //                 ))}
// //               </div>

// //               {/* Dark gradient behind the text */}
// //               <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#171d36]/90 via-[#171d36]/15 to-transparent"></div>

// //               {/* Chip */}
// //               <div className="absolute right-5 top-5 hidden items-center gap-2.5 rounded-lg bg-[#171d36]/80 px-4 py-2.5 backdrop-blur sm:flex">
// //                 <span className="h-2 w-2 rounded-full bg-[#f3dcc0]"></span>
// //                 <span className="text-[11px] font-bold uppercase tracking-widest text-[#f3dcc0]">
// //                   {service.chip}
// //                 </span>
// //               </div>

// //               {/* Bottom text */}
// //               <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
// //                 <div>
// //                   <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f3dcc0]">
// //                     Core practice area
// //                   </p>
// //                   <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">
// //                     {service.headline}
// //                   </h3>
// //                 </div>

// //                 <div className="hidden items-center gap-4 rounded-lg bg-[#171d36]/75 px-5 py-3 text-[14px] font-medium text-white backdrop-blur lg:flex">
// //                   <span>{service.stats[0]}</span>
// //                   <span className="h-1 w-1 rounded-full bg-white"></span>
// //                   <span>{service.stats[1]}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </Reveal>

// //         {/* ===== ROW 2 · LEFT: blue help card (desktop only) ===== */}
// //         <Reveal direction="left" delay={200} className="hidden lg:block lg:self-start">
// //           <div className="group relative overflow-hidden rounded-2xl bg-[#171d36] px-8 py-24 text-white shadow-xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1">
// //             <span className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150"></span>

// //             <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3dcc0]">
// //               Direct Counsel
// //             </p>
// //             <h3 className="relative mt-3 font-serif text-3xl">Need help choosing?</h3>
// //             <p className="relative mt-4 text-[15px] leading-7 text-slate-400">
// //               Our senior advisors give you confidential, honest guidance on your
// //               property goals.
// //             </p>

// //             <Link
// //               to="/contact"
// //               className="group/btn relative mt-8 flex items-center justify-between overflow-hidden rounded-lg bg-[#7a5c46] px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-white"
// //             >
// //               <span className="absolute inset-0 -translate-x-full bg-[#f3dcc0] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
// //               <span className="relative transition-colors duration-500 group-hover/btn:text-[#171d36]">
// //                 Talk to us
// //               </span>
// //               <ArrowRight
// //                 size={18}
// //                 className="relative transition-all duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:text-[#171d36]"
// //               />
// //             </Link>
// //           </div>
// //         </Reveal>

// //         {/* ===== ROW 2 · RIGHT: title, text, points, button ===== */}
// //         <Reveal direction="right" delay={200} className="min-w-0">
// //           <div>
// //             <h2
// //               style={delay(0)}
// //               className={`font-serif text-4xl leading-tight text-[#171d36] transition-all duration-700 ease-out md:text-5xl ${fade}`}
// //             >
// //               {service.title}
// //             </h2>

// //             <span
// //               style={delay(1)}
// //               className={`mt-5 block h-0.5 bg-[#7a5c46] transition-all duration-1000 ease-out ${
// //                 shown ? 'w-20' : 'w-0'
// //               }`}
// //             ></span>

// //             <p
// //               style={delay(2)}
// //               className={`mt-6 max-w-3xl text-[17px] leading-8 text-slate-600 transition-all duration-700 ease-out ${fade}`}
// //             >
// //               {service.text}
// //             </p>

// //             <ul className="mt-8 grid gap-4 sm:grid-cols-2">
// //               {service.points.map((point, i) => (
// //                 <li
// //                   key={point}
// //                   style={delay(3 + i)}
// //                   className={`transition-all duration-700 ease-out ${fade}`}
// //                 >
// //                   <div className="group flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
// //                     <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f6f2ec] text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
// //                       <Check size={15} strokeWidth={2.5} />
// //                     </span>
// //                     <span className="text-[15px] leading-6 text-[#171d36]">{point}</span>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>

// //             <div
// //               style={delay(8)}
// //               className={`mt-10 transition-all duration-700 ease-out ${fade}`}
// //             >
// //               <Link
// //                 to="/contact"
// //                 className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#171d36] px-9 py-4 text-[12px] font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-900/20"
// //               >
// //                 <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
// //                 <span className="relative">Enquire about this service</span>
// //                 <ArrowRight
// //                   size={16}
// //                   className="relative transition-transform duration-300 group-hover/btn:translate-x-1.5"
// //                 />
// //               </Link>
// //             </div>
// //           </div>
// //         </Reveal>

// //       </div>

// //       {/* Full-width scope panel */}
// //       <ServiceScope index={active} shown={shown} />     
// //     </section>
// //   )
// // }

// // export default ServiceExplorer



// import { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import {
//   Building2,
//   Landmark,
//   Handshake,
//   TrendingUp,
//   KeyRound,
//   Armchair,
//   ArrowRight,
//   ArrowLeft,
//   Check,
// } from 'lucide-react'
// import Reveal from './Reveal'
// import ServiceScope from './ServiceScope'

// import propertImage from '../assets/images/propert.png'
// import interiorsImage from '../assets/images/interiors.png'
// import main1 from '../assets/images/main1.png'
// import main2 from '../assets/images/main2.png'
// import main3 from '../assets/images/main3.png'
// import main4 from '../assets/images/main4.png'


// // Videos live in public/services/ and are used by URL (no import needed)
// const propertVideo = '/services/propert.mp4'
// const designVideo = '/services/design.mp4'

// /* ---------- THE SERVICES (edit the text here) ---------- */
// const services = [
//   {
//     label: 'Property Management',
//     icon: Building2,
//     chip: 'Coimbatore · Complete Care',
//     headline: 'Complete Estate Custodianship',
//     stats: ['98% Client Retention', '2,500+ Properties Managed'],
//     title: 'Turnkey Property Management & Stewardship',
//     text: 'From preventive maintenance and staff oversight to rent collection and transparent monthly reporting, we run your property like a premium asset, so you never have to chase a plumber or a tenant again.',
//     points: [
//       'Preventive maintenance and 24/7 technical support',
//       'Rent collection with transparent monthly statements',
//       'Vetted tenants and smooth handovers',
//       'Regular condition audits with photo reports',
//     ],
//     // 1st = video, 2nd = image
//     images: [propertVideo, propertImage],
//     tones: [
//       'bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46]',
//       'bg-linear-to-tl from-[#171d36] via-[#2a3156] to-[#7a5c46]',
//     ],
//   },
//   {
//     label: 'Financial Assistance',
//     icon: Landmark,
//     chip: 'Coimbatore · Trusted Partners',
//     headline: 'Loans, Mortgages & Insurance',
//     stats: ['Multi-Bank Options', 'Paperwork Handled'],
//     title: 'Home Loans, Financing & Insurance, Arranged for You',
//     text: 'We guide you to the right bank, prepare your documents, and negotiate on your behalf, so funding your property is quick and stress-free. We also arrange the cover that protects your asset.',
//     points: [
//       'Home loan and mortgage assistance',
//       'Debt refinancing and top-up loans',
//       'Property insurance and landlord liability cover',
//       'Eligibility checks and complete documentation support',
//     ],
//     images: [main1, '/services/financial-assistance-2.jpg'],
//     tones: [
//       'bg-linear-to-br from-[#2a3156] via-[#171d36] to-[#5e4535]',
//       'bg-linear-to-tl from-[#2a3156] via-[#171d36] to-[#5e4535]',
//     ],
//   },
//   {
//     label: 'Buy / Sell Advisory',
//     icon: Handshake,
//     chip: 'Coimbatore · Discreet Dealings',
//     headline: 'Confidential Transactions',
//     stats: ['Off-Market Access', 'Verified Titles'],
//     title: 'Buy, Sell & Rent with Complete Confidence',
//     text: 'Whether you are buying a villa, selling an inherited plot, or renting out an apartment, we find the right counterparty, verify the paperwork, and negotiate firmly on your side.',
//     points: [
//       'Off-market and pre-launch opportunities',
//       'Title and approval checks (DTCP, patta, EC)',
//       'Pricing based on real local market data',
//       'Negotiation through to registration',
//     ],
//     images: [main2, '/services/buy-sell-2.jpg'],
//     tones: [
//       'bg-linear-to-br from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
//       'bg-linear-to-tl from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
//     ],
//   },
//   {
//     label: 'Estate Consultancy',
//     icon: TrendingUp,
//     chip: 'Coimbatore · Data-Led Advice',
//     headline: 'Strategic Valuation & Yield',
//     stats: ['Local Market Data', 'Clear Exit Plans'],
//     title: 'Estate Consultancy for Long-Term Value',
//     text: 'We study your holdings and the Coimbatore market to tell you what to keep, what to improve, and when to sell, with clear numbers behind every recommendation.',
//     points: [
//       'Asset valuation and yield modelling',
//       'Repositioning and redevelopment advice',
//       'Portfolio reviews with clear action plans',
//       'Succession and inheritance planning support',
//     ],
//     images: [main3, '/services/estate-consultancy-2.jpg'],
//     tones: [
//       'bg-linear-to-br from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
//       'bg-linear-to-tl from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
//     ],
//   },
//   {
//     label: 'Tenancy Concierge',
//     icon: KeyRound,
//     chip: 'Coimbatore · Tenant Care',
//     headline: 'Tenants, Handled End to End',
//     stats: ['Verified Tenants', 'Prompt Rent Collection'],
//     title: 'Tenancy Concierge from First Viewing to Handover',
//     text: 'We find, screen, and welcome the right tenants, then look after them throughout the lease, so you earn steady rent without the daily phone calls.',
//     points: [
//       'Marketing and tenant screening',
//       'Agreements, deposits, and rent collection',
//       'Tenant concerns handled on your behalf',
//       'Move-in and move-out inspections',
//     ],
//     images: [main4, '/services/tenancy-concierge-2.jpg'],
//     tones: [
//       'bg-linear-to-br from-[#33385a] via-[#171d36] to-[#7a5c46]',
//       'bg-linear-to-tl from-[#33385a] via-[#171d36] to-[#7a5c46]',
//     ],
//   },
//   {
//     label: 'Interiors & Staging',
//     icon: Armchair,
//     chip: 'Coimbatore · Design-Led',
//     headline: 'Turnkey Interiors & Staging',
//     stats: ['Design to Handover', 'Higher Rent & Resale'],
//     title: 'Interiors & Staging That Lift Property Value',
//     text: 'Our design studio plans, furnishes, and stages your property, from a single room to a complete villa, so it rents faster, sells better, and looks exactly as it should.',
//     points: [
//       'Space planning and bespoke furniture',
//       'Modular kitchens and wardrobes',
//       'Staging for faster sales and rentals',
//       'One team managing the work to handover',
//     ],
//     // 1st = video, 2nd = image
//     images: [designVideo, interiorsImage],
//     tones: [
//       'bg-linear-to-br from-[#5e4535] via-[#2a3156] to-[#171d36]',
//       'bg-linear-to-tl from-[#5e4535] via-[#2a3156] to-[#171d36]',
//     ],
//   },
// ]

// const isVideoSrc = (src) => typeof src === 'string' && /\.(mp4|webm|ogg)$/i.test(src)

// /* The picture or looping video on a card, or a coloured placeholder if the file is missing */
// function CardMedia({ src, alt, service, tone }) {
//   const [failed, setFailed] = useState(false)
//   const Icon = service.icon

//   if (failed) {
//     return (
//       <div className={`absolute inset-0 flex items-center justify-center ${tone}`}>
//         <Icon size={110} strokeWidth={0.8} className="text-white/15" />
//       </div>
//     )
//   }

//   const mediaClass =
//     'absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110'

//   if (isVideoSrc(src)) {
//     return (
//       <video
//         src={src}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         onError={() => setFailed(true)}
//         className={mediaClass}
//       />
//     )
//   }

//   return (
//     <img
//       src={src}
//       alt={alt}
//       draggable={false}
//       onError={() => setFailed(true)}
//       className={mediaClass}
//     />
//   )
// }

// function ServiceExplorer() {
//   const [active, setActive] = useState(0) // which service is selected
//   const [shown, setShown] = useState(true) // false for a moment while the details swap
//   const [dragging, setDragging] = useState(false)
//   const [edges, setEdges] = useState({ start: true, end: false })

//   const timer = useRef(null)
//   const track = useRef(null)
//   const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false })

//   const service = services[active]

//   // Know when the row is at its start or end (to grey out the arrows)
//   const updateEdges = () => {
//     const el = track.current
//     if (!el) return
//     setEdges({
//       start: el.scrollLeft <= 4,
//       end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
//     })
//   }

//   useEffect(() => {
//     updateEdges()
//     window.addEventListener('resize', updateEdges)
//     return () => {
//       window.removeEventListener('resize', updateEdges)
//       clearTimeout(timer.current)
//     }
//   }, [])

//   // Arrow buttons: move one card left or right
//   const scrollByCard = (direction) => {
//     const el = track.current
//     if (!el) return
//     const card = el.children[0]
//     const step = (card ? card.offsetWidth : 320) + 24
//     el.scrollBy({ left: direction * step, behavior: 'smooth' })
//   }

//   // Pick a service: fade the details out, swap, fade in
//   const choose = (index) => {
//     if (drag.current.moved) return // it was a drag, not a click

//     track.current?.children[index]?.scrollIntoView({
//       behavior: 'smooth',
//       inline: 'center',
//       block: 'nearest',
//     })

//     if (index === active) return
//     clearTimeout(timer.current)
//     setShown(false)
//     timer.current = setTimeout(() => {
//       setActive(index)
//       setShown(true)
//     }, 350)
//   }

//   /* Mouse drag to scroll (touch screens scroll by themselves) */
//   const onMouseDown = (e) => {
//     drag.current = {
//       down: true,
//       startX: e.pageX,
//       scrollLeft: track.current.scrollLeft,
//       moved: false,
//     }
//   }
//   const onMouseMove = (e) => {
//     if (!drag.current.down) return
//     const distance = e.pageX - drag.current.startX
//     if (Math.abs(distance) > 6) {
//       drag.current.moved = true
//       setDragging(true)
//     }
//     if (drag.current.moved) track.current.scrollLeft = drag.current.scrollLeft - distance
//   }
//   const endDrag = () => {
//     if (!drag.current.down) return
//     drag.current.down = false
//     setDragging(false)
//     // let the click that follows a drag be ignored, then reset
//     setTimeout(() => {
//       drag.current.moved = false
//     }, 0)
//   }

//   const fade = shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//   const delay = (i) => ({ transitionDelay: shown ? `${150 + i * 100}ms` : '0ms' })

//   return (
//     <section className="overflow-hidden bg-[#faf8f4] pb-16 pt-4 lg:pb-24 lg:pt-6">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* ===== Top row: label + arrows ===== */}
//         <div className="flex items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <span className="h-px w-8 bg-[#7a5c46]"></span>
//             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5c46]">
//               Select a practice
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <span className="hidden text-[12px] font-bold tracking-[0.2em] text-slate-400 sm:block">
//               {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
//             </span>
//             <div className="flex gap-2">
//               <button
//                 type="button"
//                 aria-label="Previous"
//                 onClick={() => scrollByCard(-1)}
//                 disabled={edges.start}
//                 className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#e1dacf] bg-white text-[#171d36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171d36] hover:text-white active:scale-90 disabled:cursor-default disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-[#171d36]"
//               >
//                 <ArrowLeft size={18} />
//               </button>
//               <button
//                 type="button"
//                 aria-label="Next"
//                 onClick={() => scrollByCard(1)}
//                 disabled={edges.end}
//                 className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#e1dacf] bg-white text-[#171d36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171d36] hover:text-white active:scale-90 disabled:cursor-default disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-[#171d36]"
//               >
//                 <ArrowRight size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ===== SCROLLING CARDS ===== */}
//         <Reveal>
//           <div
//             ref={track}
//             onScroll={updateEdges}
//             onMouseDown={onMouseDown}
//             onMouseMove={onMouseMove}
//             onMouseUp={endDrag}
//             onMouseLeave={endDrag}
//             className={`-mx-6 mt-6 flex select-none gap-6 overflow-x-auto px-6 pb-10 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
//               dragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
//             }`}
//           >
//             {services.map((item, index) => {
//               const Icon = item.icon
//               const isActive = index === active

//               return (
//                 <button
//                   key={item.label}
//                   type="button"
//                   onClick={() => choose(index)}
//                   aria-pressed={isActive}
//                   className={`group relative h-[420px] w-[280px] shrink-0 snap-center overflow-hidden rounded-2xl text-left shadow-lg shadow-slate-900/10 transition-all duration-500 sm:w-[340px] ${
//                     isActive
//                       ? '-translate-y-3 shadow-2xl shadow-slate-900/30 ring-2 ring-[#7a5c46] ring-offset-4 ring-offset-[#faf8f4]'
//                       : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/25'
//                   }`}
//                 >
//                   <CardMedia
//                     src={item.images[0]}
//                     alt={item.label}
//                     service={item}
//                     tone={item.tones[0]}
//                   />

//                   {/* Dark gradient so the text is readable */}
//                   <div
//                     className={`pointer-events-none absolute inset-0 bg-linear-to-t transition-opacity duration-500 ${
//                       isActive
//                         ? 'from-[#171d36]/95 via-[#171d36]/45 to-[#171d36]/10'
//                         : 'from-[#171d36]/90 via-[#171d36]/50 to-[#171d36]/25 group-hover:from-[#171d36]/90 group-hover:via-[#171d36]/40'
//                     }`}
//                   ></div>

//                   {/* Icon + number */}
//                   <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
//                     <span
//                       className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
//                         isActive
//                           ? 'bg-[#f3dcc0] text-[#171d36]'
//                           : 'bg-[#171d36]/70 text-[#f3dcc0]'
//                       }`}
//                     >
//                       <Icon size={22} strokeWidth={1.6} />
//                     </span>
//                     <span className="text-[12px] font-bold tracking-[0.2em] text-white/80">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                   </div>

//                   {/* Text at the bottom */}
//                   <div className="absolute inset-x-0 bottom-0 p-6">
//                     <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3dcc0]">
//                       {item.chip}
//                     </p>
//                     <h3 className="mt-2 font-serif text-3xl leading-tight text-white">
//                       {item.label}
//                     </h3>
//                     <p className="mt-2 text-[14px] leading-6 text-slate-300">{item.headline}</p>

//                     <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[12px] font-medium text-white/80">
//                       <span>{item.stats[0]}</span>
//                       <span className="text-[#f3dcc0]">•</span>
//                       <span>{item.stats[1]}</span>
//                     </div>

//                     <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f3dcc0]">
//                       {isActive ? 'Selected' : 'View details'}
//                       {isActive ? (
//                         <Check size={14} strokeWidth={2.5} />
//                       ) : (
//                         <ArrowRight
//                           size={14}
//                           className="transition-transform duration-300 group-hover:translate-x-1.5"
//                         />
//                       )}
//                     </span>
//                   </div>

//                   {/* Bar along the bottom of the selected card */}
//                   <span
//                     className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-[#f3dcc0] transition-transform duration-500 ${
//                       isActive ? 'scale-x-100' : 'scale-x-0'
//                     }`}
//                   ></span>
//                 </button>
//               )
//             })}
//           </div>
//         </Reveal>

//         {/* ===== DETAILS: help card + content for the selected card ===== */}
//         <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.4fr)] lg:gap-x-12">

//           {/* Blue help card (desktop only) */}
//           <Reveal direction="left" delay={100} className="hidden lg:block lg:self-start">
//             <div className="group relative overflow-hidden rounded-2xl bg-[#171d36] px-8 py-24 text-white shadow-xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1">
//               <span className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150"></span>

//               <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3dcc0]">
//                 Direct Counsel
//               </p>
//               <h3 className="relative mt-3 font-serif text-3xl">Need help choosing?</h3>
//               <p className="relative mt-4 text-[15px] leading-7 text-slate-400">
//                 Our senior advisors give you confidential, honest guidance on your
//                 property goals.
//               </p>

//               <Link
//                 to="/contact"
//                 className="group/btn relative mt-8 flex items-center justify-between overflow-hidden rounded-lg bg-[#7a5c46] px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-white"
//               >
//                 <span className="absolute inset-0 -translate-x-full bg-[#f3dcc0] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//                 <span className="relative transition-colors duration-500 group-hover/btn:text-[#171d36]">
//                   Talk to us
//                 </span>
//                 <ArrowRight
//                   size={18}
//                   className="relative transition-all duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:text-[#171d36]"
//                 />
//               </Link>
//             </div>
//           </Reveal>

//           {/* Title, text, points, button */}
//           <Reveal direction="right" delay={100} className="min-w-0">
//             <div>
//               <h2
//                 style={delay(0)}
//                 className={`font-serif text-4xl leading-tight text-[#171d36] transition-all duration-700 ease-out md:text-5xl ${fade}`}
//               >
//                 {service.title}
//               </h2>

//               <span
//                 style={delay(1)}
//                 className={`mt-5 block h-0.5 bg-[#7a5c46] transition-all duration-1000 ease-out ${
//                   shown ? 'w-20' : 'w-0'
//                 }`}
//               ></span>

//               <p
//                 style={delay(2)}
//                 className={`mt-6 max-w-3xl text-[17px] leading-8 text-slate-600 transition-all duration-700 ease-out ${fade}`}
//               >
//                 {service.text}
//               </p>

//               <ul className="mt-8 grid gap-4 sm:grid-cols-2">
//                 {service.points.map((point, i) => (
//                   <li
//                     key={point}
//                     style={delay(3 + i)}
//                     className={`transition-all duration-700 ease-out ${fade}`}
//                   >
//                     <div className="group flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
//                       <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f6f2ec] text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
//                         <Check size={15} strokeWidth={2.5} />
//                       </span>
//                       <span className="text-[15px] leading-6 text-[#171d36]">{point}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div
//                 style={delay(8)}
//                 className={`mt-10 transition-all duration-700 ease-out ${fade}`}
//               >
//                 <Link
//                   to="/contact"
//                   className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#171d36] px-9 py-4 text-[12px] font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-900/20"
//                 >
//                   <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
//                   <span className="relative">Enquire about this service</span>
//                   <ArrowRight
//                     size={16}
//                     className="relative transition-transform duration-300 group-hover/btn:translate-x-1.5"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>

//       {/* Full-width scope panel */}
//       <ServiceScope index={active} shown={shown} />
//     </section>
//   )
// }

// export default ServiceExplorer

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  Landmark,
  Handshake,
  TrendingUp,
  KeyRound,
  Armchair,
  ArrowRight,
  ArrowLeft,
  Check,
} from 'lucide-react'
import Reveal from './Reveal'
import ServiceScope from './ServiceScope'

import propertImage from '../assets/images/propert.png'
import interiorsImage from '../assets/images/interiors.png'
import main1 from '../assets/images/main1.png'
import main2 from '../assets/images/main2.png'
import main3 from '../assets/images/main3.png'
import main4 from '../assets/images/main4.png'


// Videos live in public/services/ and are used by URL (no import needed)
const propertVideo = '/services/propert.mp4'
const designVideo = '/services/design.mp4'

/* ---------- THE SERVICES (edit the text here) ---------- */
const services = [
  {
    label: 'Property Management',
    icon: Building2,
    chip: 'Coimbatore · Complete Care',
    headline: 'Complete Estate Custodianship',
    stats: ['98% Client Retention', '2,500+ Properties Managed'],
    title: 'Residential & Commercial Property Sales & Acquisitions',
text: 'Managing a property requires time, attention, and reliable coordination. With Four Space, we take care of every detail, from regular maintenance and tenant management to rent collection and transparent reporting, ensuring your property remains secure, well-maintained, and valuable.',    points: [
      'Preventive maintenance and 24/7 technical support',
      'Rent collection with transparent monthly statements',
      'Vetted tenants and smooth handovers',
      'Regular condition audits with photo reports',
    ],
    // 1st = video, 2nd = image
    images: [propertVideo, propertImage],
    tones: [
      'bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46]',
      'bg-linear-to-tl from-[#171d36] via-[#2a3156] to-[#7a5c46]',
    ],
  },
  {
    label: 'Financial Assistance',
    icon: Landmark,
    chip: 'Coimbatore · Trusted Partners',
    headline: 'Loans, Mortgages & Insurance',
    stats: ['Multi-Bank Options', 'Paperwork Handled'],
    title: 'Home Loans, Financing & Insurance, Arranged for You',
text: 'Finding the right financial support for your property purchase can be challenging. With Four Space, we simplify the process by connecting you with trusted banking partners, guiding you through loan eligibility, documentation, and financing options to make your property investment smooth and hassle-free.',
    points: [
      'Home loan and mortgage assistance',
      'Debt refinancing and top-up loans',
      'Property insurance and landlord liability cover',
      'Eligibility checks and complete documentation support',
    ],
    images: [main1, '/services/financial-assistance-2.jpg'],
    tones: [
      'bg-linear-to-br from-[#2a3156] via-[#171d36] to-[#5e4535]',
      'bg-linear-to-tl from-[#2a3156] via-[#171d36] to-[#5e4535]',
    ],
  },
  {
    label: 'Buy / Sell Advisory',
    icon: Handshake,
    chip: 'Coimbatore · Discreet Dealings',
    headline: 'Confidential Transactions',
    stats: ['Off-Market Access', 'Verified Titles'],
    title: 'Buy, Sell & Rent with Complete Confidence',
    text: 'Whether you are buying a villa, selling an inherited plot, or renting out an apartment, we find the right counterparty, verify the paperwork, and negotiate firmly on your side.',
    points: [
      'Off-market and pre-launch opportunities',
      'Title and approval checks (DTCP, patta, EC)',
      'Pricing based on real local market data',
      'Negotiation through to registration',
    ],
    images: [main2, '/services/buy-sell-2.jpg'],
    tones: [
      'bg-linear-to-br from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
      'bg-linear-to-tl from-[#7a5c46] via-[#3b3a4f] to-[#171d36]',
    ],
  },
  {
    label: 'Estate Consultancy',
    icon: TrendingUp,
    chip: 'Coimbatore · Data-Led Advice',
    headline: 'Strategic Valuation & Yield',
    stats: ['Local Market Data', 'Clear Exit Plans'],
    title: 'Estate Consultancy for Long-Term Value',
    text: 'We study your holdings and the Coimbatore market to tell you what to keep, what to improve, and when to sell, with clear numbers behind every recommendation.',
    points: [
      'Asset valuation and yield modelling',
      'Repositioning and redevelopment advice',
      'Portfolio reviews with clear action plans',
      'Succession and inheritance planning support',
    ],
    images: [main3, '/services/estate-consultancy-2.jpg'],
    tones: [
      'bg-linear-to-br from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
      'bg-linear-to-tl from-[#171d36] via-[#4a3f3a] to-[#9b7b5f]',
    ],
  },
  {
    label: 'Tenancy Concierge',
    icon: KeyRound,
    chip: 'Coimbatore · Tenant Care',
    headline: 'Tenants, Handled End to End',
    stats: ['Verified Tenants', 'Prompt Rent Collection'],
    title: 'Tenancy Concierge from First Viewing to Handover',
    text: 'We find, screen, and welcome the right tenants, then look after them throughout the lease, so you earn steady rent without the daily phone calls.',
    points: [
      'Marketing and tenant screening',
      'Agreements, deposits, and rent collection',
      'Tenant concerns handled on your behalf',
      'Move-in and move-out inspections',
    ],
    images: [main4, '/services/tenancy-concierge-2.jpg'],
    tones: [
      'bg-linear-to-br from-[#33385a] via-[#171d36] to-[#7a5c46]',
      'bg-linear-to-tl from-[#33385a] via-[#171d36] to-[#7a5c46]',
    ],
  },
  {
    label: 'Interiors & Staging',
    icon: Armchair,
    chip: 'Coimbatore · Design-Led',
    headline: 'Turnkey Interiors & Staging',
    stats: ['Design to Handover', 'Higher Rent & Resale'],
    title: 'Interiors & Staging That Lift Property Value',
    text: 'Our design studio plans, furnishes, and stages your property, from a single room to a complete villa, so it rents faster, sells better, and looks exactly as it should.',
    points: [
      'Space planning and bespoke furniture',
      'Modular kitchens and wardrobes',
      'Staging for faster sales and rentals',
      'One team managing the work to handover',
    ],
    // 1st = video, 2nd = image
    images: [designVideo, interiorsImage],
    tones: [
      'bg-linear-to-br from-[#5e4535] via-[#2a3156] to-[#171d36]',
      'bg-linear-to-tl from-[#5e4535] via-[#2a3156] to-[#171d36]',
    ],
  },
]

const isVideoSrc = (src) => typeof src === 'string' && /\.(mp4|webm|ogg)$/i.test(src)

/* The picture or looping video on a card, or a coloured placeholder if the file is missing */
function CardMedia({ src, alt, service, tone }) {
  const [failed, setFailed] = useState(false)
  const Icon = service.icon

  if (failed) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center ${tone}`}>
        <Icon size={110} strokeWidth={0.8} className="text-white/15" />
      </div>
    )
  }

  const mediaClass =
    'absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110'

  if (isVideoSrc(src)) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
        className={mediaClass}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      onError={() => setFailed(true)}
      className={mediaClass}
    />
  )
}

function ServiceExplorer() {
  const [active, setActive] = useState(0) // which service is selected
  const [shown, setShown] = useState(true) // false for a moment while the details swap
  const [dragging, setDragging] = useState(false)
  const [edges, setEdges] = useState({ start: true, end: false })

  const timer = useRef(null)
  const track = useRef(null)
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false })

  const service = services[active]

  // Know when the row is at its start or end (to grey out the arrows)
  const updateEdges = () => {
    const el = track.current
    if (!el) return
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    })
  }

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => {
      window.removeEventListener('resize', updateEdges)
      clearTimeout(timer.current)
    }
  }, [])

  // Arrow buttons: move one card left or right
  const scrollByCard = (direction) => {
    const el = track.current
    if (!el) return
    const card = el.children[0]
    const step = (card ? card.offsetWidth : 320) + 24
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  // Pick a service: fade the details out, swap, fade in
  const choose = (index) => {
    if (drag.current.moved) return // it was a drag, not a click

    track.current?.children[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })

    if (index === active) return
    clearTimeout(timer.current)
    setShown(false)
    timer.current = setTimeout(() => {
      setActive(index)
      setShown(true)
    }, 350)
  }

  /* Mouse drag to scroll (touch screens scroll by themselves) */
  const onMouseDown = (e) => {
    drag.current = {
      down: true,
      startX: e.pageX,
      scrollLeft: track.current.scrollLeft,
      moved: false,
    }
  }
  const onMouseMove = (e) => {
    if (!drag.current.down) return
    const distance = e.pageX - drag.current.startX
    if (Math.abs(distance) > 6) {
      drag.current.moved = true
      setDragging(true)
    }
    if (drag.current.moved) track.current.scrollLeft = drag.current.scrollLeft - distance
  }
  const endDrag = () => {
    if (!drag.current.down) return
    drag.current.down = false
    setDragging(false)
    // let the click that follows a drag be ignored, then reset
    setTimeout(() => {
      drag.current.moved = false
    }, 0)
  }

  const fade = shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  const delay = (i) => ({ transitionDelay: shown ? `${150 + i * 100}ms` : '0ms' })

  return (
    <section className="overflow-hidden bg-[#faf8f4] pb-12 pt-4 sm:pb-16 lg:pb-24 lg:pt-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* ===== Top row: label + arrows ===== */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#7a5c46]"></span>
            <p className="text-[11px] font-bold uppercase leading-4 tracking-[0.15em] text-[#7a5c46] sm:tracking-[0.2em]">
              Select a practice
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <span className="hidden text-[12px] font-bold tracking-[0.2em] text-slate-400 sm:block">
              {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                disabled={edges.start}
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#e1dacf] bg-white text-[#171d36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171d36] hover:text-white active:scale-90 disabled:cursor-default disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-[#171d36] sm:h-12 sm:w-12"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                disabled={edges.end}
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#e1dacf] bg-white text-[#171d36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171d36] hover:text-white active:scale-90 disabled:cursor-default disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-[#171d36] sm:h-12 sm:w-12"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ===== SCROLLING CARDS ===== */}
        <Reveal>
          <div
            ref={track}
            onScroll={updateEdges}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            className={`-mx-5 mt-4 flex select-none gap-6 overflow-x-auto px-5 pb-10 pt-6 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              dragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
            }`}
          >
            {services.map((item, index) => {
              const Icon = item.icon
              const isActive = index === active

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => choose(index)}
                  aria-pressed={isActive}
                  className={`group relative h-[420px] w-[min(280px,80vw)] shrink-0 snap-center overflow-hidden rounded-2xl text-left shadow-lg shadow-slate-900/10 transition-all duration-500 sm:w-[340px] ${
                    isActive
                      ? '-translate-y-3 shadow-2xl shadow-slate-900/30 ring-2 ring-[#7a5c46] ring-offset-4 ring-offset-[#faf8f4]'
                      : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/25'
                  }`}
                >
                  <CardMedia
                    src={item.images[0]}
                    alt={item.label}
                    service={item}
                    tone={item.tones[0]}
                  />

                  {/* Dark gradient so the text is readable */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-t transition-opacity duration-500 ${
                      isActive
                        ? 'from-[#171d36]/95 via-[#171d36]/45 to-[#171d36]/10'
                        : 'from-[#171d36]/90 via-[#171d36]/50 to-[#171d36]/25 group-hover:from-[#171d36]/90 group-hover:via-[#171d36]/40'
                    }`}
                  ></div>

                  {/* Icon + number */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full backdrop-blur transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                        isActive
                          ? 'bg-[#f3dcc0] text-[#171d36]'
                          : 'bg-[#171d36]/70 text-[#f3dcc0]'
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="text-[12px] font-bold tracking-[0.2em] text-white/80">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Text at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.15em] text-[#f3dcc0] sm:tracking-[0.2em]">
                      {item.chip}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-slate-300">{item.headline}</p>

                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[12px] font-medium text-white/80">
                      <span>{item.stats[0]}</span>
                      <span className="text-[#f3dcc0]">•</span>
                      <span>{item.stats[1]}</span>
                    </div>

                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f3dcc0] sm:mt-5">
                      {isActive ? 'Selected' : 'View details'}
                      {isActive ? (
                        <Check size={14} strokeWidth={2.5} className="shrink-0" />
                      ) : (
                        <ArrowRight
                          size={14}
                          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      )}
                    </span>
                  </div>

                  {/* Bar along the bottom of the selected card */}
                  <span
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-[#f3dcc0] transition-transform duration-500 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ===== DETAILS: help card + content for the selected card ===== */}
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.4fr)] lg:gap-x-12">

          {/* Blue help card (desktop only) */}
          <Reveal direction="left" delay={100} className="hidden lg:block lg:self-start">
            <div className="group relative overflow-hidden rounded-2xl bg-[#171d36] px-8 py-24 text-white shadow-xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1">
              <span className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150"></span>

              <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3dcc0]">
                Direct Counsel
              </p>
              <h3 className="relative mt-3 font-serif text-3xl">Need help choosing?</h3>
              <p className="relative mt-4 text-[15px] leading-7 text-slate-400">
                Our senior advisors give you confidential, honest guidance on your
                property goals.
              </p>

              <Link
                to="/contact"
                className="group/btn relative mt-8 flex items-center justify-between overflow-hidden rounded-lg bg-[#7a5c46] px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-white"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#f3dcc0] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
                <span className="relative transition-colors duration-500 group-hover/btn:text-[#171d36]">
                  Talk to us
                </span>
                <ArrowRight
                  size={18}
                  className="relative transition-all duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:text-[#171d36]"
                />
              </Link>
            </div>
          </Reveal>

          {/* Title, text, points, button */}
          <Reveal direction="right" delay={100} className="min-w-0">
            <div>
              <h2
                style={delay(0)}
                className={`break-words font-serif text-3xl leading-tight text-[#171d36] transition-all duration-700 ease-out sm:text-4xl md:text-5xl ${fade}`}
              >
                {service.title}
              </h2>

              <span
                style={delay(1)}
                className={`mt-5 block h-0.5 bg-[#7a5c46] transition-all duration-1000 ease-out ${
                  shown ? 'w-20' : 'w-0'
                }`}
              ></span>

              <p
                style={delay(2)}
                className={`mt-5 max-w-3xl text-[16px] leading-7 text-slate-600 transition-all duration-700 ease-out sm:mt-6 sm:text-[17px] sm:leading-8 ${fade}`}
              >
                {service.text}
              </p>

              <ul className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
                {service.points.map((point, i) => (
                  <li
                    key={point}
                    style={delay(3 + i)}
                    className={`min-w-0 transition-all duration-700 ease-out ${fade}`}
                  >
                    <div className="group flex h-full items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f6f2ec] text-[#7a5c46] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#171d36] group-hover:text-[#f3dcc0]">
                        <Check size={15} strokeWidth={2.5} />
                      </span>
                      <span className="min-w-0 text-[15px] leading-6 text-[#171d36]">{point}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                style={delay(8)}
                className={`mt-8 transition-all duration-700 ease-out sm:mt-10 ${fade}`}
              >
                <Link
                  to="/contact"
                  className="group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#171d36] px-6 py-4 text-center text-[12px] font-bold uppercase tracking-wider text-white shadow-xl shadow-slate-900/20 sm:inline-flex sm:w-auto sm:px-9 sm:tracking-widest"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
                  <span className="relative">Enquire about this service</span>
                  <ArrowRight
                    size={16}
                    className="relative shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Full-width scope panel */}
      <ServiceScope index={active} shown={shown} />
    </section>
  )
}

export default ServiceExplorer