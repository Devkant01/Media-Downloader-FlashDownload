import { Dark } from "./Atom";
import { useRecoilValue } from "recoil";

function Support() {
    const isDark = useRecoilValue(Dark);
    return (
        <div id="support" className={`${isDark ? "bg-[var(--bg-color)]" : "bg-[var(--bg-color)]"} pt-7 px-5 overflow-hidden z-20`}>
            <h1 className="text-2xl md:text-6xl text-center p-4 mt-9 mb-1 ">SUPPORT</h1>
            <p id="container" className="w-full px-2 md:px-5">
                <span className="font-bold">Flash Download</span> is a free and open source video/audio downloader web-app that uses <span className="font-semibold">yt-dlp-exec</span>, a program that can download videos and audio from over 1000 websites.
            </p>
            <h1 className="font-bold text-center text-2xl my-4">How to Use the Video Downloader</h1>
            <div id="steps" className="grid grid-cols-1  md:grid-cols-3  gap-3 mb-8">
                <div id="s_1" className="border-2 rounded p-2">
                    <h1 className="font-bold ">1. Copy the video URL</h1>
                    <p className="text-justify indent-2">Copy the URL of the video you want to download</p>
                </div>
                <div id="s_2" className="border-2 rounded p-2">
                    <h1 className="font-bold ">2. Paste it in the field</h1>
                    <p className="text-justify indent-2">Paste the URL into the video downloader text field and click the <span className="font-bold">Search</span> button</p>
                </div>
                <div id="s_3" className="border-2 rounded p-2">
                    <h1 className="font-bold ">3. Download the file</h1>
                    <p className="text-justify indent-2">To download the video press <strong className="font-bold">Download</strong> button, In just a few seconds you will get the file</p>
                </div>
            </div>
        </div>
    )
}

export default Support;