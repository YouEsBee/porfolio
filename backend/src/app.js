import express from "express";
import cors from "cors";
import { corsOptions } from "./config/cors.js";
// routes import 
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// create an express app
const app = express();

app.use(express.json());

app.use(cors(corsOptions));

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// example route: http://localhost:4000/api/v1/users/register

export default app;