// import { useEffect, useRef, useState } from 'react'
// import { ArrowRight } from 'lucide-react'
// import Reveal from './Reveal'
// import p from '../assets/images/p.png'

// const paragraphs = [
//   'Four-Space emerged from a singular conviction: that extraordinary real estate demands a standard of governance that traditional agencies simply cannot deliver. Founded in response to the growing complexity of residential and commercial ownership, we united institutional capital discipline with bespoke architectural craftsmanship.',
//   'Over the years, our practice has evolved into a full-spectrum asset advisory, safeguarding prime private portfolios across Coimbatore. We treat every villa, apartment, and landmark building as an irreplaceable asset, elevating its life-cycle through rigorous maintenance engineering and precision market timing.',
//   'Operating with uncompromising discretion, our advisory desk shields families, business owners, and investors from operational friction. We deliver transparent financial governance, frictionless regulatory compliance, and an unwavering commitment to enduring capital appreciation.',
// ]

// /* ---------- DRAWN HOUSES (shown when a photo file is missing) ---------- */
// function HouseArt({ state }) {
//   if (state === 'old') {
//     return (
//       <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
//         <rect width="600" height="600" fill="#cdc7bc" />
//         <rect y="440" width="600" height="160" fill="#8f8777" />

//         {/* house body */}
//         <rect x="110" y="250" width="380" height="190" fill="#b5a58c" />
//         <ellipse cx="430" cy="400" rx="50" ry="32" fill="#8f7f68" opacity="0.55" />
//         <ellipse cx="160" cy="270" rx="36" ry="16" fill="#9c8c74" opacity="0.5" />
//         <path d="M145 255 l14 30 l-10 24 l18 32" stroke="#6b5c48" strokeWidth="3" fill="none" />
//         <path d="M455 270 l-12 26 l12 22" stroke="#6b5c48" strokeWidth="3" fill="none" />

//         {/* sagging roof with missing tiles */}
//         <polygon points="85,255 300,130 515,255" fill="#6b5648" />
//         <polygon points="250,185 280,165 305,188 270,200" fill="#cdc7bc" />
//         <polygon points="380,200 405,192 418,215 392,220" fill="#cdc7bc" />

//         {/* dark cracked windows */}
//         <rect x="140" y="300" width="90" height="76" fill="#4a4540" />
//         <path d="M185 300 v76 M140 338 h90" stroke="#8f8777" strokeWidth="4" />
//         <path d="M152 305 l24 28 l-8 20" stroke="#cdc7bc" strokeWidth="2" fill="none" />
//         <rect x="370" y="300" width="90" height="76" fill="#4a4540" />
//         <path d="M415 300 v76 M370 338 h90" stroke="#8f8777" strokeWidth="4" />

//         {/* worn door */}
//         <rect x="268" y="332" width="64" height="108" fill="#5b4636" />
//         <circle cx="320" cy="388" r="3" fill="#a89a82" />

//         {/* weeds and a broken fence */}
//         <path d="M40 445 l8 -30 l8 30 M70 445 l6 -24 l8 24 M520 445 l8 -34 l8 34" stroke="#6f7b52" strokeWidth="5" fill="none" />
//         <rect x="24" y="420" width="8" height="30" fill="#6b5648" />
//         <rect x="62" y="428" width="8" height="22" fill="#6b5648" />
//         <rect x="552" y="420" width="8" height="30" fill="#6b5648" />
//       </svg>
//     )
//   }

//   return (
//     <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
//       <defs>
//         <linearGradient id="skyNew" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#f6e2c8" />
//           <stop offset="100%" stopColor="#fbf7f0" />
//         </linearGradient>
//       </defs>
//       <rect width="600" height="600" fill="url(#skyNew)" />
//       <rect y="440" width="600" height="160" fill="#86987a" />
//       <polygon points="250,600 350,600 330,440 270,440" fill="#e8dfcf" />

