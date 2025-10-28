# 🚀 TicketPro Web App (React Implementation)

This is the React version of the Multi-Framework Ticket Web Application for Frontend Stage 2. This implementation uses a component-based architecture to deliver a seamless, authenticated ticket management system while strictly adhering to the specified design and functional requirements.

## :clipboard: Core Features Delivered

- **Landing Page:** Includes a hero section with a wavy SVG background, decorative circles, and CTA buttons.
- **Authentication:** Simulated Login/Signup using `localStorage` for session management (`ticketapp_session`).
- **Protected Routes:** Dashboard and Ticket Management pages are only accessible with a valid session token.
- **Dashboard:** Displays mock summary statistics (Total, Open, Resolved tickets).
- **Ticket Management (CRUD):** Full functionality to Create, Read, Update, and Delete tickets with real-time, inline form validation.
- **Design:** Enforces **max-width: 1440px** on all main content containers and uses consistent card/box styles.

## :package: Frameworks and Libraries Used

| Category       | Technology                  | Purpose                                                                                                                       |
| :------------- | :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **Framework**  | **React** (v18+)            | Component-based UI development.                                                                                               |
| **Build Tool** | **Vite**                    | Fast development server and bundling.                                                                                         |
| **Routing**    | `react-router-dom`          | Client-side routing for protected and public pages.                                                                           |
| **State/Data** | **Local In-Memory Mock**    | Simulated CRUD operations using plain JavaScript functions and `localStorage` for basic persistence.                          |
| **Styling**    | **CSS Modules** & Plain CSS | Custom component-scoped and global styling, ensuring strict adherence to design requirements (e.g., status colors, wave SVG). |

## :gear: Setup and Execution Steps

Follow these steps to get the application running locally.

### 1. Prerequisites

- Node.js (LTS version recommended)
- npm (or yarn/pnpm)

### 2. Installation

Navigate to this directory in your terminal and install dependencies:

```bash
npm install
```
