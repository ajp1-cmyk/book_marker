const express = require("express")

const port = 3000

const app = express();

app.get("/",(req,res)=>{
	res.send("htmx project")
})

app.listen(port,()=>{
	console.log(`server running on port: ${port}`)
})
