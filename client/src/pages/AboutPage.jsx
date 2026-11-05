// import { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { BadgeCheck, Shield, Gem, Compass, Play } from 'lucide-react'

// const badges = [
//   { icon: BadgeCheck, label: 'Trusted Advisory Desk' },
//   { icon: Shield, label: 'Premium Standard' },
//   { icon: Gem, label: 'Discreet Placement' },
// ]

// const headingWords = ['A', 'partnership', 'you', 'can', 'count', 'on']

// function AboutPage() {
//   const [mounted, setMounted] = useState(false) // page entrance
//   const [active, setActive] = useState(false)   // video hover / touch
//   const [videoFailed, setVideoFailed] = useState(false)
//   const videoRef = useRef(null)

//   // Page entrance animation
//   useEffect(() => {
//     const timer = setTimeout(() => setMounted(true), 60)
//     return () => clearTimeout(timer)
//   }, [])

//   // Force the video to play (React sometimes ignores the muted attribute)
//   useEffect(() => {
//     const el = videoRef.current
//     if (!el) return
//     el.muted = true
//     el.play().catch(() => {})
//   }, [])

//   const rise = mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'

//   return (
//     <section className="relative overflow-hidden bg-[#f6f2ec]">
//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-20 lg:pt-7">

//         {/* ========== LEFT: TEXT ========== */}
//         <div>

//           {/* Breadcrumb */}
//           <nav
//             style={{ transitionDelay: '100ms' }}
//             className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-1000 ease-out ${rise}`}
//           >
//             <Link to="/" className="text-[#7a5c46] transition-colors hover:text-[#171d36]">
//               Home
//             </Link>
//             <span className="text-slate-400">/</span>
//             <span className="text-[#171d36]">About</span>
//           </nav>

//           {/* Label with a line that grows */}
//           <div className="mt-8 flex items-center gap-4">
//             <span
//               style={{ transitionDelay: '300ms' }}
//               className={`h-px origin-left bg-[#7a5c46] transition-all duration-1000 ease-out ${
//                 mounted ? 'w-10 opacity-100' : 'w-0 opacity-0'
//               }`}
//             ></span>
//             <p
//               style={{ transitionDelay: '400ms' }}
//               className={`text-[12px] font-bold uppercase tracking-[0.25em] text-[#7a5c46] transition-all duration-1000 ease-out ${rise}`}
//             >
//               About Four-Space
//             </p>
//           </div>

//           {/* Heading: words rise one by one */}
//           <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-[#171d36] md:text-7xl">
//             {headingWords.map((word, index) => (
//               <span
//                 key={word}
//                 style={{ transitionDelay: `${500 + index * 110}ms` }}
//                 className={`mr-[0.25em] inline-block transition-all duration-1000 ease-out ${rise}`}
//               >
//                 {word}
//               </span>
//             ))}
//           </h1>

//           {/* Paragraph */}
//           <p
//             style={{ transitionDelay: '1200ms' }}
//             className={`mt-8 max-w-2xl text-lg leading-8 text-slate-600 transition-all duration-1000 ease-out md:text-xl md:leading-9 ${rise}`}
//           >
//             Stewarding high-value architectural assets, prime residential
//             portfolios, and generational property legacies across Coimbatore
//             with institutional precision.
//           </p>

//           {/* Trust badges */}
//           <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
//             {badges.map((item, index) => (
//               <div key={item.label} className="flex items-center gap-8">
//                 <div
//                   style={{ transitionDelay: `${1400 + index * 150}ms` }}
//                   className={`group flex cursor-default items-center gap-3 transition-all duration-1000 ease-out ${rise}`}
//                 >
//                   <item.icon
//                     size={24}
//                     strokeWidth={1.6}
//                     className="text-[#7a5c46] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125"
//                   />
//                   <span className="border-b border-transparent pb-0.5 text-[12px] font-bold uppercase tracking-wide text-[#171d36] transition-colors duration-300 group-hover:border-[#7a5c46]">
//                     {item.label}
//                   </span>
//                 </div>

