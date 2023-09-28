import mongoose from "mongoose";

//data models for Mentor and Student using Mongoose.
const mentorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  });
  
  const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
  });
  
  const Mentor = mongoose.model("Mentor", mentorSchema);
  const Student = mongoose.model("Student", studentSchema);

  export {Mentor,Student}