# 🎭 Persona Guides

[![Next.js](https://img.shields.io/badge/Next.js-16.1-white?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> "The arcana is the means by which all is revealed."
> A modern, high-performance companion app for **Persona 3 Reload** and **Persona 5 Royal**.

---

## 🚀 Features

* **Shadow Compendium**: Comprehensive list of shadows/demons including stats, levels, and drop items.
    * *Sector Filtering*: Navigate through Tartarus with precise block grouping (e.g., Arqa I vs. Arqa II).
* **Linked Episodes Tracker**: Never miss a character-exclusive event. 
    * Chronological sorting by game calendar.
    * Specific rewards tracking (Stat points, items, and Persona unlocks).
    * Deadline management for time-sensitive events.
* **Academic Guide**: Complete list of classroom answers and exam periods for both P3R and P5R.
* **Responsive Persona UI**: A dark-themed interface inspired by the sleek menus of the Persona series, optimized for both desktop and mobile.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React, TypeScript |
| **Styling** | Tailwind CSS, Lucide Icons |
| **Data Fetching** | TanStack Query (React Query) |
| **Database** | MongoDB (Running on Docker) |
| **ORM/ODM** | Mongoose |
| **Deployment** | Docker & Docker Compose |

---

## 📦 Getting Started

### 1. Prerequisites
* Node.js (v18+)
* Docker & Docker Compose
* A terminal (running on Arch Linux for the true experience)

### 2. Database Initialization
This project uses a containerized MongoDB instance. Start the database service:

```bash
docker-compose up -d
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add your connection string:

```env
MONGODB_URI=mongodb://admin:password123@127.0.0.1:27017/persona_db?authSource=admin
```
*Note: If you are running Next.js inside a Docker container, replace `127.0.0.1` with `mongodb`.*

### 4. Running the Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧑‍💻 Author

**tiduswr**
* Master's Student at UFCG
* Passionate about Compilers, Web Development, and JRPGs.

---

### 📝 License
This is a fan-made project for educational purposes. All characters, names, and game assets are trademarks of **Atlus / SEGA**.
