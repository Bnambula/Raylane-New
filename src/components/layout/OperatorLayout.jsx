import { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { Logo } from '../ui/index.jsx'
import { clsx } from 'clsx'

const NAV_BASIC = [
  { to: '/operator', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', end: true },
  { to: '/operator/trips', label: 'Trips', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { to: '/operator/seats', label: 'Seat Manager', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { to: '/operator/bookings', label: 'Bookings', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { to: '/operator/parcels', label: 'Parcels', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
]

const NAV_PREMIUM = [
  { to: '/operator/financials', label: 'Financials', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', premium: true },
  { to: '/operator/fleet', label: 'Fleet & Drivers', icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z', premium: true },
  { to: '/operator/analytics', label: 'Analytics', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', premium: true },
  { to: '/operator/settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
]

function NavItem({ item, collapsed }) {
  return (
    <NavLink to={item.to} end={item.end}
      className={({ isActive }) => clsx(
        'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
        isActive ? 'bg-gold-500 text-navy-800 shadow-gold' : 'text-navy-400 hover:bg-navy-50 hover:text-navy-800'
      )}>
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
      </svg>
      {!collapsed && (
        <span className="flex-1 font-display">{item.label}</span>
      )}
      {!collapsed && item.premium && (
        <span className="text-[10px] font-bold bg-gold-500/20 text-gold-600 px-1.5 py-0.5 rounded-full">PRO</span>
      )}
    </NavLink>
  )
}

export default function OperatorLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-navy-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={clsx('flex flex-col bg-white border-r border-navy-100 transition-all duration-300 flex-shrink-0', collapsed ? 'w-16' : 'w-60')}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-navy-50">
          {!collapsed && <Link to="/operator"><Logo dark /></Link>}
          <button onClick={() => setCollapsed(!collapsed)} className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center hover:bg-navy-100 transition-colors ml-auto">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-navy-400">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {!collapsed && (
          <div className="px-3 py-3 border-b border-navy-50">
            <div className="bg-navy-50 rounded-xl px-3 py-2.5">
              <p className="text-xs text-navy-400 font-medium">Logged in as</p>
              <p className="text-sm font-display font-bold text-navy-800">Gateway Bus Ltd</p>
            </div>
          </div>
        )}

        <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-none">
          <div className="space-y-1">
            {!collapsed && <p className="text-[10px] font-bold text-navy-300 uppercase tracking-widest px-3 mb-2">Basic</p>}
            {NAV_BASIC.map(item => <NavItem key={item.to} item={item} collapsed={collapsed}/>)}
          </div>
          <div className="pt-3 space-y-1">
            {!collapsed && <p className="text-[10px] font-bold text-gold-600 uppercase tracking-widest px-3 mb-2">Premium</p>}
            {NAV_PREMIUM.map(item => <NavItem key={item.to} item={item} collapsed={collapsed}/>)}
          </div>
        </nav>

        <div className="p-3 border-t border-navy-50">
          <NavItem item={{ to: '/', label: 'View Site', icon: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' }} collapsed={collapsed}/>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-navy-50 flex items-center justify-between px-6 flex-shrink-0">
          <h1 className="font-display font-bold text-navy-800 text-lg">Operator Portal</h1>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 bg-navy-50 rounded-xl flex items-center justify-center hover:bg-navy-100 transition-colors">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-navy-600">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold-500 rounded-full"/>
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-navy-100">
              <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center">
                <span className="font-display text-xs font-bold text-gold-500">GB</span>
              </div>
              <span className="text-sm font-medium text-navy-800 hidden sm:block">Gateway Bus</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
