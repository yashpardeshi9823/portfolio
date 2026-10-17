# Cinematic Portfolio

A dark, cinematic developer portfolio with a spotlight hero, gold display type and smooth scroll animations.

Built with **React**, **Vite**, **Tailwind CSS** and **Framer Motion**.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Make it yours

Everything personal lives in [`src/data.js`](src/data.js): your name, roles, intro, projects, skills, experience and social links.

- **Photo:** put a transparent-background PNG of yourself (a full-body shot works best) in `public/` and set `photo: '/profile.png'`. You can remove the background with remove.bg or Canva.
- **Resume:** add `public/resume.pdf`.

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Both detect Vite automatically. Use `npm run build` as the build command and `dist` as the output folder.
