import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-navy-800 flex items-center justify-center text-center px-5">
      <div><p className="font-display font-extrabold text-gold-500 text-8xl mb-4">404</p><h1 className="font-display font-bold text-white text-3xl mb-3">Page Not Found</h1><p className="text-white/60 mb-8 text-lg">The page you're looking for doesn't exist or has moved.</p><button onClick={() => navigate('/')} className="btn-primary text-base px-8 py-4">Back to Home</button></div>
    </div>
  )
}
