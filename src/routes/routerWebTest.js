import express from "express";


import testController from "../controller/testController";

const router = express.Router();

const initWebRouter = (app) => {
    router.get("/users", testController.handleRenderListUser);
    router.post("/users/create-user", testController.handleCreateNewUser);
    router.post("/delete-user/:id", testController.DeleteUser);
    router.get("/update-user/:id", testController.UpdateUser);
    router.post("/users/update-user", testController.handleUpdateUser);




    return app.use("/", router);
};

export default initWebRouter;