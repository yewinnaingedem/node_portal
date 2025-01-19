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
            const result = await userModel.getLoginUser(email,  password );
            res.status(200).json({
                email,
                password,
                success: true ,
                result 
            });
        } catch (error) {
            console.log(error);
        }
    },
    register : async (req , res) => {
        try {
            const {name , email , password } = req.body ;
            const id = Math.floor(Math.random() * 100) + 1;
            const result = await userModel.createUser({ id , name , email , password }) ;
            res.status(201).json({result , success : true }) ;
        } catch ( error ) {
            console.log(error) ;
            res.status(500).json({ error , success : false }) ;
        }
    }
}