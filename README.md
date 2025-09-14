# AI SAAS App Using PERN STACK

# 🚀 AI-Powered SaaS Platform with Subscriptions (PERN Stack)

 Welcome to our full-stack AI SaaS application\! This project is a complete guide and boilerplate for building a modern, feature-rich Software-as-a-Service platform with recurring subscription billing. Built with the powerful PERN stack (PostgreSQL, Express, React, Node.js), it integrates top-tier services for authentication, database management, and AI functionalities.

[](https://opensource.org/licenses/MIT)
[](https://github.com/)
[](https://www.google.com/search?q=https://github.com/Ramneek07/QuickAI/stargazers)

## ✨ Live Demo

Check out the live application here: **https://quick-ai-gules.vercel.app/**

-----

## 🎯 Key Features

This application is packed with features that form the foundation of a modern SaaS product.

### Core Platform Features:

  * 🔐 **Secure User Authentication:** Hassle-free sign-up, sign-in, and profile management powered by **Clerk**.
  * 💳 **Subscription Billing:** Monetize your application with premium subscription tiers managed through **Stripe**.
  * 🐘 **Serverless PostgreSQL Database:** A robust and scalable serverless Postgres database provided by **Neon**.
  * 🎨 **Modern UI:** A clean, responsive, and user-friendly interface built with **React** and **Tailwind CSS**.

### 🤖 Suite of AI-Powered Tools:

  * ✍️ **Article Generator:** Provide a title and desired length to generate high-quality articles in seconds.
  * 💡 **Blog Title Generator:** Enter a keyword and category to get a list of catchy, SEO-friendly blog titles.
  * 🖼️ **Image Generator:** Turn your text prompts into stunning visuals with our AI Image Generator.
  * ✨ **Background Remover:** Upload an image and instantly get a version with a transparent background.
  * 🚫 **Object Remover:** Remove unwanted objects from any image simply by describing them.
  * 📄 **Resume Analyzer:** Upload a resume to receive a comprehensive analysis and improvement suggestions.

-----

## 🛠️ Tech Stack

This project is built using a modern and powerful set of technologies:

  * **Frontend:** React, Tailwind CSS, Vite
  * **Backend:** Node.js, Express.js
  * **Database:** PostgreSQL (via Neon)
  * **Authentication:** Clerk
  * **Payments:** Stripe
  * **AI Integrations:** OpenAI, Replicate, or your chosen AI API provider.
  * **Deployment:** Vercel (Frontend), Render (Backend)

-----

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

  * Node.js (v18 or later)
  * `pnpm` (or `npm`/`yarn`)
  * Git

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Ramneek07/QuickAI.git
    cd YOUR_REPO
    ```

2.  **Install server dependencies:**

    ```bash
    cd server
    pnpm install
    ```

3.  **Install client dependencies:**

    ```bash
    cd ../client
    pnpm install
    ```

4.  **Set up Environment Variables:**
    You'll need to create a `.env` file in the `server` directory. Use the `.env.example` as a template.

    ```ini
    # .env in /server directory

    # Neon Database Connection String
    DATABASE_URL="your_neon_database_url"

    # Clerk Authentication Keys
    CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
    CLERK_SECRET_KEY="your_clerk_secret_key"
    CLERK_WEBHOOK_SECRET="your_clerk_webhook_secret"

    # Stripe Billing Keys
    STRIPE_SECRET_KEY="your_stripe_secret_key"
    STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
    CLIENT_URL="http://localhost:5173" # Your client URL for redirects

    # AI API Keys (e.g., OpenAI)
    OPENAI_API_KEY="your_openai_api_key"
    ```

      * You can get these keys from the dashboards of [Neon](https://neon.tech/), [Clerk](https://clerk.dev/), and [Stripe](https://stripe.com/).

5.  **Run Database Migrations:**
    *Ensure your database is connected, then run the migration command (e.g., using Prisma, TypeORM, etc.)*

    ```bash
    cd server
    npx prisma migrate dev  # Example if using Prisma
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd server
    pnpm run dev
    ```

    The server will start on `http://localhost:3000`.

2.  **Start the frontend development server:**

    ```bash
    cd client
    pnpm run dev
    ```

    The application will be accessible at `http://localhost:5173`.

-----

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

-----

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
