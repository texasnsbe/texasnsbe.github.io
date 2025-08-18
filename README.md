# NSBE at the University of Texas at Austin - Development Repository

## Repository Overview

This repository contains the complete web application for the National Society of Black Engineers (NSBE) chapter at the University of Texas at Austin. The project serves as the official digital presence for the organization, providing members and prospective members with access to events, officer information, resources, and community connections.

## Project Structure

```
new_directory/
├── nsbe-webpage/           # Main React application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── package.json       # Project dependencies
│   └── README.md          # Application-specific documentation
├── package.json           # Root package configuration
└── README.md             # This file
```

## Quick Start

1. **Navigate to the main application**:

   ```bash
   cd nsbe-webpage
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **View the application**:
   Open your browser to `http://localhost:5173`

## Features Overview

- **Modern React Application**: Built with React 18, Vite, and Tailwind CSS
- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **Dynamic Content**: Event calendars, officer profiles, and photo galleries
- **Social Integration**: Connected to all NSBE social media platforms
- **Member Resources**: Dues payment, Slack community access, and academic resources
- **Performance Optimized**: Fast loading with optimized images and lazy loading

## Technology Stack

- **Frontend Framework**: React 18 with modern hooks and functional components
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first responsive design
- **Routing**: React Router for client-side navigation
- **UI Components**: Headless UI for accessible, unstyled components
- **Icons**: Heroicons and React Icons for consistent iconography
- **Deployment**: Netlify with automatic deployments

## Development Guidelines

### Code Documentation

All components and functions include comprehensive JSDoc documentation with:

- Component purpose and functionality
- Parameter descriptions with types
- Return value documentation
- Usage examples where appropriate

### Component Structure

```
Component/
├── ComponentName.jsx      # Main component file with JSDoc
├── index.js              # Export file (if needed)
└── ComponentName.test.js # Tests (future implementation)
```

### Data Management

- Static data stored in dedicated `/Assets/` directories
- Organized by feature area (Home, Officers, Shared)
- Consistent data structure across all files
- Well-documented data schemas

## Contributing

### Before Making Changes

1. Review the application README in `nsbe-webpage/README.md`
2. Understand the component structure and data flow
3. Check existing documentation and follow established patterns
4. Test changes locally before submitting

### Contribution Process

1. Fork the repository
2. Create a feature branch with descriptive name
3. Make changes following existing patterns
4. Add/update documentation as needed
5. Test thoroughly across different screen sizes
6. Submit a pull request with detailed description

### Code Standards

- Use functional components with React hooks
- Follow JSDoc documentation standards
- Implement responsive design using Tailwind CSS
- Optimize images and implement lazy loading where appropriate
- Ensure accessibility standards are met

## Deployment

The application is automatically deployed via Netlify:

- **Production**: Connected to the main branch
- **Preview**: Available for pull requests
- **Custom Domain**: Configured for the official NSBE website

## Support and Maintenance

### Regular Updates

- Officer information updates each semester
- Event photos and GBM presentations
- Social media links and resource updates
- Security patches and dependency updates

### Contact Information

For technical questions or contribution guidelines:

**Kevin Uduji** - Telecommunications Chair & Lead Developer

- LinkedIn: [kevinuduji](https://www.linkedin.com/in/kevinuduji/)
- GitHub: [kevinuduji](https://github.com/kevinuduji)
- Email: kevinuduji@gmail.com

**NSBE UT Chapter**

- Website: [Official NSBE UT Site]
- Instagram: [@texasnsbe](https://www.instagram.com/texasnsbe)
- LinkedIn: [NSBE UT](https://www.linkedin.com/company/utnsbe/)
- Email: utnsbechair1@gmail.com

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**National Society of Black Engineers - University of Texas at Austin Chapter**

_Excel. Succeed. Impact._
