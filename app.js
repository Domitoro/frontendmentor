const express = require("express");
const app = express();

app.listen(80, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static('qr-code-component-main'));

app.get("/", (req, res) => {
  res.sendFile('qr-code-component-main' + "/index.html");
});