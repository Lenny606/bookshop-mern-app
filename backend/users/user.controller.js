import jwt from 'jsonwebtoken';
import User from "./user.model.js";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
export const Admin = async (req, res) => {
    const {name: username, password} = req.body
    try {
        const admin = await User.findOne({username})
        //     check if admin exists
        if (!admin) {
            res.status(404).send({message: "Admin not found"})
        }
        //     check password
        if (password !== admin.password) {
            res.status(401).send({message: "Invalid password"})
        }
        const token = jwt.sign({
                id: admin._id,
                username: admin.name,
                role: admin.role
            },
            {
                JWT_SECRET_KEY
            }, {expiresIn: "1h"})

        return res.status(200).send({
            message: "Auth success",
            token: token,
            success: true,
            user: {
                username: admin.name,
                role: admin.role
            }
        })


    } catch (err) {
        console.error(err)
        res.status(401).send({message: "Invalid credentials"})
    }
}
