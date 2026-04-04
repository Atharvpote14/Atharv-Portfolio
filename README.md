# Atharv Pote Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with glassmorphism effects
- **Dark Mode**: Built-in dark/light mode toggle
- **Responsive**: Mobile-first design that works on all devices
- **Animated**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed views
- **Skills Display**: Visual representation of technical skills
- **Experience Timeline**: Professional experience timeline
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized for performance

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless API
- **TypeScript** - Type safety

### Deployment
- **Vercel** - Hosting platform (recommended)
- **Netlify** - Alternative hosting option

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── sections/         # Page sections
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer
│   └── Layout.tsx        # Page layout
├── data/                 # Static data
│   ├── projects.ts       # Projects data
│   ├── skills.ts         # Skills data
│   ├── experience.ts     # Experience data
│   └── social.ts         # Social links
├── lib/                  # Utility functions
├── types/                # TypeScript types
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd atharvpoteprotfolio2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Personal Details**: Update `src/data/social.ts` with your social links
2. **Projects**: Modify `src/data/projects.ts` with your projects
3. **Skills**: Update `src/data/skills.ts` with your technical skills
4. **Experience**: Modify `src/data/experience.ts` with your work history

### Styling

The design system is configured in `tailwind.config.ts`:

- **Primary Color**: `#6366f1` (Indigo)
- **Secondary Color**: `#22c55e` (Green)
- **Dark Theme**: Custom dark color palette

### Contact Form

The contact form uses Next.js API routes. To enable email notifications:

1. Set up an email service (SendGrid, Resend, etc.)
2. Update `src/app/api/contact/route.ts` with your email service integration
3. Add environment variables for API keys

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build settings

### Manual Deployment

1. Build the project: `npm run build`
2. Start the production server: `npm run start`

## 📱 Features Overview

### Home Page
- Hero section with animated background
- Featured projects showcase
- Skills overview with progress bars
- Call-to-action section

### Projects Page
- Filterable project gallery
- Project cards with tech stack
- Live demo and GitHub links
- Project statistics

### About Page
- Personal introduction
- Experience timeline
- Technical skills breakdown
- Download resume button

### Contact Page
- Contact form with validation
- Social media links
- Contact information display
- Response time indicator

## 🎯 Performance Features

- **SEO**: Meta tags, structured data, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation
- **Performance**: Optimized images, lazy loading
- **Mobile**: Responsive design, touch-friendly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- Email: atharv.pote@example.com
- GitHub: https://github.com/atharvpote
- LinkedIn: https://linkedin.com/in/atharvpote

---

Built with ❤️ using Next.js and modern web technologies.
