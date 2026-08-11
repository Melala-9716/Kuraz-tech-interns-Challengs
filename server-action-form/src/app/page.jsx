import SubmitButton from "./components/SubmitButton"
export default function Home() {

  async function submitFeedback(formData) {
    "use server";

    const name = formData.get("name");
    const message = formData.get("message");
    const email=formData.get("email");
    const subject=formData.get("subject");

    console.log(name);
    console.log(message);
    console.log(email);
    console.log(subject);
  }

  return (
    
       <main>
        <div className=" bg-pink-500 mt-[100px] mx-[200px] rounded-[20px]">

          <h1 className="text-center mt-[20px] text-[30px] text-white">Feedback Form</h1><br></br>

      <form action={submitFeedback}>
        <label className="mx-[60px] text-[25px]">
          Name:
          <input className="mx-[20px] border-none bg-white rounded-[20px] " type="text" name="name" />
        </label>

        <br />
        <label className="mx-[60px] text-[25px] ">
          Email:
          <input className="mx-[20px] border-none  mt-[10px] bg-white rounded-[20px] " name="email"></input>
        </label><br/>
        <label className="flex items-center  mx-[60px] text-[25px]">
          Subject:
          <textarea className="mx-[20px] my-[10px] border-none bg-white rounded-[20px] " name="subject"></textarea>
        </label>
          <br/>
        <label className=" flex items-center mx-[60px] text-[25px]">
          Message:
          <textarea className="mx-[20px] border-none bg-white rounded-[20px] " name="message"></textarea>
        </label>

        <br />

        <SubmitButton/>
      </form>
        </div>
      
    </main>
  
   
  );
}