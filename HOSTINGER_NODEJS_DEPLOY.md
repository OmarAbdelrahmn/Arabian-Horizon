# Hostinger Node.js Hosting Deployment Guide

## Overview
This guide is specifically for deploying your React + Vite application to **Hostinger's Node.js hosting**. The application uses an Express server to serve the static build files.

## Prerequisites
- ✅ Hostinger Node.js hosting plan
- ✅ GitHub repository connected to Hostinger
- ✅ Node.js version 18+ on Hostinger

---

## Deployment Steps

### 1. Build Your Project Locally (Optional Testing)

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test locally
npm start
# Visit http://localhost:3000
```

### 2. Configure Hostinger Node.js Application

#### A. Login to hPanel
1. Go to your Hostinger control panel
2. Navigate to **Node.js** section
3. Click on your application or create a new one

#### B. Set Application Configuration
Configure these settings:

| Setting | Value |
|---------|-------|
| **Application Root** | `/` or your repo root |
| **Application URL** | Your domain (e.g., `yourdomain.com`) |
| **Application Startup File** | `server.js` |
| **Node.js Version** | 18.x or higher |
| **Application Mode** | Production |

#### C. Set Environment Variables (Optional)
In the Node.js app settings, add:
```
NODE_ENV=production
PORT=3000
```

### 3. GitHub Auto-Deploy Setup

#### A. Connect Your Repository
1. In hPanel → **Git** section
2. Click **Connect to GitHub**
3. Select your repository: `Arabian-Horizon`
4. Choose branch: `main` (or your default branch)

#### B. Configure Build Settings
Set the following in GitHub deployment settings:

**Build Commands:**
```bash
npm install
npm run build
```

**Entry Point:** `server.js`

**Node Version:** `18`

### 4. Deploy

#### Option A: Auto-Deploy from GitHub
1. Push your changes to GitHub
2. Hostinger will automatically:
   - Pull the latest code
   - Run `npm install`
   - Run `npm run build`
   - Start the server with `npm start`

#### Option B: Manual Deploy via File Manager
If you prefer manual deployment:
1. Build locally: `npm run build`
2. Upload these files to Hostinger:
   - `server.js`
   - `package.json`
   - `package-lock.json`
   - `dist/` folder (entire folder)
   - `.npmrc`
   - `vite.config.ts` (if needed for build)
3. Via Hostinger SSH or terminal:
   ```bash
   npm install --production
   npm start
   ```

---

## File Structure on Hostinger

Your deployment should have this structure:
```
/home/username/domains/yourdomain.com/
├── server.js                    # Express server
├── package.json                 # Dependencies
├── package-lock.json
├── .npmrc                      # NPM config
├── dist/
│   └── public/                 # Built files
│       ├── index.html
│       ├── assets/
│       │   ├── index-[hash].js
│       │   ├── index-[hash].css
│       │   └── ...
│       ├── favicon.png
│       └── opengraph.jpg
└── node_modules/               # Auto-generated
```

---

## Verification

### Check if Server is Running
1. In hPanel → **Node.js** → Your app
2. Status should show: **Running ✓**
3. View logs for any errors

### Test Your Website
Visit your domain and verify:
- ✅ Homepage loads correctly
- ✅ All routes work (e.g., `/about`, `/contact`)
- ✅ Images and assets load
- ✅ No console errors in browser DevTools
- ✅ Page refresh works on any route (no 404)

---

## Troubleshooting

### Issue: 403 Forbidden Error

**Solution:**
- Ensure `server.js` is set as the startup file
- Check that `dist/public` folder exists with built files
- Verify file permissions (usually auto-set by Hostinger)

### Issue: Application Not Starting

**Check Application Logs:**
1. hPanel → Node.js → Your app → **View Logs**
2. Look for error messages

**Common Causes:**
- Missing dependencies: Run `npm install`
- Build files missing: Run `npm run build`
- Port conflict: Ensure using port 3000 (or PORT env variable)
- Syntax errors in `server.js`

### Issue: Routes Return 404

**Solution:**
The Express server handles SPA routing. If you get 404s:
1. Verify `server.js` has the wildcard route: `app.get('*', ...)`
2. Ensure `index.html` exists in `dist/public/`
3. Check server logs for errors

### Issue: CSS/JS Files Not Loading

**Solution:**
1. Check browser DevTools → Network tab
2. Verify file paths in `index.html`
3. Ensure `dist/public/assets/` folder was deployed
4. Check server logs for 404 errors on assets

### Issue: Server Crashes or Restarts

**Check Error Logs:**
```bash
# Via SSH
pm2 logs
# Or check in hPanel logs
```

**Common fixes:**
- Update Node.js version in hPanel
- Check for memory limits
- Verify all dependencies are installed

---

## Performance Tips

### 1. Enable Compression
Already configured in `server.js` with the `compression` middleware.

### 2. Optimize Build
```bash
# Ensure production build
NODE_ENV=production npm run build
```

### 3. Use CDN (Optional)
For better performance, consider using Cloudflare with Hostinger.

---

## Updating Your Site

### Via GitHub
1. Make changes locally
2. Commit and push to GitHub
3. Hostinger auto-deploys (if configured)

### Manual Update
1. Build locally: `npm run build`
2. Upload `dist/` folder to Hostinger
3. Restart Node.js app in hPanel

---

## Important Notes

> [!IMPORTANT]
> - This setup uses **Node.js hosting**, not regular shared hosting
> - The Express server runs continuously to serve your files
> - Always run `npm run build` before deploying to generate the `dist/` folder
> - The `server.js` file MUST be present on Hostinger

> [!TIP]
> - Use GitHub auto-deploy for easier updates
> - Monitor your Node.js app logs regularly
> - Keep dependencies updated for security

---

## Need Help?

### Check These First:
1. **Application logs** in hPanel
2. **Error.log** in your domain's logs folder
3. Browser DevTools → Console tab

### Contact Support:
If issues persist, contact Hostinger support with:
- Your domain name
- Application logs excerpt
- Error message screenshot
- Steps you've already tried

---

## Summary Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Install dependencies (Hostinger runs this)
npm install

# Start server (Hostinger runs this)
npm start
```
