require("dotenv").config();
const express = require("express");

const router = require("./routes/routes");

const port = process.env.SERVER_PORT || 5050;

const app = express();

app.use(express.json());
app.use(router);

app.listen(port);
console.log(`Server listening at http://localhost:${port}`);
