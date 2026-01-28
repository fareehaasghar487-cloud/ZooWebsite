import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  name: 
  { 
    type: String,
     required: true
     },
  email: 
  {
     type: String,
      required: true
     },
  tickets:
   { type: Number,
     required: true
     }
 
});

export default mongoose.model("Ticket", ticketSchema);
