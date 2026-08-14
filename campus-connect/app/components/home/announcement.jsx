"use client";

import { useState } from "react";

export default function Announcement({ announcement }) {
  return (
    <section>
      <div className="grid grid-cols-[repeat(3,470px)] m-[50px] text-[20px] gap-[20px] ">

        {announcement.map((announcements) => (

          <div
className="border rounded-3xl h-[240px] p-[20px] bg-white text-[#627D98] border-[#D9E2EC] transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20"
            key={announcements.id}
          >
            <h1 className="text-center text-[#172B4D]">{announcements.title}</h1>
            <p>{announcements.category}</p>
            <p>{announcements.date}</p>
            <p>{announcements.description}</p>
          </div>

        ))}

      </div>
    </section>
  );
}