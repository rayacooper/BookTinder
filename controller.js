const bcrypt = require('bcrypt');
const session = require('express-session')
const saltRounds = 10

module.exports = {
    register: (req, res, next) => {
        const db = req.app.get('db');
        let {user_name, user_password} = req.body;
        console.log(user_name, user_password)
        db.FIND_MATCHING_USERNAME([user_name])
            .then(rez => {
                console.log(rez.length)
                if (rez.length > 0){
                    throw "Username already taken."
                }
                return bcrypt.hash(user_password, saltRounds)
            })
            .then(hash => {
                return db.book_user_table.insert({user_name, user_password:hash})
            })
            .then(user => {
                console.log(user)
                // delete user.user_password;
                // req.session.user = user;
                res.send({success: true, user: user}) 
            })
            .catch((err) => {
                res.send({success:false, err}) ;
            })
    }
}