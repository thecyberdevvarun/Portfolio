# 🚀 Developer Portfolio

A modern, responsive **developer portfolio** built with **Next.js 14, Tailwind CSS, and Framer Motion**. Showcasing projects, skills, curated learning resources, and YouTube video references — all in a sleek, animated interface.

## 🔗 Live Demo

🚀 [View Portfolio](https://thecyberdevvarun.vercel.app)

## 📌 Features

- ✅ **Modern UI** – Clean, dark-themed design with glassmorphism effects and subtle gradients
- ✅ **Smooth Animations** – Page transitions and micro-interactions powered by **Framer Motion**
- ✅ **Responsive Design** – Fully optimized for mobile, tablet, and desktop
- ✅ **Project Showcase** – Browse projects with descriptions, tech tags, and live links
- ✅ **Skills Overview** – Languages, frameworks, and tools — continuously updated
- ✅ **Resource Hub** – Curated docs, YouTube videos (with auto-generated HD thumbnails), tools, and references
- ✅ **Category Filtering** – Filter resources by type: YouTube, Docs, Security, Tools, etc.
- ✅ **Search** – Instantly search across resource titles, descriptions, and tags
- ✅ **Contact Form** – Reach out directly from the portfolio
- ✅ **Resume Download** – Quick access to the latest resume
- ✅ **SEO Optimized** – Proper metadata, Open Graph tags, and semantic HTML

## 🛠️ Tech Stack

| Layer      | Technologies                             |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 14 (App Router)                  |
| Language   | JavaScript (ES2024)                      |
| Styling    | Tailwind CSS                             |
| Animations | Framer Motion                            |
| Icons      | React Icons, Lucide React                |
| Fonts      | Outfit, DM Sans (Google Fonts)           |
| Images     | Next.js Image (optimized YouTube thumbs) |
| Deployment | Vercel                                   |

## 📂 Project Structure
```

client/
├── app/ # Next.js App Router pages & layouts
│ ├── about/ # About page
│ │ └── page.js
│ ├── contact/ # Contact page
│ │ └── page.js
│ ├── projects/ # Projects page
│ │ └── page.js
│ ├── resources/ # Resources page
│ │ └── page.js
│ ├── skills/ # Skills page
│ │ └── page.js
│ ├── globals.css # Global styles
│ ├── layout.js # Root layout with fonts & SiteShell
│ └── page.js # Home page
│
├── src/
│ ├── assets/
│ │ └── assets.js # Static asset references
│ │
│ ├── components/ # Reusable UI components
│ │ ├── home/
│ │ │ └── HomeHighlights.jsx
│ │ ├── ui/
│ │ │ └── PageHeader.jsx
│ │ ├── DSACodingProfiles.jsx
│ │ ├── Footer.jsx # Site footer
│ │ ├── HeroSection.jsx # Landing hero section
│ │ ├── InterestsSection.jsx
│ │ ├── Navbar.jsx # Animated responsive navbar
│ │ └── SiteShell.jsx # Layout wrapper with background effects
│ │
│ ├── config/ # Site configuration
│ │ └── site.js # Name, handle, metadata
│ │
│ ├── data/ # Static data
│ │ └── resources.js # Curated links & YouTube videos
│ │
│ ├── styles/ # Component styles
│ │ └── navbar.css
│ │
│ └── views/ # Page-level view components
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── Home.jsx
│ ├── Projects.jsx
│ ├── Resources.jsx
│ └── Skills.jsx
│
├── public/ # Static public assets
├── jsconfig.json # Path aliases
├── next.config.mjs # Next.js configuration
├── package.json
└── README.md

````

## 📄 Pages

| Page      | Route        | Description                                          |
| --------- | ------------ | ---------------------------------------------------- |
| Home      | `/`          | Hero section with animated highlights and navigation |
| Projects  | `/projects`  | Project cards with tech tags and live/source links    |
| Skills    | `/skills`    | Languages, frameworks, and tools grid                |
| Resources | `/resources` | Curated links, YouTube videos with HD thumbnails     |
| About     | `/about`     | Background, experience, and interests                |
| Contact   | `/contact`   | Contact form to reach out directly                   |

## 📸 Screenshots

![Screenshot 2025-01-30 123434](https://github.com/user-attachments/assets/874a861f-7700-4ca2-b65e-77ad3c61570b)

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/thecyberdevvarun/developer-portfolio.git
cd client
npm install
````

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## ⚙️ Configuration

### Site Config (`src/config/site.js`)

Update your name, handle, and metadata:

```js
export const siteConfig = {
  name: "Varun Yadav",
  handle: "@thecyberdevvarun",
  // ...
};
```

### Adding Resources (`src/data/resources.js`)

Add a new resource — YouTube links auto-detect and render with HD thumbnails:

```js
{
  id: "unique-id",
  title: "Resource Title",
  description: "Brief description of the resource.",
  url: "https://www.youtube.com/watch?v=VIDEO_ID",
  category: "YouTube",
  tags: ["Tag1", "Tag2"],
}
```

### Available Categories

`YouTube` · `Documentation` · `Courses` · `Security` · `CS & DSA` · `CS & Systems` · `Tools`

## 🏗️ Upcoming Features

- 🎨 **Dark/Light Theme Toggle** – Theme switching support
- 🔍 **Project Filtering** – Filter by tech stack and category
- 📹 **More YouTube Resources** – Expanding the curated video collection
- 📊 **Analytics Dashboard** – Visitor insights
- 🌐 **i18n Support** – Multi-language portfolio

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=vercel&logoColor=white)](https://thecyberdevvarun.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thecyberdevvarun)

---

<p align="center">
  Built with ❤️ using Next.js & Tailwind CSS
</p>