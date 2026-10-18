# Recipe Book Frontend

React + Vite + TypeScript frontend for the Recipe Book app, styled with Tailwind CSS.

**Live site:** https://recipe-book-frontend-pi.vercel.app
**Backend repo:** <your backend repo URL>

## Features
- Signup and login
- User dashboard: add, view, edit and delete your recipes
- Admin dashboard: view all recipes
- Redesigned UI with Tailwind CSS

## Tech Stack
React, Vite, TypeScript, Tailwind CSS, Axios

## Setup
1. Install dependencies:
```bash
   npm install
```
2. Create a `.env` file:
```
   VITE_API_BASE_URL=http://localhost:7000/api
```
3. Start the dev server:
```bash
   npm run dev
```

## Build
```bash
npm run build
```

## Deployment (Vercel)
- Framework: Vite, output directory `dist`
- Environment variable: `VITE_API_BASE_URL=https://recipe-book-backend-j1v9.onrender.com/api`
- `vercel.json` rewrites all routes to `index.html` for the SPA.
- Redeploy after changing environment variables.

## Team
- <Member 1>
- <Member 2>
- <Member 3>