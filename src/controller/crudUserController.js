import db from "../models";
import CrudUserService from "../service/CrudUserService"


const show = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;

            let data = await CrudUserService.getUserWithPagination(+page, +limit)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })




        } else {
            let data = await CrudUserService.getAllUser()
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}





const create = async (req, res) => {
    try {
        let data = await CrudUserService.createUser(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const update = (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const remove = async (req, res) => {
    try {
        // console.log("req.body", req.body)
        let data = await CrudUserService.deleteUser(req.body.id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}


module.exports = {
    show, create, update, remove
}