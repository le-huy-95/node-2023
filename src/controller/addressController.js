import AddressService from "../service/AddressService"

const showAllProvince = async (req, res) => {
    try {

        let data = await AddressService.getAllProvince()
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
const showAllAddress_to = async (req, res) => {
    try {

        let data = await AddressService.getAllAddress_to()
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
const showAllAddress_from = async (req, res) => {
    try {

        let data = await AddressService.getAllAddress_From()
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


const showDistrictbyProvince = async (req, res) => {
    try {
        let id = req.params.ProvinceId

        let data = await AddressService.getDistrictByProvince(id)
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
const showWardbyDistric = async (req, res) => {
    try {
        let id = req.params.DistrictId

        let data = await AddressService.getWardByDistrictBy(id)
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
    showDistrictbyProvince, showWardbyDistric, showAllProvince, showAllAddress_to, showAllAddress_from
}