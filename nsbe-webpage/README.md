# NSBE at the University of Texas at Austin

## Overview

Welcome to the official repository for the National Society of Black Engineers (NSBE) at the University of Texas at Austin! This landing page is designed to provide both new and returning members with comprehensive information about NSBE at UT, including upcoming and past events, current officers, social plugins, and more.

## Features

- **Responsive Design**: Mobile-first design that works across all devices
- **Upcoming Events**: Stay informed about all the exciting upcoming NSBE events via embedded Google Calendar
- **Past Events**: Browse through a gallery of past events to see what NSBE at UT has been up to
- **Current Officers**: Get to know the current officers leading the chapter with detailed profiles and LinkedIn connections
- **GBM Archive**: Access presentations from recent General Body Meetings
- **Member Resources**: Access important resources including dues payment, Slack community, and leaderboard
- **Social Integration**: Connect with us on various social media platforms
- **E-Week Promotion**: Special section for Engineering Week community building

## Technologies Used

- **React 18**: For building the user interface with modern hooks and components
- **React Router**: For handling client-side navigation between pages
- **Tailwind CSS**: For utility-first styling and responsive design
- **Vite**: For fast development and optimized production builds
- **Heroicons**: For consistent iconography throughout the application
- **React Icons**: For additional icon options
- **Headless UI**: For accessible UI components

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
├── index.css              # Global styles and Tailwind imports
├── Home/                  # Home page components and assets
│   ├── Components/        # Reusable home page components
│   └── Assets/           # Images, data files, and static content
├── Officers/             # Officers page components and data
│   ├── Components/       # Officer-related components
│   └── Assets/          # Officer photos and data files
├── Shared/              # Shared components and assets
│   ├── Components/      # Reusable components (Navbar, Footer, etc.)
│   └── Assets/         # Shared images and data
├── Resources/          # Resources page (future feature)
└── TimeMachine/       # Future opportunities section
```

## Component Documentation

### Core Components

- **Navbar**: Responsive navigation with dynamic section visibility based on scroll position
- **Footer**: Social media links with hover effects and copyright information
- **HeroSect**: Main landing section with welcome message and video
- **GoogleCal**: Embedded Google Calendar for event viewing
- **Meetings**: Grid of recent GBM presentations with links to slides
- **DisplayPoints**: Member leaderboard iframe integration
- **PayDues**: Membership dues information with benefits breakdown
- **EventPhotos**: Horizontal scrolling gallery of event photos

### Officer Components

- **Officers**: Displays all officers organized by department
- **AboutDetails**: Mission statement and leadership team photo
- **AboutApp**: Main officers page container

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or later)
- npm (v8 or later) or yarn (v1.22 or later)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/texasnsbe/nsbe-webpage.git
   cd nsbe-webpage
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

### Running the App

1. **Start the Development Server**:
   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   The app will be available at `http://localhost:5173`.

### Building the App

To create a production build, use the following command:
Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

This will create an optimized production build in the `dist` directory.

### Deployment

The site is configured for deployment on Netlify with:

- Custom redirects handling via `public/_redirects`
- SPA routing support
- Automated builds from the main branch

## Customization

### Adding New Officers

1. Add officer photos to `src/Officers/Assets/Officers/New_Officer_Photos/`
2. Import and add officer data to `src/Officers/Assets/Officers/officers.js`
3. For executive officers, also update `src/Officers/Assets/Officers/top_five.js`

### Adding New Events

1. For GBMs: Add thumbnail and data to `src/Home/Assets/GBMs/gbm.js`
2. For photos: Add images to `src/Home/Assets/EventPhotos/event_photos.js`

### Updating Social Media

Update social media links in:

- `src/Shared/Assets/SocialMedia/socials_colors.js` (colored icons)
- `src/Shared/Assets/SocialMedia/socials_grayscale.js` (shadow effects)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Creator

Kevin Uduji - Telecommunications Chair

• [LinkedIn](https://www.linkedin.com/in/kevinuduji/)

• [GitHub](https://github.com/kevinuduji)

---

Thank you for visiting the NSBE at the University of Texas at Austin! If you have any questions or feedback, feel free to reach out.
