import { useContext } from 'react';
import { GlobalContext } from '../components/GlobalState'
import styled from 'styled-components'

import Cards from './Cards'

export default function BookFeed(): JSX.Element{
    const { sheetData } = useContext(GlobalContext)

    const sliceBooks = () => {
        const books = [...sheetData.values.slice(3, 17)]
        console.log(books)
        return books
    }
    return(
        <Wrapper>
           {
               sliceBooks().map((book, index) => (
                    <Cards key={index} bookData={book} />
               ))
           }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
`;