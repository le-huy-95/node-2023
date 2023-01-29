import express from "express";
import configViewEngine from "./config/ViewEngine";
import initWebRouter from "./routes/routerWebTest";
import AuthApi from "./routes/AuthApi"
import CrudUser from "./routes/CrudUser"

require("dotenv").config();
import configCors from "./config/cors"
import bodyParser from "body-parser"
// import connection from "./config/connectdb"


const app = express();
configCors(app)
configViewEngine(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connectiondb
// connection()



initWebRouter(app);
AuthApi(app)
CrudUser(app)





const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("app is running on the port" + PORT);
});