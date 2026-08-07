import Link from "next/link";
function Assignments(){
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
           <h1>Assignments</h1>
           <p>Manage your assignments, track deadlines, and monitor your academic progress.</p>
           <div>
            <p>Course: Database Systems</p>
            <p>Deadline: August 15, 2026</p>
            <p>Status: In Progress</p>
           </div>
            <div>
            <p>Course: Software Engineering</p>
            <p>Deadline: August 30, 2026</p>
            <p>Status: Submitted</p>
           </div>
            <div>
            <p>Total Assignments: 4</p>
            <p>Completed: 1</p>
            <p>In Progress: 2</p>
            <p>Not Started: 1</p>
           </div>
            <div>
            <p>Next Deadline</p>
            <p>Database Project</p>
            <p>Due: August 15, 2026</p>
            <p>Time Remaining: 7 Days</p>
           </div>
      </section>
      <section>
        <h1>
         Study Tips
        </h1>
        <P>Start assignments as early as possible.</P>
        <p>Review assignment instructions carefully.</p>
        <p>Check deadlines regularly.</p>
        <p>Submit your work before the due date.</p>
      </section>
    </>
)
}
export default Assignments;