const express = require("express")
const app = express()
app.use(express.json())

//public folder contains static files,
//  its for security it tell that files in public folder can be accesed by client
// app.use(express.static('public'))


const newDate = Date()
app.get('/test', (req, res) => {
    res.send({date: newDate})
})

app.get('/time', (req, res) => {
    res.sendFile(__dirname + '/fronpage.html')
})


const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log(error)
        return
    }
    console.log("app runs on port", PORT)
})