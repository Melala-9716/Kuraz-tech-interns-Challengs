"use client";

import { useFormStatus } from "react-dom";

export default function Submiting({ className }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={className}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}