const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const router = require("./route/routeIndex")
const app = express();

// load config
dotenv.config({ path: "./config/secret.env" });

const port = process.env.PORT || 1000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));



// Configure routes using the router
app.use("/transaction", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
