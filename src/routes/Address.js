import express from "express";

import addressController from "../controller/addressController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const AddressApi = (app) => {
    // router.all('*', checkUserJwt, checkUserPermission);
    router.get("/getProvince", addressController.showProvince);








    return app.use("/api/v5", router);
};

export default AddressApi;