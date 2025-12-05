# REMS Dashboard - Shadcn UI

A React.js web application built with shadcn UI components, implementing the REMS (Renewable Energy Management System) dashboard design from Figma.

## Features

- Modern React.js application with TypeScript
- shadcn UI components
- Tailwind CSS for styling
- Responsive dashboard layout
- Sidebar navigation with multiple sections
- Clean, professional UI matching the Figma design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd shadcn
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
shadcn/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── separator.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── DashboardPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Components

### Layout Components

- **DashboardLayout**: Main layout wrapper with dark background and light container
- **Sidebar**: Navigation sidebar with logo, primary navigation, PURE GENERATION section, and User Management
- **Header**: Top header with dashboard title and action buttons (dark mode, globe, settings, user)

### UI Components

- **Button**: Reusable button component with multiple variants
- **Card**: Card component for content containers
- **Separator**: Visual separator component

## Design

The application implements the exact design from the Figma file:
- Dark background (gray-800) with a light gray container (gray-100)
- White sidebar with navigation items
- Highlighted active navigation item (Main Dashboard)
- Header with utility buttons and user information
- Clean, modern interface matching the Figma specifications

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn UI
- React Router
- Lucide React (icons)



