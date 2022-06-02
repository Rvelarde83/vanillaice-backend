///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config()
const PORT = process.env.PORT||3001
const express = require("express")
const mongoose = require("mongoose")

const app=express()
const cors=require("cors")
const morgan = require("morgan")

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const cxn = mongoose.connection


//Setup mongoose connection messages
cxn.on("open", () => console.log("The Mongo Connection is Open"))
.on("close", () => console.log("The Mongo Connection is Closed"))
.on("error", (err)=> console.log(err))

///////////////////////////////
// MODELS
////////////////////////////////



//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("static")) 
app.use(cors());
app.use(morgan('dev'))

//Routes


app.get("/", (req,res)=> {
    res.send('<iframe src="https://giphy.com/embed/m3Ly8kCCAfj4xofPfB" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-stop-listen-collaborate-m3Ly8kCCAfj4xofPfB">via GIPHY</a></p>')
})


//Listener
app.listen(PORT, () => console.log(`listening on port ${PORT} STOP! Collaborate and listen!`))

console.log(PORT)
