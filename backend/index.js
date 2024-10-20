import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Hello World")
})

async function main() {
    await mongoose.connect(process.env.DB_URL)
    app.use("/", (req, res) => {
        res.send('server is running')
    })
}

main().then(() => {
    console.log("DB is connected")
}).catch(err => console.error(err))

app.listen(port, () => {

    console.log('listening on port' + port)
})