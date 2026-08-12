import Submiting from "./submitting";
export default function FeedBack() {
  async function Feed(formData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(name);
    console.log(email);
    console.log(message);
  }

  return (
    <form
  action={Feed}
  className="fixed top-5 right-5 w-80 rounded-xl bg-white p-6 shadow-xl"
>
  <label>Name</label>
  <input
    name="name"
    className="mb-3 w-full rounded border p-2"
  />

  <label>Email</label>
  <input
    name="email"
    className="mb-3 w-full rounded border p-2"
  />

  <label>Message</label>
  <textarea
    name="message"
    className="mb-3 w-full rounded border p-2"
  />

  <Submiting
    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
  />
</form>
  );
}