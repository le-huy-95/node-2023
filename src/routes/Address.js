import express from "express";

import addressController from "../controller/addressController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const AddressApi = (app) => {
    // router.all('*', checkUserJwt, checkUserPermission);
    router.get("/getProvince", addressController.showAllProvince);

    router.get("/showDistrict/by-Province/:ProvinceId", addressController.showDistrictbyProvince);
    router.get("/showWard/by-District/:DistrictId", addressController.showWardbyDistric);
    router.get("/getAddress_to", addressController.showAllAddress_to);
    router.get("/getAddress_from", addressController.showAllAddress_from);








    return app.use("/api/v5", router);
};

export default AddressApi;