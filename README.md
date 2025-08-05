# Nainovate - AI & Digital Transformation Website

A modern, responsive website for Nainovate showcasing AI and digital transformation services.

## 🚀 Features

- **Modern Design**: Clean, Apple-inspired aesthetics with smooth animations
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **SEO Ready**: Proper meta tags and sitemap included
- **Interactive Elements**: Particle animations, hover effects, and smooth scrolling

## 📁 Project Structure

```
nainovate/
├── index.html              # Homepage
├── services.html           # Services page
├── ai-solutions.html       # AI Solutions page
├── case-studies.html       # Case Studies page
├── clients.html            # Clients & testimonials page
├── contact.html            # Contact page
├── sitemap.xml            # SEO sitemap
├── assets/
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   ├── js/
│   │   ├── simple.js      # Core JavaScript
│   │   ├── services-page.js
│   │   ├── ai-solutions-page.js
│   │   ├── case-studies-page.js
│   │   ├── clients-page.js
│   │   └── contact-page.js
│   └── images/
│       ├── favicon.svg
│       └── logo/
│           ├── logo-light.svg
│           └── logo-dark.svg
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- **Vanilla JavaScript** - No framework dependencies
- **GSAP** (via CDN) - Premium animations
- **SVG** - Scalable graphics for logos and icons

## 🚀 Deployment

### GitHub Pages

1. Push all files to your GitHub repository
2. Go to Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: main (or master)
5. Select folder: / (root)
6. Save and wait for deployment

Your site will be available at: `https://[username].github.io/[repository-name]/`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain (e.g., `nainovate.com`)
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🎨 Customization

### Colors
Edit the Tailwind config in each HTML file:
```javascript
colors: {
    primary: {
        400: '#9333EA',
        500: '#7C3AED',
        600: '#6D28D9',
    }
}
```

### Content
- Update text content directly in HTML files
- Modify data in JavaScript files for dynamic content
- Replace placeholder images with actual assets

### Logo
Replace the logo SVG files in `assets/images/logo/`:
- `logo-light.svg` - For light mode
- `logo-dark.svg` - For dark mode

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. For better development experience, use a local server:
   - VS Code: Install "Live Server" extension
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`

## 📄 License

© 2024 Nainovate. All rights reserved.

## 🤝 Contact

For any questions or support:
- Email: info@nainovate.com
- Website: https://nainovate.com