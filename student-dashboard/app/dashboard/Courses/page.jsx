import Link from "next/link";

function Courses(){
    return(
<>
  <nav>
            <h2>Courses</h2>
            
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
        <h1>Courses</h1>
        <p>View all your enrolled courses and keep track of your academic progress.</p>
        <div>
            <h2>Software Engineering</h2>
            <p>Instructor: Dr. John Doe</p>
            <p>Credits: 3</p>
            <p>Status: In Progress</p>
            <p>Schedule: Monday & Wednesday</p>
        </div>
          <div>
            <h2>Database Systems</h2>
            <p>Instructor: Dr. Jane Smith</p>
            <p>Credits: 4
</p>
            <p>Status: In Progress</p>
            <p>Schedule: Tuesday & Thursday</p>
        </div>
          <div>
            <h2>Networking</h2>
            <p>Instructor: Mr. Michael Brown</p>
            <p>Credits: 3</p>
            <p>Status: In Progress</p>
            <p>Schedule: Friday</p>
        </div>
          <div>
            <h2>Web Development</h2>
            <p>Instructor: Ms. Sarah Johnson</p>
            <p>Credits: 3</p>
            <p>Status: In Progress</p>
            <p>Schedule: Wednesday</p>
        </div>
      </section>
      <section>
    <div>
        <h2>Total Courses: 4</h2>
        <h2>Completed: 0</h2>
        <h2>Ongoing: 4</h2>
    </div>
    <div>
        <button><Link href="/dashboard/assignments">View Assignments</Link></button>
        <button><Link href="/dashboard/profile">Go to Profile</Link></button>
       <button><Link href="/dashboard/dashboard">Back to Dashboard</Link></button>
    
    </div>
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
</>)
}

export default Courses;