//                 {/* Dot between badges (not after the last one) */}
//                 {index < badges.length - 1 && (
//                   <span className="hidden h-1.5 w-1.5 rounded-full bg-[#7a5c46]/40 md:block"></span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ========== RIGHT: VIDEO ========== */}
//         <div
//           style={{ transitionDelay: '500ms' }}
//           className={`relative mx-auto w-full max-w-[400px] transition-all duration-1000 ease-out lg:max-w-[440px] ${
//             mounted ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
//           }`}
//         >

//           {/* Dashed frame behind the video, slides out on hover */}
//           <div
//             className={`absolute inset-0 rounded-3xl border border-dashed border-[#7a5c46]/50 transition-transform duration-700 ease-out ${
//               active ? 'translate-x-5 translate-y-5' : 'translate-x-2 translate-y-2'
//             }`}
//           ></div>

//           {/* Video box */}
//           <div
//             onMouseEnter={() => setActive(true)}
//             onMouseLeave={() => setActive(false)}
//             onTouchStart={() => setActive((value) => !value)}
//             className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-3xl bg-[#171d36] shadow-2xl shadow-slate-900/25"
//           >
//             {/* The video (blurred until you touch it) */}
//             {videoFailed ? (
//               <div
//                 className={`flex h-full w-full items-center justify-center bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46] transition-all duration-[1400ms] ease-out ${
//                   active ? 'scale-100 blur-0' : 'scale-110 blur-md'
//                 }`}
//               >
//                 <Play size={56} className="text-white/30" strokeWidth={1.2} />
//               </div>
//             ) : (
//               <video
//                 ref={videoRef}
//                 src="/video1.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="auto"
//                 onError={() => setVideoFailed(true)}
//                 className={`h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
//                   active ? 'scale-100 blur-0' : 'scale-110 blur-md'
//                 }`}
//               ></video>
//             )}

//             {/* Dark tint that fades away */}
//             <div
//               className={`pointer-events-none absolute inset-0 bg-[#171d36] transition-opacity duration-1000 ${
//                 active ? 'opacity-0' : 'opacity-30'
//               }`}
//             ></div>

//             {/* Border lines that draw around the video */}
//             <div className="pointer-events-none absolute inset-5">
//               <span
//                 className={`absolute left-0 top-0 h-px w-full origin-left bg-[#f3dcc0] transition-transform duration-700 ease-out ${
//                   active ? 'scale-x-100' : 'scale-x-0'
//                 }`}
//               ></span>
//               <span
//                 style={{ transitionDelay: active ? '150ms' : '0ms' }}
//                 className={`absolute right-0 top-0 h-full w-px origin-top bg-[#f3dcc0] transition-transform duration-700 ease-out ${
//                   active ? 'scale-y-100' : 'scale-y-0'
//                 }`}
//               ></span>
//               <span
//                 style={{ transitionDelay: active ? '300ms' : '0ms' }}
//                 className={`absolute bottom-0 right-0 h-px w-full origin-right bg-[#f3dcc0] transition-transform duration-700 ease-out ${
//                   active ? 'scale-x-100' : 'scale-x-0'
//                 }`}
//               ></span>
//               <span
//                 style={{ transitionDelay: active ? '450ms' : '0ms' }}
//                 className={`absolute bottom-0 left-0 h-full w-px origin-bottom bg-[#f3dcc0] transition-transform duration-700 ease-out ${
//                   active ? 'scale-y-100' : 'scale-y-0'
//                 }`}
//               ></span>
//             </div>

//             {/* Hint that disappears when active */}
//             <div
//               className={`pointer-events-none absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#171d36] backdrop-blur transition-all duration-500 ${
//                 active ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
//               }`}
//             >
//               <Play size={12} fill="currentColor" /> Touch to reveal
//             </div>
//           </div>

