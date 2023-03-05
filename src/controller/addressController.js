import AddressService from "../service/AddressService"



const showProvince = async (req, res) => {
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


module.exports = {
    showProvince
}