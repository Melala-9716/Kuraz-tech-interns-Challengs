"use client";

import { useFormStatus } from "react-dom";

export default function Submiting({ className }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-950 border-white w-[150px] ml-[300px] mt-[20px] h-[50px] rounded-3xl text-white"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}