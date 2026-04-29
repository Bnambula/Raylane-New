# Raylane Express v2 — Multi-Page Platform

## URL Structure

| URL | File | Description |
|-----|------|-------------|
| `/` | `index.html` | Passenger website (booking, routes, calculator, footer) |
| `/admin` | `admin/index.html` | Admin portal (login required) |
| `/operator` | `operator/index.html` | Operator portal (login required) |
| `/join` | `join/index.html` | Public operator onboarding |

## Demo Credentials

**Admin Portal** (`/admin`)
- Email: `admin@raylaneexpress.com` · Password: `admin123`
- Email: `finance@raylaneexpress.com` · Password: `finance123`

**Operator Portal** (`/operator`)
- Email: `uganda@express.com` · Password: `operator123`
- Email: `gateway@bus.com` · Password: `gateway123`

## Deploy to Vercel

### Option A — Drag & Drop (fastest)
1. Go to https://vercel.com/new
2. Click **"Deploy without Git"**
3. Drag the `raylane-v2` folder
4. Click **Deploy** → live URL in ~30 seconds

### Option B — Vercel CLI
```bash
npm i -g vercel
cd raylane-v2
vercel --prod
```

### Option C — GitHub
1. Push folder to GitHub repo
2. Import at https://vercel.com/new
3. Vercel auto-detects static → Deploy

## File Sizes
- `index.html` — 478 KB (passenger site, full MVP)
- `admin/index.html` — 226 KB (admin portal + user management)
- `operator/index.html` — 204 KB (operator portal)
- `join/index.html` — 128 KB (onboarding + 3-step form + calculator)

## Next Backend Steps
1. **Supabase** — bookings, payments, trips, users, operators tables
2. **Africa's Talking** — SMS for OTP, payment notifications, credentials
3. **WhatsApp Business API** — QR ticket delivery
4. **MoMo Webhook** — auto-match payments by reference name
