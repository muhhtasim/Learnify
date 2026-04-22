# 🚀 Ed-Tech: Online Programming Learning Platform

## 📌 Overview
**Ed-Tech** is a comprehensive full-stack online programming learning platform designed to bridge the gap between students and quality education. It allows students to browse, enroll, and manage their learning journey through structured courses and guidelines, while providing administrators with powerful tools to manage the course catalog.

---

## 👥 Group Details
**Course Number:** 7  
**Course Code:** CSE 224  
**Instructor:** Fahmidul Rahman Sakib, Senior Lecturer, Department of CSE, Metropolitan University

### Team Members & Contributions
| Name | ID | Module & Feature Contribution |
| :--- | :--- | :--- |
| **Ahmed Muhtasim Labib** | 241-115-062 | **Backend Engineer:** API design, MySQL connection (`db.js`), 8 API routes (Auth & CRUD), and `ManageCourses.jsx` (Admin View). |
| **Jannatul Mauya Nabila** | 241-115-055 | **Auth & User Module:** `Login.jsx`, `Register.jsx`, `Dashboard.jsx`, Session management (localStorage), and `Footer.jsx`. |
| **Saikat Talukder** | 241-115-051 | **Course Module:** `Courses.jsx` (Grid view), `CourseDetails.jsx`, `MyCourses.jsx`, `Payment.jsx`, and `AddCourse.jsx`. |
| **Md Arafat Islam Zihad** | 241-115-052 | **UI Foundation & Home:** `App.jsx` (Routing), `main.jsx`, `Navbar.jsx`, `CourseCard.jsx`, `Home.jsx`, and `Guideline.jsx`. |

---

## 🎯 Objective
The primary goal of this system is to provide a structured and user-friendly learning environment for beginner programmers. It demonstrates the implementation of a complete full-stack system, including a frontend user interface, backend application logic, and a MySQL relational database for data storage and management.

---

## ✨ Key Features
### 👤 User Panel
* **Authentication System:** Secure registration, login, and session management using `localStorage`.
* **Course Browsing:** View all available courses in a grid, including details and pricing.
* **Enrollment & Payment:** Seamless flow for students to purchase and enroll in courses.
* **User Dashboard:** Personalized profile page to track enrolled courses and learning progress.
* **Search & Filter:** Dynamic search by keywords and filtering by price range or alphabetical order.

### 🛠️ Admin / Creator Panel
* **Course Management (CRUD):** Authorized admins can Create, Read, Update, and Delete courses.
* **Resource Management:** Upload and manage learning materials like video tutorials and guides.
* **User Monitoring:** Oversee system activity and manage user data.

---

## 💻 Tech Stack
* **Frontend:** React.js, Tailwind CSS, Lucide-react (Icons), Axios, React Router.
* **Backend:** Node.js, Express.js (REST API development).
* **Database:** MySQL (Relational data storage via XAMPP).
* **Authentication:** LocalStorage-based session management.

---

## 📂 Project Structure
```txt
ed-tech-platform/
├─ backend/
│  ├─ db.js              # MySQL connection setup and export
│  ├─ server.js          # Express API routes (Auth, Courses, Enrollments)
│  └─ package.json       # Dependencies: express, mysql2, cors, dotenv
├─ frontend/
│  ├─ public/
│  │  └─ _redirects      # Netlify/Vercel deployment fix
│  ├─ src/
│  │  ├─ components/     # Shared: Navbar, Footer, CourseCard
│  │  ├─ pages/          # Home, Login, Register, Dashboard, Courses, etc.
│  │  └─ App.jsx         # Root component & Route definitions
│  └─ package.json
└─ README.md
