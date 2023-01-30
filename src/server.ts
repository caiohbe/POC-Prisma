import express from "express"
import { Request, Response } from "express"
import moviesRouters from "./routes/movies.routes.js"
import reviewsRouters from "./routes/reviews.routes.js"

const server = express()
server.use(express.json())

server.get("/health", (req: Request, res: Response) => { 
    res.send("OK")
})

server
    .use(moviesRouters) 
    .use(reviewsRouters)

server.listen(4000, () => {
    console.log("Running in port 4000")
})