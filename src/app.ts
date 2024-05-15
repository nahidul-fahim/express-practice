import express, { Request, Response } from 'express';
const app = express();

// parsers
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world! This is Nahid calling.')
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Got the data")
})

export default app;