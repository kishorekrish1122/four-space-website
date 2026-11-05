// import { Link } from 'react-router-dom'
// import { ArrowLeft } from 'lucide-react'
// import Reveal from '../components/Reveal'

// const sections = [
//   {
//     title: 'Introduction',
//     paragraphs: [
//       'Four-Space ("we", "us", "our") respects your privacy. This policy explains what personal information we collect when you use our website, how we use it, and the choices you have.',
//     ],
//   },
//   {
//     title: 'Information we collect',
//     paragraphs: ['We may collect the following information:'],
//     list: [
//       'Contact details you give us, such as your name, phone number, and email address, when you make an enquiry or book a consultation.',
//       'Property preferences you enter, such as area, property type, and budget.',
//       'Your email address, if you join our newsletter.',
//       'Technical information such as your browser, device, and the pages you visit, collected through cookies and analytics tools.',
//     ],
//   },
//   {
//     title: 'How we use your information',
//     list: [
//       'To respond to your enquiries and arrange consultations.',
//       'To suggest properties and services that match your needs.',
//       'To send our newsletter, only if you have chosen to join it.',
//       'To improve our website and services.',
//       'To meet legal and regulatory requirements.',
//     ],
//   },
//   {
//     title: 'Sharing your information',
//     paragraphs: [
//       'We do not sell your personal information. We may share it only with trusted service providers who help us run our website and business (such as hosting, email, and analytics), with banks or insurers when you ask us to arrange a loan or insurance, and with authorities when the law requires it.',
//     ],
//   },
//   {
//     title: 'Cookies',
//     paragraphs: [
//       'Cookies are small files stored on your device. We use them to remember your preferences and to understand how visitors use our website. You can block or delete cookies in your browser settings, but some parts of the site may then work less smoothly.',
//     ],
//   },
//   {
//     title: 'Data security and retention',
//     paragraphs: [
//       'We use reasonable safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. We keep your information only as long as needed for the purposes above or as required by law.',
//     ],
//   },
//   {
//     title: 'Your rights',
//     paragraphs: [
//       'In line with the Digital Personal Data Protection Act, 2023, you may:',
//     ],
//     list: [
//       'Ask for a summary of the personal data we hold about you.',
//       'Ask us to correct or erase your personal data.',
//       'Withdraw your consent, including unsubscribing from our newsletter at any time.',
//       'Raise a grievance with us about how your data is handled.',
//     ],
//   },
//   {
//     title: 'Children',
//     paragraphs: [
//       'Our services are not directed at children under 18, and we do not knowingly collect their personal information.',
//     ],
//   },
//   {
//     title: 'Changes to this policy',
//     paragraphs: [
//       'We may update this policy from time to time. The latest version will always be on this page, with the date it was last changed.',
//     ],
//   },
//   {
//     title: 'Contact us',
//     paragraphs: ['For any privacy question or request, contact us:'],
//     list: [
//       'Email: [your email address]',
//       'Phone: [your phone number]',
//       'Address: [your office address], Coimbatore',
//     ],
//   },
// ]

// function PrivacyPolicy() {
//   return (
//     <>
//       {/* Header */}
//       <section className="bg-[#171d36] py-20 text-center text-white lg:py-28">
//         <Reveal>
//           <div className="mx-auto max-w-3xl px-6">
//             <div className="flex items-center justify-center gap-3">
//               <span className="h-px w-10 bg-[#f3dcc0]"></span>
//               <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f3dcc0]">
//                 Legal
//               </p>
//               <span className="h-px w-10 bg-[#f3dcc0]"></span>
//             </div>
//             <h1 className="mt-6 font-serif text-5xl md:text-6xl">Privacy Policy</h1>
//             <p className="mt-4 text-sm text-slate-400">Last updated: October 2026</p>
//           </div>
//         </Reveal>
//       </section>

//       {/* Content */}
//       <section className="bg-white py-16 lg:py-24">
//         <div className="mx-auto max-w-3xl space-y-14 px-6">
//           {sections.map((section, index) => (
//             <Reveal key={section.title}>
//               <div className="group flex gap-6">
//                 <span className="font-serif text-4xl text-[#7a5c46]/30 transition-colors duration-500 group-hover:text-[#7a5c46]">
//                   {String(index + 1).padStart(2, '0')}
//                 </span>

//                 <div className="flex-1">
//                   <h2 className="font-serif text-2xl text-[#171d36] md:text-3xl">
//                     {section.title}
//                   </h2>

