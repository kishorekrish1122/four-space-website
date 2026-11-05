// const stats = [
//   { value: '2,500+', label: 'Properties Managed', note: 'Across Coimbatore' },
//   { value: '98%', label: 'Client Retention', note: '10-Year Rolling Average' },
//   { value: '15+', label: 'Years Experience', note: 'Institutional Mastery' },
//   { value: '12', label: 'Localities Served', note: 'Prime Coimbatore Neighbourhoods' },
// ]

// function StatsBand() {
//   return (
//     <section className="mt-16 bg-[#171d36]">
//       <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 lg:grid-cols-4">
//         {stats.map((stat, index) => (
//           <div
//             key={stat.label}
//             className={`px-4 text-center ${
//               index > 0 ? 'lg:border-l lg:border-white/10' : ''
//             }`}
//           >
//             <p className="font-serif text-5xl text-[#f3dcc0] md:text-6xl">
//               {stat.value}
//             </p>
//             <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-white">
//               {stat.label}
//             </p>
//             <p className="mt-1 text-xs text-slate-400">{stat.note}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default StatsBand

const stats = [
  { value: '2,500+', label: 'Properties Managed', note: 'Across Coimbatore' },
  { value: '98%', label: 'Client Retention', note: '10-Year Rolling Average' },
  { value: '15+', label: 'Years Experience', note: 'Institutional Mastery' },
  { value: '12', label: 'Localities Served', note: 'Prime Coimbatore Neighbourhoods' },
]

function StatsBand() {
  return (
    <section className="mt-16 bg-[#171d36]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-2 gap-y-10 px-4 py-16 sm:gap-x-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`min-w-0 px-2 text-center sm:px-4 ${
              index > 0 ? 'lg:border-l lg:border-white/10' : ''
            }`}
          >
            <p className="font-serif text-4xl text-[#f3dcc0] sm:text-5xl md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-white sm:text-[11px] sm:tracking-widest">
              {stat.label}
            </p>
            <p className="mt-1 text-xs text-slate-400">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBand