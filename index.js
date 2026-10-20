import express from "express"
import path from "node:path"

const  app = express();      // Creates an app using the express object 
const port  = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "public", "index.html"));
})

app.get('/about', (req,res) => {
    res.send('<h2>This is the about page</h2>');
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})