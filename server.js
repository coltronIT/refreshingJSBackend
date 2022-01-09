require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require('cors')
app.use(cors({
    origin: "*"
}))



mongoose.connect(process.env.DATABASE_URL)


const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))


app.use(express.json())

//set up routes
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3001, () => console.log("server Started"))
