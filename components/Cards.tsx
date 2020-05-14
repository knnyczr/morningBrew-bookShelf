import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

type Props = {
    bookData: string[]
}

export default function Cards({ bookData }: Props):JSX.Element {
    return(
        <BookCards border="light">
                <Image src={ bookData[3] } thumbnail/>
            <Card.Body>
                <Card.Title as="h3">{ bookData[0] }</Card.Title>
                <Card.Title>{ bookData[1] }</Card.Title>
                <Card.Text>{ bookData[2] }</Card.Text>
            </Card.Body>
        </BookCards>
    )
}

const BookCards = styled(Card)`
    width: 18rem;
    grid-template-columns: 1fr 1fr; 
`;