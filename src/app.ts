import express, { Request, Response } from 'express';
const app = express();

// parsers
app.use(express.json())


// router
const userRouter = express.Router();
const courseRouter = express.Router();

// then we have to use the routers that we have created
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);


// 
userRouter.get("/create-user", (req: Request, res: Response) => {
    const data = req.body;
    console.log(data)
    res.json({
        success: true,
        message: "User is created!"
    })
})

courseRouter.post("/create-course", (req: Request, res: Response) => {
    const data = req.body;
    console.log(data)
    res.json({
        success: true,
        message: "New course is loading!"
    })
})


app.get('/', (req: Request, res: Response) => {
    res.send('Hello world! This is Nahid calling.')
})

// post request
app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: "successfully got the data"
    })
})

export default app;