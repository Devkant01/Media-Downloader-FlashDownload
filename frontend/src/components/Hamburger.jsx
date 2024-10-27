import { useRecoilValue } from "recoil";
import { Navbar } from "./Atom";

function Hamburger() {
    const showNavbar = useRecoilValue(Navbar);
    return (
        <div className="w-8 h-6 relative mx-auto rotate-0 transition-all cursor-pointer  ">
            <span className={`${showNavbar ? "top-[10px] w-0 left-[50%]" :"top-0  w-full left-0"} block absolute h-1 bg-red-500 rounded-lg opacity-[1] rotate-0 transition-all  `}></span>
            <span className={`${showNavbar ? "rotate-45" : "rotate-0"} block absolute h-1 w-full bg-red-500 rounded-lg opacity-[1] transition-all left-0 top-[10px] `}></span>
            <span className={`${showNavbar ? "-rotate-45" : "rotate-0"} block absolute h-1 w-full bg-red-500 rounded-lg opacity-[1] transition-all left-0 top-[10px] `}></span>
            <span className={`${showNavbar ? "bottom-[10px] w-0 left-[50%]" : "bottom-0  w-full left-0"} block absolute h-1 bg-red-500 rounded-lg opacity-[1] rotate-0 transition-all `}></span> 
    </div>)
}

export default Hamburger;