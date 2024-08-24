const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const port = 3000;

app.get("/", (req,res) => {
    console.log("Rendering");
    res.render("home.ejs");
    console.log("Rendered");
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})