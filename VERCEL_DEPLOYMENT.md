# 🚀 DEPLOYMENT GUIDE - Vercel Deployment

## Step-by-Step Vercel Deployment

### Prerequisites
- GitHub account with repository `sujeet0139/sprrs`
- Vercel account (free)
- Node.js installed locally

---

## Method 1: Auto-Deploy via Vercel Dashboard (RECOMMENDED)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Select "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Repository
1. In Vercel dashboard, click "New Project"
2. Select "Import Git Repository"
3. Find and select `sujeet0139/sprrs`
4. Click "Import"

### Step 3: Configure Project
1. **Project Name**: Keep as `sprrs` or change to desired name
2. **Framework**: Select "Next.js"
3. **Root Directory**: Leave as `.` (root)
4. **Build Command**: Keep as `npm run build`
5. **Output Directory**: Keep as `.next`
6. **Environment Variables**: Leave empty (unless needed)

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Once complete, you'll get a URL like: `https://sprrs.vercel.app`

### Step 5: Custom Domain (Optional)
1. Go to Project Settings > Domains
2. Add custom domain (e.g., `srpss.edu.in`)
3. Configure DNS settings with your domain provider

---

## Method 2: CLI Deployment

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Authenticate
```bash
vercel login
# Opens browser to authenticate
```

### Step 3: Deploy
```bash
cd d:\sujeet\school
vercel
# Follow prompts, press enter for defaults
```

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Method 3: Git Push Auto-Deploy

### Step 1: Connect Repository (Already Done)
Your repository is already connected to Vercel via:
```bash
git remote add origin https://github.com/sujeet0139/sprrs.git
```

### Step 2: Push to Trigger Deploy
```bash
git add .
git commit -m "UI improvements and deployment ready"
git push origin main
```

### Step 3: Automatic Deployment
- Vercel automatically detects the push
- Builds website (~2 minutes)
- Deploys to production URL
- Sends notification when done

---

## Environment Setup

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### GitHub Configuration

Required files already in place:
- ✅ `.gitignore` - Excludes node_modules, .next
- ✅ `.vercelignore` - Vercel-specific ignores
- ✅ `vercel.json` - Vercel configuration
- ✅ `next.config.ts` - Next.js configuration
- ✅ `package.json` - Dependencies and scripts

---

## Vercel Environment Variables (If Needed)

### Common Variables to Add (Optional)
In Vercel Dashboard > Settings > Environment Variables:

```
# Email Service
SMTP_HOST = your_smtp_host
SMTP_USER = your_email
SMTP_PASS = your_password

# Analytics
NEXT_PUBLIC_GA_ID = google_analytics_id

# API Keys (if any)
NEXT_PUBLIC_API_URL = https://api.example.com
```

**For now**: No variables needed. Website is static.

---

## Performance Optimization

### What Vercel Provides
- ✅ Automatic image optimization
- ✅ Edge caching worldwide
- ✅ Automatic compilation
- ✅ Zero cold starts
- ✅ Built-in CDN
- ✅ Automatic SSL/HTTPS

### Pre-Deployment Checklist
- ✅ All links work locally
- ✅ No console errors
- ✅ Mobile responsiveness tested
- ✅ Images optimized
- ✅ Meta tags in place
- ✅ Performance score >90

---

## Domain Setup

### If Using Custom Domain

#### Option 1: Transfer Domain to Vercel
1. Vercel Dashboard > Settings > Domains
2. Add domain
3. Follow Vercel's instructions
4. Update nameservers (2-48 hours to activate)

#### Option 2: Keep Domain at Current Provider
1. Get Vercel's nameservers from dashboard
2. Update DNS at your domain provider
3. Point to Vercel nameservers
4. Wait for DNS propagation

### Free SSL Certificate
- Automatically provided by Vercel
- Valid for all subdomains
- Auto-renews

---

## Monitoring & Analytics

### Vercel Dashboard Features
- Build logs - View deployment logs
- Function logs - View serverless logs
- Performance analytics - Load times
- Error tracking - Automatic error reporting
- Domains - Manage domains

### Google Analytics (Optional)
Add to `next.config.ts` for tracking:
```javascript
// Add your GA ID to environment variables
// Then implement in page.tsx or layout.tsx
```

---

## Troubleshooting

### Build Fails
**Symptoms**: Build shows error in dashboard

**Solutions**:
1. Check build logs in Vercel
2. Run `npm run build` locally
3. Fix errors locally
4. Commit and push again

### Slow Performance
**Solutions**:
1. Visit Vercel Analytics
2. Check which pages are slow
3. Optimize images
4. Check Next.js performance best practices

### Not Updating After Push
**Solutions**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check github.com/sujeet0139/sprrs for commits
3. Verify builds in Vercel dashboard
4. Check if build was successful

---

## Rollback to Previous Version

### If Deployment Has Issues

1. Go to Vercel Dashboard
2. Select "Deployments"
3. Find previous successful deployment
4. Click "Promote to Production"

### Using Git
```bash
# View commit history
git log

# Revert to previous commit
git revert HEAD

# Push to trigger redeploy
git push origin main
```

---

## Scaling & Limits

### Free Tier (Vercel)
- ✅ 12 serverless function invocations/month
- ✅ Unlimited static sites
- ✅ $0 per GB for bandwidth (100GB free/month)
- ✅ Unlimited builds
- ✅ Global CDN included

### Your Website
- Static Next.js site (no serverless)
- Perfect for free tier
- No monthly costs
- Auto-scales with traffic

---

## Maintenance

### Regular Updates
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Push to deploy
git add .
git commit -m "Update dependencies"
git push origin main
```

### Monitoring
- Check Vercel dashboard monthly
- Review analytics
- Check error logs
- Monitor website speed

---

## Backup & Version Control

### Keep Git Updated
```bash
# Always push important changes
git push origin main

# Vercel automatically deploys
```

### Multiple Branches (Advanced)
```bash
# Create staging branch
git checkout -b staging

# Make changes, test
# Deploy to staging URL via Vercel

# When ready, merge to main
git checkout main
git merge staging
git push origin main
```

---

## Quick Reference

| Action | Command |
|--------|---------|
| Local dev | `npm run dev` |
| Build locally | `npm run build` |
| Production server | `npm start` |
| Deploy to Vercel CLI | `vercel --prod` |
| View logs | Dashboard > Deployments |
| Rollback | Dashboard > Deployments > Promote |
| Update domain | Dashboard > Settings > Domains |

---

## Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Status: https://www.vercel-status.com/

### Next.js Support
- Documentation: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js
- Discord: https://discord.gg/bUG7V3v

---

## Next Steps After Deployment

1. ✅ Test live website
2. ✅ Share URL with stakeholders
3. ✅ Set up Google Analytics
4. ✅ Monitor performance
5. ✅ Plan regular updates
6. ✅ Backup GitHub repository
7. ✅ Update DNS/domain settings

---

**Status**: Ready to Deploy ✅
**Deployment Time**: ~5 minutes
**Estimated Cost**: $0 (Free tier)

---

