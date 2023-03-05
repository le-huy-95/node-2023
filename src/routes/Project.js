import express from "express";

import projectController from "../controller/projectController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const ProjectApi = (app) => {
    // router.all('*', checkUserJwt, checkUserPermission);
    router.get("/getProject", projectController.showAllProject);
    router.get("/getProjects/:id", projectController.showProject);
    router.post("/add-project-to-user", projectController.addProjectToUser);







    return app.use("/api/v4", router);
};

export default ProjectApi;