import express from "express";

import RoleController from "../controller/RoleController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const RoleApi = (app) => {
    router.all('*', checkUserJwt, checkUserPermission);
    router.get("/ShowRole", RoleController.ShowAllRole);
    router.post("/AddRow", RoleController.AddRole);
    router.delete("/DeleteRow", RoleController.DeleteRole);






    return app.use("/api/v3", router);
};

export default RoleApi;