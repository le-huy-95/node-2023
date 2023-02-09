import db from "../models/index"


const creatNewGroup = async (roles) => {
    try {

        let CurrenRoles = await db.Role.findAll({
            attributes: ["url", "description"],
            raw: true
        })
        // ham so sanh tim ra phan tu khac nhau giua 2arrary
        const results = roles.filter(({ url: url1 }) =>
            !CurrenRoles.some(({ url: url2 }) => url1 === url2))
        if (results.length == 0) {
            return {
                EM: " nothing to Create or role already exist",
                EC: "0",
                DT: [],
            }
        } else {
            await db.Role.bulkCreate(results)
            return {
                EM: `Create success ${results.length} roles `,
                EC: "1",
                DT: [],
            }
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



const getAllRole = async () => {
    try {
        let data = await db.Role.findAll({
            attributes: ["url", "description"],
            raw: true

        })
        console.log(data)
        return {
            EM: " get Role ok",
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


const getAllRoleWithPaginate = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Role.findAndCountAll(

            {
                // attributes: ["id", "url", "description"],
                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,

            }
        )
        let totalPage = Math.ceil(count / limit)
        let data = {
            totalUser: count,
            totalPage: totalPage,
            dataUser: rows
        }



        return {
            EM: " ok",
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
const removeRole = async (id) => {
    try {
        let data = await db.Role.findOne({
            where: { id: id }
        })
        if (data) {
            await data.destroy()
            return {
                EM: "Delete Role success",
                EC: 0,
                DT: []

            }
        } else {
            return {
                EM: "Can not delete Role",
                EC: 2,
                DT: []

            }
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
module.exports = {
    creatNewGroup, getAllRole, getAllRoleWithPaginate, removeRole
}