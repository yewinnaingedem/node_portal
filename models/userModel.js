const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Str0ng@Password!',
    database: 'node_course'
}).promise();

connection.on('connection', function (result) {
    console.log(`connected to the sql database ${result}`.bgBlack.black)
})

async function createUser({ id , name, email, password }) {
    try {
        const result = await connection.
            query(`INSERT INTO user (id , name , email , password) VALUES (? , ? , ? , ? )`,
                [id , name, email, password]);
        if(result) {
            return getUserByName({name}) ;
        }
        return false ;
    } catch (error) {
        console.log(error);
    }
}

async function getLoginUser(email , password ) {
    try {
        const [result] = await connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
        return result[0];
    } catch (error) {
        
    }
}

async function getUserByName({ name }) {
    try {
        const [result]= await connection.query(`SELECT * FROM user WHERE name = ? `, [name]);
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


module.exports = { createUser, getUserByName, updateUser , getLoginUser };