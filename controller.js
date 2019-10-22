const bcrypt = require('bcrypt');

const saltRounds = 10


module.exports = {
    register: (req, res, next) => {
        const db = req.app.get('db');
        let {user_name, user_password} = req.body;
        db.FIND_MATCHING_USERNAME([user_name])
            .then(rez => {
                if (rez.length > 0){
                    throw "Username already taken."
                }
                return bcrypt.hash(user_password, saltRounds)
            })
            .then(hash => {
                return db.book_user_table.insert({user_name, user_password:hash})
            })
            .then(user => {
                delete user[user_password];
                req.session.user = user;
                res.send({success: true, user}) 
            })
            .catch((err) => {
                res.send({success:false, err}) ;
            })
    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.send({success:true})
    }
}