const bcrypt = require('bcrypt');

const saltRounds = 10


module.exports = {
    register: (req, res, next) => {
        const db = req.app.get('db');
        let {user_given_name, user_surname, user_email, user_password, img_url} = req.body;
        db.FIND_MATCHING_EMAIL([user_email])
            .then(rez => {
                if (rez.length > 0){
                    throw "Username already taken."
                }
                return bcrypt.hash(user_password, saltRounds)
            })
            .then(hash => {
                return db.book_user_table.insert({user_given_name, user_surname, user_email, user_password:hash, img_url})
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
    },
    login: (req, res, next) => {
        const db = req.app.get('db');
        const {user_email, user_password} = req.body;
        let tempUser = {}
        db.FIND_MATCHING_EMAIL([user_email])
        .then(rez => {
            console.log(rez)
            if(rez.length < 1){
                throw ("Email is not on file.")
            }
            tempUser = rez[0];

            return bcrypt.compare(user_password, tempUser.user_password )
            .then(isMatch => {
                if(!isMatch){
                    throw ('Passwords do not match.')
                }

                delete tempUser.user_password;
                req.session.user = tempUser;
                res.send({success:true, tempUser})
            })
            .catch(err => {
                res.send({success: false, err})
            })
        })
        .catch((err) => {
            res.send({success:false, err}) 
            console.log('sad beans');
        })
    },

    getBooks: (req, res, next) => {
        // book table: book_master_list
        // 
    }
}