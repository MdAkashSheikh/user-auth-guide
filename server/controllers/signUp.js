const signUpSc = require("../models/signUpSc");

const postUser = async(req, res) => {
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

    try {
        await signUpSc.create({
            'userName': userName,
            'firstName': firstName,
            'secondName': secondName,
            'email': email,
            'phone': phone,
            'password': password,
        })
        res.send(req.body);

    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    postUser,
}