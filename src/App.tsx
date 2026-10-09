import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col pb-10">
      <SiteHeader />
      <main className="flex-1">
        <HomePage />
      </main>
      <SiteFooter />
    </div>
  )
}
