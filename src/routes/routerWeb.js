import express from "express";


import testController from "../controller/testController";

const router = express.Router();

const initWebRouter = (app) => {
    router.get("/", (rep, res) => {
        return res.send("aaaa")
    });


    return app.use("/", router);
};

export default initWebRouter;