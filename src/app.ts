import express, { NextFunction, Request, Response } from 'express';
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

// 
courseRouter.post("/create-course", (req: Request, res: Response) => {
    const data = req.body;
    console.log(data)
    res.json({
        success: true,
        message: "New course is loading!"
    })
})


// middleware



// Error handling - try - catch
/*
app.get('/', async (req: Request, res: Response) => {
    try {
        // res.send(something) // this is an error
        res.send("something") // not an error
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Failed to get the message"
        })
    }
}) */

// error handling using global error handler
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        // res.send(something) // this is an error
        res.send("something") // not an error
    } catch (error) {
        next(error)
    }
})



// post request
app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: "successfully got the data"
    })
})


// handling not found route
app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    })
})


// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Failed to get the message from global"
        })
    }
})



export default app;