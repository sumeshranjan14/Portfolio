# Sumesh Ranjan - Developer Portfolio

This is a modern, responsive developer portfolio website built with Next.js 14, Tailwind CSS, and TypeScript. It features a clean design, dark mode support, and an integrated AI chatbot.

## Features

- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion for smooth animations.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
- **Dark Mode**: Toggle between light and dark themes.
- **AI Chatbot**: An embedded chatbot that answers questions about Sumesh's skills and experience (using local RAG-lite logic).
- **Sections**: Hero, About, Skills, Projects, Experience, Contact.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom components using [Radix UI](https://www.radix-ui.com/) primitives.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is ready to be deployed on [Vercel](https://vercel.com/).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect the Next.js settings and deploy.

## Customization

- **Resume Data**: Update `src/data/resume.ts` to change the content.
- **Chatbot Logic**: Modify `src/lib/chat-logic.ts` to adjust how the chatbot responds.

## License

MIT
