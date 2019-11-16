import React, {useState} from 'react';
import axios from 'axios';
import NavBar from './../NavBar/NavBar';

const NewBook = (props) => {

    const [book_title, updateBookTitle] = useState('');
    const [book_summary, updateBookSummary] = useState('');
    const [author_name, updateAuthorName] = useState('');
    const [image_url, updateImageUrl] = useState('');

    const submitBook = () => {
        if(!image_url){
            alert('Book covers are important! Please include one so your book looks good.')
        }else if(!author_name){
            alert('Please include an author name! Whether it\'s your name or a pen name, it will help readers find more of your work.')
        }else if(!book_title){
            alert('Please include a title for your book.')
        }else if(!book_summary){
            alert('Please include a summary for your book.')
        }else{
            const newBook = {book_title, book_summary, author_name, image_url}
            axios.post('/newbook', newBook)
            .then(getback =>{
                if(getback.data.success){
                    alert('Cool beans, it worked!')
                    props.history.push('/mybooks')
                }else{
                    alert(`Something went wrong: ${getback.data.err}`)
                }
            })
        }
        
    }

    return(
        <div>
            <NavBar />
            <div className="NewBookMain">
                <div className="BookMaker">
                    <label>Book Cover Image URL
                        <input type='text' onChange={e => updateImageUrl(e.target.value)}/>
                    </label>
                    <label>Author Name
                        <input type='text' onChange={e => updateAuthorName(e.target.value)}/>
                    </label>
                    <label>Book Title
                        <input type='text' onChange={e => updateBookTitle(e.target.value)}/>
                    </label>
                    <label>Book Summary:
                        <input type='text' onChange={e => updateBookSummary(e.target.value)}/>
                    </label>
                </div>

                <div className="BookMaker">
                    <img src={image_url} />
                    <h1>{book_title}</h1>
                    <h2>{author_name}</h2>
                    <p>{book_summary}</p>
                </div>

                <button onClick={() => submitBook()}>Submit Book</button>
                
            </div>
        </div>
    )
}

export default NewBook;