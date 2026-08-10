# UserHub — Next.js API Project

UserHub is a Next.js project that fetches user information from a public API and displays it in a clean, responsive interface.

## Features

* Fetches user data from JSONPlaceholder API
* Displays users in responsive cards
* Shows user name, username, email, and location
* Uses reusable React components
* Uses `Suspense` for loading states
* Includes dynamic user profile routes
* Styled with Tailwind CSS

## API

This project uses the JSONPlaceholder public API to retrieve user data.

The users endpoint returns information such as:

* Name
* Username
* Email
* Address
* Phone
* Website
* Company

## Tech Stack

* Next.js
* React
* JavaScript
* Tailwind CSS
* JSONPlaceholder API

## Project Structure

```text
src/
└── app/
    ├── components/
    │   ├── header.jsx
    │   ├── userCard.jsx
    │   └── userList.jsx
    │
    ├── users/
    │   └── [id]/
    │       └── page.jsx
    │
    ├── layout.jsx
    ├── page.jsx
    └── globals.css
```

## What I Learned

Through this project, I practiced:

* Fetching data from an API using `fetch()`
* Working with JSON responses
* Rendering API data with `.map()`
* Passing data between React components using props
* Creating reusable components
* Using Next.js `Suspense`
* Creating dynamic routes with `[id]`
* Using `Link` for navigation
* Styling components with Tailwind CSS

## Getting Started

Clone the repository and move into the project directory:

```bash
cd fetch-nextjs
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in your terminal.
