# Khush Patel — Portfolio

Personal portfolio website built with React.js.

## 🚀 Setup & Run

```bash
npm install
npm start
```

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── App.js               # Root component + routing
├── App.css              # Global design system (dark/amber theme)
├── index.js             # Entry point
└── components/
    ├── Navbar           # Sticky responsive navbar
    ├── Hero             # Landing section with typewriter
    ├── Skills           # Animated skill bars + tech badges
    ├── Projects         # Filterable project cards
    ├── Certificates     # Certifications (add yours here)
    ├── Hackathons       # Hackathon entries (add yours here)
    ├── Achievements     # GitHub badges + milestones
    ├── Resume           # PDF viewer (no auto-download)
    ├── Contact          # EmailJS contact form
    ├── SocialLinks      # All social platforms
    └── Footer           # Site footer

public/
├── index.html           # SEO meta tags
├── robots.txt           # Search engine rules
├── sitemap.xml          # Sitemap for Google Search Console
└── Khush_Patel_Resume.pdf
```

## ⚙️ Things to Configure

1. **Profile Photo** — In `Hero.js`, replace the `hero__avatar-initials` div with an `<img>` tag pointing to your photo.

2. **EmailJS** — In `Contact.js`, replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`
   with your actual credentials from [emailjs.com](https://www.emailjs.com)

3. **Certificates** — In `Certificates.js`, update the placeholder with your real certificate details.

4. **Hackathons** — In `Hackathons.js`, replace the placeholder with real hackathon entries.

5. **Project YouTube links** — In `Projects.js`, replace `youtube` fields with specific demo video URLs.

6. **Resume** — Replace `public/Khush_Patel_Resume.pdf` with your updated resume anytime.

## 🌐 Deployment

Deploy to Netlify or Vercel by connecting your GitHub repo.
Set domain to `khushpatel.online`.

After deployment, submit to **Google Search Console**:
→ https://search.google.com/search-console