//       {/* modern house */}
//       <rect x="100" y="270" width="250" height="170" fill="#f6f2ec" />
//       <rect x="85" y="255" width="290" height="16" fill="#171d36" />
//       <rect x="350" y="210" width="160" height="230" fill="#171d36" />
//       <rect x="338" y="196" width="184" height="15" fill="#7a5c46" />
//       <rect x="318" y="270" width="34" height="170" fill="#7a5c46" />
//       <path d="M327 270 v170 M337 270 v170 M346 270 v170" stroke="#5e4535" strokeWidth="2" />

//       {/* glass with warm light */}
//       <rect x="125" y="300" width="170" height="100" fill="#f3dcc0" />
//       <path d="M182 300 v100 M238 300 v100" stroke="#d6bf9f" strokeWidth="3" />
//       <rect x="372" y="240" width="116" height="70" fill="#f3dcc0" />
//       <path d="M430 240 v70" stroke="#c9b08c" strokeWidth="3" />
//       <rect x="395" y="340" width="48" height="100" fill="#7a5c46" />
//       <circle cx="432" cy="392" r="3" fill="#f3dcc0" />

//       {/* lights and plants */}
//       <circle cx="108" cy="288" r="4" fill="#f3dcc0" />
//       <circle cx="500" cy="340" r="4" fill="#f3dcc0" />
//       <circle cx="70" cy="440" r="26" fill="#5f7a52" />
//       <circle cx="100" cy="452" r="20" fill="#6f8c60" />
//       <circle cx="540" cy="440" r="28" fill="#5f7a52" />
//       <circle cx="510" cy="454" r="18" fill="#6f8c60" />
//     </svg>
//   )
// }

// /* Video (if given) -> photo -> drawing. The first one that works is shown. */
// function HeritageImage({ src, video, alt, caption, tag, tagStyle, state, className }) {
//   const [failed, setFailed] = useState(false)
//   const [videoFailed, setVideoFailed] = useState(false)
//   const videoRef = useRef(null)

//   const showVideo = video && !videoFailed

//   // Force the video to play (React sometimes ignores the muted attribute)
//   useEffect(() => {
//     const el = videoRef.current
//     if (!el) return
//     el.muted = true
//     el.play().catch(() => {})
//   }, [showVideo])

//   return (
//     <div
//       className={`group absolute overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(23,29,54,0.5)] ${className}`}
//     >
//       <div className="h-full w-full transition-transform duration-[1500ms] ease-out group-hover:scale-110">
//         {showVideo ? (
//           <video
//             ref={videoRef}
//             src={video}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             onError={() => setVideoFailed(true)}
//             className="h-full w-full object-cover"
//           ></video>
//         ) : !failed ? (
//           <img
//             src={p}
//             alt={alt}
//             onError={() => setFailed(true)}
//             className="h-full w-full object-fix"
//           />
//         ) : (
//           <HouseArt state={state} />
//         )}
//       </div>

//       {/* Old Home / New Home tag */}
//       <span
//         className={`absolute left-4 top-4 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-transform duration-500 group-hover:translate-x-1 ${tagStyle}`}
//       >
//         {tag}
//       </span>

//       {/* Dark gradient from the bottom */}
//       <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#171d36]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

//       {/* Thin frame that appears inside */}
//       <div className="pointer-events-none absolute inset-4 scale-95 rounded-xl border border-white/70 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"></div>

//       {/* Light shine sweeping across */}
//       <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/20 transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></div>

//       {/* Caption sliding up */}
//       <p className="pointer-events-none absolute bottom-6 left-6 translate-y-6 font-serif text-xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//         {caption}
//       </p>
//     </div>
//   )
// }

// function Heritage() {
//   return (
//     <section className="overflow-hidden bg-white pt-8 pb-20 lg:pt-12 lg:pb-24">
//       <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">

//         {/* ========== LEFT: OLD HOME -> NEW HOME ========== */}
//         <Reveal direction="left">
//           <div className="relative mx-auto h-[520px] w-full max-w-xl md:h-[640px] lg:max-w-none">

