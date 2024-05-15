"use strict";
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
courseRouter.post("/create-course", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        success: true,
        message: "New course is loading!"
    });
});
app.get('/', (req, res) => {
    res.send('Hello world! This is Nahid calling.');
});
// post request
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully got the data"
    });
});
exports.default = app;
