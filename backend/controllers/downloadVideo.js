const ldl = require("youtube-dl-exec");
const path = require("path");
const fs = require("fs");

async function downloadVideo(req, res, next) {
    const { url, quality, format } = req.body;
    const { site } = req.body || "youtube";
    const outputFilePath = path.join(__dirname, "tmp", `downloading_video.%(ext)s`);

    try {
        // Download the video
        if (format === "video") {
            await ldl(url, {
                output: outputFilePath,
                format: `bestvideo[height<=${quality.replace('p', '')}]`,
                noCheckCertificates: true,
                noWarnings: true,
                preferFreeFormats: true
            });

            console.log("Download completed");
            const videoFilePath = outputFilePath.replace('%(ext)s', 'mp4');

            if (fs.existsSync(outputFilePath.replace('%(ext)s', 'webm'))) {
                fs.renameSync(outputFilePath.replace('%(ext)s', 'webm'), videoFilePath);
            }

            // Send the file as a download response
            if (fs.existsSync(videoFilePath)) {
                res.download(videoFilePath, (err) => {
                    if (err) {
                        console.error("Error while downloading the file:--->", err);
                        return;
                    }

                    // Delete the file after download
                    fs.unlink(videoFilePath, (err) => {
                        if (err) { console.error("Error deleting file:", err); }
                    });
                });
            } else {
                console.error("Error downloading video: try again");
            }
        } else {
            await ldl(url, {
                extractAudio: true,
                audioFormat: 'mp3',
                audioQuality: '192k',
                output: outputFilePath
            });
            const audioFilePath = outputFilePath.replace('%(ext)s', 'mp3');
            res.download(audioFilePath, (err) => {
                if (err) {
                    console.error("Error while downloading the audio file");
                    return;
                }
                fs.unlink(audioFilePath, (err) => {
                    if (err) { console.error("Error while deleting audio file") }
                });
            });
        }

    } catch (error) {
        console.error("Error downloading video:", error);
        res.status(500).json({ msg: "Error downloading video: try again" });
    }
}

module.exports = downloadVideo;


// yt: https://www.youtube.com/watch?v=6xKWiCMKKJg
// insta: https://www.instagram.com/reel/C_8JtbIoizD/?utm_source=ig_web_copy_link
// x: https://x.com/i/status/1847716589942296766