import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Logo } from '../ui/index.jsx'
import { NAV_LINKS } from '../../data/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-navy-800 shadow-navy-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <NavLink key={link.href} to={link.href}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="text-sm font-semibold text-white/80 px-4 py-2 rounded-full border border-white/30 hover:border-white/70 hover:text-white transition-all">
              Login
            </Link>
            <Link to="/operator/apply" className="text-sm font-semibold text-navy-800/70 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-all text-white/70">
              Operators
            </Link>
            <button onClick={() => navigate('/search')} className="btn-primary text-sm py-2.5 px-5">
              Book Now
            </button>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMenuOpen(false)}/>
        <div className={`absolute top-[72px] left-0 right-0 bg-navy-800 border-t border-white/10 p-5 transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="flex flex-col gap-1 mb-5">
            {NAV_LINKS.map(link => (
              <NavLink key={link.href} to={link.href} onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `py-3 px-4 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-white/10 text-gold-500' : 'text-white/80 hover:bg-white/8 hover:text-gold-400'}`}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-3 pt-4 border-t border-white/10">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center py-3 text-sm font-semibold text-white border border-white/30 rounded-full">Login</Link>
            <button onClick={() => { navigate('/search'); setMenuOpen(false) }} className="flex-1 btn-primary justify-center py-3 text-sm">Book Now</button>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-800 border-t border-white/10 safe-area-pb">
        <div className="flex justify-around py-2">
          {[
            { to: '/', icon: <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>, label: 'Home' },
            { to: '/search', icon: <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>, label: 'Search' },
            { to: '/parcels', icon: <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/></svg>, label: 'Parcels' },
            { to: '/plan', icon: <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>, label: 'Plan' },
            { to: '/login', icon: <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/></svg>, label: 'Account' },
          ].map(item => (
            <NavLink key={item.to} to={item.to}
              className={({ isActive }) => `flex flex-col items-center gap-0.5 px-3 py-1 ${isActive ? 'text-gold-500' : 'text-white/50'}`}>
              {item.icon}
              <span className="text-[10px] font-semibold font-display">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}
