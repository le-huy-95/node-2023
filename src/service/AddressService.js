import db from "../models/index"


const getAllProvince = async (id) => {
    try {


        let data = await db.Province.findAll({

            include: [
                {
                    model: db.District,
                    include: {
                        model: db.Ward
                    },
                },
            ]
        })
        return {
            EM: " get group success",
            EC: "0",
            DT: data,
        }
    } catch (error) {
        console.log(error)
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}

module.exports = {
    getAllProvince
}