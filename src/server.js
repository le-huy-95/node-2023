import express from "express";
import configViewEngine from "./config/ViewEngine";
import initWebRouter from "./routes/routerWebTest";
import AuthApi from "./routes/AuthApi"
import CrudUser from "./routes/CrudUser"
require("dotenv").config();
import configCors from "./config/cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import RoleApi from "./routes/Role"
// import connection from "./config/connectdb"


const app = express();
configCors(app)
configViewEngine(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// config cookie-parser
app.use(cookieParser())
// test connectiondb
// connection()



initWebRouter(app);
AuthApi(app)
CrudUser(app)
RoleApi(app)
const PORT = process.env.PORT || 8080;




app.use((req, res) => {
    return res.send("404 Not Found")
})
app.listen(PORT, () => {
    console.log("app is running on the port" + PORT);
});