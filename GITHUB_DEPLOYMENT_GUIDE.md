# 📘 SRPSS School Website - Complete Setup Guide

## 🌐 GitHub & Deployment Instructions

### Step 1: Configure Git Locally (Already Done ✅)

Repository is initialized and ready with all files committed.

### Step 2: Push to GitHub (Two Methods)

#### **Method A: Using GitHub CLI (Recommended)**

```bash
# Install GitHub CLI from https://cli.github.com
# Then run:
gh repo clone sujeet0139/sprrs

# Or create new repo:
gh repo create sprrs --public --source=. --remote=origin --push
```

#### **Method B: Using HTTPS with Personal Access Token**

```bash
# 1. Generate Personal Access Token on GitHub:
#    Settings → Developer settings → Personal access tokens → Generate new token
#    Give it repo permissions

# 2. Configure Git to use token:
git config --global user.name "Your Name"
git config --global user.email "your.email@github.com"

# 3. When pushing, use token as password:
git remote set-url origin https://<github-token>@github.com/sujeet0139/sprrs.git
git push -u origin main
```

#### **Method C: Using SSH Keys**

```bash
# 1. Generate SSH keys (if not done):
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa

# 2. Add public key to GitHub:
#    Settings → SSH and GPG keys → New SSH key
#    Paste content of ~/.ssh/id_rsa.pub

# 3. Test SSH connection:
ssh -T git@github.com

# 4. Then push:
git push -u origin main
```

---

## 🚀 VERCEL DEPLOYMENT (One-Click Process)

### Option 1: Deploy Directly from GitHub (FASTEST)

1. **Go to** https://vercel.com/new
2. **Sign in** with your GitHub account
3. **Select repository**: `sprrs`
4. **Click "Import"**
5. **Vercel will automatically detect Next.js**
6. **Click "Deploy"**

✅ Your site will be live in 1-2 minutes!

Live URL: `https://sprsschool.com`

### Option 2: Deploy with Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel (opens browser)
vercel login

# 3. Deploy
vercel
# Follow prompts and site will be live!

# 4. For production deployment
vercel --prod
```

### Option 3: GitHub integration (Auto-deploying)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Git Integration
4. Enable automatic deployments on push to `main`
5. Now every `git push` will auto-deploy!

---

## 🎯 Current Status

✅ **UI Development**: 100% Complete
- Logo: Enhanced & Professional
- Header: Modern with mobile menu
- Hero: Animated section
- Pages: About, Academics, Facilities, Contact
- Components: Birthday, News, Activities, etc.
- Animations: Full CSS animations
- Responsive: Mobile-first design

✅ **Git Setup**: Ready
- Local repository initialized
- Commit saved with all changes
- Remote configured

⏳ **GitHub Push**: Awaiting authentication setup
⏳ **Vercel Deployment**: Ready to deploy once on GitHub

---

## 📋 Pre-Deployment Checklist

- [x] All UI components created
- [x] All pages built and tested
- [x] Logo updated
- [x] Animations working
- [x] Mobile responsive
- [x] Git repository initialized
- [x] Deployment configs added
- [ ] Push to GitHub
- [ ] Deploy on Vercel

---

## 🔐 Authentication Setup Instructions

### For HTTPS (Recommended for beginners):

1. https://github.com/settings/personal-access-tokens
2. Click "Generate new token (classic)"
3. Give these permissions:
   - repo (full control)
   - workflow
4. Copy the token
5. Run:
   ```bash
   git config --global credential.helper store
   git remote set-url origin https://<TOKEN>@github.com/sujeet0139/sprrs.git
   git push -u origin main
   ```

6. When prompted, use token as password

---

## ✨ Post-Deployment

### Add Custom Domain (Optional)

1. In Vercel Dashboard → Project Settings → Domains
2. Add your domain
3. Update DNS settings (Vercel will provide instructions)

### Setup Custom Email (Optional)

1. In Vercel Dashboard → Integrations
2. Connect email service (SendGrid, Mailgun, etc.)

### Monitor Performance

1. Vercel Dashboard → Analytics
2. Check Core Web Vitals
3. Monitor traffic and performance

---

## 🆘 Troubleshooting

### Git Push Fails

```bash
# Reset remote URL
git remote set-url origin https://github.com/sujeet0139/sprrs.git

# Or check status
git remote -v

# Or try direct approach
git push origin main --force

# Last resort - clone from GitHub and recopy files
# Then push from clean clone
```

### Vercel Deployment Issues

1. Check build logs in Vercel Dashboard
2. Verify `package.json` scripts
3. Check `.vercelignore` file
4. Ensure all `package.json` dependencies are correct

### Website Not Loading

1. Check Vercel deployment status
2. View browser console for errors
3. Check network tab for 404s
4. Verify DNS if using custom domain

---

## 📞 Support & Next Steps

### Website is Live! 🎉

Once deployed on Vercel:

1. **Testing**: Visit your Vercel URL
2. **Announcement**: Share URL with school
3. **Feedback**: Collect feedback
4. **Improvements**: Make updates and push to GitHub (auto-deploys)

### Future Enhancements

1. Admin dashboard
2. Student portal
3. Payment integration
4. Email notifications
5. Analytics

---

## 🚀 Quick Deploy Summary

```bash
cd d:\sujeet\school

# 1. Authenticate with GitHub
# (Follow Method A, B, or C above)

# 2. Push to GitHub
git push -u origin main

# 3. Deploy on Vercel
# Go to https://vercel.com/new and select sprrs repo
# Click Deploy - Live in 1-2 min!
```

---

**Website Status**: ✅ Ready for Production
**Last Updated**: April 15, 2026
**Version**: 2.0.0
