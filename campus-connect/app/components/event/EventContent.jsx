"use client";

import { useState } from "react";

export default function EventContent({ events }) {
  const [category, setCategory] = useState("All");

  let filteredEvents;

  if (category === "All") {
    filteredEvents = events;
  } else {
    filteredEvents = events.filter(
      (event) => event.category === category
    );
  }

  return (
    <section>

      <section className="flex mx-[100px] justify-center items-center gap-[20px] text-[20px]">

        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Workshops")}>
          Workshops
        </button>

        <button onClick={() => setCategory("Seminars")}>
          Seminars
        </button>

        <button onClick={() => setCategory("Clubs")}>
          Clubs
        </button>

        <button onClick={() => setCategory("Academic")}>
          Academic
        </button>

      </section>

      <section>
        <div className="grid grid-cols-[repeat(3,450px)] mx-[50px] my-[20px] gap-[40px]">

          {filteredEvents.map((event) => (
            <div key={event.id} className=" border p-[20px] bg-white rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 rounded-2xl p-[20px]">

              <h1 className="text-[#102A43] text-[25px]">{event.title}</h1>
              <p className="text-[#627D98]">{event.category}</p>
              <p className="text-[#627D98]">{event.date}</p>
              <p className="text-[#627D98]">{event.time}</p>
              <p className="text-[#627D98]">{event.location}</p>
              <p className="text-[#627D98]">{event.description}</p>

            </div>
          ))}

        </div>
      </section>

    </section>
  );
}