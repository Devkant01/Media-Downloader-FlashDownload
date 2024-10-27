import { IoSearch } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { Dark, Data, Loader, sourceUrl } from "./Atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function Hero() {
    const [url, setUrl] = useRecoilState(sourceUrl);
    const setData = useSetRecoilState(Data);
    const isDark = useRecoilValue(Dark);
    const [loading, setLoading] = useRecoilState(Loader);
    async function downloadHandler(event) {
        event.preventDefault();
        setLoading(true);
        const res = await fetch('https://media-downloader-flashdownload.onrender.com/flash-download/user/show', {
            method: 'POST',
            body: JSON.stringify({url:url, site:"youtube"}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        if (data) {
            setData(data);
            setLoading(false);
            document.querySelector("#download").style.display = 'flex';
            window.location.hash = 'download';
        }
    }

    return (
        <main className={`sticky ${isDark ? "bg-[url('../../public/bgcW.png')]" : "bg-[url('../../public/bgcB.png')]"} top-[70px] h-screen w-full grid place-content-center bg-no-repeat bg-cover bg-center pb-10 z-20`}>
            <h1 className="text-2xl md:text-6xl text-center mb-10 md:mb-16 font-extrabold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent" style={{ fontFamily: ' sans-serif' }}>FLASH DOWNLOAD</h1>
            <div
                className={`border-[var(--border-color)] w-full flex justify-center items-center border-8 rounded-full py-1 pl-2 pr-1 gap-3 mb-8 md:mb-10 z-10 cursor-text`} >
                <HiDownload className="text-lg md:text-3xl" />
                <input type="text" name="searchBox" placeholder="Search to download" onChange={
                    (event) => setUrl(event.target.value)
                } className="flex-grow outline-none w-30 bg-transparent md:text-2xl" />
                <IoSearch className="w-fit h-fit bg-custom-gradient px-2 py-2 rounded-full text-white text-lg md:text-3xl cursor-pointer" onClick={downloadHandler} />
            </div>
        </main>
    )
}



export default Hero;