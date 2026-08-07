import Link from "next/link";

function Home() {
  return (
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
        <h1>Welcome to Student Dashboard</h1>

        <p>
          Manage your academic life easily with a simple platform designed to
          organize your courses, assignments, and student information.
        </p>

        <Link href="/dashboard">
          Explore Dashboard
        </Link>
      </section>
      <section>
        <h2>Your Academic Life, Organized in One Place</h2>

        <p>
          Student Dashboard helps students manage their academic activities by
          providing easy access to courses, assignments, and personal
          information.
        </p>

        <p>
          Our goal is to make student life more organized, productive, and
          efficient.
        </p>
      </section>

      <section>

        <h2>Features</h2>

        <div>
          <h3>Course Management</h3>
          <p>
            View your courses, access course information, and keep track of your
            academic subjects in an organized way.
          </p>
        </div>


        <div>
          <h3>Assignment Tracking</h3>
          <p>
            Stay updated with your assignments, deadlines, and academic tasks
            so you never miss important work.
          </p>
        </div>


        <div>
          <h3>Student Profile</h3>
          <p>
            Manage your personal information, academic details, and skills
            through your own student profile.
          </p>
        </div>

      </section>


      {/* Productivity Section */}
      <section>

        <h2>Designed to Improve Student Productivity</h2>

        <p>
          Our platform helps students save time, stay organized, and focus on
          their academic goals by keeping important information in one place.
        </p>

        <ul>
          <li>Easy access to academic information</li>
          <li>Better organization of courses and assignments</li>
          <li>Simple and clean user experience</li>
          <li>Improved student productivity</li>
        </ul>

      </section>


      {/* Call To Action */}
      <section>

        <h2>Ready to Start Your Academic Journey?</h2>

        <p>
          Explore your dashboard and manage your academic activities more
          effectively.
        </p>

        <Link href="/dashboard">
          Go to Dashboard
        </Link>

      </section>


      {/* Footer */}
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
  );
}

export default Home;