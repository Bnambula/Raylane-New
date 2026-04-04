import { useNavigate } from 'react-router-dom'
import { DEPARTURES_LIVE, PARTNERS, TESTIMONIALS, SIGHTS } from '../../data/constants'
import { Stars } from '../ui/index.jsx'
import { useEffect, useRef, useState } from 'react'

// Leaving Soon
export function LeavingSoonSection() {
  const navigate = useNavigate()
  return (
    <section className="bg-navy-800 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h2 className="font-display font-bold text-white text-base">Leaving Soon</h2>
            <span className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"/>🔥 Live
            </span>
          </div>
          <button onClick={() => navigate('/search')} className="text-xs text-gold-400 font-semibold hover:text-gold-300">
            View all →
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2">
          {DEPARTURES_LIVE.map(dep => (
            <div key={dep.id} className="min-w-[185px] bg-white/6 hover:bg-white/10 border border-white/10 hover:border-gold-500/30 rounded-2xl p-4 flex-shrink-0 transition-all duration-200 cursor-pointer group"
              onClick={() => navigate('/search')}>
              <p className="font-display font-bold text-white text-sm mb-2">{dep.route}</p>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-white/60">{dep.time}</span>
                <span className={`text-xs font-bold ${dep.urgent ? 'text-red-300' : 'text-green-300'}`}>
                  {dep.urgent ? '🔥' : '✓'} {dep.seatsLeft} left
                </span>
              </div>
              <p className="font-display font-bold text-gold-500 text-base mb-3">{dep.price}</p>
              <button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-800 font-display font-bold text-xs py-2 rounded-lg transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats bar
export function StatsBar() {
  const stats = [
    { num: '50,000+', label: 'Trips Booked' },
    { num: '120+', label: 'Operators' },
    { num: '15', label: 'Cities' },
    { num: '4.8★', label: 'Rating' },
    { num: '98%', label: 'On-time Rate' },
  ]
  return (
    <div className="bg-gold-500 py-5">
      <div className="max-w-7xl mx-auto px-5 flex justify-around flex-wrap gap-4">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-display font-extrabold text-navy-800 text-2xl">{s.num}</p>
            <p className="text-xs font-bold text-navy-800/60 uppercase tracking-wide mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Services grid
export function ServicesSection() {
  const navigate = useNavigate()
  const services = [
    { icon: '🚌', title: 'Passenger Booking', desc: 'Book seats on buses and coaches instantly across East Africa.', href: '/search', cta: 'Search Trips' },
    { icon: '🚐', title: 'Taxi / Matatu', desc: 'Fast shared taxis (right-hand drive) for city links and short routes.', href: '/search?type=taxi', cta: 'Book Taxi' },
    { icon: '📦', title: 'Send a Parcel', desc: 'Same-day and next-day parcel delivery on our bus network.', href: '/parcels', cta: 'Send Now' },
    { icon: '🚎', title: 'Charter Vehicle', desc: 'Private vehicles with dedicated driver for groups of 10 or more.', href: '/charter', cta: 'Get Quote' },
    { icon: '🗺️', title: 'Tourist Planning', desc: 'Plan your Uganda journey with local tips and expert advice.', href: '/plan', cta: 'Plan Trip' },
    { icon: '🏢', title: 'Operator Services', desc: 'Join Raylane, manage trips, fleet, drivers and bookings in one place.', href: '/operator/apply', cta: 'Join Now' },
  ]
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Everything You Need to Travel</h2>
          <p className="section-sub max-w-xl mx-auto">From solo trips to full charter — Raylane handles it all with zero stress.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <button key={i} onClick={() => navigate(s.href)}
              className="card p-6 text-left group cursor-pointer border-b-2 border-b-transparent hover:border-b-gold-500">
              <div className="w-14 h-14 bg-navy-800 group-hover:bg-gold-500 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-navy-800 mb-2">{s.title}</h3>
              <p className="text-sm text-navy-400 leading-relaxed mb-4">{s.desc}</p>
              <span className="text-xs font-bold text-gold-600 group-hover:text-gold-500">{s.cta} →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// Partners carousel
export function PartnersSection() {
  const doubled = [...PARTNERS, ...PARTNERS]
  return (
    <section className="py-14 bg-navy-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-8 text-center">
        <span className="section-label">Our Network</span>
        <h2 className="section-title">Trusted Transport Partners</h2>
        <p className="section-sub">Licensed operators vetted by Raylane. New partners appear automatically when onboarded.</p>
      </div>
      <div className="relative">
        <div className="flex gap-4 animate-scroll-x w-max">
          {doubled.map((name, i) => (
            <div key={i} className="bg-white border border-navy-100 rounded-2xl px-7 py-4 flex items-center justify-center min-w-[160px] h-16 hover:border-gold-500/50 hover:shadow-navy-sm transition-all flex-shrink-0">
              <span className="font-display font-bold text-navy-800 text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="section-label">Traveller Stories</span>
          <h2 className="section-title">An Experience of a Lifetime</h2>
          <div className="flex flex-col items-center mt-4">
            <span className="font-display font-extrabold text-5xl text-navy-800">4.8</span>
            <Stars rating={4.8} />
            <span className="text-sm text-navy-400 mt-1">Based on 2,840+ verified reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <Stars rating={t.rating} />
                <span className="font-display font-extrabold text-4xl text-gold-200 leading-none">"</span>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-navy-800 rounded-full flex items-center justify-center font-display font-bold text-gold-500 text-xs">{t.avatar}</div>
                <div>
                  <p className="font-display font-bold text-navy-800 text-sm">{t.name}</p>
                  <p className="text-xs text-navy-400">{t.route}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA band
export function CTASection() {
  const navigate = useNavigate()
  return (
    <section className="bg-navy-800 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {Array.from({length:6}).map((_,i) => (
          <div key={i} className="absolute border border-gold-500 rounded-full" style={{width:`${200+i*100}px`,height:`${200+i*100}px`,left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}/>
        ))}
      </div>
      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <span className="section-label">Ready to Travel?</span>
        <h2 className="font-display font-extrabold text-white mb-4" style={{fontSize:'clamp(1.75rem,4vw,3rem)'}}>
          Your Next Journey Starts Here
        </h2>
        <p className="text-white/60 text-lg mb-8 leading-relaxed">
          Book today. Pay only 20% to lock your seat. Zero signup required.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={() => navigate('/search')} className="btn-primary text-base px-8 py-4">
            Book a Trip Now
          </button>
          <button onClick={() => navigate('/plan')} className="btn-secondary text-base px-8 py-4">
            Plan My Journey
          </button>
        </div>
      </div>
    </section>
  )
}