//             {/* Old home (large) - this one plays the video */}
//             <HeritageImage
//               video="/video2.mp4"
//               src="/heritage-old.jpg"
//               alt="Old home before renovation"
//               caption="Tired and ageing"
//               tag="Old Home"
//               tagStyle="bg-[#171d36] text-white"
//               state="old"
//               className="left-0 top-0 h-[88%] w-[78%]"
//             />

//             {/* New home (small, overlapping) - this one shows p.png */}
//             <HeritageImage
//               src="/p.png"
//               alt="Renovated new home"
//               caption="Modern and valued"
//               tag="New Home"
//               tagStyle="bg-[#f3dcc0] text-[#171d36]"
//               state="new"
//               className="bottom-0 right-0 z-10 h-[46%] w-[62%] border-4 border-white"
//             />

//             {/* Arrow showing the transformation */}
//             <div className="absolute left-[38%] top-[77%] z-20 -translate-x-1/2 -translate-y-1/2">
//               <div className="flex h-12 w-12 animate-float items-center justify-center rounded-full bg-[#7a5c46] text-white shadow-xl ring-4 ring-white">
//                 <ArrowRight size={20} />
//               </div>
//             </div>

//             {/* Established badge */}
//             <div className="absolute right-0 top-8 z-20 animate-float rounded-xl bg-[#171d36] px-7 py-4 text-center shadow-2xl shadow-slate-900/30 md:right-4">
//               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3dcc0]">
//                 Established
//               </p>
//               <p className="mt-1 font-serif text-4xl text-white">2010</p>
//             </div>
//           </div>
//         </Reveal>

//         {/* ========== RIGHT: TEXT ========== */}
//         <div>
//           <Reveal>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-10 bg-[#7a5c46]"></span>
//               <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#7a5c46]">
//                 Our Heritage &amp; Origin
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={150}>
//             <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-[#171d36] md:text-5xl lg:text-6xl">
//               Built on Architectural Distinction and Relentless Care
//             </h2>
//           </Reveal>

//           <div className="mt-10 space-y-6">
//             {paragraphs.map((text, index) => (
//               <Reveal key={index} delay={300 + index * 200}>
//                 <p className="border-l-2 border-transparent pl-0 text-[16px] leading-8 text-slate-600 transition-all duration-500 hover:border-[#7a5c46] hover:pl-5 hover:text-[#171d36] md:text-[17px]">
//                   {text}
//                 </p>
//               </Reveal>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Heritage

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import p from '../assets/images/p.png'

const paragraphs = [
  'Four-Space emerged from a singular conviction: that extraordinary real estate demands a standard of governance that traditional agencies simply cannot deliver. Founded in response to the growing complexity of residential and commercial ownership, we united institutional capital discipline with bespoke architectural craftsmanship.',
  'Over the years, our practice has evolved into a full-spectrum asset advisory, safeguarding prime private portfolios across Coimbatore. We treat every villa, apartment, and landmark building as an irreplaceable asset, elevating its life-cycle through rigorous maintenance engineering and precision market timing.',
  'Operating with uncompromising discretion, our advisory desk shields families, business owners, and investors from operational friction. We deliver transparent financial governance, frictionless regulatory compliance, and an unwavering commitment to enduring capital appreciation.',
]

