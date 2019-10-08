import React, {useState} from 'react';
import NavBar from './../NavBar/NavBar';
import './MyBooks.css'

function MyBooks(props){

    const [booksList, updateBooksList] = useState([])

    

    return(
        <div>
            <NavBar />
            <div>
                My Books List:
            </div>

        </div>
    )
}

export default MyBooks;