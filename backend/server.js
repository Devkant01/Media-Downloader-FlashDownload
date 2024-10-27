const express = require("express");
const rootRouter = require("./routes/app");
const cors = require("cors");
require("dotenv").config();

const PORT = 3000;
const app = new express();

app.use(cors({ origin: 'http://localhost:5173' }));
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

