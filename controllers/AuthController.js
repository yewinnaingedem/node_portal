const userModel = require("../models/userModel")

module.exports = {
    post: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (!name) res.status(400).send('Name is required')
            if (!email) res.status(400).send('email is required')
            if (!password) res.status(400).send('password is required')
            const existingEmail = await userModel.findOne({ emai });
            if (existingEmail) res.status(400).send('Email have to be unique');
            const user = await userModel.create({ name, email, password });
            res.status(201).send({ user });
        } catch (error) {
            res.status(400).send({
                message: "Error in registor controller",
                success: false,
                error
            })
        }
    }
}