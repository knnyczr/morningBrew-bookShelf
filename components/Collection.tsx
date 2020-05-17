// import styled from 'styled-components';
import Book from './Book';

import './scss/book.scss'

type Props = {
    bookData: string[], 
}

export default function Collection({ bookData, }: Props):JSX.Element {

    console.log(bookData)
    return(
        <div className="collection">
            {
                bookData !== undefined &&
                bookData.map((book, index) => (
                    <Book book={book} index={index}/>
                ))
            }
        </div>
    )
}

// const div = styled(Card)`
//     width: 18rem;
//     grid-template-columns: 1fr 1fr; 
// `;