const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const port = 3000;

// Corrected the path here
app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/buy-sell', (req, res) => {
    res.render("buySell.ejs");
});


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
