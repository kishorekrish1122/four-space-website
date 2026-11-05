import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, X, ArrowRight, Building2 } from 'lucide-react'

/* ---------- EDIT YOUR DETAILS HERE ---------- */
const BUSINESS = {
  whatsapp: '910000000000', // country code + number, digits only
  phoneDisplay: '+91 00000 00000',
  phoneLink: '+910000000000',
  address: '[Office Address], Coimbatore',
  hours: 'Monday to Saturday, 9:30 am to 6:30 pm',
}

const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`

/* ---------- PROPERTY FINDER OPTIONS ----------
   Keep these the same as the lists in PropertySearch.jsx,
   so the bot and the search card send identical filters. */
const AREAS = [
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

const TYPES = ['Apartments', 'Villas', 'Independent Houses', 'Plots', 'Commercial']

const BUDGETS = {
  buy: ['Under ₹50 Lakh', '₹50 Lakh - ₹1 Cr', '₹1 Cr - ₹2 Cr', '₹2 Cr - ₹5 Cr', 'Above ₹5 Cr'],
  rent: ['Under ₹15,000 / month', '₹15,000 - ₹30,000', '₹30,000 - ₹60,000', 'Above ₹60,000'],
}

const ORDER = ['mode', 'area', 'type', 'budget']

const QUESTIONS = {
  mode: 'Are you looking to buy or rent?',
  area: 'Which area of Coimbatore do you prefer?',
  type: 'What type of property are you looking for?',
  budget: 'What is your budget?',
}

// The buttons shown for each step of the finder
function optionsFor(step, answers) {
  if (step === 'mode') {
    return [
      { label: 'Buy', value: 'buy' },
      { label: 'Rent', value: 'rent' },
    ]
  }
  if (step === 'area') {
    return [...AREAS.map((a) => ({ label: a, value: a })), { label: 'Any area', value: '' }]
  }
  if (step === 'type') {
    return [...TYPES.map((t) => ({ label: t, value: t })), { label: 'Any type', value: '' }]
  }
  const mode = answers.mode?.value === 'rent' ? 'rent' : 'buy'
  return [...BUDGETS[mode].map((b) => ({ label: b, value: b })), { label: 'Any budget', value: '' }]
}

// The final message, with a link to the properties page and a WhatsApp button
function buildResult(answers) {
  const mode = answers.mode.value
  const params = new URLSearchParams({ mode })
  if (answers.area.value) params.set('area', answers.area.value)
  if (answers.type.value) params.set('type', answers.type.value)
  if (answers.budget.value) params.set('budget', answers.budget.value)

  const summary = [
    answers.mode.label,
    answers.area.value || 'Any area',
    answers.type.value || 'Any type',
    answers.budget.value || 'Any budget',
  ].join(' · ')

  const wa = `Hello Four-Space, I am looking to ${
    mode === 'rent' ? 'rent' : 'buy'
  } a property in Coimbatore. Area: ${answers.area.value || 'Any'}. Type: ${
    answers.type.value || 'Any'
  }. Budget: ${answers.budget.value || 'Any'}.`

  return {
    text: `Here is your search: ${summary}. Tap below to see matching properties, or send these details to our team.`,
    actions: [
      { label: 'Show properties', to: `/properties?${params.toString()}` },
      { label: 'Send to our team', href: whatsappLink(wa) },
    ],
  }
}

/* ---------- THE QUESTIONS AND ANSWERS (edit the text here) ---------- */
const topics = [
  { label: 'Find a property for me', finder: true },
  {
    label: 'What services do you offer?',
    answer:
      'We manage properties, help you buy, sell or rent, arrange home loans and insurance, advise on estates, and design interiors, all across Coimbatore.',
    actions: [{ label: 'See our services', to: '/services' }],
  },
  {
    label: 'I want my property managed',
    answer:
      'We look after maintenance, tenants, rent collection and monthly reports, so you can relax. Tell us about your property and we will call you back.',
    actions: [{ label: 'Request a call back', to: '/contact' }],
  },
  {
    label: 'Home loans and insurance',
    answer:
      'We compare banks, prepare your documents, and arrange the right insurance for your property. Share a few details and our team will guide you.',
    actions: [{ label: 'Ask about loans', to: '/contact' }],
  },
  {
    label: 'Office address and hours',
    answer: `Our office is at ${BUSINESS.address}. We are open ${BUSINESS.hours}. Visits are by prior appointment.`,
    actions: [{ label: 'See the map', to: '/contact' }],
  },
  {
    label: 'Talk to a person',
    answer: 'Happy to connect you with our team. Choose how you would like to reach us.',
    actions: [
      { label: 'Chat on WhatsApp', href: whatsappLink('Hello Four-Space, I have a question.') },
      { label: `Call ${BUSINESS.phoneDisplay}`, href: `tel:${BUSINESS.phoneLink}` },
    ],
  },
]

const GREETING = {
  from: 'bot',
  text: 'Hello! I am the Four-Space assistant. Tap "Find a property for me", or choose any question below.',
}

/* A button inside a bot message: opens a page, WhatsApp, or the dialer */
function ActionButton({ action, onNavigate }) {
  const style =
    'inline-flex items-center gap-2 rounded-full bg-[#171d36] px-4 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7a5c46] active:scale-95'

  if (action.to) {
    return (
      <Link to={action.to} onClick={onNavigate} className={style}>
        {action.label}
        <ArrowRight size={14} />
      </Link>
    )
  }

  return (
    <a
      href={action.href}
      target={action.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={style}
    >
      {action.label}
      <ArrowRight size={14} />
    </a>
  )
}

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [flow, setFlow] = useState(null) // null, or { step, answers } while the finder is running
  const listRef = useRef(null)
  const timer = useRef(null)

  // Show typing dots, then the bot's message
  const say = (message) => {
    setTyping(true)
    timer.current = setTimeout(() => {
      setMessages((list) => [...list, { from: 'bot', ...message }])
      setTyping(false)
    }, 700)
  }

  const addUser = (text) => setMessages((list) => [...list, { from: 'user', text }])

  // A normal question
  const ask = (topic) => {
    if (typing) return
    addUser(topic.label)
    say({ text: topic.answer, actions: topic.actions })
  }

  // Start the property finder
  const startFinder = () => {
    if (typing) return
    addUser('Find a property for me')
    setFlow({ step: 'mode', answers: {} })
    say({ text: `Great, let us find your property. ${QUESTIONS.mode}` })
  }

  // The visitor picks an option in the finder
  const choose = (option) => {
    if (typing || !flow) return
    addUser(option.label)

    const answers = { ...flow.answers, [flow.step]: option }
    const next = ORDER[ORDER.indexOf(flow.step) + 1]

    if (next) {
      setFlow({ step: next, answers })
      say({ text: QUESTIONS[next] })
    } else {
      setFlow(null)
      say(buildResult(answers))
    }
  }

  const cancelFinder = () => {
    if (typing) return
    setFlow(null)
    say({ text: 'No problem. You can ask anything else, or start the finder again any time.' })
  }

  // Keep the newest message in view
  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open, flow])

  // Escape closes the chat
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Stop the timer if the page is left
  useEffect(() => () => clearTimeout(timer.current), [])

  const choices = flow ? optionsFor(flow.step, flow.answers) : null

  const chipClass =
    'rounded-full border border-[#171d36]/20 px-3.5 py-2 text-left text-[13px] text-[#171d36] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#171d36] hover:bg-[#171d36] hover:text-white active:scale-95 disabled:cursor-wait disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-transparent disabled:hover:text-[#171d36]'

  return (
    <>
      <style>{`@keyframes chatIn { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }`}</style>

      {/* ===== THE CHAT WINDOW ===== */}
      <div
        role="dialog"
        aria-label="Chat with Four-Space"
        aria-hidden={!open}
        className={`fixed bottom-24 left-4 z-50 flex h-[min(560px,calc(100vh-8rem))] w-[calc(100vw-2rem)] max-w-[390px] origin-bottom-left flex-col overflow-hidden rounded-2xl bg-[#f6f2ec] shadow-2xl shadow-black/30 transition-all duration-300 sm:left-6 ${
          open
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none invisible translate-y-4 scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#171d36] px-5 py-4 text-white">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f3dcc0]">
            <Building2 size={20} strokeWidth={1.6} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-lg leading-none">Four-Space</p>
            <p className="mt-1 flex items-center gap-2 text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Here to help
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 transition-all duration-300 hover:rotate-90 hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          aria-live="polite"
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{ animation: 'chatIn 300ms ease-out both' }}
              className={message.from === 'user' ? 'flex justify-end' : 'flex justify-start'}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-6 ${
                  message.from === 'user'
                    ? 'rounded-br-sm bg-[#171d36] text-white'
                    : 'rounded-bl-sm bg-white text-[#171d36] shadow-sm'
                }`}
              >
                <p>{message.text}</p>

                {message.actions && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.actions.map((action) => (
                      <ActionButton
                        key={action.label}
                        action={action}
                        onNavigate={() => setOpen(false)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing dots */}
          {typing && (
            <div style={{ animation: 'chatIn 300ms ease-out both' }} className="flex justify-start">
              <div className="flex gap-1.5 rounded-2xl rounded-bl-sm bg-white px-4 py-3.5 shadow-sm">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    style={{ animationDelay: `${dot * 150}ms` }}
                    className="h-2 w-2 animate-bounce rounded-full bg-[#7a5c46]"
                  ></span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Choices: the finder options, or the normal questions */}
        <div className="max-h-44 overflow-y-auto border-t border-slate-200 bg-white p-3">
          <div className="mb-2 flex items-center justify-between px-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#7a5c46]">
              {flow ? `Step ${ORDER.indexOf(flow.step) + 1} of ${ORDER.length}` : 'Tap a question'}
            </p>
            {flow && (
              <button
                onClick={cancelFinder}
                disabled={typing}
                className="text-[11px] font-semibold text-slate-500 underline-offset-4 transition-colors hover:text-[#171d36] hover:underline disabled:opacity-50"
              >
                Cancel
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {flow
              ? choices.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => choose(option)}
                    disabled={typing}
                    className={chipClass}
                  >
                    {option.label}
                  </button>
                ))
              : topics.map((topic) => (
                  <button
                    key={topic.label}
                    onClick={() => (topic.finder ? startFinder() : ask(topic))}
                    disabled={typing}
                    className={`${chipClass} ${
                      topic.finder
                        ? 'border-[#7a5c46] bg-[#7a5c46] font-semibold text-white hover:bg-[#171d36]'
                        : ''
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
          </div>
        </div>
      </div>

      {/* ===== THE FLOATING BUTTON ===== */}
      <button
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="group fixed bottom-6 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#7a5c46] text-white shadow-xl shadow-black/40 ring-4 ring-white transition-all duration-300 hover:scale-110 hover:bg-[#f3dcc0] hover:text-[#171d36] active:scale-95 sm:left-6"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#f3dcc0]/70"></span>
        )}
        <MessageCircle
          size={24}
          className={`absolute transition-all duration-300 ${
            open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <X
          size={24}
          className={`absolute transition-all duration-300 ${
            open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </button>
    </>
  )
}

export default ChatBot