import ProjectService from "../service/ProjectService"


const showAllProject = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;

            let data = await ProjectService.getAllProjectWithPagination(+page, +limit)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            let data = await ProjectService.getAllProject()
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


const showProject = async (req, res) => {
    try {
        let data = await ProjectService.getProjects(req.params.id)
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


const addProjectToUser = async (req, res) => {
    try {
        let data = await ProjectService.getProjects(req.params.id)
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
    showAllProject, showProject, addProjectToUser
}