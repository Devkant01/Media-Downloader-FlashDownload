import React from "react";
import { useRecoilState } from "recoil";
import Hamburger from "./Hamburger";
import { Dark, Navbar } from "./Atom";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
    const [isDark, setIsDark] = useRecoilState(Dark);
    const [showNavbar, setShowNavbar] = useRecoilState(Navbar);

    const handleToggle = () => {
        setIsDark((prev) => !prev);
        document.body.classList.toggle("dark", isDark);
        document.body.classList.toggle("light", !isDark);
    };

    const handleNavbar = () => {
        setShowNavbar((prev) => !prev);
    };

    return (
        <header className="sticky w-screen h-max top-0 py-3 px-8 flex justify-between items-center border-b-[1px] border-gray-400 bg-[var(--bg-color)] z-50">
            <div>
                <a href="/">
                    <img src="/icon.png" alt="logo.png" className="w-12" title="Flash Download" />
                </a>
            </div>

            <div className="md:hidden cursor-pointer" onClick={handleNavbar}>
                <Hamburger />
            </div>

            <nav className={`${showNavbar ? "block" : "hidden"} absolute top-16 left-0 w-full md:flex md:static md:w-auto md:space-x-8 bg-[var(--bg-color)] md:bg-transparent p-5 md:p-0 transition-transform duration-200 z-50`}>
                <ul className="flex flex-col md:flex-row gap-4 md:gap-10 font-extralight">
                    <li className="hover:bg-[var(--bg-color-hover)] md:hover:bg-transparent p-2 rounded-md md:p-0 cursor-pointer"><a href="#download">Download</a></li>
                    <li className="hover:bg-[var(--bg-color-hover)] md:hover:bg-transparent p-2 rounded-md md:p-0 cursor-pointer"><a href="#features">Features</a></li>
                    <li className="hover:bg-[var(--bg-color-hover)] md:hover:bg-transparent p-2 rounded-md md:p-0 cursor-pointer"><a href="#support">Support</a></li>
                </ul>

                <div className="mt-4 md:mt-0 w-max relative border-[1px] border-gray-300 rounded-full">
                    <input
                        type="checkbox"
                        id="checkbox"
                        className="absolute opacity-0"
                        onChange={handleToggle}
                    />
                    <label
                        htmlFor="checkbox"
                        className="flex justify-between items-center bg-gray-800 w-14 h-7 rounded-full p-1 cursor-pointer"
                    >
                        <FaMoon className="text-yellow-500" />
                        <FaSun className="text-yellow-300" />
                    </label>
                    <span
                        className={`absolute top-[2px] left-[2px] ball w-6 h-6 bg-white rounded-full transition-transform duration-200 ${isDark ? "translate-x-7" : "translate-x-0"
                            }`}
                    ></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
