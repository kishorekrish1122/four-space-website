// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Building2, Home, Banknote, Search, ChevronDown } from 'lucide-react'

// const tabs = [
//   { id: 'buy', label: 'Buy' },
//   { id: 'rent', label: 'Rent' },
//   { id: 'manage', label: 'Manage' },
// ]

// const areas = [
//   'RS Puram',
//   'Race Course',
//   'Saibaba Colony',
//   'Peelamedu',
//   'Gandhipuram',
//   'Singanallur',
//   'Vadavalli',
//   'Saravanampatti',
//   'Avinashi Road',
// ]

// const propertyTypes = [
//   'Apartments',
//   'Villas',
//   'Independent Houses',
//   'Plots',
//   'Commercial',
// ]

// const budgets = {
//   buy: ['Under ₹50 Lakh', '₹50 Lakh - ₹1 Cr', '₹1 Cr - ₹2 Cr', '₹2 Cr - ₹5 Cr', 'Above ₹5 Cr'],
//   rent: ['Under ₹15,000 / month', '₹15,000 - ₹30,000', '₹30,000 - ₹60,000', 'Above ₹60,000'],
//   manage: ['Under ₹50 Lakh', '₹50 Lakh - ₹1 Cr', '₹1 Cr - ₹5 Cr', 'Above ₹5 Cr'],
// }

// function Field({ label, icon: Icon, value, onChange, placeholder, options }) {
//   return (
//     <label className="block cursor-pointer rounded-lg bg-[#f6f2ec] px-4 py-3">
//       <span className="block text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
//         {label}
//       </span>
//       <span className="mt-1 flex items-center gap-3">
//         <Icon size={18} className="shrink-0 text-[#7a5c46]" />
//         <select
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full cursor-pointer appearance-none bg-transparent text-[15px] font-semibold text-[#171d36] outline-none"
//         >
//           <option value="">{placeholder}</option>
//           {options.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>
//         <ChevronDown size={16} className="shrink-0 text-slate-400" />
//       </span>
//     </label>
//   )
// }

// function PropertySearch() {
//   const navigate = useNavigate()
//   const [tab, setTab] = useState('buy')
//   const [area, setArea] = useState('')
//   const [type, setType] = useState('')
//   const [budget, setBudget] = useState('')

//   const changeTab = (id) => {
//     setTab(id)
//     setBudget('') // budget options are different for each tab
//   }

//   const handleSearch = () => {
//     const params = new URLSearchParams({ mode: tab })
//     if (area) params.set('area', area)
//     if (type) params.set('type', type)
//     if (budget) params.set('budget', budget)
//     navigate(`/properties?${params.toString()}`)
//   }

//   return (
//     <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
//       <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">

//         {/* Tabs */}
//         <div className="flex gap-3">
//           {tabs.map((t) => (
//             <button
//               key={t.id}
//               onClick={() => changeTab(t.id)}
//               className={`rounded-full px-6 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors ${
//                 tab === t.id
//                   ? 'bg-[#171d36] text-white'
//                   : 'bg-[#ece9e3] text-slate-600 hover:bg-[#e2ded6]'
//               }`}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>

//         {/* Fields */}
//         <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
//           <Field
//             label="Location · Coimbatore"
//             icon={Building2}
//             value={area}
//             onChange={setArea}
//             placeholder="Select Area"
//             options={areas}
//           />
//           <Field
//             label="Property Type"
//             icon={Home}
//             value={type}
//             onChange={setType}
//             placeholder="All Types"
//             options={propertyTypes}
//           />
//           <Field
//             label="Budget (INR)"
//             icon={Banknote}
//             value={budget}
//             onChange={setBudget}
//             placeholder="All Price Brackets"
//             options={budgets[tab]}
//           />

//           <button
//             onClick={handleSearch}
//             className="flex items-center justify-center gap-3 rounded-lg bg-[#171d36] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#252d52]"
//           >
//             Search Properties <Search size={18} className="text-[#f3dcc0]" />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PropertySearch


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Building2, Home, Banknote, Search, ChevronDown } from 'lucide-react'

const tabs = [
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'manage', label: 'Manage' },
]

const areas = [
  'RS Puram',
  'Race Course',
  'Saibaba Colony',
  'Peelamedu',
  'Gandhipuram',
  'Singanallur',
  'Vadavalli',
  'Saravanampatti',
  'Avinashi Road',
]

const propertyTypes = [
  'Apartments',
  'Villas',
  'Independent Houses',
  'Plots',
  'Commercial',
]

const budgets = {
  buy: ['Under ₹50 Lakh', '₹50 Lakh - ₹1 Cr', '₹1 Cr - ₹2 Cr', '₹2 Cr - ₹5 Cr', 'Above ₹5 Cr'],
  rent: ['Under ₹15,000 / month', '₹15,000 - ₹30,000', '₹30,000 - ₹60,000', 'Above ₹60,000'],
  manage: ['Under ₹50 Lakh', '₹50 Lakh - ₹1 Cr', '₹1 Cr - ₹5 Cr', 'Above ₹5 Cr'],
}

function Field({ label, icon: Icon, value, onChange, placeholder, options }) {
  return (
    <label className="block min-w-0 cursor-pointer rounded-lg bg-[#f6f2ec] px-4 py-3">
      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
        {label}
      </span>
      <span className="mt-1 flex items-center gap-3">
        <Icon size={18} className="shrink-0 text-[#7a5c46]" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 cursor-pointer appearance-none truncate bg-transparent text-base font-semibold text-[#171d36] outline-none sm:text-[15px]"
        >
          <option value="">{placeholder}</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="shrink-0 text-slate-400" />
      </span>
    </label>
  )
}

function PropertySearch() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('buy')
  const [area, setArea] = useState('')
  const [type, setType] = useState('')
  const [budget, setBudget] = useState('')

  const changeTab = (id) => {
    setTab(id)
    setBudget('') // budget options are different for each tab
  }

  const handleSearch = () => {
    const params = new URLSearchParams({ mode: tab })
    if (area) params.set('area', area)
    if (type) params.set('type', type)
    if (budget) params.set('budget', budget)
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 sm:px-6">
      <div className="rounded-2xl bg-white p-5 shadow-xl shadow-slate-900/10 sm:p-6">

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => changeTab(t.id)}
              className={`flex-1 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors sm:flex-none sm:px-6 ${
                tab === t.id
                  ? 'bg-[#171d36] text-white'
                  : 'bg-[#ece9e3] text-slate-600 hover:bg-[#e2ded6]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Fields */}
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <Field
            label="Location · Coimbatore"
            icon={Building2}
            value={area}
            onChange={setArea}
            placeholder="Select Area"
            options={areas}
          />
          <Field
            label="Property Type"
            icon={Home}
            value={type}
            onChange={setType}
            placeholder="All Types"
            options={propertyTypes}
          />
          <Field
            label="Budget (INR)"
            icon={Banknote}
            value={budget}
            onChange={setBudget}
            placeholder="All Price Brackets"
            options={budgets[tab]}
          />

          <button
            type="button"
            onClick={handleSearch}
            className="flex items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-[#171d36] px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#252d52] sm:px-8"
          >
            Search Properties <Search size={18} className="shrink-0 text-[#f3dcc0]" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PropertySearch