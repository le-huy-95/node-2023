import express from "express";

import apiController from "../controller/apiController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const AuthApi = (app) => {
    router.all('*', checkUserJwt, checkUserPermission);

    // router.get("/test-api", apiController.TestApi);
    router.post("/register", apiController.HandleRegister);
    router.post("/login", apiController.HandleLogin);
    router.get("/account", apiController.HandleGetUserAccount);
    router.post("/logout", apiController.HandleLogout);




    return app.use("/api/v1", router);
};

export default AuthApi;