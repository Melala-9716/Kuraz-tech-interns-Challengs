# Stop-Watch App

A simple and responsive stopwatch application built with React. This project demonstrates the use of React hooks, state management, side effects, and references to create a functional timer.

## Features

* Start the stopwatch
* Stop the stopwatch
* Reset the timer
* Real-time time updates
* Displays hours, minutes, seconds, and milliseconds
* Responsive design for different screen sizes

## Technologies Used

* React
* JavaScript
* CSS
* Vite

## React Concepts Practiced

* `useState`
  Used to store and update the stopwatch state, such as the elapsed time and running status.

* `useEffect`
  Used to control the `setInterval` function and update the timer continuously while the stopwatch is running.

* `useRef`
  Used to store values that need to persist between renders without causing unnecessary UI updates, such as the interval ID and starting time.

## How It Works

The stopwatch calculates elapsed time by comparing the current time with the time when the stopwatch started:

```
Elapsed Time = Current Time - Start Time
```

The timer updates every few milliseconds and the result is formatted into:

```
Hours : Minutes : Seconds : Milliseconds
```

## Installation

Clone the repository:

```bash
git clone your-repository-link
```

Navigate to the project folder:

```bash
cd Stop-Watch
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```



## Author

Melala Muleta
