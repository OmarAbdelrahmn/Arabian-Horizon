# Hostinger Deployment Guide

> [!IMPORTANT]
> **This guide is for STATIC hosting (regular shared hosting).** If you're using **Node.js hosting**, please see [HOSTINGER_NODEJS_DEPLOY.md](./HOSTINGER_NODEJS_DEPLOY.md) instead.

## Prerequisites
- Your GitHub repository should be connected to Hostinger
- Ensure you have Node.js hosting enabled on Hostinger

## Step-by-Step Deployment

### 1. Build Your Project Locally First
```bash
npm run build
```
This creates the `dist/public` folder with your production files.

### 2. Files to Deploy
Upload **ONLY** the contents of `dist/public/` folder to your Hostinger public_html directory:
- index.html
- assets/
- favicon.png
- opengraph.jpg
- All other generated files

### 3. Upload .htaccess
Copy the `.htaccess` file from the root directory to your `public_html` folder on Hostinger.

### 4. Directory Structure on Hostinger
Your `public_html` should look like:
```
public_html/
├── .htaccess
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── favicon.png
├── opengraph.jpg
└── attached_assets/ (if needed)
```

### 5. Fix Common "Forbidden" Errors

#### A. Check File Permissions
In Hostinger File Manager or via FTP:
- Folders: 755 (drwxr-xr-x)
- Files: 644 (-rw-r--r--)

Set permissions using:
```bash
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

#### B. Check .htaccess Location
The `.htaccess` file MUST be in the same directory as `index.html` (usually `public_html/`)

#### C. Verify Apache Modules
Ensure these Apache modules are enabled (usually enabled by default on Hostinger):
- mod_rewrite
- mod_headers
- mod_deflate

#### D. Check Your Domain Configuration
In Hostinger control panel:
1. Go to **Websites** → Your domain
2. Click **Settings**
3. Ensure **Document Root** is set to `public_html` (or your deployment folder)

### 6. GitHub Auto-Deploy Setup (Optional)

If using GitHub auto-deploy:

1. **Create build script** (`build.sh` in your repo root):
```bash
#!/bin/bash
npm install
npm run build
cp .htaccess dist/public/
```

2. **Set deployment path** to `dist/public` in Hostinger GitHub deployment settings

3. **Post-deployment script** (if needed):
```bash
#!/bin/bash
cd $HOME/public_html
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

### 7. Troubleshooting

#### Still Getting 403 Forbidden?

1. **Check Hostinger Error Logs**:
   - Login to hPanel
   - Go to Files → Error Logs
   - Look for specific error messages

2. **Common Issues**:
   - Index.html not in the correct directory
   - File permissions too restrictive
   - .htaccess syntax errors
   - mod_rewrite not enabled

3. **Test .htaccess**:
   Temporarily rename `.htaccess` to `.htaccess.bak` to see if it's causing issues.

4. **Contact Hostinger Support**:
   If the issue persists, provide them with:
   - Your domain name
   - The exact error message
   - Screenshot of your file structure
   - Screenshot of file permissions

### 8. Verify Deployment
After deployment, test:
- Homepage loads: `https://yourdomain.com`
- Direct routes work: `https://yourdomain.com/about`
- Assets load correctly
- No console errors in browser DevTools

## Notes
- This is a **static site** deployment (frontend only)
- No Node.js server is required to run the site
- All API calls should be to external services
- The built files are optimized for production
