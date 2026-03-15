import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SoulDetailPage from './pages/SoulDetailPage'
import { trackPageView } from './analytics'

function AnalyticsTracker() {
  const location = useLocation()
  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])
  return null
}

export default function App() {
  return (
    <>
      <AnalyticsTracker />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soul/:slug" element={<SoulDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}
