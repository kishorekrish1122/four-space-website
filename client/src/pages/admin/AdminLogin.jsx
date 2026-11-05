import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

function AdminLogin() {
  const { user, login } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(timer)
  }, [])

  // Already logged in: go straight to the dashboard
  if (user) return <Navigate to="/admin" replace />

  const submit = async (e) => {
    e.preventDefault()
    if (loading) return
    setError('')
    setLoading(true)

    try {
      await login(email.trim(), password)
    } catch (err) {
      setError(
        err.response?.data?.message ||
          (err.request
            ? 'Cannot reach the server. Please check that it is running.'
            : 'Something went wrong. Please try again.')
      )
      setLoading(false)
    }
  }

  const field =
    'w-full rounded-lg border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-[15px] text-[#171d36] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#7a5c46] focus:ring-4 focus:ring-[#7a5c46]/15'

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#171d36] px-6 py-12">

      {/* Soft glows in the background */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 animate-float rounded-full bg-[#7a5c46]/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] animate-float rounded-full bg-[#f3dcc0]/10 blur-3xl"></div>

      <div
        className={`relative w-full max-w-md transition-all duration-1000 ease-out ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#f3dcc0] ring-1 ring-white/20 backdrop-blur">
            <Building2 size={30} strokeWidth={1.5} />
          </div>
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#f3dcc0]">
            Four-Space
          </p>
          <h1 className="mt-2 font-serif text-4xl text-white">Admin Sign In</h1>
        </div>

        {/* Card */}
        <form
          onSubmit={submit}
          className="rounded-2xl bg-white p-8 shadow-2xl shadow-black/40"
          noValidate
        >
          <label className="block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-[#7a5c46]">
              Email
            </span>
            <span className="relative block">
              <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
                placeholder="you@example.com"
                className={field}
              />
            </span>
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-[#7a5c46]">
              Password
            </span>
            <span className="relative block">
              <Lock size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                placeholder="Your password"
                className={`${field} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShow((value) => !value)}
                aria-label={show ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#171d36]"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>

          {/* Error message */}
          <div
            className={`grid transition-all duration-500 ${
              error ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p
                role="alert"
                className="flex items-start gap-2.5 rounded-lg bg-red-50 px-4 py-3 text-[14px] text-red-700"
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                {error}
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="group/btn relative mt-6 flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#171d36] py-4 text-[12px] font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#7a5c46] transition-transform duration-500 ease-out group-hover/btn:translate-x-0 group-disabled/btn:translate-x-[-100%]"></span>
            <span className="relative flex items-center gap-3">
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </>
              )}
            </span>
          </button>
        </form>

        <Link
          to="/"
          className="group mt-8 flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-[#f3dcc0]"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          Back to website
        </Link>
      </div>
    </div>
  )
}

export default AdminLogin