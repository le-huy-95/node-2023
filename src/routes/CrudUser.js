import express from "express";

import crudUser from "../controller/crudUserController"
import groupController from "../controller/groupController"

const router = express.Router();

const CrudUser = (app) => {

    router.get("/user/show", crudUser.show);
    router.post("/user/create", crudUser.create);
    router.put("/user/show", crudUser.update);
    router.delete("/user/delete", crudUser.remove);
    router.get("/group/show", groupController.showGroup);



    return app.use("/api/v2", router);
};

export default CrudUser;