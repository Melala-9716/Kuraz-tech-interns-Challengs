"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button       type="submit"
      disabled={pending}
      className="border px-4 py-2 mx-[260px] border-none bg-pink-300 rounded-[20px] mb-[10px]"
    >
      {pending ? "Saving..." : "Submit"}
    </button>
  );
}