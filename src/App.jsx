import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SoulDetailPage from './pages/SoulDetailPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soul/:slug" element={<SoulDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
