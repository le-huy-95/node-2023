import db from "../models/index"


const getGroupWithRole = async (user) => {
    // check quyen han nguoi dung co the vaof duoc cac duong link nao(role)
    let roles = await db.Group.findOne({
        where: { id: user.groupId },
        attributes: ["name", "description", "id"],

        include: [{
            model: db.Role,
            attributes: ["url", "description", "id"],
            through: { attributes: [] }
        }],

    })
    return roles ? roles : {};

}


module.exports = {
    getGroupWithRole
}