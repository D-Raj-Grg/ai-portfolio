# Vercel Automatic Deployment Configuration Guide

## 🚀 How to Enable Automatic Deployments

Currently, you need to manually click "Promote to Production" after each deployment. Follow these steps to enable automatic production deployments:

---

## Step 1: Configure Production Branch in Vercel Dashboard

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: `ai-portfolio`

2. **Open Project Settings**
   - Click on **Settings** tab at the top
   - Navigate to **Git** section in the left sidebar

3. **Set Production Branch**
   - Find the **"Production Branch"** section
   - Make sure it's set to: `main`
   - If it's set to something else (like `master` or a different branch), change it to `main`

4. **Enable Auto-Deploy**
   - Scroll down to **"Deploy Hooks"** or **"Git Integration"**
   - Ensure **"Automatically deploy new commits"** is **ENABLED** ✅
   - Make sure **"Auto-deploy for production branch"** is **ENABLED** ✅

---

## Step 2: Configure GitHub Integration

### Option A: Through Vercel Dashboard

1. **Go to Git Integration Settings**
   - In Project Settings → Git
   - Look for **"GitHub Integration"** or **"Connected Git Repository"**

2. **Verify Repository Connection**
   - Repository: `D-Raj-Grg/ai-portfolio`
   - Branch: `main` (for production)

3. **Enable Auto-Deploy Settings**
   - ✅ **Production Deployments**: Enabled for `main` branch
   - ✅ **Preview Deployments**: Enabled for all branches
   - ✅ **Comments on Pull Requests**: Enabled (optional)

### Option B: Reconnect GitHub Integration

If automatic deployments aren't working:

1. **Disconnect GitHub**
   - Settings → Git → Disconnect

2. **Reconnect GitHub**
   - Click **"Connect Git Repository"**
   - Authorize Vercel on GitHub
   - Select `D-Raj-Grg/ai-portfolio`
   - Choose `main` as production branch

---

## Step 3: Verify Deployment Settings

Go to: **Project Settings → General**

### Build & Development Settings
- **Framework Preset**: Next.js
- **Build Command**: `pnpm build` or leave blank (auto-detect)
- **Output Directory**: `.next` (auto-detect)
- **Install Command**: `pnpm install` or leave blank

### Root Directory
- Leave blank (repository root) ✅

### Node.js Version
- Recommended: `18.x` or `20.x`

---

## Step 4: Check Environment Variables (if needed)

If you have any environment variables:

1. Go to **Settings → Environment Variables**
2. Add any required variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://divyashwar.vercel.app
   ```

---

## Step 5: Test Automatic Deployment

After configuring the settings above:

1. **Make a small change** (already done - you have pending commits)
2. **Push to main branch**:
   ```bash
   git push origin main
   ```
3. **Check Vercel Dashboard**:
   - Go to **Deployments** tab
   - You should see a new deployment starting automatically
   - Status should change from "Building" → "Ready" → **"Production"** (automatically)

---

## 🔍 Troubleshooting

### If deployments still require manual promotion:

#### 1. Check GitHub App Permissions
- Visit: https://github.com/settings/installations
- Find **Vercel** app
- Click **Configure**
- Ensure it has access to `ai-portfolio` repository
- Grant **Read & Write** permissions for:
  - ✅ Contents
  - ✅ Deployments
  - ✅ Pull requests
  - ✅ Commit statuses

#### 2. Check Vercel Production Branch Setting
```bash
# Your current main branch name
git branch --show-current
# Should output: main
```

If Vercel expects a different branch name:
- Either rename your branch in Vercel settings to `main`
- Or change production branch in Vercel to match your default branch

#### 3. Re-import Project (Last Resort)
If nothing works:
1. Delete the project from Vercel (Settings → Advanced → Delete)
2. Re-import from GitHub:
   - Dashboard → Add New → Project
   - Import `D-Raj-Grg/ai-portfolio`
   - Set production branch to `main` during import

---

## ✅ Expected Behavior After Setup

Once configured correctly:

1. **Push to `main` branch** → Automatic production deployment
2. **Push to other branches** → Preview deployment (not production)
3. **Pull Request created** → Preview deployment with comment
4. **Merge PR to main** → Automatic production deployment

---

## 📊 Current Configuration

Your `vercel.json` file has been created with:
```json
{
  "git": {
    "deploymentEnabled": {
      "main": true
    }
  },
  "github": {
    "autoAlias": true,
    "silent": false,
    "autoJobCancelation": true
  }
}
```

This ensures:
- ✅ Main branch triggers production deployments
- ✅ Automatic URL aliases
- ✅ Deployment notifications enabled
- ✅ Cancels previous deployments when new one starts

---

## 🎯 Quick Checklist

Before pushing your next commit, verify:

- [ ] Production branch in Vercel is set to `main`
- [ ] Auto-deploy is enabled in Git settings
- [ ] GitHub app has repository access
- [ ] `vercel.json` is committed and pushed
- [ ] No deployment hooks or custom workflows interfering

---

## 📝 Note

After completing these steps, commit the `vercel.json` file:
```bash
git add vercel.json VERCEL_DEPLOYMENT_GUIDE.md
git commit -m "Add Vercel automatic deployment configuration"
git push origin main
```

This push should trigger an **automatic production deployment**! 🚀

If you still need to manually promote after this, the issue is in Vercel dashboard settings (Steps 1-2 above).
