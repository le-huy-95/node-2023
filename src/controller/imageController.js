
import multer from "multer"

import db from "../models/index"






const upload = multer().single('file');


let handleUploadFile = async (req, res) => {

    upload(req, res, function (err) {


        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.send(`chuc mung ban`);
        console.log(req.file.filename)
    });
}

let handleUploadMultipleFiles = async (req, res) => {
    console.log("aa", req.files)
    if (req.files) {
        console.log(req.files)
        let nerArrayImage = []
        req.files.forEach((item) => {
            nerArrayImage.push({ url: item.filename })



        });

        await db.Image.bulkCreate(nerArrayImage, { returning: true })
        return res.status(200).json({
            EM: `Create success ${nerArrayImage.length} image `,
            EC: "1",
            DT: nerArrayImage,
        })






    }


    if (req.fileValidationError) {
        return res.status(500).json({
            EM: "req.fileValidationError",
            EC: "-1",
            DT: []

        })
    }
    else if (!req.files) {
        return res.status(500).json({
            EM: "Please select an image to upload",
            EC: "-1",
            DT: []

        })
    }





}



module.exports = {
    handleUploadFile, handleUploadMultipleFiles
}