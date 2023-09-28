import express from "express";
import mongoose from "mongoose";
import { createDB } from "./db.js";
import { mentorStudentRouter } from "./Mentor-students-router.js";

//init the server
const app = express();

//middleware
app.use(express.json());

//Mentors-Students -Router
app.use("/",mentorStudentRouter)

//starting the server
app.listen(9090,()=>console.log("server running in localhost:9090"))