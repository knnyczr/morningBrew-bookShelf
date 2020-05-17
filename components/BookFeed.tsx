import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../components/GlobalState'
import styled from 'styled-components'

import Cards from './Cards'

let Wrapper = styled.div`
    /* display: grid; 
    grid-template-columns: 1fr 1fr;  */
`;

let GenreList = styled.ul`
    display: flex; 
    margin: 30px auto;
    justify-content: center;
    font-size: 12pt; 
`;

let Genre = styled.li`
    list-style-type: none;
    margin-right: 10%; 
    text-decoration: none; 
    color: red; 
`;


export default function BookFeed(): JSX.Element{
    const { sheetData } = useContext(GlobalContext)
    const [books, setBooks] = useState([ ])
    const [genres, setGenres] = useState([" "])
    const [booksByGenres, setBooksByGenres] = useState({})

    useEffect(():void => {
        // This is to slicing only the books out of the google API 
        const books = [...sheetData.values.slice(3, 17)]
        setBooks(books)

        console.log(books)
        // this is to set all the uniques genres to the state
        const onlyUniques = (value, indx, array) => array.indexOf(value) === indx; 
        const allOfTheUniqueGenres = sheetData.values.slice(3, 17).map(book => book[5]).filter(onlyUniques);
        setGenres([...allOfTheUniqueGenres])
        

        let allGenres = {}
        // this literates through all books to check: 
        // if allGenres has key of primary genre tag 
        // then push current book into the array of that genre
        // else create a new array for that genre and put that book in it
        books.forEach((book) => {
            allGenres[book[5]] ?
                allGenres[book[5]].push(book)
                : allGenres[book[5]] = new Array(book)
        })
        setBooksByGenres(allGenres)
        

    }, [])
    return(
        <Wrapper>
            <GenreList>
                {console.log(booksByGenres)}                
                {
                    // genres.map((genre, index) => {
                    //     <Genre key={index}>
                    //         {genre}
                    //     </Genre> 
                    // })
                    Object.keys(booksByGenres).length &&
                        genres.map((genre, index) => (
                            <li key={index}>{genre.toUpperCase()}({booksByGenres[genre].length})</li>
                        ))
                }
            </GenreList>
            {
                books.map((book, index) => (
                        <Cards key={index} bookData={book} />
                )) 
                // && console.log(booksByGenres)
            }
        </Wrapper>
    )
}