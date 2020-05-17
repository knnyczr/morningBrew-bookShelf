import { Button } from 'react-bootstrap';
// import styled from 'styled-components';

import './scss/book.scss'

type Props = {
    bookData: string[]
}

export default function Book({ bookData }: Props):JSX.Element {
    console.log(bookData)
    return(
        <div className="collection">
            {
                bookData !== undefined &&
                bookData.map((book) => (
                    <div>
                        <img src={book[3]}/>
                        <h3>{book[0]}</h3>
                        <h4>{book[1]}</h4>
                        <Button className="btn-block">Learn More</Button>
                    </div>
                ))
            }
        </div>
    )
}

// const div = styled(Card)`
//     width: 18rem;
//     grid-template-columns: 1fr 1fr; 
// `;