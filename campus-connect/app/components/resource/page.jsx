
import Filtered from "./Filtering"

export default async function Resource(){
    const response=await fetch("http://localhost:3000/api/resources");
    const resource = await response.json();

    
    return(
        <>
        <section>
            <div>
            <h1 className="text-center text-[30px] mt-[10px] text-shadow-blue-900"> University Resources</h1>
            <p className="text-center text-[25px] text-shadow-blue-900">Find useful materials for your studies</p>
        </div>
        </section>
        <section>
            <Filtered resource={resource}></Filtered>
        </section>
        </>
    )
}