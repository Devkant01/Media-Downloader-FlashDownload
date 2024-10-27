import { HiDownload } from "react-icons/hi";
import { LuShieldClose } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Loader, Quality, sourceUrl, ShowFormat } from "./Atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function Formats() {
    const setLoading = useSetRecoilState(Loader);
    const [show, setShow] = useRecoilState(ShowFormat);
    const quality = useRecoilValue(Quality);
    const url = useRecoilValue(sourceUrl);

    useEffect(() => {
        const fetchAndDownloadVideo = async () => {
            try {
                setLoading(true);
                const res = await fetch("http://localhost:3000/flash-download/user/download", {
                    method: 'POST',
                    body: JSON.stringify({ url: url, site: "youtube", quality: quality.quality, format: quality.format }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const blob = await res.blob();
                const downloadUrl = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = downloadUrl;
                a.download = `${url.substring(url.length - 5, url.length - 1)}.mp4`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(downloadUrl);
            } catch (error) {
                console.log("something went wrong");
            } finally {
                setLoading(false);
            }
        };
        if (quality.quality) {  // Check if quality is set, preventing it from running on initial render
            fetchAndDownloadVideo();
        }
    }, [quality.quality]);

    return (
        <div id="formats" className={`${show ? "flex" : "hidden"}  w-full fixed -bottom-3 bg-[var(--bg-color)] flex-col border-2 rounded-xl px-5 pt-6 pb-10 z-40`}>
            <LuShieldClose className="w-max text-2xl md:text-3xl absolute top-2 right-4 cursor-pointer" onClick={() => setShow(false)} />

            <h2 className="text-gray-500 border-b border-gray-600 mt-3">Audio</h2>
            <Button quality={"Fast"} msg={""} format={"audio"} />
            <Button quality={"Classic MP3"} msg={""} format={"audio"} />
            <h2 className="text-gray-500 border-b border-gray-600">Video</h2>
            <Button quality={"144p"} msg={"(Low Quality, Small Size)"} format={"video"} />
            <Button quality={"240p"} msg={"(Good Quality)"} format={"video"} />
            <Button quality={"360p"} msg={"(Better Quality, Moderate Size)"} format={"video"} />
            <Button quality={"480p"} msg={"(Standard Definition"} format={"video"} />
        </div>
    );
}

function Button({ quality, msg, format }) {
    const setQuality = useSetRecoilState(Quality);
    return (
        <div
            className="px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-start">
            <div className="flex justify-between items-center">
                <div className="font-semibold">{quality}<small className="text-xs text-gray-300">{msg}</small></div>
                <button className="border-l-2 pl-2 text-xl" onClick={() => setQuality({ quality: quality, format: format })}><HiDownload /></button>
            </div>
        </div>
    )
}

export default Formats;
