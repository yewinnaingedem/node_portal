const userModel = require("../models/userModel")
const colors = require('colors');

module.exports = {
    post: async (req, res) => {
        try {
            const [result] = await userModel.createUser(res.body);
            console.log(`Fetching data from user ${result}`.bgYellow.white);
        } catch (error) {
            console.log(error)
        }
    }
}