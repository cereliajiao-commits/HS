# HONGSHENG Auto Parts - Next.js Website

衡水宏盛汽车配件有限公司官方网站 - Next.js App Router 全栈项目

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Runtime**: Node.js (server-side capable)
- **Deployment**: Vercel (with full server-side features)

## Project Structure

```
hongsheng-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage entry
│   ├── globals.css         # All styles
│   └── api/
│       └── inquiry/
│           └── route.ts    # API route (ready for Formspree)
├── components/
│   ├── HomePage.tsx        # Main page orchestrator
│   ├── Navigation.tsx      # Navbar with scroll effect
│   ├── HeroSection.tsx     # Hero banner
│   ├── AboutSection.tsx    # About company
│   ├── ProductsSection.tsx # Products with filter
│   ├── AdvantagesSection.tsx
│   ├── ContactSection.tsx  # Contact form (action="")
│   ├── Footer.tsx
│   ├── ChatWidget.tsx      # Live chat -> WhatsApp
│   ├── FloatingButtons.tsx # WhatsApp/WeChat/Phone
│   ├── ProductModal.tsx    # Product detail popup
│   └── WeChatModal.tsx     # WeChat QR popup
├── data/
│   ├── products.ts         # Product card data
│   └── productDetails.ts   # Product detail data
├── public/
│   └── images/
│       ├── company/        # Company photos
│       └── products/       # Product photos
├── package.json
├── next.config.js          # No static export
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

1. Push this project to your GitHub repository
2. Go to [vercel.com](https://vercel.com), sign in with GitHub
3. Click "Add New" → "Project"
4. Select your repository
5. Framework will be auto-detected as Next.js
6. Click "Deploy"

## Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `hongshengautoparts.com`)
3. Configure DNS:

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | 76.76.21.21        |
| CNAME | www  | cname.vercel-dns.com |

4. SSL is automatically provisioned

## Form Integration (Formspree)

The contact form has `action=""` by default. To integrate Formspree:

1. Create a form at [formspree.io](https://formspree.io)
2. Get your form endpoint (e.g., `https://formspree.io/f/xyzabc`)
3. Update the form action in `components/ContactSection.tsx`
4. Or use the API route at `app/api/inquiry/route.ts`

## Key Features

- Full server-side rendering (NOT static export)
- API routes for backend logic
- Product filtering (by type / by brand)
- Product detail modals
- Live chat widget (redirects to WhatsApp)
- WeChat QR code modal
- Responsive design (mobile-first)
- Smooth scroll animations
- Floating contact buttons
- Form ready for Formspree integration

## Important Notes

- `output: 'export'` is NOT enabled — this is a full-stack project
- Server-side API routes are available at `/api/*`
- Images go in `public/images/` directory
- All interactive features (modals, filters, chat) are preserved
