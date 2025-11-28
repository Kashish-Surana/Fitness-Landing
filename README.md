# Fitness Landing Page

A modern, responsive landing page for a fitness app, built using **Next.js**, **Tailwind CSS**, and **Shadcn UI**. This project showcases a clean, minimalist SaaS-style design for a fitness platform with features, testimonials, pricing plans, and a hero section.

---
## Screenshot

![Fitness Landing Screenshot](/Screenshot.png)

## **Live Demo**
https://vercel.com/kashish-suranas-projects/fitness-landing

---

## **Features**

- **Hero Section:** Engaging hero with call-to-action buttons, statistics, and a gym image.  
- **Features Section:** Highlights key app features with icons.  
- **Testimonials Section:** Real transformations with user quotes and ratings.  
- **Pricing Section:** Multiple plans with feature lists and CTA buttons.  
- **Responsive Design:** Fully mobile-friendly and optimized for all screen sizes.  
- **Custom Color Scheme:** Unified blue/purple palette across all components.  

---

## **Tech Stack**

- **Next.js 16** – React framework for server-side rendering and static site generation  
- **Tailwind CSS** – Utility-first CSS framework for rapid styling  
- **Shadcn UI** – Prebuilt UI components  
- **Lucide React** – Icons library  
- **Vercel** – Deployment platform  

---

## **Project Structure**

fitness-landing/
├─ app/
│ ├─ page.tsx
│ └─ globals.css
├─ components/
│ ├─ Hero.jsx
│ ├─ Features.jsx
│ ├─ Testimonials.jsx
│ ├─ Pricing.jsx
│ └─ Footer.jsx
├─ public/
│ └─ img.png
├─ package.json
└─ README.md

---

## **Setup Instructions**

1. Clone the repository:  
```bash
git clone https://github.com/Kashish-Surana/Fitness-Landing.git
cd fitness-landing

2.Install dependencies:

npm install

3.Run development server:

npm run dev

4.Build for production:

npm run build
npm run start

Notes on Vercel Deployment

The project is designed to be deployed on Vercel using Next.js.

All static assets (images, CSS) are in the public/ folder.

Shadcn UI components are used for buttons and layout elements.

Tailwind configuration is customized for a unified blue/purple color palette.