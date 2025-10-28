# HNG Frontend Stage 2: Multi-Framework Ticket Web App

This is the final submission document for the Multi-Framework Ticket Management Web App challenge, demonstrating identical functionality and design consistency across three distinct frontend technologies.

---

## 🔗 Project Implementations and Links

The codebase is split into three separate, self-contained directories and repositories.

| Framework                | Folder Name  | Setup & Details                                                                 | **GitHub Repository Link**                               |
| :----------------------- | :----------- | :------------------------------------------------------------------------------ | :------------------------------------------------------- |
| **1. React**             | `react-app/` | Uses Vite, React Router, and local state management.                            | **https://github.com/Sanayo01/hng-ticketpro-react.git**  |
| **2. Vue.js**            | `vue-app/`   | Uses Vue 3 Composition API, Vue Router, and Navigation Guards.                  | **https://github.com/Sanayo01/hng-ticketpro-vue.git**    |
| **3. Twig (Vanilla JS)** | `twig-app/`  | Uses Static HTML templates and a custom Vanilla JS router and DOM manipulation. | **https://github.com/Sanayo01/hng-ticketpro-reactt.git** |

---

## :heavy_check_mark: Acceptance Criteria Confirmation

All versions meet the following required mandates:

- **Design Consistency:** All applications share the **identical layout** and enforce the **max-width: 1440px** constraint.
- **Authentication & Protection:** All versions enforce session management using the `ticketapp_session` key in `localStorage`.
- **CRUD Functionality:** Full **Create, Read, Update, Delete** (CRUD) is implemented for tickets.
- **Validation:** All forms include validation (mandatory fields, status values: open, in_progress, closed).
- **Status Colors:** Status tags are visually consistent across all frameworks.

## Submission Credentials

All three applications use the following mock credentials for protected routes:

- **Email:** `test@user.com`
- **Password:** `password`
