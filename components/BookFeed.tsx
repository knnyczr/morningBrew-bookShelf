import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../components/GlobalState'
import styled from 'styled-components'

import Cards from './Cards'

const Wrapper = styled.div`
    /* display: grid; 
    grid-template-columns: 1fr 1fr;  */
`;

const GenreList = styled.ul`
    display: flex; 
    margin: 30px auto;
    justify-content: center;
    font-size: 12pt; 
`;

const Genre = styled.li`
    list-style-type: none;
    margin-right: 10%; 
    text-decoration: none; 
    color: gray; 
`;


export default function BookFeed(): JSX.Element{
    const { sheetData } = useContext(GlobalContext)
    const [books, setBooks] = useState([ ])
    const [genres, setGenres] = useState([" "])
    const [countGenres, setCountGenres] = useState([ ])

    useEffect(():void => {
        // This is to slicing only the books out of the google API 
        const books = [...sheetData.values.slice(3, 17)]
        const allGenres = []
        
        // this is to set all the uniques genres to the state
        // const onlyUniques = (value, indx, array) => array.indexOf(value) === indx; 
        // const allOfTheUniqueGenres = sheetData.values.slice(3, 17).map(book => book[5]).filter(onlyUniques);

        // this literates through all books to check: 
            // if allGenres has key of primary genre tag 
                // then push current book into the array of that genre
                // else create a new array for that genre and put that book in it
        books.forEach((currentBook)=> {
            allGenres[currentBook[5]] ? 
                allGenres[currentBook[5]].push(currentBook)
                : allGenres[currentBook[5]] = new Array(currentBook)
            })
            
            // allOfTheUniqueGenres.forEach(genres => allGenres[genres] !== unde ? allGenres.genres+= 1 : )
            
            
            
            // console.log(books)
            // console.log(allOfTheUniqueGenres)
            // console.log(allGenres)
            
        setCountGenres(allGenres)
        setBooks(books)
        // setGenres([...allOfTheUniqueGenres])
    }, [])

    return(
        <Wrapper>
            <GenreList>
                <Genre>All {countGenres.length}</Genre>
                {
                    countGenres.length > 0 &&
                    countGenres.map((genre, index) => {
                        return <Genre key={index}>
                            genre
                        </Genre>
                    
                    })
                }
                {
                    console.log("hello",countGenres)
                }
            </GenreList>
            
           {
               books.map((book, index) => (
                    <Cards key={index} bookData={book} />
               )) 
               && console.log('wowser')
           }
        </Wrapper>
    )
}