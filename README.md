# Raylane Express — Web Platform

Uganda's premier intercity transport booking platform.

## Deployment (Vercel)

### Option A — Vercel CLI
```bash
npm i -g vercel
cd raylane-vercel
vercel --prod
```

### Option B — Vercel Dashboard (Drag & Drop)
1. Go to https://vercel.com/new
2. Click **"Deploy without Git"** → drag this folder
3. Click **Deploy**

### Option C — GitHub
1. Push this folder to a GitHub repo
2. Import repo at https://vercel.com/new
3. Vercel auto-detects static site → Deploy

## Structure
```
raylane-vercel/
├── index.html      ← Full platform (Passenger + Admin + Operator)
├── vercel.json     ← Vercel config
├── package.json    ← Project metadata
├── .gitignore
└── README.md
```

## Portals
| Portal | Access |
|--------|--------|
| Passenger Website | Default landing page |
| Admin Dashboard | Click "Admin" in nav top-right |
| Operator Portal | Click "Operator" in nav top-right |

## Payment Flow
- MTN MoMo: Merchant Code **RAYLANE EXPRESS**
- Airtel Money: Pay Goods/Services
- QR Code: Available during booking checkout

## Tech Stack
- Pure HTML + CSS + Vanilla JS
- Google Fonts (Bebas Neue + Barlow)
- No framework dependencies
- No build step required
- Vercel static hosting

## Next Steps (Backend)
1. Connect Supabase for bookings database
2. Add WhatsApp API (Twilio / WhatsApp Business)
3. Add SMS gateway (Africa's Talking)
4. Integrate real MoMo payment confirmation webhooks
