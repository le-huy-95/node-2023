import db from "../models/index"



const getAllProject = async () => {
    try {
        let data = await db.Projects.findAll({
            // // attributes: ["url", "description", "id"],
            include: [{
                model: db.Shipping_Unit, attributes: ["id", "NameUnit"],
                include: {
                    model: db.Shipping_Cost
                },
            },
            {
                model: db.Sales_Channel, attributes: ["name", "id"],

            }, {
                model: db.Customer

            },
            {
                model: db.Status_Delivery,




            },
            {
                model: db.Status_Payment,

            },
            {
                model: db.Image,
                through: { attributes: [] }


            },
            ]

        })
        return {
            EM: " get Project ok",
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


const getAllProjectWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Projects.findAndCountAll(

            {
                include:
                    [{
                        model: db.Shipping_Unit, attributes: ["id", "NameUnit"],
                        include: {
                            model: db.Shipping_Cost
                        },
                    },

                    {
                        model: db.Sales_Channel, attributes: ["name", "id"],

                    }, {
                        model: db.Customer,

                    },

                    {
                        model: db.Status_Delivery,




                    },
                    {
                        model: db.Status_Payment,

                    },
                    {
                        model: db.Image,

                    },
                    ],
                order: [['id', 'DESC']],
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
const getProjects = async (id) => {
    try {
        let data = await db.Projects.findAll({
            where: { id: id },

            include: [
                {
                    model: db.Shipping_Unit, attributes: ["id", "NameUnit"],
                    include: {
                        model: db.Shipping_Cost
                    },
                },
                {
                    model: db.Sales_Channel,
                    attributes: ["name", "id"],

                }, {
                    model: db.Customer

                },
                {
                    model: db.Status_Delivery,




                },
                {
                    model: db.Status_Payment,

                },
                {
                    model: db.Status_Warehouse,

                },
                {
                    model: db.Status_Pickup,

                },
                {
                    model: db.Chat,

                },
                {
                    model: db.Status_Received_money,

                },
                {
                    model: db.Image,
                    through: { attributes: [] }


                },
            ]
        })
        if (data) {
            return {
                EM: "get Project success",
                EC: "0",
                DT: data

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
module.exports = {
    getAllProject, getAllProjectWithPagination, getProjects
}