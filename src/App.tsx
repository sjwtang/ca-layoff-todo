import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col pb-10">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}
