# Weissach Werks Website Refactor - CLAUDE.md

## Current Status
- ✅ Converted static HTML site to Next.js 14 with App Router
- ✅ Implemented Tailwind CSS for styling (small bundle size)
- ✅ Added Lucide React icons for lightweight iconography
- ✅ Created shared Navbar component
- ✅ Set up pages: Home (/), About (/about), Gallery (/gallery)
- ✅ Configured for static export (`output: 'export'` in next.config.mjs)
- ✅ Moved images to `public/img/` for static hosting
- ✅ Added `trailingSlash: true` for GitHub Pages compatibility

## Project Structure
```
weissachwerks/
├── app/
│   ├── layout.js          # Root layout with Navbar
│   ├── page.js            # Home page
│   ├── about/page.js      # About page
│   ├── gallery/page.js    # Gallery page
│   └── globals.css        # Tailwind styles
├── components/
│   └── Navbar.js          # Shared navigation
├── public/
│   └── img/               # Static images
├── package.json           # Dependencies (Next.js, Tailwind, Lucide)
├── next.config.mjs        # Static export config
├── tailwind.config.js     # Tailwind config
└── postcss.config.js      # PostCSS config
```

## Next Steps
1. **Install dependencies**: `npm install`
2. **Build static files**: `npm run build` (outputs to `out/` folder)
3. **Deploy to GitHub Pages**:
   - Push `out/` contents to `gh-pages` branch or use GitHub Actions
   - Ensure CNAME file is in the deployed folder
4. **Test deployment**: Verify all pages load correctly on GitHub Pages
5. **Optional optimizations**:
   - Add image optimization with Next.js Image component
   - Implement loading states and error boundaries
   - Add SEO metadata to each page

## Key Features Implemented
- **Responsive design** with Tailwind utilities
- **Dark theme** with glassmorphism effects
- **Video background** on homepage
- **Grid layouts** for features and gallery
- **Smooth scrolling** and hover effects
- **Static export** ready for GitHub Pages

## Notes
- All images now served from `/img/` (moved to `public/img/`)
- Navigation uses Next.js Link for client-side routing (but static export converts to `<a>` tags)
- Tailwind classes provide consistent spacing, colors, and responsive behavior
- Lucide icons are tree-shakeable and lightweight

## Commands to Run
```bash
npm install
npm run build
# Then deploy the 'out' folder contents to GitHub Pages
```