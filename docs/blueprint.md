# **App Name**: BudgetPal

## Core Features:

- User Authentication: Allow users to securely signup, login, and manage their profile using NextAuth.js and store user data in Firestore.
- Dashboard Overview: Display a dashboard summarizing monthly income, expenses, and net balance using clear and concise UI cards, coupled with a quick-add transaction form for immediate expense tracking.
- Transaction Management: Enable users to add, edit, and delete transactions with detailed information such as date, amount, category, and notes. Also offer filtering options by date, category, and transaction type.
- Budgeting System: Allow users to set monthly budgets for different spending categories and visualize their spending progress with intuitive progress bars.
- AI Spending Insights: Provide AI-powered spending insights that analyze transaction data and notify users of potential overspending in specific categories, acting as a tool for smarter financial decisions.

## Style Guidelines:

- Primary color: A calming teal (#26A69A) to promote a sense of financial stability.
- Secondary color: A light gray (#EEEEEE) for backgrounds to ensure readability and reduce visual clutter.
- Accent: A vibrant green (#66BB6A) for positive elements like income and budget surpluses.
- Clear and concise typography for easy readability.
- Clean and intuitive layout for easy navigation and data presentation.
- Use simple, recognizable icons to represent transaction categories and actions.

## Original User Request:
Create a excellent project on "Personal Finance Tracker" name budgetpal with "A web app to help users track income, expenses, and budgets with visual analytics.

Why This Project?

Practical Use: Everyone needs to manage finances.

Full-Stack Integration: Combines frontend (Next.js), backend (API routes), and database (MySQL).

Portfolio-Ready: Demonstrates CRUD operations, authentication, and data visualization.

Core Features

User Authentication

Signup, login, and password reset using NextAuth.js.

Store user data in MySQL.

Dashboard

Display monthly income, expenses, net balance (HTML/CSS cards).

Quick-add transaction form.

Transactions Management

Add/edit/delete transactions (date, amount, category, notes).

Filter by date, category, or type (income/expense).

Budget System

Set monthly budgets per category (e.g., $300 for "Groceries").

Track progress with progress bars.

Visual Reports

Interactive charts (e.g., pie charts for expense categories, line charts for trends) using Chart.js.

Data Export

Export transactions to CSV/PDF.

Tech Stack Integration

TechnologyUsageNext.js- Frontend UI with React components.

- API routes for backend logic.

- Server-side rendering for SEO.HTML/CSS- Structure and style components.

- Responsive design (Flexbox/Grid).

- CSS Modules for scoped styling.MySQL- Store users, transactions, budgets, and categories.

- Relationships:	users → transactions (1-to-many).Prisma ORM- Connect Next.js to MySQL.
also include AI-powered spending insights (e.g., "You’re overspending on dining out!") if possible
- Model database schema.NextAuth.js- Handle user authentication (Google/GitHub/email).Chart.js- Visualize spending patterns.
  