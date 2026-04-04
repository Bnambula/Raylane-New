import { Link } from 'react-router-dom'
import { Logo } from '../ui/index.jsx'

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog & News', to: '/blog' },
    { label: 'Press', to: '/press' },
    { label: 'Our Impact', to: '/impact' },
  ],
  Services: [
    { label: 'Book Travel', to: '/search' },
    { label: 'Send a Parcel', to: '/parcels' },
    { label: 'Charter Vehicle', to: '/charter' },
    { label: 'Tourist Planner', to: '/plan' },
    { label: 'Join as Operator', to: '/operator/apply' },
  ],
  Support: [
    { label: 'Help Centre', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/faq' },
    { label: 'Safety', to: '/safety' },
    { label: 'Refund Policy', to: '/refunds' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/60 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Logo />
            <p className="text-sm text-white/45 mt-4 leading-relaxed max-w-xs">
              Smart travel across Uganda and East Africa. Real-time booking, mobile money payments, and zero-stress journeys for everyone.
            </p>
            <div className="flex gap-2 mt-5">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(s => (
                <a key={s} href="#" className="w-9 h-9 bg-white/6 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/40 rounded-xl flex items-center justify-center transition-all">
                  <span className="text-xs font-bold text-white/60">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-white/45 hover:text-gold-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t border-white/8 border-b border-white/8 mb-6">
          {[
            { icon: '📞', label: 'Phone', value: '+256 700 123 466', href: 'tel:+256700123466' },
            { icon: '✉️', label: 'Email', value: 'info@raylane.com', href: 'mailto:info@raylane.com' },
            { icon: '📍', label: 'Office', value: 'Kampala, Uganda', href: '/contact' },
          ].map(item => (
            <a key={item.label} href={item.href} className="flex items-center gap-3 group">
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="text-xs text-white/35 font-medium">{item.label}</p>
                <p className="text-sm text-white/70 group-hover:text-gold-400 transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">© 2026 Raylane Express Ltd. Registered in Uganda. All rights reserved.</p>
          <div className="flex gap-5">
            {[['Terms & Conditions', '/terms'], ['Privacy Policy', '/privacy'], ['Cookie Policy', '/cookies']].map(([label, to]) => (
              <Link key={to} to={to} className="text-xs text-white/30 hover:text-gold-400 transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        {/* Ecosystem quick links */}
        <div className="mt-6 pt-6 border-t border-white/6 flex flex-wrap gap-3 justify-center">
          <Link to="/admin" className="text-xs bg-white/5 hover:bg-gold-500/15 border border-white/10 hover:border-gold-500/30 text-white/40 hover:text-gold-400 px-4 py-2 rounded-full transition-all">Admin Portal →</Link>
          <Link to="/operator" className="text-xs bg-white/5 hover:bg-gold-500/15 border border-white/10 hover:border-gold-500/30 text-white/40 hover:text-gold-400 px-4 py-2 rounded-full transition-all">Operator Portal →</Link>
          <Link to="/operator/apply" className="text-xs bg-white/5 hover:bg-gold-500/15 border border-white/10 hover:border-gold-500/30 text-white/40 hover:text-gold-400 px-4 py-2 rounded-full transition-all">Become an Operator →</Link>
          <Link to="/parcels/track" className="text-xs bg-white/5 hover:bg-gold-500/15 border border-white/10 hover:border-gold-500/30 text-white/40 hover:text-gold-400 px-4 py-2 rounded-full transition-all">Track Parcel →</Link>
        </div>
      </div>
    </footer>
  )
}
