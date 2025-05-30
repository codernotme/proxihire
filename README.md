# ProxiHire

ProxiHire is a modern online recruitment platform that connects startup founders and entrepreneurs with college students for internships, event staffing (such as expos and stalls), and brand ambassador roles. Built with Next.js and Supabase, ProxiHire streamlines the hiring process, empowers students with real-world opportunities, and helps startups scale their teams and brand presence efficiently.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

ProxiHire solves the challenge of connecting innovative startups with motivated college talent for both short-term and long-term engagements. Whether you’re looking for an intern, event staff, or a brand ambassador, ProxiHire provides a seamless platform to post opportunities, manage applications, and communicate in real-time.

---

## Features

- **Role-based dashboards** for Admin, Startup/Entrepreneur, and Student users
- **Opportunity management**: Post, edit, and manage internships, event gigs, and ambassador roles
- **Advanced search and filtering** for students to discover relevant opportunities
- **Application tracking**: End-to-end status updates for both startups and students
- **Real-time messaging** between startups and applicants
- **Interview scheduling** and calendar integration
- **Company and student profile management**
- **Analytics and reporting** for startups and admins
- **Notifications** for key actions and updates
- **Admin panel** for platform moderation, analytics, and user management
- **Responsive design** for all devices

---

## Tech Stack

- **Frontend**: Next.js (React)
- **Backend/Database**: Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Styling**: Tailwind CSS (or your preferred CSS framework)
- **Integrations**: Email notifications, calendar, payment gateway (optional)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codernotme/proxihire.git
   cd proxihire
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Supabase credentials.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## Usage

- **Startups:** Sign up, create your company profile, and post opportunities. Manage applications and communicate with candidates directly.
- **Students:** Register, complete your profile, browse and apply for gigs, track your applications, and chat with recruiters.
- **Admins:** Access the admin panel to manage users, postings, applications, and view platform analytics.

---

## Project Structure

```
/proxihire
  /components      # Reusable UI components
  /pages           # Next.js pages (routes)
  /lib             # Utility functions and API clients
  /styles          # CSS/Tailwind files
  /public          # Static assets
  /supabase        # Database and API configuration
  .env.example     # Environment variable template
  README.md
```

---

## Contributing

We welcome contributions!

- **Reporting bugs:** Please use GitHub Issues and provide as much detail as possible.
- **Suggesting features:** Open an Issue or a Discussion with your idea.
- **Code contributions:** Fork the repo, create a feature branch, and submit a Pull Request. Please follow our code style and include tests where applicable.
- **Code of Conduct:** Be respectful and constructive in all interactions.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
