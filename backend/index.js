const express = require("express");
const app = express();
const connect = require("./configs/db")
const userrouter = require("./routes/userroute");
const cors = require("cors");
const adminrouter = require("./routes/adminroute");

//✅ connect frontend to backend
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
connect();
// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Optionally parse URL-encoded form data (if needed)
app.use(express.urlencoded({ extended: true }));
app.use("/api" , userrouter);
app.use("/api" , adminrouter);

app.listen(3000 , ()=>{
console.log( `server is started at http://localhost:3000`)
})