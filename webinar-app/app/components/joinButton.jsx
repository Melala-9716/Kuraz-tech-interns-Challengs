"use client";

import { useState } from "react";

export default function Join(){
 const[join,SetJoin]=useState(false);
 function check(){
      SetJoin(!join);
 } 

    return(
        <div>
            <button onClick={check}>{join ? "You joined the webinar" :"Join webinar"}</button>
        </div>
    )
}