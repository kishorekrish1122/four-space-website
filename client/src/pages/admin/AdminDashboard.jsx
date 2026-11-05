import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  ExternalLink,
  X,
  ImagePlus,
  Search,
  Building2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Home,
} from 'lucide-react'
import api, { imageUrl } from '../../services/api'
import { useAuth } from '../../context/AuthContext'

/* ---------- OPTIONS ---------- */
const CATEGORIES = [
  { id: 'residential', label: 'Residential' },
  { id: 'plots', label: 'Plots & Estates' },
  { id: 'commercial', label: 'Commercial' },
]

const STATUSES = [
  { id: 'sale', label: 'For Sale', badge: 'bg-[#7a5c46] text-white' },
  { id: 'rent', label: 'For Rent', badge: 'bg-[#171d36] text-white' },
  { id: 'managed', label: 'Sold / Managed', badge: 'bg-[#f9e3c8] text-[#7a5c46]' },
]

// These keys match the icons used on the public Properties page
const ICONS = [
  ['bed', 'Bedrooms'],
  ['bath', 'Bathrooms'],
  ['car', 'Parking'],
  ['pool', 'Pool'],
  ['compass', 'Facing'],
  ['check', 'Approved / Verified'],
  ['ruler', 'Area'],
  ['building', 'Building'],
  ['users', 'Capacity'],
  ['key', 'Leased'],
]

const statusOf = (id) => STATUSES.find((s) => s.id === id) || STATUSES[0]
const categoryOf = (id) => CATEGORIES.find((c) => c.id === id)?.label || id

