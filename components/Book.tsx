import { useState } from 'react';
import Link from 'next/link'; 
import { Button } from 'react-bootstrap';  

type Props = {
    book: string, 
    index: number
}

export default function Book({book, index}: Props):JSX.Element {
    const [isActive, setisActive] = useState(false)

    const openDescription = ():boolean => {
        setisActive(!isActive);
        return isActive
    }
    return (
        <div key={'card' + index}>
            <img src={book[3]}/>
            <h3>{book[0]}</h3>
            <h4>{book[1]}</h4>
            {/* { */}
                {/* // isActive && */}
                <p className={'collapsible' + (isActive ? ' active': '')}>
                    {book[2]}
                </p>
            {/* } */}
            <Link href={book[4]} passHref={true}>
                <a target="_blank">
                    buy now →
                </a>
            </Link>
            <Button onClick={() => openDescription()} className="btn-block">
                {
                    isActive ? 'See Less' : 'Learn More'
                }
            </Button>
        </div>
    )
}