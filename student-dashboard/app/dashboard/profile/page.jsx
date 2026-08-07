import Link from "next/link";
function Profile(){
return(
    <>
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
        <h1>Student Profile</h1>
        <p>View and manage your personal and academic information in one place.</p>
      </section>
      <section>
        <h2>Personal Information</h2>
        <div>
            <p>Full Name: John Doe</p>
            <p>Student ID: ST2026001</p>
            <p>Email: john.doe@student.edu</p>
            <p>Phone: +251 912 345 678</p>
            <p>Department: Software Engineering</p>
        </div>
              <div>
                <h1>Academic Information</h1>
                <p>University: Addis Ababa University</p>
                <p>Year: 2</p>
                <p>Semester: 1</p>
                <p>CGPA: 3.75</p>
                <p>Status: Active Student</p>
              </div>
              <div>
                <h2>Skills</h2>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Git and GitHub</li>
                </ol>
              </div>
      </section>
      <section>
        <h2>Academic Goals</h2>
        <p>Complete all assignments on time.</p>
        <p>Improve web development skills.</p>
        <p>Learn backend development.</p>
        <p>Build more real-world projects.</p>
      </section>
      <section>
        <button><Link href="/dashboard">Back to Dashboard</Link></button>
        <button><Link href="/dashboard/Courses">View Courses</Link></button>
        <button><Link href="/dashboard/assignments">View Assignments</Link></button>
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
    </>
)
}
export default Profile;