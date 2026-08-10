export default function Header(){
    return(
        <header className="flex text-black justify-between mx-[10px] mt-[10px] text-[20px] md:mx-[70px] md:text-[50px] ">
            <h1>UserHub</h1>
            <nav className="flex gap-[30px]">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header>
    )
}