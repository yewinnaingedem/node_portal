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
    },
    login : async (req , res) => {
        try {
            const {email , password } = req.body ;
            res.status(200).json({
                email,
                password,
                success: true
            });
        } catch (error) {
            console.log(error);
        }
    }
}