//                   {section.paragraphs?.map((text) => (
//                     <p key={text} className="mt-4 leading-7 text-slate-600">
//                       {text}
//                     </p>
//                   ))}

//                   {section.list && (
//                     <ul className="mt-4 space-y-3">
//                       {section.list.map((item) => (
//                         <li key={item} className="flex gap-3 leading-7 text-slate-600">
//                           <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a5c46]"></span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             </Reveal>
//           ))}

//           <Reveal>
//             <Link
//               to="/"
//               className="group inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-[#171d36]"
//             >
//               <ArrowLeft
//                 size={16}
//                 className="transition-transform duration-300 group-hover:-translate-x-2"
//               />
//               <span className="border-b-2 border-[#7a5c46] pb-1">Back to home</span>
//             </Link>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   )
// }

// export default PrivacyPolicy


import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Reveal from '../components/Reveal'

const sections = [
  {
    title: 'Introduction',
    paragraphs: [
      'Four-Space ("we", "us", "our") respects your privacy. This policy explains what personal information we collect when you use our website, how we use it, and the choices you have.',
    ],
  },
  {
    title: 'Information we collect',
    paragraphs: ['We may collect the following information:'],
    list: [
      'Contact details you give us, such as your name, phone number, and email address, when you make an enquiry or book a consultation.',
      'Property preferences you enter, such as area, property type, and budget.',
      'Your email address, if you join our newsletter.',
      'Technical information such as your browser, device, and the pages you visit, collected through cookies and analytics tools.',
    ],
  },
  {
    title: 'How we use your information',
    list: [
      'To respond to your enquiries and arrange consultations.',
      'To suggest properties and services that match your needs.',
      'To send our newsletter, only if you have chosen to join it.',
      'To improve our website and services.',
      'To meet legal and regulatory requirements.',
    ],
  },
  {
    title: 'Sharing your information',
    paragraphs: [
      'We do not sell your personal information. We may share it only with trusted service providers who help us run our website and business (such as hosting, email, and analytics), with banks or insurers when you ask us to arrange a loan or insurance, and with authorities when the law requires it.',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Cookies are small files stored on your device. We use them to remember your preferences and to understand how visitors use our website. You can block or delete cookies in your browser settings, but some parts of the site may then work less smoothly.',
    ],
  },
  {
    title: 'Data security and retention',
    paragraphs: [
      'We use reasonable safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. We keep your information only as long as needed for the purposes above or as required by law.',
    ],
  },
  {
    title: 'Your rights',
    paragraphs: [
      'In line with the Digital Personal Data Protection Act, 2023, you may:',
    ],
    list: [
      'Ask for a summary of the personal data we hold about you.',
      'Ask us to correct or erase your personal data.',
      'Withdraw your consent, including unsubscribing from our newsletter at any time.',
      'Raise a grievance with us about how your data is handled.',
    ],
  },
  {
    title: 'Children',
    paragraphs: [
      'Our services are not directed at children under 18, and we do not knowingly collect their personal information.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The latest version will always be on this page, with the date it was last changed.',
    ],
  },
  {
    title: 'Contact us',
    paragraphs: ['For any privacy question or request, contact us:'],
    list: [
      'Email: [your email address]',
      'Phone: [your phone number]',
      'Address: [your office address], Coimbatore',
    ],
  },
]

function PrivacyPolicy() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#171d36] py-16 text-center text-white sm:py-20 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#f3dcc0]"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f3dcc0]">
                Legal
              </p>
              <span className="h-px w-10 bg-[#f3dcc0]"></span>
            </div>
            <h1 className="mt-6 break-words font-serif text-4xl sm:text-5xl md:text-6xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-slate-400">Last updated: October 2026</p>
          </div>
        </Reveal>
      </section>

      {/* Content */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-12 px-6 sm:space-y-14">
          {sections.map((section, index) => (
            <Reveal key={section.title}>
              <div className="group flex gap-4 sm:gap-6">
                <span className="shrink-0 font-serif text-3xl leading-none text-[#7a5c46]/30 transition-colors duration-500 group-hover:text-[#7a5c46] sm:text-4xl">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="break-words font-serif text-2xl text-[#171d36] md:text-3xl">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((text) => (
                    <p key={text} className="mt-4 break-words leading-7 text-slate-600">
                      {text}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="mt-4 space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3 leading-7 text-slate-600">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a5c46]"></span>
                          <span className="min-w-0 break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-[#171d36]"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-2"
              />
              <span className="border-b-2 border-[#7a5c46] pb-1">Back to home</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy