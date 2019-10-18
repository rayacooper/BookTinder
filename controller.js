const bcrypt = require('bcrypt');
const session = require('express-session')
const saltRounds = 10

module.exports = {
    register: (req, res) => {
        const db = req.app.get('db');
        let {user_name, user_password} = req.body;
        console.log(user_name, user_password)
        db.book_user_table.findOne({user_name})
            .then(rez => {
                console.log(rez)
                if (rez){
                    throw "Username already taken."
                }
                return bcrypt.hash(user_password, saltRounds)
            })
            .then(hash => {
                return db.book_user_table.insert({user_name, user_password:hash})
            })
            .then(user => {
                console.log(user)
                delete user.user_password;
                req.session.user = user;
                res.send({success: true, user: req.session.user}) 
            })
            .catch((err) => {
                res.send({success:false, err}) ;
            })
    }
}