import { HiDownload } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Loader, Quality, sourceUrl, ShowFormat } from "./Atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function Formats() {
    const setLoading = useSetRecoilState(Loader);
    const [show, setShow] = useRecoilState(ShowFormat);
    const quality = useRecoilValue(Quality);
    const url = useRecoilValue(sourceUrl);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const fetchAndDownloadVideo = async () => {
            try {
                setLoading(true);
                setIsDisabled(true);

                const res = await fetch("http://localhost:3000/flash-download/user/download", {
                    method: 'POST',
                    body: JSON.stringify({
                        url: url,
                        site: "youtube",
                        quality: quality.quality,
                        format: quality.format
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (res.status !== 200) {
                    alert("Download failed. Please check the link or try again.");
                    return;
                }

                const contentDisposition = res.headers.get("content-disposition");
                let fileName = `flash_video_${Date.now()}.mp4`; // fallback

                if (contentDisposition) {
                    const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
                    if (match && match[1]) {
                        fileName = match[1].replace(/['"]/g, "").trim();
                    }
                }

                const blob = await res.blob();
                const downloadUrl = window.URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = downloadUrl;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(downloadUrl);
            } catch (error) {
                alert("Unexpected error occurred. Please try again.");
            } finally {
                setLoading(false);
                setIsDisabled(false);
            }
        };

        if (quality.quality && quality.format) {
            fetchAndDownloadVideo();
        }
    }, [quality.quality, quality.format]);

    return (
        <div id="formats" className={`${show ? "flex" : "hidden"} relative w-full bg-[var(--bg-color)] flex-col px-5 z-40`}>
            <h2 className="text-gray-500 mt-3">Audio</h2>
            <Button quality={"Fast"} msg={""} format={"audio"} disabled={isDisabled} />
            <Button quality={"Classic MP3"} msg={""} format={"audio"} disabled={isDisabled} />
            <h2 className="text-gray-500 border-b border-gray-600">Video</h2>
            <Button quality={"144p"} msg={" (Low Quality, Small Size)"} format={"video"} disabled={isDisabled} />
            <Button quality={"240p"} msg={" (Good Quality)"} format={"video"} disabled={isDisabled} />
            <Button quality={"360p"} msg={" (Better Quality, Moderate Size)"} format={"video"} disabled={isDisabled} />
            <Button quality={"480p"} msg={" (Standard Definition)"} format={"video"} disabled={isDisabled} />
        </div>
    );
}

function Button({ quality, msg, format, disabled }) {
    const setQuality = useSetRecoilState(Quality);
    return (
        <div className="px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-start">
            <div className="flex justify-between items-center">
                <div className="font-semibold">
                    {quality}<small className="text-xs text-gray-300">{msg}</small>
                </div>
                <button
                    className="border-l-2 pl-2 text-xl disabled:text-gray-500"
                    onClick={() => setQuality({ quality: quality, format: format })}
                    disabled={disabled}
                >
                    <HiDownload />
                </button>
            </div>
        </div>
    );
}

export default Formats;
