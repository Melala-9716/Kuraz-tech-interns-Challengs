"use client";
import { useState } from "react";
export default function Filter({resource}){
    const[category,SetCategory]=useState("All");

    let filtered;

 
if (category === "All") {
    filtered = resource;
}
else {
    filtered = resource.filter((resources) =>
        resources.category === category
    );
}

const [search, SetSearch] = useState("");

filtered = filtered.filter((resource) =>
    resource.title.toLowerCase().includes(search.toLowerCase())
);

    return(
        <section>
            <section>
            <input className="border w-[80%] h-[60px] mx-[100px] my-[30px] rounded-[20px] text-white bg-blue-100 border-blue-500 hover:border-blue-500" placeholder="Search resources..." value={search} onChange={(e)=>SetSearch(e.target.value)}></input>
        </section>
          <section className="flex mx-[100px] justify-center items-center gap-[20px] text-[20px]">

            <button onClick={()=>SetCategory("All")}>All</button>
            <button onClick={()=>SetCategory("Programming")} >Programming</button>
            <button onClick={()=>SetCategory("Mathematics")}>Mathematics</button>
            <button onClick={()=>SetCategory("Computer Science")}>Computer Science</button>
            <button onClick={()=>SetCategory("Web Development")}>Web Development</button>
            <button onClick={()=>SetCategory("Database")}>Database</button>
            <button onClick={()=>SetCategory("Networking")}>Networking</button>
            <button onClick={()=>SetCategory("Career")}>Career</button>
            <button onClick={()=>SetCategory("Design")}>Design</button>
            <button onClick={()=>SetCategory("Science")}>Science</button>
        </section>
        <section className="grid grid-cols-[repeat(3,400px)] my-[40px] mx-[100px] gap-[20px]">
            {filtered.map((resource)=>(
                 <div className="border-2 border-solid border-blue-200 hover:shadow-[10px_10px_10px_#D9E2EC] rounded-3xl p-[10px] transition-all duration-300 hover:-translate-y-[10px] " key={resource.id}>
                    <h1 className="text-center text-[20px] text-blue-950">{resource.title}</h1>
                    <p>{resource.category}</p>
                    <p>{resource.description}</p>
                    <p>{resource.type}</p>
                    <p>{resource.level}</p>
                    <p>{resource.websiteName}</p>
                   <a href={resource.website} target="_blank">
        Explore...
    </a>
                 </div>
            ))}
        
           
        </section>
        </section>
    )
}