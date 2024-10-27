import Card from "./FeatureCard";
import { FaCloudDownloadAlt, FaPhotoVideo } from 'react-icons/fa'
import { FcMultipleInputs } from 'react-icons/fc';
import { useRecoilValue } from "recoil";
import { Dark } from "./Atom";

function Features() {
    const isDark = useRecoilValue(Dark);
    return (
        <div id = "features" className={`${isDark ? "bg-[var(--bg-color)]" : "bg-[var(--bg-color)]"} pt-7 overflow-hidden z-20`}>
            <h1 className="text-2xl md:text-6xl text-center p-4 mt-9 mb-12 ">FEATURES</h1>
            <div className="px-5 md:grid grid-cols-3 justify-center items-center gap-4">
                <Card Icon={FaCloudDownloadAlt} title="Quick Download Mode" description="Download any video or audio file from any app that supports sharing without opening the social media app." />
                <Card Icon={FcMultipleInputs} title="Multi-Platform Support" description="Easily download videos from a variety of websites including Instagram, YouTube, and more. Just paste the link and start downloading." />
                <Card Icon={FaPhotoVideo} title="Multiple Formats Available" description="Choose from a variety of formats for both audio and video downloads to suit your needs." />
                <Card Icon={FcMultipleInputs} title="Multi-Platform Support" description="Easily download videos from a variety of websites including Instagram, YouTube, and more. Just paste the link and start downloading." />
                <Card Icon={FaCloudDownloadAlt} title="Quick Download Mode" description="Download any video or audio file from any app that supports sharing without opening the social media app." />
                <Card Icon={FaPhotoVideo} title="Multiple Formats Available" description="Choose from a variety of formats for both audio and video downloads to suit your needs." />
            </div>
        </div>
    )
}

export default Features;