// import styled from 'styled-components';
import Book from './Book';

import './scss/book.scss'

type Props = {
    bookData: string[], 
}

export default function Collection({ bookData }: Props):JSX.Element {
    return(
        <div className="collection">
            {
                bookData !== undefined &&
                bookData.map((book, index) => (
                    <Book key={'collection' + book + index } book={book} index={index}/>
                ))
            }
        </div>
    )
}

// const div = styled(Card)`
//     width: 18rem;
//     grid-template-columns: 1fr 1fr; 
// `;