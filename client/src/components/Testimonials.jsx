// import { Star, Quote } from 'lucide-react'
// import useInView from '../hooks/useInView'

// const testimonials = [
//   {
//     name: 'Karthik Subramanian',
//     role: 'Textile Mill Owner, Race Course',
//     text: 'Managing four rental properties across Coimbatore alongside my mill was a constant headache. Four-Space turned them into a fully organised, stress-free income stream.',
//   },
//   {
//     name: 'Priya Venkatesh',
//     role: 'IT Professional, Saravanampatti',
//     text: 'Their staging and tenant vetting are unmatched. They found a reliable corporate tenant within 14 days, at 22% above the rent I had expected.',
//   },
//   {
//     name: 'Arjun Ramaswamy',
//     role: 'Managing Director, Peelamedu',
//     text: 'Clear accounting, complete maintenance transparency, and total discretion. Four-Space is the gold standard of property management in Coimbatore.',
//   },
// ]

// function TestimonialCard({ item, index }) {
//   const [ref, inView] = useInView(0.2)
//   const baseDelay = index * 200

//   return (
//     /* Outer box: handles the scroll entrance */
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${baseDelay}ms` }}
//       className={`h-full transition-all duration-1000 ease-out ${
//         inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
//       }`}
//     >
//       {/* Inner box: handles the hover effects */}
//       <div className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-[#f6f2ec] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-slate-900/10">

//         {/* Brown line that draws across the top on hover */}
//         <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#7a5c46] transition-all duration-700 group-hover:w-full"></span>

//         {/* Big faded quote mark */}
//         <Quote
//           size={64}
//           className="absolute right-6 top-6 text-[#7a5c46]/10 transition-all duration-700 group-hover:rotate-6 group-hover:scale-125 group-hover:text-[#7a5c46]/25"
//         />

//         {/* Stars pop in one by one */}
//         <div className="relative flex gap-1.5">
//           {[0, 1, 2, 3, 4].map((star) => (
//             <Star
//               key={star}
//               size={18}
//               fill="currentColor"
//               style={{ transitionDelay: `${baseDelay + 500 + star * 120}ms` }}
//               className={`text-[#7a5c46] transition-all duration-500 ${
//                 inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Quote text */}
//         <p className="relative mt-6 flex-1 text-[17px] leading-8 text-[#171d36]">
//           “{item.text}”
//         </p>

//         {/* Person */}
//         <div className="relative mt-8 flex items-center gap-4 border-t border-slate-300 pt-6">
//           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171d36] font-serif text-lg text-[#f3dcc0] ring-0 ring-[#7a5c46]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#7a5c46] group-hover:ring-4">
//             {item.name.charAt(0)}
//           </div>
//           <div>
//             <p className="text-[11px] font-bold uppercase tracking-widest text-[#171d36]">
//               {item.name}
//             </p>
//             <p className="mt-0.5 text-[13px] text-[#7a5c46]">{item.role}</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// function Testimonials() {
//   const [ref, inView] = useInView(0.3)

//   return (
//     <section className="bg-white py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading */}
//         <div
//           ref={ref}
//           className={`mx-auto max-w-2xl text-center transition-all duration-1000 ease-out ${
//             inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}
//         >
//           <div className="flex items-center justify-center gap-3">
//             <span className="h-px w-10 bg-[#7a5c46]"></span>
//             <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
//               Testimonials
//             </p>
//             <span className="h-px w-10 bg-[#7a5c46]"></span>
//           </div>

//           <h2 className="mt-6 font-serif text-4xl leading-tight text-[#171d36] md:text-5xl">
//             Client Experiences &amp; Mandate Stories
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((item, index) => (
//             <TestimonialCard key={item.name} item={item} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Testimonials

import { Star, Quote } from 'lucide-react'
import useInView from '../hooks/useInView'

const testimonials = [
  {
    name: 'Karthik Subramanian',
    role: 'Textile Mill Owner, Race Course',
    text: 'Managing four rental properties across Coimbatore alongside my mill was a constant headache. Four-Space turned them into a fully organised, stress-free income stream.',
  },
  {
    name: 'Priya Venkatesh',
    role: 'IT Professional, Saravanampatti',
    text: 'Their staging and tenant vetting are unmatched. They found a reliable corporate tenant within 14 days, at 22% above the rent I had expected.',
  },
  {
    name: 'Arjun Ramaswamy',
    role: 'Managing Director, Peelamedu',
    text: 'Clear accounting, complete maintenance transparency, and total discretion. Four-Space is the gold standard of property management in Coimbatore.',
  },
]

function TestimonialCard({ item, index }) {
  const [ref, inView] = useInView(0.2)
  const baseDelay = index * 200

  return (
    /* Outer box: handles the scroll entrance */
    <div
      ref={ref}
      style={{ transitionDelay: `${baseDelay}ms` }}
      className={`h-full min-w-0 transition-all duration-1000 ease-out md:last:col-span-2 lg:last:col-span-1 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Inner box: handles the hover effects */}
      <div className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-[#f6f2ec] p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-slate-900/10 sm:p-8">

        {/* Brown line that draws across the top on hover */}
        <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#7a5c46] transition-all duration-700 group-hover:w-full"></span>

        {/* Big faded quote mark */}
        <Quote
          size={64}
          className="pointer-events-none absolute right-4 top-4 h-12 w-12 text-[#7a5c46]/10 transition-all duration-700 group-hover:rotate-6 group-hover:scale-125 group-hover:text-[#7a5c46]/25 sm:right-6 sm:top-6 sm:h-16 sm:w-16"
        />

        {/* Stars pop in one by one */}
        <div className="relative flex gap-1.5">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star
              key={star}
              size={18}
              fill="currentColor"
              style={{ transitionDelay: `${baseDelay + 500 + star * 120}ms` }}
              className={`text-[#7a5c46] transition-all duration-500 ${
                inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Quote text */}
        <p className="relative mt-6 flex-1 text-base leading-7 text-[#171d36] sm:text-[17px] sm:leading-8">
          “{item.text}”
        </p>

        {/* Person */}
        <div className="relative mt-8 flex items-center gap-4 border-t border-slate-300 pt-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171d36] font-serif text-lg text-[#f3dcc0] ring-0 ring-[#7a5c46]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#7a5c46] group-hover:ring-4">
            {item.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="break-words text-[11px] font-bold uppercase tracking-wider text-[#171d36] sm:tracking-widest">
              {item.name}
            </p>
            <p className="mt-0.5 text-[13px] leading-snug text-[#7a5c46]">{item.role}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

function Testimonials() {
  const [ref, inView] = useInView(0.3)

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#7a5c46]"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a5c46]">
              Testimonials
            </p>
            <span className="h-px w-10 bg-[#7a5c46]"></span>
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-tight text-[#171d36] sm:text-4xl md:text-5xl">
            Client Experiences &amp; Mandate Stories
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials