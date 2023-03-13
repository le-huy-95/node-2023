import express from "express";

import imageController from "../controller/imageController"
// import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"
import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');
const router = express.Router();

// cài đặt multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/public/image");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({
    storage: storage, fileFilter: imageFilter
});

let uploadMultipleFiles = multer({ storage: storage, fileFilter: imageFilter }).array('multiple_image', 20);

const ImageApi = (app) => {

    router.post('/upload-profile-pic', upload.single('file'), imageController.handleUploadFile
    )
    router.post('/upload-multiple-pic', (req, res, next) => {
        uploadMultipleFiles(req, res, (err) => {
            if (err instanceof multer.MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
                // handle multer file limit error here
                return res.status(500).json({
                    EM: "LIMIT_UNEXPECTED_FILE",
                    EC: "-1",
                    DT: []

                })
            } else if (err) {
                return res.status(500).json({
                    EM: "Only image files are allowed! , please check again",
                    EC: "-1",
                    DT: []
                })
            }
            else {
                // make sure to call next() if all was well
                next();
            }
        })
    }, imageController.handleUploadMultipleFiles
    )







    return app.use("/api/v6", router);
};

export default ImageApi;