//           {/* Floating "Curation Index" card */}
//           <div className="absolute -bottom-8 -left-4 z-10 flex animate-float items-center gap-4 rounded-xl bg-white px-6 py-4 shadow-2xl shadow-slate-900/15 md:-left-10">
//             <Compass size={26} strokeWidth={1.5} className="shrink-0 text-[#7a5c46]" />
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-[#171d36]">
//                 Curation Index
//               </p>
//               <p className="whitespace-nowrap font-serif text-2xl text-[#171d36]">
//                 FOUR SPACE Prime
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default AboutPage

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck, Shield, Gem, Compass, Play } from 'lucide-react'

const badges = [
  { icon: BadgeCheck, label: 'Trusted Advisory Desk' },
  { icon: Shield, label: 'Premium Standard' },
  { icon: Gem, label: 'Discreet Placement' },
]

const headingWords = ['A', 'partnership', 'you', 'can', 'count', 'on']

function AboutPage() {
  const [mounted, setMounted] = useState(false) // page entrance
  const [active, setActive] = useState(false)   // video hover / touch
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef(null)

  // Page entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(timer)
  }, [])

  // Force the video to play (React sometimes ignores the muted attribute)
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    el.play().catch(() => {})
  }, [])

  const rise = mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'

  return (
    <section className="relative overflow-hidden bg-[#f6f2ec]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-20 lg:pt-7">

        {/* ========== LEFT: TEXT ========== */}
        <div className="min-w-0">

          {/* Breadcrumb */}
          <nav
            style={{ transitionDelay: '100ms' }}
            className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-1000 ease-out ${rise}`}
          >
            <Link to="/" className="text-[#7a5c46] transition-colors hover:text-[#171d36]">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#171d36]">About</span>
          </nav>

          {/* Label with a line that grows */}
          <div className="mt-8 flex items-center gap-4">
            <span
              style={{ transitionDelay: '300ms' }}
              className={`h-px shrink-0 origin-left bg-[#7a5c46] transition-all duration-1000 ease-out ${
                mounted ? 'w-10 opacity-100' : 'w-0 opacity-0'
              }`}
            ></span>
            <p
              style={{ transitionDelay: '400ms' }}
              className={`text-[12px] font-bold uppercase tracking-[0.2em] text-[#7a5c46] transition-all duration-1000 ease-out sm:tracking-[0.25em] ${rise}`}
            >
              About Four-Space
            </p>
          </div>

          {/* Heading: words rise one by one */}
          <h1 className="mt-6 break-words font-serif text-4xl leading-[1.05] text-[#171d36] sm:text-5xl md:text-7xl">
            {headingWords.map((word, index) => (
              <span
                key={word}
                style={{ transitionDelay: `${500 + index * 110}ms` }}
                className={`mr-[0.25em] inline-block transition-all duration-1000 ease-out ${rise}`}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Paragraph */}
          <p
            style={{ transitionDelay: '1200ms' }}
            className={`mt-8 max-w-2xl text-base leading-7 text-slate-600 transition-all duration-1000 ease-out sm:text-lg sm:leading-8 md:text-xl md:leading-9 ${rise}`}
          >
            Stewarding high-value architectural assets, prime residential
            portfolios, and generational property legacies across Coimbatore
            with institutional precision.
          </p>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-5 sm:gap-x-8">
            {badges.map((item, index) => (
              <div key={item.label} className="flex items-center gap-8">
                <div
                  style={{ transitionDelay: `${1400 + index * 150}ms` }}
                  className={`group flex cursor-default items-center gap-3 transition-all duration-1000 ease-out ${rise}`}
                >
                  <item.icon
                    size={24}
                    strokeWidth={1.6}
                    className="shrink-0 text-[#7a5c46] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125"
                  />
                  <span className="border-b border-transparent pb-0.5 text-[12px] font-bold uppercase tracking-wide text-[#171d36] transition-colors duration-300 group-hover:border-[#7a5c46]">
                    {item.label}
                  </span>
                </div>

                {/* Dot between badges (not after the last one) */}
                {index < badges.length - 1 && (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-[#7a5c46]/40 md:block"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========== RIGHT: VIDEO ========== */}
        <div
          style={{ transitionDelay: '500ms' }}
          className={`relative mx-auto w-full max-w-[400px] min-w-0 transition-all duration-1000 ease-out lg:max-w-[440px] ${
            mounted ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}
        >

          {/* Dashed frame behind the video, slides out on hover */}
          <div
            className={`absolute inset-0 rounded-3xl border border-dashed border-[#7a5c46]/50 transition-transform duration-700 ease-out ${
              active ? 'translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5' : 'translate-x-2 translate-y-2'
            }`}
          ></div>

          {/* Video box */}
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onTouchStart={() => setActive((value) => !value)}
            className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-3xl bg-[#171d36] shadow-2xl shadow-slate-900/25"
          >
            {/* The video (blurred until you touch it) */}
            {videoFailed ? (
              <div
                className={`flex h-full w-full items-center justify-center bg-linear-to-br from-[#171d36] via-[#2a3156] to-[#7a5c46] transition-all duration-[1400ms] ease-out ${
                  active ? 'scale-100 blur-0' : 'scale-110 blur-md'
                }`}
              >
                <Play size={56} className="text-white/30" strokeWidth={1.2} />
              </div>
            ) : (
              <video
                ref={videoRef}
                src="/video1.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={() => setVideoFailed(true)}
                className={`h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
                  active ? 'scale-100 blur-0' : 'scale-110 blur-md'
                }`}
              ></video>
            )}

            {/* Dark tint that fades away */}
            <div
              className={`pointer-events-none absolute inset-0 bg-[#171d36] transition-opacity duration-1000 ${
                active ? 'opacity-0' : 'opacity-30'
              }`}
            ></div>

            {/* Border lines that draw around the video */}
            <div className="pointer-events-none absolute inset-5">
              <span
                className={`absolute left-0 top-0 h-px w-full origin-left bg-[#f3dcc0] transition-transform duration-700 ease-out ${
                  active ? 'scale-x-100' : 'scale-x-0'
                }`}
              ></span>
              <span
                style={{ transitionDelay: active ? '150ms' : '0ms' }}
                className={`absolute right-0 top-0 h-full w-px origin-top bg-[#f3dcc0] transition-transform duration-700 ease-out ${
                  active ? 'scale-y-100' : 'scale-y-0'
                }`}
              ></span>
              <span
                style={{ transitionDelay: active ? '300ms' : '0ms' }}
                className={`absolute bottom-0 right-0 h-px w-full origin-right bg-[#f3dcc0] transition-transform duration-700 ease-out ${
                  active ? 'scale-x-100' : 'scale-x-0'
                }`}
              ></span>
              <span
                style={{ transitionDelay: active ? '450ms' : '0ms' }}
                className={`absolute bottom-0 left-0 h-full w-px origin-bottom bg-[#f3dcc0] transition-transform duration-700 ease-out ${
                  active ? 'scale-y-100' : 'scale-y-0'
                }`}
              ></span>
            </div>

            {/* Hint that disappears when active */}
            <div
              className={`pointer-events-none absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#171d36] backdrop-blur transition-all duration-500 ${
                active ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <Play size={12} fill="currentColor" /> Touch to reveal
            </div>
          </div>

          {/* Floating "Curation Index" card */}
          <div className="absolute -bottom-8 -left-2 z-10 flex max-w-[calc(100%+0.5rem)] animate-float items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-2xl shadow-slate-900/15 sm:-left-4 sm:gap-4 sm:px-6 sm:py-4 md:-left-10">
            <Compass size={26} strokeWidth={1.5} className="shrink-0 text-[#7a5c46]" />
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#171d36]">
                Curation Index
              </p>
              <p className="whitespace-nowrap font-serif text-xl text-[#171d36] sm:text-2xl">
                FOUR SPACE Prime
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutPage