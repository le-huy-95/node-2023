import express from "express";

import apiController from "../controller/apiController"
const router = express.Router();

const AuthApi = (app) => {

    router.get("/test-api", apiController.TestApi);
    router.post("/register", apiController.HandleRegister);
    router.post("/login", apiController.HandleLogin);




    return app.use("/api/v1", router);
};

export default AuthApi;