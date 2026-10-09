import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { InspoPage } from './pages/InspoPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col pb-10">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inspo" element={<InspoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}
