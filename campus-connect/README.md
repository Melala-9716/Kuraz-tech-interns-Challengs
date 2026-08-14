# CampusConnect

A university information platform designed to bring important campus information into one place.

CampusConnect helps students discover **upcoming events, university resources, announcements, and useful campus information** through a simple and responsive web interface.

---

## About the Project

University information is often spread across different platforms, messages, and announcements. CampusConnect aims to make that information easier to find by providing students with one central platform.

The project was built as a practical web development project using **Next.js, React, and Tailwind CSS**, with API-based data fetching for dynamic content.

---

## Features

### Home Page

* Welcome section for students
* Latest university announcements
* Upcoming events preview
* Quick access to important sections
* Feedback section

### Events

Students can explore upcoming university events such as:

* Workshops
* Seminars
* Clubs
* Academic sessions

Each event provides information including:

* Event title
* Category
* Date
* Time
* Location
* Description

Events can also be filtered by category.

### University Resources

A collection of useful learning resources for students.

Resources include:

* Programming
* Mathematics
* Computer Science
* Web Development
* Databases
* Networking
* Career
* Design
* Science

Students can:

* Search for resources
* Filter resources by category
* View resource descriptions
* See the resource type and difficulty level
* Open external learning websites

### Announcements

The homepage displays the latest university announcements retrieved from the application's API.

---

## Tech Stack

### Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS
* HTML

### Data

* Next.js API Routes
* JSON data
* Fetch API

### Development Tools

* Git
* GitHub
* VS Code

---

## Next.js Concepts Used

This project helped practice several important Next.js concepts:

* App Router
* File-based routing
* Server Components
* Client Components
* API Routes
* Data fetching with `fetch()`
* Dynamic rendering
* Loading and error states
* Component-based architecture

---

## React Concepts Used

The project also uses several React concepts:

* Components
* Props
* `useState`
* Event handlers
* `.map()`
* `.filter()`
* Conditional rendering
* Passing data from parent components to child components

For example, event data is passed from a page into the event component:

```jsx
<EventContent events={events} />
```

The child component can then access the data through:

```jsx
export default function EventContent({ events }) {
```

---

## Project Structure

```text
campus-connect/
│
├── app/
│   │
│   ├── api/
│   │   ├── announcements/
│   │   │   └── route.js
│   │   │
│   │   ├── event/
│   │   │   └── route.js
│   │   │
│   │   └── resources/
│   │       └── route.js
│   │
│   ├── components/
│   │   ├── contact/
│   │   ├── event/
│   │   ├── home/
│   │   ├── resource/
│   │   └── submit.jsx
│   │
│   ├── error.jsx
│   ├── globals.css
│   ├── layout.jsx
│   ├── loading.jsx
│   └── page.jsx
│
├── public/
│
├── package.json
├── package-lock.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

---

## API Routes

CampusConnect currently uses API routes for dynamic data.

### Announcements

```text
/api/announcements
```

Provides announcement information displayed on the homepage.

### Events

```text
/api/event
```

Provides upcoming university events.

### Resources

```text
/api/resources
```

Provides educational resources available to students.

---

## Filtering System

The Events and Resources sections use filtering to help students find specific information.

For example, events can be filtered by:

```text
All
Workshops
Seminars
Clubs
Academic
```

Resources can be filtered by:

```text
All
Programming
Mathematics
Computer Science
Web Development
Database
Networking
Career
Design
Science
```

The filtering system uses React state and JavaScript's `.filter()` method.

---

## Search

The Resources page includes a search feature that allows students to search for resources by title.

If no resource matches the search, the interface can display a message such as:

```text
No resources found.
```

---


---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Melala-9716/Kuraz-tech-interns-Challengs.git
```

### 2. Navigate to the project

```bash
cd Kuraz-tech-interns-Challengs/campus-connect
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

---





## Author

**Melala Muleta**

Software Engineering Student
Addis Ababa University

GitHub:
https://github.com/Melala-9716

---

## License

This project was created for educational and portfolio purposes.
