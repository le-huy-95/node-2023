import db from "../models/index"
import bcrypt from "bcryptjs"

var salt = bcrypt.genSaltSync(10);


const hashPassWord = (passwordInput) => {
    return bcrypt.hashSync(passwordInput, salt);
}


const checkEmail = async (userEmail) => {
    let ixExitEmail = await db.User.findOne({
        where: { email: userEmail }
    })
    if (ixExitEmail) {
        return true
    }
    return false
}
const checkPhone = async (userPhone) => {
    let ixExitPhone = await db.User.findOne({
        where: { phone: userPhone }
    })
    if (ixExitPhone) {
        return true
    }
    return false
}




const getAllUser = async () => {
    let data = {
        EM: "",
        EC: "",
        DT: "",
    }
    try {
        let users = await db.User.findAll({
            attributes: ["id", "username", "email", "phone", "sex"],
            include: {
                model: db.Group, attributes: ["name", "description"],
            },

        })
        if (users) {
            // let data = users.get({ plain: true })
            return {
                EM: " get data ok",
                EC: "0",
                DT: users,
            }

        }
        else {
            return {
                EM: " get data ok",
                EC: "0",
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


const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll(

            {
                attributes: ["id", "username", "email", "phone", "sex"],
                include: {
                    model: db.Group,
                    attributes: ["name", "description"],
                },

                offset: offset,
                limit: limit,
                // sort: ""

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

const createUser = async (data) => {
    console.log("data", data)
    try {
        let checkEmailExist = await checkEmail(data.email)
        if (checkEmailExist === true) {
            return {
                EM: "email already exists ",
                EC: "1",
            }
        }

        let checkPhoneExist = await checkPhone(data.phone)
        if (checkPhoneExist === true) {
            return {
                EM: "Phone already exists ",
                EC: "1",
            }
        }

        let hashPass = hashPassWord(data.password);
        await db.User.create({
            email: data.email,
            phone: data.phone,
            password: hashPass,
            username: data.username,
            address: data.address,
            sex: data.sex,
            group: data.group



        })
        return {
            EM: " Create ok",
            EC: "0",
            DT: [],
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


const updateUser = async (data) => {
    try {
        let user = await db.User.finfOne({
            where: { id: data.id }
        })
        if (user) {
            user.save({})
        } else {

        }
    } catch (error) {

    }
}
const deleteUser = async (id) => {
    try {
        let User = await db.User.findOne({
            where: { id: id }
        })
        if (User) {
            await User.destroy()
            return {
                EM: "Delete user success",
                EC: 0,
                DT: []

            }
        } else {
            return {
                EM: "Can delete user",
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
    getAllUser, createUser, updateUser, deleteUser, getUserWithPagination
}