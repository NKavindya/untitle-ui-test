# REMS Dashboard - Material UI

A React.js web application built with Material UI, implementing the exact design from the Figma REMS-glue-stack design system.

## Features

- Modern Material UI components
- Responsive layout with sidebar navigation
- Light theme matching Figma design
- TypeScript for type safety
- Vite for fast development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5174`

### Build

To create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mui-new/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── AppShell.tsx
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── pages/
│   │   ├── App.tsx
│   │   └── DashboardPage.tsx
│   ├── theme/
│   │   ├── components.ts
│   │   ├── index.ts
│   │   ├── palette.ts
│   │   └── typography.ts
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Design

This application implements the exact design from:
- Figma File: REMS-glue-stack
- Node ID: 3-2

## Technologies

- React 18
- Material UI 5
- TypeScript
- Vite
- React Router



