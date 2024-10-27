const ldl = require('youtube-dl-exec');

async function aboutVideo(req, res, next) {
    const { url } = req.body;
    const { site } = req.body || "youtube";
    try {
        const result = await ldl(url, {
            format: 'best',
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: [`referer:${site}.com`, 'user-agent:googlebot']
        });

        if (result) {
            // res.send(`Platform: ${  JSON.stringify(result)}`);
            res.json({
                platform: result.extractor,
                url: result.requested_downloads[0].url,
                // size: (result.formats[0].filesize) ? result.formats[0].filesize / (1024 * 1024) : null,
                title: result.title,
                description: result.description,
                // height: result.requested_downloads[0].height,
                msg: null
            })
            //next(); //don't call next() after sending response
        }
    } catch (error) {
        res.json({ msg: "Invalid link or try changing site like instagram, youtube or whatever your link from" });
    }
}

module.exports = aboutVideo;
