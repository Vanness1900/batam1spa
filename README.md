# Batam1SPA Customer Website

A modern React-based customer website for Batam1SPA, featuring service booking, facilities information, and contact management. Built with React 19, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Batam1SPA-Customer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── cards/           # Card components for different content types
│   │   ├── CardCart.jsx
│   │   ├── CardFacilities.jsx
│   │   ├── CardFeatures.jsx
│   │   ├── CardGallery.jsx
│   │   ├── CardServices.jsx
│   │   ├── ConfirmationServiceCard.jsx
│   │   └── ServiceList.jsx
│   ├── common/          # Common utility components
│   │   ├── Button.jsx
│   │   ├── ScrollToTopButton.jsx
│   │   ├── SearchAndFilter.jsx
│   │   ├── SearchBar.jsx
│   │   └── Whatsapp.jsx
│   ├── grids/           # Grid and layout components
│   │   ├── Carousel.jsx
│   │   ├── MasonryGrid.jsx
│   │   ├── Slider.jsx
│   │   └── SliderServices.jsx
│   ├── sections/        # Page section components
│   │   ├── CTA.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   └── TopBar.jsx
│   └── ui/              # UI-specific components
│       ├── EditServiceModal.jsx
│       ├── HeroSlider.jsx
│       └── ImageContainer.jsx
├── context/             # React Context for state management
│   └── ServicesContext.jsx
├── layouts/             # Layout components
│   ├── HeroLayout.jsx
│   └── MainLayout.jsx
├── pages/               # Page components
│   ├── Cart/
│   ├── Confirmation/
│   ├── Contact/
│   ├── Error/
│   ├── Facilities/
│   ├── Home/
│   └── Services/
├── assets/              # Static assets (images, icons)
├── App.jsx              # Main application component
├── App.css              # Global styles
├── index.css            # Tailwind CSS imports
└── main.jsx             # Application entry point
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS 4.0.15
- **Routing**: React Router DOM 7.4.1
- **State Management**: React Context API
- **Linting**: ESLint 9.21.0

## 🔧 Key Features

### Service Management
- Service catalog with pricing (local and tourist rates)
- Shopping cart functionality
- Service booking with date/time selection
- Service duration options

### Facilities & Gallery
- Interactive facilities showcase
- Image gallery with masonry layout
- Feature highlights and statistics

### User Experience
- Responsive design for all devices
- Smooth scrolling and navigation
- WhatsApp integration for contact
- Search and filter functionality

## 📱 Pages & Routes

- `/` - Home page with hero, features, and stats
- `/Facilities` - Facilities overview with gallery and features
- `/Services` - Service catalog with booking functionality
- `/Contact` - Contact information and form
- `/Cart` - Shopping cart management
- `/Confirmation` - Booking confirmation
- `/Error404` - 404 error page

## 🔄 State Management

The application uses React Context for state management:

- **ServicesContext**: Manages service data, cart state, and booking functionality
- **Cart Management**: Add/remove items, update quantities, calculate totals
- **Service Booking**: Handle date/time selection and service customization

## 🎨 Styling & Design

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Component Architecture**: Reusable, modular components
- **Custom Components**: Specialized components for spa business needs

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload the `dist` folder to your web server

## 🛠️ Maintenance

### Code Quality
- Run `npm run lint` before committing changes
- Follow React best practices and component patterns
- Maintain consistent file structure and naming conventions

### Updates & Dependencies
- Regularly update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Test thoroughly after major dependency updates

### Performance Optimization
- Optimize images in the `src/assets/` directory
- Use lazy loading for components when appropriate
- Monitor bundle size with `npm run build`

### Content Management
- Update service information in the ServicesContext
- Modify images in `src/assets/` for visual updates
- Update contact information in relevant components

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the existing code style
3. Test your changes thoroughly
4. Submit a pull request with a clear description

## 📞 Support

For technical support or questions about the project, please contact the development team or create an issue in the repository.

---

**Note**: This project does not require environment variables (.env file) as it's a client-side application with static data management.
