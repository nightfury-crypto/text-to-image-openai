import express from "express";
import cors from "cors";
import openaiRouter from "./routers/openaiRouter.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}))

app.use("/api/v1/aigen", openaiRouter)

app.get("/", (req, res) => {
    res.send("Hello world")
})


const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}


startServer();