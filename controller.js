const bcrypt = require('bcrypt');
const session = require('express-session')
const saltRounds = 10

module.exports = {
    register: (req, res, next) => {
        const {user_name, user_password} = req.body;
        console.log(user_name)
        const db = req.app.get('db');
        return db.FIND_MATCHING_USERNAME({user_name})
            .then(user => {
                 if(user){
                     res.send({success:false})
                }else{
                    return bcrypt.hash(user_password, saltRounds)
                }
            })
        .then((hash) => {
        return db.REGISTER({user_name, user_password:hash})
    })
    .then((user) => {
        delete user.user_password;
        req.session.user = user;
        res.send({success:true, user:user})
    })
    .catch((err) => {
        res.send({success:false, err})
    })
    }
}