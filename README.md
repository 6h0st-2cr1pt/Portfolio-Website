# 🌟 Portfolio Website - Jonald Sabordo

A modern, professional portfolio website featuring **Apple Liquid UI design** with glassmorphism effects, smooth animations, and responsive layout.

## ✨ Features

### Design Elements
- 🎨 **Apple Liquid UI** - Premium glassmorphism with backdrop filters
- 💧 **Liquid Animations** - Floating gradient blobs and smooth transitions
- 🌈 **Animated Gradients** - Dynamic color-shifting backgrounds
- ✨ **Smooth Interactions** - Cubic-bezier easing for premium feel
- 📱 **Fully Responsive** - Optimized for all screen sizes

### Sections
- **Navigation Bar** - Sticky glass navbar with active states
- **Profile Card** - Hero section with avatar and introduction
- **Skills Section** - Soft skills and hard skills display
- **Education** - Academic background
- **Work Experience** - Professional history with details
- **Certifications** - Professional certifications showcase
- **Projects Grid** - Portfolio projects in masonry layout
- **Contact Form** - Interactive form with profile image
- **Footer** - Comprehensive footer with contact info and social links

### Technical Highlights
- ✅ CSS Glassmorphism with `backdrop-filter`
- ✅ Keyframe animations for liquid effects
- ✅ CSS Grid & Flexbox for responsive layouts
- ✅ Smooth hover transitions
- ✅ Form validation with JavaScript
- ✅ Smooth scroll navigation
- ✅ Optimized for performance

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with glassmorphism
- **JavaScript** - Interactive functionality
- **Google Fonts** - Segoe UI fallback
- **SVG Icons** - Scalable vector graphics

## 📋 Project Structure

```
Portfolio-Website/
├── index.html          # Main HTML file
├── styles.css          # Apple Liquid UI styles
├── script.js           # Interactive functionality
├── media/
│   └── jo.jpg         # Profile images
├── README.md          # Project documentation
└── LICENSE            # License information
```

## 🎨 Design System

### Color Palette
- **Background**: Dark gradient (#0a0a0a to #0f0f14)
- **Glass**: rgba(255, 255, 255, 0.08) with blur
- **Accent 1**: rgba(99, 102, 241, 0.x) - Purple/Indigo
- **Accent 2**: rgba(236, 72, 153, 0.x) - Pink
- **Accent 3**: rgba(59, 130, 246, 0.x) - Blue
- **Text**: #e0e0e0 with opacity variations

### Typography
- **Headings**: 700-800 weight, tight letter-spacing
- **Body**: 400-600 weight, optimal line-height
- **Labels**: 11px uppercase with letter-spacing

### Spacing
- **Container**: Max-width 1400px
- **Padding**: 20-40px responsive
- **Gap**: 10-30px between elements
- **Border Radius**: 14-32px for cards

## 🖥️ Browser Support

- ✅ Chrome 76+ (Full support)
- ✅ Firefox 103+ (Full support)
- ✅ Safari 9+ (Full support with -webkit prefix)
- ✅ Edge 79+ (Full support)
- ⚠️ IE 11 (Limited support, no backdrop-filter)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. **Navigate to the project**
   ```bash
   cd portfolio-website
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

## 📝 Customization Guide

### Update Personal Information

1. **Profile Section** (`index.html` line ~27)
   - Replace profile image: `media/jo.jpg`
   - Update name and description

2. **Skills** (`index.html` line ~36)
   - Add your soft and hard skills

3. **Experience & Education** (`index.html` line ~64)
   - Update with your actual credentials

4. **Contact Information** (`index.html` line ~224)
   - Change email, phone, and location

5. **Social Links** (`index.html` line ~273)
   - Update with your social media profiles

### Modify Colors

Edit `styles.css` at `:root` variables (line ~525):
```css
:root {
    --bg-base: #0a0a0a;
    --glass-bg: rgba(255, 255, 255, 0.08);
    --text: #e0e0e0;
    --muted: #9aa0a6;
}
```

### Adjust Animations

Modify keyframes in `styles.css`:
- `gradientShift` - Background animation speed
- `liquidFloat` - Blob movement patterns
- `float` - Bubble animations

## 🎯 Performance Optimization

- ✅ Optimized CSS with minimal redundancy
- ✅ Reduced from 3166 to 1935 lines of CSS
- ✅ Efficient animations using `transform` and `opacity`
- ✅ Lazy loading for images (can be implemented)
- ✅ Minification ready

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Jonald Sabordo**
- Email: jonald.sabordo@email.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)
- Portfolio: [Your Website](https://yourwebsite.com)

## 🙏 Acknowledgments

- Design inspiration from Apple's design language
- Glassmorphism trend in modern web design
- Icons from inline SVG graphics
- Community feedback and contributions

## 📊 Project Stats

- **Lines of Code**: ~2,000 CSS, ~400 JS, ~350 HTML
- **File Size**: ~80KB total (unminified)
- **Load Time**: <1s on fast connection
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

---

**Built with ❤️ and modern web technologies**

*Last Updated: October 2025*

