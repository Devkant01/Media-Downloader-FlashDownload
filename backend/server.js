const express = require("express");
const rootRouter = require("./routes/app");
const cors = require("cors");

const PORT = 3000;
const app = new express();

app.use(cors({ origin: 'https://flashdownload.onrender.com' }));
app.use(express.json());
app.use('/flash-download', rootRouter);

app.get('/', (req, res) => {
    return res.send('hi from server.js');
});

app.all('/*', (req,res) => {
    return res.send('404 not found: un-handled');
});

app.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
    
})

