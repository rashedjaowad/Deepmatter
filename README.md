# AI Agency Website - HTML/CSS Version

A modern, minimalistic website for AI solutions agency built with pure HTML, CSS, and JavaScript. Features smooth scroll animations and is optimized for GitHub Pages deployment.

## 🚀 Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/deepmatter.git
   cd deepmatter
   \`\`\`

2. **Open locally**
   - Simply open `index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

3. **Deploy to GitHub Pages**
   - Push to your repository
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select "main" branch and "/ (root)"
   - Your site will be live at `https://yourusername.github.io/deepmatter/`

## ✨ Features

- **Pure HTML/CSS/JS** - No build process required
- **Smooth Scroll Animations** - Elements appear as you scroll
- **Responsive Design** - Works on all devices
- **Company Logo Management** - Add/edit client logos with drag & drop
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Form Handling** - Contact form with validation
- **Parallax Effects** - Subtle background animations
- **Google Fonts** - Modern typography with Inter font
- **Font Awesome Icons** - Professional iconography

## 🎨 Animation Features

- **Fade In Up** - Elements slide up and fade in
- **Fade In Left/Right** - Directional animations for story section
- **Staggered Animations** - Cards appear with delays
- **Parallax Scrolling** - Background shapes move at different speeds
- **Hover Effects** - Interactive elements with smooth transitions

## 📁 File Structure

\`\`\`
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
\`\`\`

## 🛠️ Customization

### Colors
Edit the CSS custom properties in `styles.css`:
\`\`\`css
:root {
    --primary-color: #1f2937;
    --secondary-color: #6b7280;
    --accent-color: #3b82f6;
}
\`\`\`

### Content
- Edit text content directly in `index.html`
- Modify company names in the `companies` array in `script.js`
- Update contact information in the final CTA section

### Animations
- Adjust animation timing in CSS keyframes
- Modify intersection observer thresholds in `script.js`
- Add new animation classes following the existing pattern

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📈 Performance

- **Lightweight**: No external dependencies except fonts and icons
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **SEO Friendly**: Semantic HTML structure
- **Accessible**: ARIA labels and keyboard navigation

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push files to your repository
2. Enable GitHub Pages in repository settings
3. Your site will be live automatically

### Other Hosting
- Upload files to any web server
- Works with Netlify, Vercel, or any static hosting
- No build process required

## 📝 License

MIT License - feel free to use this project for your own agency website.
