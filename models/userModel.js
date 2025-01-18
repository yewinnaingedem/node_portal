const { connect } = require('mongoose');
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_job_portal'
}).promise();

connection.on('connection', function (result) {
    console.log(`connected to the sql database ${result}`.bgBlack.black)
})

async function createUser({ name, email, password }) {
    try {
        const result = await connection.
            query(`INSERT INTO users (name , email , password) VALUES (? , ? , ? )`,
                [name, email, password]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function getUserByName({ name }) {
    try {
        const [result] = await connection.query(`SELECT * FROM users WHERE name = ? `, [name]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

async function updateUser({ name, email, password }, id) {
    try {
        if (!name || !email || !password || !id) {
            throw new Error('All fiedl and id are required');
            const query = `UPDATE users SET name=? , email = ? , password = ? WHERE id = ? `;
            const result = connection.query(query, [name, email, password, id]);
            if (result.affectedRows === 0) {
                throw new Error('User can not be found');
            }
            console.log(`updated with id USER ${id} udpated successfully`);
            return { success: true, message: "Updated successfully" };
        }
    } catch (error) {
        console.log(error);
    }
}
connection.on('error', (err) => {
    console.log(`connection problem with database ${err}`.bgRed.blue)
})


module.exports = { createUser, getUserByName, updateUser };