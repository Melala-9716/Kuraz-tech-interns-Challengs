
import Submit from "../submit";
export default function Contact(){
   
    async function feedback(formData){
        "use server";
        const name=formData.get("name");
        const email=formData.get("email");
        const subject=formData.get("subject");
        const message=formData.get("message");
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(message);
    }
    return(
        <section>
            <form action={feedback} className=" m-[100px] text-[30px] flex bg-blue-300 justify-center  flex-col rounded-3xl p-[70px]">
                <div>
                    <label>
                    Name
                </label>
                <input name="name" className="outline-none border-3 w-[500px] ml-[20px] rounded-3xl text-white" required></input>
                </div>
                <div>
                      <label>
                    Email
                </label>
                <input className="border-3 outline-none w-[500px] ml-[30px] rounded-3xl text-white m-[20px]" name="email" required>
                </input>
                </div>
                <div className="flex felx-row">
                     <label className="pt-[60px]">
                    Subject
                </label>
                <textarea className="border-3 w-[500px] outline-none h-[150px] ml-[10px] rounded-3xl text-white" name="subject"></textarea>
                </div>
               <div className="flex felx-row pt-[10px]">
                <label className="pt-[60px]">
                    Message
                </label>
                <textarea className="border-3 w-[500px] outline-none h-[150px] ml-[1px] rounded-3xl text-white" name="message" required></textarea>
               </div>
                
                <Submit></Submit>
            </form>
        </section>
    )
}