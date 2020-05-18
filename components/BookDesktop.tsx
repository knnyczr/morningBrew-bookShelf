import { useState, useEffect } from 'react'; 
import { Button } from 'react-bootstrap';

import './scss/bookdesktop.scss'

type Props = {
    booksByGenres?: any,
    genres: string[], 
    books: string[]
}

export default function BookDesktop({ booksByGenres, genres, books }: Props){
    const [currentDisplayGenre, setcurrentDisplayGenre] = useState([])
    const [menuIsActive, setmenuIsActive] = useState(false)

    useEffect(():void => {
        setcurrentDisplayGenre(books)
    }, [books])

    const createGenres = () => {
        return genres.map((catagory, index) => (
            booksByGenres[catagory] !== undefined &&
                <>
                    <a 
                        key={'menu' + index}
                        onClick={() => setNewDisplayOfBooks(booksByGenres[catagory])}>
                            {catagory.charAt(0).toUpperCase() + catagory.slice(1)} ({booksByGenres[catagory].length})
                    </a>
                </>
            ))
    }


    const setNewDisplayOfBooks = (setOfBooks) => {
        setcurrentDisplayGenre(setOfBooks)
    }
    // console.log(currentDisplayGenre)
    // console.log(booksByGenres)
    // console.log(genres)
    return(
        <div className="bookDesktop">
            <div className="menu">
                <a 
                    onClick={() => setNewDisplayOfBooks(books)}
                    // className={menuIsActive ? 'active' : ''}
                >
                    All ({books.length})
                </a>
                {createGenres()}
            </div>
            <div>
            {
                currentDisplayGenre.map((book, index) => (
                    <div className="cardDesktop" key={'cardDesktop' + index}>
                        <img src={book[3]}/>
                        <div>
                            <h3>{book[0]}</h3>
                            <h4>{book[1]}</h4>
                            <p>{book[2]}</p>
                            
                            <Button className="btn-block"><a href={book[4]} target="_blank">buy now →</a></Button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}