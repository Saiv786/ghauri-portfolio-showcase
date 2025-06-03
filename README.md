# Portfolio Showcase Project

A modern portfolio showcase built with React, Vite, and Shadcn/UI components.

## Features
- Modern React with TypeScript
- Fully responsive design
- Component library using Shadcn/UI
- Dark/Light theme support
- Fast build with Vite
- Clean and maintainable code structure

## Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

## Setup and Installation
1. Clone the repository
   ```bash
   git clone [repository-url]
   cd [project-directory]
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

## Environment Variables
Copy the example environment file:
```bash
cp .env.example .env
```

Configure the following environment variables in your `.env` file:
- `VITE_SITE_URL`: Your site's URL (default: http://localhost:8080)
- `VITE_CONTACT_EMAIL`: Your contact email
- `VITE_GITHUB_URL`: Your GitHub profile URL
- `VITE_LINKEDIN_URL`: Your LinkedIn profile URL
- `VITE_TWITTER_URL`: Your Twitter profile URL

Optional configurations:
- API Configuration (if needed)
- Analytics tracking (if needed)

## Development
Run the development server:
```bash
npm run dev
# or
yarn dev
```
The server will start at http://localhost:8080

## Building for Production
Build the project:
```bash
npm run build
# or
yarn build
```
The build output will be in the `dist` directory.

## Deployment
The project includes deploy scripts for various platforms:

### Vercel
```bash
npm run deploy:vercel
```

### Netlify
```bash
npm run deploy:netlify
```

### GitHub Pages
```bash
npm run deploy:gh-pages
```

Before deployment:
1. Build your project: `npm run build`
2. Make sure your environment variables are properly set
3. Choose your preferred deployment platform
4. Run the corresponding deployment script

The built project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Any static file hosting

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
[Add your chosen license]
