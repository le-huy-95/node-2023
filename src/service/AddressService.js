import db from "../models/index"



const getAllProvince = async () => {
    try {
        let data = await db.Province.findAll({
            raw: true

        })
        return {
            EM: " get Province ok",
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

const getAllAddress_to = async () => {
    try {
        let data = await db.Address_To.findAll({
            raw: true

        })
        return {
            EM: " get Address_To ok",
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
const getAllAddress_From = async () => {
    try {
        let data = await db.Address_From.findAll({
            raw: true

        })
        return {
            EM: " get Address_From ok",
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
const getDistrictByProvince = async (id) => {
    try {

        if (!id) {
            return {
                EM: " Province empty or not Exist",
                EC: "0",
                DT: [],
            }
        }

        let data = await db.Province.findOne({
            where: { id: id },

            include: [{
                model: db.District,

            }],

        })
        return {
            EM: " get address information  ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        console.log(error)
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}
const getWardByDistrictBy = async (id) => {
    try {

        if (!id) {
            return {
                EM: " District empty or not Exist",
                EC: "0",
                DT: [],
            }
        }

        let data = await db.District.findOne({
            where: { id: id },

            include: [{
                model: db.Ward,





            }],

        })
        return {
            EM: " get address information  ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        console.log(error)
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}
module.exports = {
    getDistrictByProvince, getWardByDistrictBy, getAllProvince, getAllAddress_to, getAllAddress_From
}