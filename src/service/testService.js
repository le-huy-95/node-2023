// get the client
import bcrypt from "bcryptjs"
import mysql from "mysql2/promise"
const bluebird = require('bluebird');
// Store hash in your password DB.
// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'app web'
// });

var salt = bcrypt.genSaltSync(10);


const hashPassWord = (passwordInput) => {
    return bcrypt.hashSync(passwordInput, salt);
}

const createNewUser = async (email, password, Username) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    let hashPass = hashPassWord(password)
    try {
        const [rows, fields] = await connection.execute('INSERT INTO users(email, password, Username) VALUES(?, ?, ?) ', [email, hashPass, Username]);

    } catch (e) {
        console.log(e)
    }

    // connection.query(
    //     'INSERT INTO users(email, password, Username) VALUES(?, ?, ?) ', [email, hashPass, Username],
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //         }

    //     }
    // );
}


const getAllUser = async () => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });

    let users = []

    // return connection.query(
    //     'select * from users ',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //             return users
    //         }
    //         users = results
    //         console.log("check results", results)
    //         return users


    //     }
    // );
    try {
        const [rows, fields] = await connection.execute('select * from users ');
        return rows
    } catch (error) {
        console.log(error)
    }

}

const deletemem = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id= ? ', [id]);
        return rows

    } catch (e) {
        console.log(e)
    }
}

const getUserByID = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    try {
        const [rows, fields] = await connection.execute('select * from users WHERE id= ? ', [id]);
        return rows

    } catch (e) {
        console.log(e)
    }
}
const UpdateUserInfo = async (email, Username, id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    try {

        const [rows, fields] = await connection.execute('update users set email=?,Username=? WHERE id= ? ', [email, Username, id]);
        return rows

    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    hashPassWord, createNewUser, getAllUser, deletemem, getUserByID, UpdateUserInfo
}