const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Main page
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>LARRY</title>
            </head>
            <body style="background:black;color:white;text-align:center;font-family:Arial;margin-top:20%;">
                <h1>WeAreLarps</h1>
            </body>
        </html>
    `);
});

// Discord redirect
app.get("/discord", (req, res) => {
    res.redirect("https://discord.com/invite/RTeXB6QUEF");
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