/* ---------- DRAWN HOUSES (shown when a photo file is missing) ---------- */
function HouseArt({ state }) {
  if (state === 'old') {
    return (
      <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <rect width="600" height="600" fill="#cdc7bc" />
        <rect y="440" width="600" height="160" fill="#8f8777" />

        {/* house body */}
        <rect x="110" y="250" width="380" height="190" fill="#b5a58c" />
        <ellipse cx="430" cy="400" rx="50" ry="32" fill="#8f7f68" opacity="0.55" />
        <ellipse cx="160" cy="270" rx="36" ry="16" fill="#9c8c74" opacity="0.5" />
        <path d="M145 255 l14 30 l-10 24 l18 32" stroke="#6b5c48" strokeWidth="3" fill="none" />
        <path d="M455 270 l-12 26 l12 22" stroke="#6b5c48" strokeWidth="3" fill="none" />

        {/* sagging roof with missing tiles */}
        <polygon points="85,255 300,130 515,255" fill="#6b5648" />
        <polygon points="250,185 280,165 305,188 270,200" fill="#cdc7bc" />
        <polygon points="380,200 405,192 418,215 392,220" fill="#cdc7bc" />

        {/* dark cracked windows */}
        <rect x="140" y="300" width="90" height="76" fill="#4a4540" />
        <path d="M185 300 v76 M140 338 h90" stroke="#8f8777" strokeWidth="4" />
        <path d="M152 305 l24 28 l-8 20" stroke="#cdc7bc" strokeWidth="2" fill="none" />
        <rect x="370" y="300" width="90" height="76" fill="#4a4540" />
        <path d="M415 300 v76 M370 338 h90" stroke="#8f8777" strokeWidth="4" />

        {/* worn door */}
        <rect x="268" y="332" width="64" height="108" fill="#5b4636" />
        <circle cx="320" cy="388" r="3" fill="#a89a82" />

        {/* weeds and a broken fence */}
        <path d="M40 445 l8 -30 l8 30 M70 445 l6 -24 l8 24 M520 445 l8 -34 l8 34" stroke="#6f7b52" strokeWidth="5" fill="none" />
        <rect x="24" y="420" width="8" height="30" fill="#6b5648" />
        <rect x="62" y="428" width="8" height="22" fill="#6b5648" />
        <rect x="552" y="420" width="8" height="30" fill="#6b5648" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="skyNew" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e2c8" />
          <stop offset="100%" stopColor="#fbf7f0" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#skyNew)" />
      <rect y="440" width="600" height="160" fill="#86987a" />
      <polygon points="250,600 350,600 330,440 270,440" fill="#e8dfcf" />

      {/* modern house */}
      <rect x="100" y="270" width="250" height="170" fill="#f6f2ec" />
      <rect x="85" y="255" width="290" height="16" fill="#171d36" />
      <rect x="350" y="210" width="160" height="230" fill="#171d36" />
      <rect x="338" y="196" width="184" height="15" fill="#7a5c46" />
      <rect x="318" y="270" width="34" height="170" fill="#7a5c46" />
      <path d="M327 270 v170 M337 270 v170 M346 270 v170" stroke="#5e4535" strokeWidth="2" />

      {/* glass with warm light */}
      <rect x="125" y="300" width="170" height="100" fill="#f3dcc0" />
      <path d="M182 300 v100 M238 300 v100" stroke="#d6bf9f" strokeWidth="3" />
      <rect x="372" y="240" width="116" height="70" fill="#f3dcc0" />
      <path d="M430 240 v70" stroke="#c9b08c" strokeWidth="3" />
      <rect x="395" y="340" width="48" height="100" fill="#7a5c46" />
      <circle cx="432" cy="392" r="3" fill="#f3dcc0" />

      {/* lights and plants */}
      <circle cx="108" cy="288" r="4" fill="#f3dcc0" />
      <circle cx="500" cy="340" r="4" fill="#f3dcc0" />
      <circle cx="70" cy="440" r="26" fill="#5f7a52" />
      <circle cx="100" cy="452" r="20" fill="#6f8c60" />
      <circle cx="540" cy="440" r="28" fill="#5f7a52" />
      <circle cx="510" cy="454" r="18" fill="#6f8c60" />
    </svg>
  )
}

/* Video (if given) -> photo -> drawing. The first one that works is shown. */
function HeritageImage({ src, video, alt, caption, tag, tagStyle, state, className }) {
  const [failed, setFailed] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef(null)

  const showVideo = video && !videoFailed

  // Force the video to play (React sometimes ignores the muted attribute)
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    el.play().catch(() => {})
  }, [showVideo])

  return (
    <div
      className={`group absolute overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(23,29,54,0.5)] ${className}`}
    >
      <div className="h-full w-full transition-transform duration-[1500ms] ease-out group-hover:scale-110">
        {showVideo ? (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
            className="h-full w-full object-cover"
          ></video>
        ) : !failed ? (
          <img
            src={p}
            alt={alt}
            onError={() => setFailed(true)}
            className="h-full w-full object-fix"
          />
        ) : (
          <HouseArt state={state} />
        )}
      </div>

      {/* Old Home / New Home tag */}
      <span
        className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest transition-transform duration-500 group-hover:translate-x-1 sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 ${tagStyle}`}
      >
        {tag}
      </span>

      {/* Dark gradient from the bottom */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#171d36]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Thin frame that appears inside */}
      <div className="pointer-events-none absolute inset-3 scale-95 rounded-xl border border-white/70 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 sm:inset-4"></div>

      {/* Light shine sweeping across */}
      <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/20 transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></div>

      {/* Caption sliding up */}
      <p className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-6 font-serif text-base leading-snug text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-6 sm:left-6 sm:right-6 sm:text-xl">
        {caption}
      </p>
    </div>
  )
}

function Heritage() {
  return (
    <section className="overflow-hidden bg-white pt-8 pb-16 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-20">

        {/* ========== LEFT: OLD HOME -> NEW HOME ========== */}
        <Reveal direction="left" className="min-w-0">
          <div className="relative mx-auto h-[440px] w-full max-w-xl sm:h-[520px] md:h-[640px] lg:max-w-none">

            {/* Old home (large) - this one plays the video */}
            <HeritageImage
              video="/video2.mp4"
              src="/heritage-old.jpg"
              alt="Old home before renovation"
              caption="Tired and ageing"
              tag="Old Home"
              tagStyle="bg-[#171d36] text-white"
              state="old"
              className="left-0 top-0 h-[88%] w-[78%]"
            />

            {/* New home (small, overlapping) - this one shows p.png */}
            <HeritageImage
              src="/p.png"
              alt="Renovated new home"
              caption="Modern and valued"
              tag="New Home"
              tagStyle="bg-[#f3dcc0] text-[#171d36]"
              state="new"
              className="bottom-0 right-0 z-10 h-[46%] w-[62%] border-4 border-white"
            />

            {/* Arrow showing the transformation */}
            <div className="absolute left-[38%] top-[77%] z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-10 w-10 animate-float items-center justify-center rounded-full bg-[#7a5c46] text-white shadow-xl ring-4 ring-white sm:h-12 sm:w-12">
                <ArrowRight size={20} />
              </div>
            </div>

            {/* Established badge */}
            <div className="absolute right-0 top-6 z-20 animate-float rounded-xl bg-[#171d36] px-5 py-3 text-center shadow-2xl shadow-slate-900/30 sm:top-8 sm:px-7 sm:py-4 md:right-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3dcc0] sm:text-[11px]">
                Established
              </p>
              <p className="mt-1 font-serif text-3xl text-white sm:text-4xl">2010</p>
            </div>
          </div>
        </Reveal>

        {/* ========== RIGHT: TEXT ========== */}
        <div className="min-w-0">
          <Reveal>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 shrink-0 bg-[#7a5c46] sm:w-10"></span>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7a5c46] sm:tracking-[0.25em]">
                Our Heritage &amp; Origin
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="mt-5 break-words font-serif text-3xl leading-[1.1] text-[#171d36] sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Built on Architectural Distinction and Relentless Care
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
            {paragraphs.map((text, index) => (
              <Reveal key={index} delay={300 + index * 200}>
                <p className="border-l-2 border-transparent pl-0 text-[15px] leading-7 text-slate-600 transition-all duration-500 hover:border-[#7a5c46] hover:pl-5 hover:text-[#171d36] sm:text-[16px] sm:leading-8 md:text-[17px]">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Heritage