# ClearPic - AI-Powered Image Enhancement Platform

<div align="center">
  <img src="public/assets/images/logo.svg" alt="ClearPic Logo" width="200" height="80"/>
  
  <h3>Unleash Your Creative Vision with AI-Powered Image Transformations</h3>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)](https://tailwindcss.com/)
</div>

## 🚀 Overview

ClearPic is a cutting-edge AI-powered image enhancement platform that allows users to transform their images using advanced artificial intelligence. Built with Next.js 15 and modern web technologies, it provides a seamless experience for image restoration, background removal, object manipulation, and creative editing.

## ✨ Features

### 🖼️ AI Image Transformations
- **Image Restore** - Enhance and restore old or damaged photos
- **Generative Fill** - Intelligently fill missing parts of images
- **Object Remove** - Remove unwanted objects seamlessly
- **Object Recolor** - Change colors of specific objects
- **Background Remove** - Professional background removal

### 🔐 User Management
- **Authentication** - Secure sign-in/sign-up with Clerk
- **User Profiles** - Personalized user accounts
- **Credit System** - Pay-per-use credit-based pricing

### 💳 Payment Integration
- **Stripe Integration** - Secure payment processing
- **Flexible Plans** - Multiple pricing tiers
- **Credit Purchase** - Buy credits as needed

### 📱 Modern UI/UX
- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Theme switching support
- **Intuitive Interface** - Easy-to-use transformation tools
- **Real-time Preview** - See changes instantly

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend & Services
- **Cloudinary** - Image processing and storage
- **MongoDB** - Database with Mongoose ODM
- **Clerk** - Authentication and user management
- **Stripe** - Payment processing
- **Webhooks** - Real-time event handling

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database
- **Cloudinary** account
- **Clerk** account
- **Stripe** account

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/clear_pic.git
cd clear_pic
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
WEBHOOK_SECRET=your_clerk_webhook_secret

# Database
MONGODB_URL=your_mongodb_connection_string

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 4. Database Setup
Make sure your MongoDB database is running and accessible via the connection string in your environment variables.

### 5. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
clear_pic/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Authentication pages
│   ├── (root)/              # Main application pages
│   └── api/                 # API routes and webhooks
├── components/              # Reusable components
│   ├── shared/              # Shared components
│   └── ui/                  # UI components (shadcn/ui)
├── constants/               # Application constants
├── lib/                     # Utility functions and actions
│   ├── actions/             # Server actions
│   ├── database/            # Database models and connection
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── types/                   # TypeScript type definitions
└── Configuration files...
```

## 🎯 Key Components

### Pages
- **Home** (`/`) - Landing page with transformation options
- **Transformations** (`/transformations/add/[type]`) - AI transformation interface
- **Profile** (`/profile`) - User profile and transformation history
- **Credits** (`/credits`) - Credit purchase page

### Core Components
- **TransformationForm** - Main image transformation interface
- **MediaUploader** - Drag-and-drop image upload
- **TransformedImage** - Before/after image display
- **Collection** - Image gallery with pagination
- **Checkout** - Stripe payment integration

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 API Routes

### Webhooks
- `/api/webhooks/clerk` - Clerk user events
- `/api/webhooks/stripe` - Stripe payment events

## 💳 Credit System

ClearPic uses a credit-based system where:
- New users get 10 free credits
- Each transformation costs 1 credit
- Additional credits can be purchased via Stripe
- Multiple pricing plans available

## 🔒 Authentication

Authentication is handled by Clerk, providing:
- Email/password authentication
- Social login options
- User management
- Session handling
- Middleware protection

## 🖼️ Image Processing

Images are processed using Cloudinary's AI capabilities:
- Automatic image optimization
- AI-powered transformations

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |
| `MONGODB_URL` | MongoDB connection string | ✅ |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | ✅ |
| `CLOUDINARY_API_KEY` | Cloudinary API key | ✅ |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | ✅ |
| `STRIPE_PUBLISHABLE_KEY` | Stripe public key | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret key | ✅ |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Cloudinary](https://cloudinary.com/) - Image and video management
- [Clerk](https://clerk.com/) - Authentication and user management
- [Stripe](https://stripe.com/) - Payment processing
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI components

---

<div align="center">
  <p>Made with ❤️ by the ClearPic Team</p>
</div>