function formatPrice(price, status) {
  const value = Number(price) || 0
  if (status === 'rent') return `₹${value.toLocaleString('en-IN')} /mo`
  const trim = (n) => n.toFixed(2).replace(/\.?0+$/, '')
  if (value >= 10000000) return `₹${trim(value / 10000000)} Cr`
  if (value >= 100000) return `₹${trim(value / 100000)} Lakh`
  return `₹${value.toLocaleString('en-IN')}`
}

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] text-[#171d36] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#7a5c46] focus:ring-4 focus:ring-[#7a5c46]/15'
const labelClass =
  'mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-[#7a5c46]'

/* ---------- SMALL THUMBNAIL ---------- */
function Thumb({ src }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-[#171d36] to-[#7a5c46]">
      {src && !failed ? (
        <img
          src={src}
          alt=""
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <Building2 size={24} className="text-white/40" strokeWidth={1.3} />
      )}
    </div>
  )
}

/* ---------- ADD / EDIT PANEL ---------- */
function PropertyForm({ property, onClose, onSaved }) {
  const editing = Boolean(property)

  const [visible, setVisible] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(property?.image ? imageUrl(property.image) : '')
  const fileRef = useRef(null)

  const [form, setForm] = useState({
    title: property?.title || '',
    category: property?.category || 'residential',
    status: property?.status || 'sale',
    price: property?.price ?? '',
    location: property?.location || '',
    areaSqft: property?.areaSqft ?? '',
    description: property?.description || '',
    featured: property?.featured || false,
  })

  const [features, setFeatures] = useState(() => {
    const list = (property?.features || [])
      .slice(0, 3)
      .map((f) => ({ icon: f.icon || 'check', label: f.label || '' }))
    while (list.length < 3) list.push({ icon: 'check', label: '' })
    return list
  })

  const set = (key) => (e) =>
    setForm((current) => ({
      ...current,
      [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  const setFeature = (index, key, value) =>
    setFeatures((current) =>
      current.map((item, i) => (i === index ? { ...item, [key]: value } : item))
    )

  const close = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  // Slide in, lock the page scroll, close with the Escape key
  const closeRef = useRef(close)
  closeRef.current = close

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && closeRef.current()
    window.addEventListener('keydown', onKey)

    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  // Free the memory used by a temporary preview
  useEffect(
    () => () => {
      if (preview.startsWith('blob:')) URL.revokeObjectURL(preview)
    },
    [preview]
  )

  const chooseFile = (e) => {
    const picked = e.target.files?.[0]
    if (!picked) return

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(picked.type)) {
      setError('Please choose a JPG, PNG, or WEBP image.')
      return
    }
    if (picked.size > 5 * 1024 * 1024) {
      setError('The photo is larger than 5 MB. Please choose a smaller one.')
      return
    }

    setError('')
    setFile(picked)
    setPreview(URL.createObjectURL(picked))
  }

  const validate = () => {
    if (form.title.trim().length < 3) return 'Please enter a title.'
    if (!form.location.trim()) return 'Please enter the location.'
    if (!(Number(form.price) > 0)) return 'Please enter a price greater than zero.'
    if (!(Number(form.areaSqft) > 0)) return 'Please enter the area in sq.ft.'
    if (form.description.trim().length < 10) return 'Please write a short description.'
    if (form.description.length > 600) return 'The description is too long (600 characters maximum).'
    return ''
  }

  const submit = async (e) => {
    e.preventDefault()
    if (saving) return

    const problem = validate()
    if (problem) {
      setError(problem)
      return
    }

    setError('')
    setSaving(true)

    const data = new FormData()
    data.append('title', form.title.trim())
    data.append('category', form.category)
    data.append('status', form.status)
    data.append('price', String(Number(form.price)))
    data.append('location', form.location.trim())
    data.append('areaSqft', String(Number(form.areaSqft)))
    data.append('description', form.description.trim())
    data.append('featured', String(form.featured))
    data.append(
      'features',
      JSON.stringify(
        features
          .filter((f) => f.label.trim())
          .map((f) => ({ icon: f.icon, label: f.label.trim() }))
      )
    )
    if (file) data.append('image', file)

    try {
      if (editing) {
        await api.put(`/properties/${property._id}`, data)
      } else {
        await api.post('/properties', data)
      }
      setVisible(false)
      setTimeout(() => onSaved(editing), 300)
    } catch (err) {
      setError(
        err.response?.data?.message ||
          (err.request ? 'Cannot reach the server.' : 'Could not save. Please try again.')
      )
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark background */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-[#0d1124]/60 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Panel */}
      <form
        onSubmit={submit}
        noValidate
        className={`absolute inset-y-0 right-0 flex w-full max-w-xl flex-col bg-[#faf8f4] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7a5c46]">
              {editing ? 'Edit property' : 'New property'}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-[#171d36]">
              {editing ? 'Update the details' : 'Add a property'}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-all duration-300 hover:rotate-90 hover:bg-slate-100 hover:text-[#171d36]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">

          {/* Photo */}
          <div>
            <span className={labelClass}>Photo</span>
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={chooseFile}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="group relative flex h-52 w-full items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-white transition-all duration-300 hover:border-[#7a5c46]"
            >
              {preview ? (
                <>
                  <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-[#171d36]/60 text-[12px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Change photo
                  </span>
                </>
              ) : (
                <span className="flex flex-col items-center gap-2 text-slate-500 transition-colors group-hover:text-[#7a5c46]">
                  <ImagePlus size={32} strokeWidth={1.4} />
                  <span className="text-[13px] font-medium">Click to upload a photo</span>
                  <span className="text-[12px] text-slate-400">JPG, PNG or WEBP, up to 5 MB</span>
                </span>
              )}
            </button>
          </div>

          <label className="block">
            <span className={labelClass}>Title</span>
            <input
              value={form.title}
              onChange={set('title')}
              maxLength={120}
              placeholder="The Race Course Heritage Villa"
              className={inputClass}
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Category</span>
              <select value={form.category} onChange={set('category')} className={inputClass}>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>Status</span>
              <select value={form.status} onChange={set('status')} className={inputClass}>
                {STATUSES.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>
                {form.status === 'rent' ? 'Rent per month (₹)' : 'Price (₹)'}
              </span>
              <input
                type="number"
                min="0"
                value={form.price}
                onChange={set('price')}
                placeholder="38500000"
                className={inputClass}
              />
              {Number(form.price) > 0 && (
                <span className="mt-1.5 block text-[12px] text-[#7a5c46]">
                  Shows as {formatPrice(form.price, form.status)}
                </span>
              )}
            </label>
            <label className="block">
              <span className={labelClass}>Area (sq.ft)</span>
              <input
                type="number"
                min="0"
                value={form.areaSqft}
                onChange={set('areaSqft')}
                placeholder="4200"
                className={inputClass}
              />
            </label>
          </div>

          <label className="block">
            <span className={labelClass}>Location</span>
            <input
              value={form.location}
              onChange={set('location')}
              placeholder="Race Course"
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className={labelClass}>Description</span>
            <textarea
              rows={4}
              value={form.description}
              onChange={set('description')}
              maxLength={600}
              placeholder="Two or three lines about the property."
              className={`${inputClass} resize-none`}
            ></textarea>
            <span className="mt-1.5 block text-right text-[12px] text-slate-400">
              {form.description.length} / 600
            </span>
          </label>

          {/* Features */}
          <div>
            <span className={labelClass}>Highlights (up to 3, shown on the card)</span>
            <div className="space-y-3">
              {features.map((item, index) => (
                <div key={index} className="grid grid-cols-[150px_1fr] gap-3">
                  <select
                    value={item.icon}
                    onChange={(e) => setFeature(index, 'icon', e.target.value)}
                    className={inputClass}
                  >
                    {ICONS.map(([id, name]) => (
                      <option key={id} value={id}>{name}</option>
                    ))}
                  </select>
                  <input
                    value={item.label}
                    onChange={(e) => setFeature(index, 'label', e.target.value)}
                    maxLength={30}
                    placeholder={['4 Beds', '5 Baths', '2 Parking'][index]}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-white px-4 py-3 ring-1 ring-slate-200 transition-all hover:ring-[#7a5c46]">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={set('featured')}
              className="h-4 w-4 accent-[#7a5c46]"
            />
            <span className="text-[14px] text-[#171d36]">Mark as featured</span>
          </label>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-white px-6 py-4">
          {error && (
            <p
              role="alert"
              className="mb-3 flex items-start gap-2.5 rounded-lg bg-red-50 px-4 py-3 text-[14px] text-red-700"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              {error}
            </p>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={close}
              className="rounded-lg border border-slate-300 px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-slate-600 transition-all duration-300 hover:border-[#171d36] hover:text-[#171d36] active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="group/btn relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#171d36] px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all duration-300 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
              <span className="relative flex items-center gap-2">
                {saving ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Saving...
                  </>
                ) : editing ? (
                  'Save changes'
                ) : (
                  'Add property'
                )}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

/* ---------- THE DASHBOARD ---------- */
function AdminDashboard() {
  const { user, logout } = useAuth()

  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [panel, setPanel] = useState(null) // null | 'new' | a property
  const [toDelete, setToDelete] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [toast, setToast] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setLoadError('')
    try {
      const { data } = await api.get('/properties', { params: { limit: 100 } })
      setProperties(data)
    } catch {
      setLoadError('Could not load the properties. Please check that the server is running.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const notify = (type, text) => {
    setToast({ type, text })
    setTimeout(() => setToast(null), 4000)
  }

  const counts = useMemo(
    () => ({
      all: properties.length,
      sale: properties.filter((p) => p.status === 'sale').length,
      rent: properties.filter((p) => p.status === 'rent').length,
      managed: properties.filter((p) => p.status === 'managed').length,
    }),
    [properties]
  )

  const visible = properties.filter((p) => {
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter
    const text = `${p.title} ${p.location}`.toLowerCase()
    return matchesStatus && text.includes(query.trim().toLowerCase())
  })

  const onSaved = (wasEditing) => {
    setPanel(null)
    load()
    notify('success', wasEditing ? 'Property updated.' : 'Property added.')
  }

  const confirmDelete = async () => {
    if (!toDelete) return
    setDeleting(true)
    try {
      await api.delete(`/properties/${toDelete._id}`)
      setProperties((list) => list.filter((p) => p._id !== toDelete._id))
      notify('success', 'Property deleted.')
    } catch (err) {
      notify('error', err.response?.data?.message || 'Could not delete the property.')
    } finally {
      setDeleting(false)
      setToDelete(null)
    }
  }

  const stats = [
    { id: 'all', label: 'All properties' },
    { id: 'sale', label: 'For sale' },
    { id: 'rent', label: 'For rent' },
    { id: 'managed', label: 'Managed' },
  ]

  return (
    <div className="min-h-screen bg-[#faf8f4]">

      <style>{`@keyframes rowIn { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }`}</style>

      {/* ===== TOP BAR ===== */}
      <header className="sticky top-0 z-30 bg-[#171d36] text-white shadow-lg shadow-slate-900/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#f3dcc0]">
              <Building2 size={20} strokeWidth={1.6} />
            </span>
            <div>
              <p className="font-serif text-xl leading-none">Four-Space</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f3dcc0]">
                Admin
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden max-w-[220px] truncate text-[13px] text-slate-400 md:block">
              {user?.email}
            </span>
            <Link
              to="/"
              className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-[12px] font-bold uppercase tracking-widest text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="hidden sm:inline">View site</span>
            </Link>
            <button
              onClick={logout}
              className="group flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#f3dcc0] hover:text-[#171d36] active:scale-95"
            >
              <LogOut size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="hidden sm:inline">Log out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Title + add button */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7a5c46]">
              Dashboard
            </p>
            <h1 className="mt-2 font-serif text-4xl text-[#171d36] md:text-5xl">Properties</h1>
          </div>

          <button
            onClick={() => setPanel('new')}
            className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#171d36] px-7 py-4 text-[12px] font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
            <Plus size={18} className="relative transition-transform duration-500 group-hover/btn:rotate-180" />
            <span className="relative">Add property</span>
          </button>
        </div>

        {/* Stats (click to filter) */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item) => {
            const isActive = statusFilter === item.id
            return (
              <button
                key={item.id}
                onClick={() => setStatusFilter(item.id)}
                className={`rounded-xl p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
                  isActive
                    ? 'bg-[#171d36] text-white shadow-xl shadow-slate-900/20'
                    : 'bg-white text-[#171d36] shadow-sm'
                }`}
              >
                <p className="font-serif text-4xl">{counts[item.id]}</p>
                <p
                  className={`mt-1 text-[11px] font-bold uppercase tracking-widest ${
                    isActive ? 'text-[#f3dcc0]' : 'text-[#7a5c46]'
                  }`}
                >
                  {item.label}
                </p>
              </button>
            )
          })}
        </div>

        {/* Search */}
        <div className="relative mt-8">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or location"
            className={`${inputClass} pl-12`}
          />
        </div>

        {/* List */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5">
          {loading ? (
            <div className="flex items-center justify-center gap-3 py-20 text-slate-500">
              <Loader2 size={20} className="animate-spin" /> Loading properties...
            </div>
          ) : loadError ? (
            <div className="px-6 py-16 text-center">
              <AlertCircle size={32} className="mx-auto text-red-500" />
              <p className="mt-4 text-slate-600">{loadError}</p>
              <button
                onClick={load}
                className="mt-6 rounded-lg bg-[#171d36] px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#252d52] active:scale-95"
              >
                Try again
              </button>
            </div>
          ) : visible.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <Home size={36} strokeWidth={1.3} className="mx-auto text-slate-300" />
              <p className="mt-4 text-slate-600">
                {properties.length === 0
                  ? 'No properties yet. Click "Add property" to create the first one.'
                  : 'No property matches your search.'}
              </p>
            </div>
          ) : (
            <ul>
              {visible.map((p, index) => {
                const status = statusOf(p.status)
                return (
                  <li
                    key={p._id}
                    style={{ animation: `rowIn 500ms ease-out ${Math.min(index, 8) * 60}ms both` }}
                    className="group flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-slate-100 px-5 py-4 transition-colors duration-300 last:border-b-0 hover:bg-[#faf8f4]"
                  >
                    <Thumb src={imageUrl(p.image)} />

                    <div className="min-w-0 flex-1 basis-56">
                      <p className="truncate font-serif text-xl text-[#171d36] transition-transform duration-300 group-hover:translate-x-1">
                        {p.title}
                      </p>
                      <p className="mt-0.5 truncate text-[13px] text-slate-500">
                        {p.location} · {Number(p.areaSqft).toLocaleString('en-IN')} sq.ft · {categoryOf(p.category)}
                      </p>
                    </div>

                    <span className={`rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest ${status.badge}`}>
                      {status.label}
                    </span>

                    <p className="w-32 font-serif text-xl text-[#171d36]">
                      {formatPrice(p.price, p.status)}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setPanel(p)}
                        aria-label={`Edit ${p.title}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f6f2ec] text-[#7a5c46] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171d36] hover:text-[#f3dcc0] active:scale-90"
                      >
                        <Pencil size={17} />
                      </button>
                      <button
                        onClick={() => setToDelete(p)}
                        aria-label={`Delete ${p.title}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:text-white active:scale-90"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </main>

      {/* Add / edit panel */}
      {panel && (
        <PropertyForm
          key={panel === 'new' ? 'new' : panel._id}
          property={panel === 'new' ? null : panel}
          onClose={() => setPanel(null)}
          onSaved={onSaved}
        />
      )}

      {/* Delete confirmation */}
      {toDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            onClick={() => !deleting && setToDelete(null)}
            className="absolute inset-0 bg-[#0d1124]/60 backdrop-blur-sm"
          ></div>
          <div
            style={{ animation: 'rowIn 300ms ease-out both' }}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Trash2 size={24} />
            </span>
            <h3 className="mt-5 font-serif text-3xl text-[#171d36]">Delete this property?</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">
              <strong className="text-[#171d36]">{toDelete.title}</strong> and its photo will be
              removed from the website. This cannot be undone.
            </p>
            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setToDelete(null)}
                disabled={deleting}
                className="flex-1 rounded-lg border border-slate-300 py-3.5 text-[12px] font-bold uppercase tracking-widest text-slate-600 transition-all hover:border-[#171d36] hover:text-[#171d36] active:scale-95"
              >
                Keep it
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:bg-red-700 active:scale-95 disabled:cursor-wait disabled:opacity-70"
              >
                {deleting ? <Loader2 size={16} className="animate-spin" /> : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message at the bottom */}
      <div
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-500 ${
          toast ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {toast && (
          <p
            role="status"
            className={`flex items-center gap-3 rounded-xl px-6 py-4 text-[14px] font-medium text-white shadow-2xl ${
              toast.type === 'success' ? 'bg-[#171d36]' : 'bg-red-600'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 size={18} className="text-[#f3dcc0]" />
            ) : (
              <AlertCircle size={18} />
            )}
            {toast.text}
          </p>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard