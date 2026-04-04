import { clsx } from 'clsx'

// Logo
export function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
          <path d="M4 14C4 14 8 8 14 8C20 8 24 14 24 14" stroke="#0B1D45" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M4 18L24 18" stroke="#0B1D45" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="9" cy="21" r="2" fill="#0B1D45"/>
          <circle cx="19" cy="21" r="2" fill="#0B1D45"/>
          <path d="M14 6L16 10H12L14 6Z" fill="#0B1D45"/>
        </svg>
      </div>
      <span className={clsx('font-display font-bold text-lg', dark ? 'text-navy-800' : 'text-white')}>
        Raylane <span className="text-gold-500">Express</span>
      </span>
    </div>
  )
}

// Badge
export function Badge({ children, variant = 'gold', className }) {
  const variants = {
    gold: 'bg-gold-500/15 text-gold-600 border-gold-500/30',
    navy: 'bg-navy-600/10 text-navy-600 border-navy-600/20',
    green: 'bg-green-500/15 text-green-700 border-green-500/30',
    red: 'bg-red-500/15 text-red-700 border-red-500/30',
    gray: 'bg-gray-100 text-gray-600 border-gray-200',
  }
  return (
    <span className={clsx('inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border', variants[variant], className)}>
      {children}
    </span>
  )
}

// Stars
export function Stars({ rating, max = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="currentColor" className={clsx('w-3.5 h-3.5', i < Math.round(rating) ? 'text-gold-500' : 'text-navy-100')}>
          <path d="M8 1l1.8 4.2H14l-3.6 2.6 1.4 4.2L8 9.5 4.2 12l1.4-4.2L2 5.2h4.2L8 1z"/>
        </svg>
      ))}
    </div>
  )
}

// Skeleton
export function Skeleton({ className }) {
  return <div className={clsx('skeleton h-4 rounded-xl', className)} />
}

// Stat card
export function StatCard({ label, value, sub, icon, color = 'navy' }) {
  const colors = {
    navy: 'bg-navy-800 text-white',
    gold: 'bg-gold-500 text-navy-800',
    green: 'bg-green-600 text-white',
    red: 'bg-red-600 text-white',
  }
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm text-navy-400 font-medium">{label}</p>
        {icon && <div className={clsx('w-9 h-9 rounded-xl flex items-center justify-center', colors[color])}>{icon}</div>}
      </div>
      <p className="font-display text-2xl font-bold text-navy-800">{value}</p>
      {sub && <p className="text-xs text-navy-400 mt-1">{sub}</p>}
    </div>
  )
}

// Empty state
export function EmptyState({ icon, title, desc, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mb-4 text-navy-300">
        {icon}
      </div>
      <h3 className="font-display font-bold text-navy-800 mb-2">{title}</h3>
      <p className="text-sm text-navy-400 max-w-sm mb-5">{desc}</p>
      {action}
    </div>
  )
}

// Modal wrapper
export function Modal({ open, onClose, title, children, size = 'md' }) {
  if (!open) return null
  const sizes = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-navy-900/75 backdrop-blur-sm" onClick={onClose}/>
      <div className={clsx('relative bg-white rounded-3xl shadow-navy-lg w-full overflow-hidden animate-fade-up max-h-[90vh] overflow-y-auto', sizes[size])}>
        <div className="flex items-center justify-between p-6 border-b border-navy-50">
          <h2 className="font-display font-bold text-xl text-navy-800">{title}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center hover:bg-navy-100 transition-colors">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M4 4l8 8M12 4l-8 8" stroke="#0B1D45" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

// Input
export function Input({ label, error, className, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && <label className="block text-sm font-medium text-navy-700">{label}</label>}
      <input className={clsx('form-input', error && 'border-red-400', className)} {...props}/>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

// Select
export function Select({ label, error, className, children, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && <label className="block text-sm font-medium text-navy-700">{label}</label>}
      <select className={clsx('form-input', error && 'border-red-400', className)} {...props}>{children}</select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

// Alert
export function Alert({ type = 'info', children }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  }
  return (
    <div className={clsx('flex gap-3 p-4 rounded-xl border text-sm', styles[type])}>
      {children}
    </div>
  )
}

// Progress steps
export function Steps({ steps, current }) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={clsx('w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-display transition-all',
            i < current ? 'bg-green-500 text-white' :
            i === current ? 'bg-gold-500 text-navy-800' :
            'bg-navy-100 text-navy-400'
          )}>
            {i < current ? '✓' : i + 1}
          </div>
          <span className={clsx('text-xs font-medium hidden sm:block', i === current ? 'text-navy-800' : 'text-navy-400')}>{step}</span>
          {i < steps.length - 1 && <div className={clsx('w-8 h-0.5 ml-1', i < current ? 'bg-green-400' : 'bg-navy-100')}/>}
        </div>
      ))}
    </div>
  )
}
