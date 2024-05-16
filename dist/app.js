"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// then we have to use the routers that we have created
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
// 
userRouter.get("/create-user", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        success: true,
        message: "User is created!"
    });
});
// 
courseRouter.post("/create-course", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        success: true,
        message: "New course is loading!"
    });
});
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
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // res.send(something) // this is an error
        res.send("something"); // not an error
    }
    catch (error) {
        next(error);
    }
}));
// post request
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully got the data"
    });
});
// handling not found route
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Failed to get the message from global"
        });
    }
});
exports.default = app;
