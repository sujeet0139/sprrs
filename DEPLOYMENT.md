# Deployment to Vercel

Vercel is the easiest way to deploy Next.js applications.

## One-Click Deployment

1. Push your code to GitHub:
```bash
git add .
git commit -m "UI complete - ready for deployment"
git push origin main
```

2. Go to https://vercel.com
3. Sign in with GitHub account
4. Click "New Project"
5. Select this repository
6. Click "Deploy"

## Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

## Environment Variables (if needed)

Add to Vercel dashboard Project Settings > Environment Variables

## Domain Setup

1. Go to Vercel Dashboard
2. Project Settings > Domains
3. Add your custom domain

## Production URL

After deployment, your site will be available at:
- `https://<project-name>.vercel.app`
- Your custom domain (if configured)

---
