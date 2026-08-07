import Link from "next/link";


function Dashboard(){
return(
    <>
      <div>

        <nav>
            <h2>Student Dashboard</h2>
            
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/dashboard">Dashboard</Link>
        {" | "}
        <Link href="/dashboard/assignments">Assignments</Link>
        {" | "}
        <Link href="/dashboard/Courses">Courses</Link>
        {" | "}
        <Link href="/dashboard/profile">Profile</Link>
      </nav>

      <section>

        <h2>Welcome Back!</h2>
        <p>Here is an overview of your academic activities. Use the sections below to manage your courses, assignments, and profile information.</p>
      </section>

      <section>
        <div>
            <h2>Courses</h2>
            <p>View your enrolled courses and course information.</p>
            <button><Link href="/dashboard/courses">Open Courses</Link></button>
        </div>
         <div>
            <h2>Assignments</h2>
            <p>Track assignments, deadlines, and completed tasks.</p>
            <button><Link href="/dashboard/assignments">Open Assignments</Link></button>
        </div>
         <div>
            <h2>Profile</h2>
            <p>View and update your student profile information.</p>
            <button><Link href="/dashboard/profile">Open Profile</Link></button>
        </div>
        </section>
        <section>
            <h2>Academic Overview</h2>
            <p>Enrolled Courses: 6</p>
            <p>Pending Assignments: 4</p>
            <p>Completed Assignments: 12</p>
            <p>Current Semester: Year 2 – Semester 1</p>
        </section>
        <section>
            <h2>Recent Activity</h2>
            <ol>
                <li>Assignment "Database Project" submitted.</li>
                <li>New course "Software Engineering" added.</li>
                <li>Profile updated successfully.</li>
            </ol>
        </section>
        <section>
            <h1>
        Latest Announcements
            </h1>
            <ol>
                <li> Database assignment due on Friday.</li>
                <li>Networking quiz next Tuesday.</li>
                <li>Software Engineering project proposal opens this week.</li>
            </ol>
        </section>
        <section>
             <h1>Study Tips</h1>
             <ol>
                <li>Review lecture notes after every class.</li>
                <li>Start assignments early.</li>
                <li>Keep your profile information up to date</li>
                <li>Check the dashboard regularly for new announcements.</li>
             </ol>
        </section>
        <footer>
             <h3>Student Dashboard</h3>

        <p>
          A simple platform created to help students organize their academic
          life.
        </p>

        <p>
          © 2026 Student Dashboard
        </p>
        </footer>
      </div>
    </>
)
}

export default  Dashboard;