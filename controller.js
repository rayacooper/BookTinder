const bcrypt = require('bcrypt');
const saltRounds = 10

module.exports = {
    register: (req, res, next) => {
        const {user_name, user_password} = req.body;
    const db = req.app.get('db');
    db.book_user_table.findOne({user_name})
    .then(user => {
        if(user){
            
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