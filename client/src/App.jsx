// import { Routes, Route, useLocation } from 'react-router-dom'
// import TopBar from './components/TopBar'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import PropertySearch from './components/PropertySearch'
// import StatsBand from './components/StatsBand'
// import About from './components/About'
// import Services from './components/Services'
// import Properties from './components/Properties'
// import Process from './components/Process'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'
// import ScrollToTop from './components/ScrollToTop'
// import PrivacyPolicy from './pages/PrivacyPolicy'

// // About page
// import AboutPage from './pages/AboutPage'
// import Heritage from './components/Heritage'
// import Mandate from './components/Mandate'
// import Pillars from './components/Pillars'
// import Milestones from './components/Milestones'
// import WhyPartner from './components/WhyPartner'

// // Services page
// import ServicesPage from './pages/ServicesPage'
// import ServiceExplorer from './components/ServiceExplorer'
// import ProcessSection from './components/ProcessSection'
// import CapabilitiesSection from './components/CapabilitiesSection'

// // FAQ page
// import FaqHero from './pages/FaqHero'
// import FaqSection from './components/FaqSection'

// // Contact page
// import ContactHero from './pages/ContactHero'
// import ContactSection from './components/ContactSection'
// import Chambers from './components/Chambers'

// // Admin
// import { AuthProvider } from './context/AuthContext'
// import ProtectedRoute from './components/ProtectedRoute'
// import AdminLogin from './pages/admin/AdminLogin'
// import AdminDashboard from './pages/admin/AdminDashboard'

// function App() {
//   // Admin pages have their own look, so hide the public layout there
//   const { pathname } = useLocation()
//   const isAdmin = pathname.startsWith('/admin')

//   return (
//     <AuthProvider>
//       <ScrollToTop />
//       {!isAdmin && <TopBar />}
//       {!isAdmin && <Navbar />}

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <PropertySearch />
//               <StatsBand />
//               <About />
//               <Services />
//               <Properties limit={3} />
//               <Process />
//               <Testimonials />
//             </>
//           }
//         />

//         <Route
//           path="/about"
//           element={
//             <>
//               <AboutPage />
//               <Heritage />
//               <Mandate />
//               <Pillars />
//               <Milestones />
//               <WhyPartner />
//             </>
//           }
//         />

//         <Route
//           path="/services"
//           element={
//             <>
//               <ServicesPage />
//               <ServiceExplorer />
//               <ProcessSection />
//               <CapabilitiesSection />
//             </>
//           }
//         />

//         <Route path="/properties" element={<Properties />} />

//         <Route
//           path="/faq"
//           element={
//             <>
//               <FaqHero />
//               <FaqSection />
//             </>
//           }
//         />

//         <Route
//           path="/contact"
//           element={
//             <>
//               <ContactHero />
//               <ContactSection />
//               <Chambers />
//             </>
//           }
//         />

//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />

//         {/* Admin */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>

//       {!isAdmin && <Footer />}
//     </AuthProvider>
//   )
// }

// export default App

import { Routes, Route, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertySearch from './components/PropertySearch'
import StatsBand from './components/StatsBand'
import About from './components/About'
import Services from './components/Services'
import Properties from './components/Properties'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ChatBot from './components/ChatBot'            // NEW

// About page
import AboutPage from './pages/AboutPage'
import Heritage from './components/Heritage'
import Mandate from './components/Mandate'
import Pillars from './components/Pillars'
import Milestones from './components/Milestones'
import WhyPartner from './components/WhyPartner'

// Services page
import ServicesPage from './pages/ServicesPage'
import ServiceExplorer from './components/ServiceExplorer'
import ProcessSection from './components/ProcessSection'
import CapabilitiesSection from './components/CapabilitiesSection'

// FAQ page
import FaqHero from './pages/FaqHero'
import FaqSection from './components/FaqSection'

// Contact page
import ContactHero from './pages/ContactHero'
import ContactSection from './components/ContactSection'
import Chambers from './components/Chambers'

// Admin
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  // Admin pages have their own look, so hide the public layout there
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <AuthProvider>
      <ScrollToTop />
      {!isAdmin && <TopBar />}
      {!isAdmin && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PropertySearch />
              <StatsBand />
              <About />
              <Services />
              <Properties limit={3} />
              <Process />
              <Testimonials />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Heritage />
              <Mandate />
              <Pillars />
              <Milestones />
              <WhyPartner />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <ServicesPage />
              <ServiceExplorer />
              <ProcessSection />
              <CapabilitiesSection />
            </>
          }
        />

        <Route path="/properties" element={<Properties />} />

        <Route
          path="/faq"
          element={
            <>
              <FaqHero />
              <FaqSection />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <ContactHero />
              <ContactSection />
              <Chambers />
            </>
          }
        />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdmin && <Footer />}
      {!isAdmin && <ChatBot />}                        {/* NEW */}
    </AuthProvider>
  )
}

export default App