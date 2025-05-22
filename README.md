# reAutUI

A React application built with Vite and styled with Tailwind CSS. This project is a web application focused on UI testing.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **ESLint**
- **shadcn/ui** (for accessible UI components)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/nivx18818/reAutUI.git
    cd reAutUI
    ```

2. Install NPM packages:

    ```bash
    npm install
    ```

    or if you use yarn:

    ```bash
    yarn install
    ```

### Running the Project

To start the development server:

```bash
npm run dev
```

This will run the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port specified in your Vite config/console output) to view it in the browser. The page will reload if you make edits.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Serves the production build locally for preview.

## Testing

After installation, install Playwright browsers:

```cmd
npx playwright install
```

You can run the following scripts:

- `npm run test` - runs all unit tests with Vitest.
- `npm run test:unit` - runs Vitest unit tests.
- `npm run test:e2e` - runs Playwright end-to-end tests.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
