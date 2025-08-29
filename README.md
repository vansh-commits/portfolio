# Portfolio Content Update Guide

Use this guide to update your personal details, social links, and projects. Each item lists the exact file and property to edit.

## Personal Info
- Name displayed in footer: `components/Footer.tsx` → replace `© 2025 Vansh Malhotra` with your name.
- Global page title/description: `app/layout.tsx` → `export const metadata` (title, description, authors).

## Contact & Social Links
- Social icons and URLs: `components/constants/footerData.ts`
  - Edit `socialLinks` array: set `href` for GitHub, LinkedIn, Twitter, Email.
  - Email example: `mailto:yourname@example.com`.

## Projects
- Project cards data: `components/constants/projectData.ts`
  - For each project object, set:
    - `title`: project name
    - `description`: one‑sentence summary
    - `image`: cover image URL
    - `tech`: array of technologies
    - `live`: deployed URL
    - `source`: GitHub repository URL

Links render on each card automatically. No component changes required.

## Tech Arsenal Icons
- Technologies list: `components/constants/techData.ts`
  - To add/remove tech, modify `topRowTechnologies` or `bottomRowTechnologies`.
  - Each item supports optional `slug` from Simple Icons (e.g., `"react"`, `"nextdotjs"`). When `slug` is present, an accurate brand SVG is loaded from the CDN.
  - To force a custom inline icon, omit `slug` and provide a component in `icon`.

## Where Things Render
- Tech section component: `components/TechStack.tsx`
- Project card rendering: `components/ProjectCard.tsx`
- Tech icon renderer: `components/TechIcon.tsx`

## Quick Checklist
- [ ] Update `socialLinks` hrefs
- [ ] Update `projects` with `live` and `source`
- [ ] Update name in `Footer.tsx`
- [ ] Update `metadata` in `app/layout.tsx`
- [ ] Adjust techs in `techData.ts` (optional)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
