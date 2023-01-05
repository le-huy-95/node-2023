import express from "express";
import configViewEngine from "./configs/ViewEngine";
import initWebRouter from "./routes/routerWeb";
require("dotenv").config();

const app = express();
configViewEngine(app);

initWebRouter(app);



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("app is running on the port" + PORT);
});