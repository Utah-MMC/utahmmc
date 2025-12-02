# Utah MMC Employee Portal

A modern Next.js employee portal showcasing partners and portfolio, featuring a professional design inspired by Digital Growth Solutions theme.

## Features

- **Full-Screen Hero Section**: Immersive hero section with fixed transparent header
- **Partners Section**: Display of company partners and collaborators with card-based layout
- **Portfolio Section**: Showcase of projects and achievements with modern card design
- **Modern UI**: Built with Tailwind CSS and Poppins font for a beautiful, responsive design
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Mobile Responsive**: Fully responsive design with mobile menu toggle
- **Section Headings**: Styled section headings with decorative underlines
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Deploying to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

   Vercel will automatically:
   - Build your Next.js application
   - Deploy it to a production URL
   - Set up automatic deployments on every push to your main branch

### Environment Variables

If you need environment variables, add them in the Vercel dashboard under Project Settings > Environment Variables.

## Project Structure

```
├── app/
│   ├── components/
│   │   └── Header.tsx  # Header component with mobile menu
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Main page with partners and portfolio
│   └── globals.css     # Global styles with theme integration
├── public/             # Static assets
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

## Customization

### Adding Partners

Edit the `partners` array in `app/page.tsx`:

```typescript
const partners = [
  {
    id: 1,
    name: 'Your Partner Name',
    logo: '/path-to-logo.svg',
    description: 'Partner description',
  },
  // Add more partners...
]
```

### Adding Portfolio Items

Edit the `portfolio` array in `app/page.tsx`:

```typescript
const portfolio = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    category: 'Category',
    image: '/path-to-image.svg',
  },
  // Add more projects...
]
```

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Poppins Font**: Modern, professional typography
- **React 18**: UI library

## Design Features

- **Theme Integration**: Incorporates best design elements from Digital Growth Solutions theme
- **Fixed Header**: Transparent header with backdrop blur effect
- **Hero Section**: Full-screen hero with gradient background
- **Card Layouts**: Modern card-based layouts for partners and portfolio
- **Button Styles**: Custom button styles with hover effects
- **Section Styling**: Professional section headings with decorative underlines

## License

Private - Utah MMC

