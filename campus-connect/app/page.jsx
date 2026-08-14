import Announcement from "./components/home/announcement";

export default async function Home() {
  const response = await fetch(
    "http://localhost:3000/api/announcements"
  );

  const announcement = await response.json();

  return (
    <main>

      {/* Welcome Section */}
      <section className="mt-[40px] text-[40px]">
        <h1 className="text-center text-[#172B4D]">
          Welcome to CampusConnect
        </h1>

        <h2 className="text-center text-[#172B4D]">
          Your university information in one place
        </h2>

        <div className="flex justify-center items-center m-[10px]">
          <button className="border text-white bg-[#2563EB] rounded-4xl text-[20px] p-[5px] mx-[10px] w-[170] hover:bg-[#1D4ED8] cursor-pointer">
            <a href="./components/event">Explore Event</a>
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-center m-[10px] text-[40px]">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-[repeat(3,450px)] mx-[50px] my-[20px] gap-[40px] bg-[#EFF6FF]">
          
            <div className="border p-[20px] bg-white rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20" >

              <h1 className="text-[#102A43]">Web Development Workshop</h1>
              <p className="text-[#2563EB]">Workshops</p>
              <p className="text-[#627D98]">2026-08-20</p>
              <p className="text-[#627D98]">14:00</p>
              <p className="text-[#627D98]">Computer Lab</p>
              <p className="text-[#627D98]">Learn modern frontend development techniques.</p>

            </div>
            <div className="border p-[20px] bg-white rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20">

              <h1 className="text-[#102A43]">Career Development Seminar</h1>
              <p className="text-[#7C3AED]">Seminars</p>
              <p className="text-[#627D98]">2026-08-21</p>
              <p className="text-[#627D98]">10:00</p>
              <p className="text-[#627D98]">Main Hall</p>
              <p className="text-[#627D98]">"Learn about career opportunities and professional development</p>

            </div>
            <div className="border p-[20px] bg-white rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20">

              <h1 className="text-blue-950">Programming Club Meetup</h1>
              <p className="text-[#06B6D4]">Clubs</p>
              <p className="text-[#627D98]">2026-08-22</p>
              <p className="text-[#627D98]">15:00</p>
              <p className="text-[#627D98]">Room 204</p>
              <p className="text-[#627D98]">Meet students interested in programming and technology.</p>

            </div>
      

        </div>
      </section>
      <section>
        <h1 className="text-center text-[30px] text-[#1D4ED8]">
          Latest Announcements
        </h1>

        <Announcement announcement={announcement} />
      </section>
    
      <section className="mx-[170px] text-[25px] text-center">
        <h1>Have something to share?</h1>

        <p>Help make CampusConnect better</p>

        <button className="border rounded-[20px] p-[10px] mt-[10px] bg-[#2563EB] text-white hover:bg-[#1D4ED8]">
          <a href="/components/contact">Send Feedback</a>
        </button>
      </section>

    </main>
  );
}