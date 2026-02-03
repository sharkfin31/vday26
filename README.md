# Valentine's Day RSVP 💕

A cute and artsy Valentine's Day RSVP webpage with an interactive twist!

## Features

- Beautiful gradient background with floating hearts
- Interactive "No" button that moves around when clicked
- After 10 clicks on "No", it automatically converts to "Yes"
- Celebration screen with heart emojis when "Yes" is clicked
- Fully responsive design

## How to Deploy to GitHub Pages

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name it something like `valentine-rsvp` (or any name you prefer)
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
   (Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name)

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - After a few minutes, your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Local Development

To view the page locally, simply open `index.html` in your web browser.

## Customization

Feel free to customize:
- Colors in `styles.css`
- Messages in the `noMessages` array in `script.js`
- The celebration message in `index.html`

---

Made with ❤️ for Valentine's Day
