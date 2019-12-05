const bcrypt = require('bcrypt');

const saltRounds = 10

// CREATE TABLE book_master_table (
//     book_id serial,
//     creator_id INT,
//     book_title varchar(250),
//     book_summary varchar,
//     author_name varchar,
//     image_url varchar,
//     PRIMARY KEY (book_id),
//     FOREIGN KEY(creator_id) REFERENCES book_user_table(user_id)
// );


module.exports = {

    register: (req, res, next) => {
        const db = req.app.get('db');
        let {user_given_name, user_surname, user_email, user_password, img_url} = req.body;
        let starting_num = 0;
        db.FIND_MATCHING_EMAIL([user_email])
            .then(rez => {
                if (rez.length > 0){
                    throw "Username already taken."
                }
                return bcrypt.hash(user_password, saltRounds)
            })
            .then(hash => {
                return db.book_user_table.insert({user_given_name, user_surname, user_email, user_password:hash, img_url, starting_num})
            })
            .then(user => {
                console.log(user)
                delete user.user_password;
                req.session.user = user;
                res.send({success: true, user}) 
            })
            .catch((err) => {
                res.send({success:false, err}) ;
            })
    },

    login: (req, res, next) => {
        const db = req.app.get('db');
        const {user_email, user_password} = req.body;
        let tempUser = {}
        db.FIND_MATCHING_EMAIL([user_email])
        .then(rez => {
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

    logout: (req, res, next) => {
        req.session.destroy();
        res.send({success:true})
    },

    getBooks: (req, res, next) => {
        // book table: book_master_list
        // 
    },

    makeBook: (req, res, next) => {
        const {book_title, book_summary, author_name, image_url} = req.body;
        const creator_id = req.session.user.user_id;
        const db = req.app.get('db');
        db.book_master_table.insert({creator_id, book_title, book_summary, author_name, image_url})
        .then(book => {
            res.send({success: true, book})
        })
        .catch(err => {
            res.send({success: false, err})
        })
    },

    getNextBooks: (req, res, next) => {
        const db = req.app.get('db');
        const importantNumber = session.user.starting_num
        const newNumber = importantNumber + 50;
        db.GET_BOOKS_TO_LOOK_AT([importantNumber, newNumber])
        .then(books => {
            res.send({success: true, books})
            db.UPDATE_USER_BOOK_NUMBER_PLACE([newNumber])
            // .then(res => {
            //     console.log(res)
            // })
        })
        .catch(err => {
            res.send({success: false, err})
        })
    },
    
    getPhoto: (req, res, next) => {
        if (req.session.user){
            console.log("There's a USER")
            res.send({success: true, photo: req.session.user.img_url})
        }else{
            console.log("NAW FREN")
            res.send({success: false})
        }
        
    }
    


}