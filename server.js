const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const express = require('express')
const cors = require('cors')
const path = require('path')
//^ --- Set Routes ----
const contactRoute = require('./routes/contactRoute')


//^ --- Initialize server ---
const app = express()

//^ ---  Middleware --- 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.use('/', contactRoute)

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req,res)=> 
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    )
}



const PORT = process.env.PORT || 5000

//?---- API LISTEN ROUTE - listens for the port user will be making requests to view data ----
app.listen(PORT, console.log(`server listening to port ${PORT}!`))