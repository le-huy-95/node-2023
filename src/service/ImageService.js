import db from "../models/index"


const creatNewimage = async (url) => {
    console.log(url)
    try {
        if (!url) {
            return {
                EM: " nothing to Create or Image already exist",
                EC: "1",
                DT: [],
            }
        } else {
            await db.Image.bulkCreate({
            })
            return {
                EM: `Create success  image `,
                EC: "0",
                DT: url,
            }
        }

    } catch (error) {
        console.log(error)
        return {
            EM: " Wrongs with services",
            EC: "-1",
            DT: [],
        }
    }
}


module.exports = {
    creatNewimage
}