import EventContent from "./EventContent";

export default async function Event() {
  const response = await fetch("http://localhost:3000/api/event");
  const events = await response.json();

  return (
    <>
      <section className="mb-[20px] ">
        <h1 className="text-pink text-center text-[30px] mt-[30px]">
          Upcoming Events
        </h1>

        <p className="text-[#102A43] text-center text-[25px]">
          Discover what's happening on campus
        </p>

        <p className="text-center text-[25px]">
          Workshops, seminars, clubs and more
        </p>
      </section>

      

      <section>
       <EventContent events={events}></EventContent>
      </section>
    </>
  );
}