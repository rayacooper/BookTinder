import React, {useState} from 'react';
import axios from 'axios';

const NewBook = () => {

    const [book_title, updateBookTitle] = useState('')

    const submitBook = () => {
        const newBook = {book_title}
        axios.post('/newbook', newBook)
    }

    return(
        <div>New Book
            <div>
                <lable>Book Title
                    <input type='text' onChange={e => updateBookTitle(e.target.value)}/>
                </lable>
                <lable>
                    <input type='text' />
                </lable>
            </div>
        </div>
    )
}

export default NewBook;