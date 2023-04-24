import express from 'express';
import session from "express-session";
import cors from 'cors'
import AuthController from "./users/auth-controller.js";
import ReviewController from "./reviews/reviews-controller.js";
import FollowController from "./follows/follows-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/web-users';

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
const port = process.env.PORT || 4000;

AuthController(app);
ReviewController(app);
FollowController(app);

app.listen(port)