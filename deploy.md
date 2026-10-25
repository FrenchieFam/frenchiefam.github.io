# Deploy to GitHub Pages

This site uses plain HTML and CSS. There are no dependencies or build commands.

## Deployment settings

- GitHub username: [I will fill in]
- Repository name: `portfolio`
- Branch: `main`
- Pages source: `main` branch, `/root` (repository root, shown as `/(root)` in GitHub)
- Expected URL: `https://<username>.github.io/portfolio/`

## 1. Create the repository in your browser

Create a public GitHub repository named `portfolio`. Leave it empty, without a README, license, or .gitignore.

Replace `YOUR_USERNAME` below with your GitHub username before running the remote command.

## 2. Initialize and commit locally

Run these commands in PowerShell, in this order:

```powershell
Set-Location -LiteralPath 'C:\homelab\portfolio'
git init
git add index.html style.css deploy.md samples/sample-1.mp4
git commit -m "Add portfolio site and sample clip"
git branch -M main
```

## 3. Add the remote and push

```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Complete GitHub authentication if prompted.

## 4. Enable Pages

Open the `portfolio` repository in your browser and go to Settings > Pages.
Under Build and deployment, choose Deploy from a branch. Select branch `main`
and folder `/(root)`, then click Save. This publishes the repository root,
not a folder named `root`.

Expected URL: `https://<username>.github.io/portfolio/`

## Sample clip

The first clip is stored at `samples/sample-1.mp4`. The first video in
`index.html` already references that path. Samples 2 and 3 are still pending.
The portfolio introduction and sample 1 pending labels still need updating
before the page presents that clip as ready.

## Local preview and later updates

Open `index.html` directly in your browser to preview the page. Commit and push
later changes to `main` to update GitHub Pages.
