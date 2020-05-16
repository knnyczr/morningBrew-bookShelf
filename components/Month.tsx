import { useContext } from 'react';
import { GlobalContext } from '../components/GlobalState'

import styled from 'styled-components'

export default function Month() {
    const { sheetData } = useContext(GlobalContext)

    const getMonth = () => {
        const excalmIndex = sheetData.range.indexOf("!"); 
        return sheetData.range.slice(0, excalmIndex)
    };

    return(
        // dropdown from bootstrap here
        // will need to split or splice by ! character to get the month out
        
        // will need to think of ways to split the monthy description for the enter key
        <>
            {
                sheetData.values[1] && (
                    <>
                        <Title>{getMonth()} ▾ </Title>
                        <p>{sheetData.values[1][0]}</p>
                        <p>{sheetData.values[1][1]}</p>
                    </>
                )
            }
            <div className="fb-share-button" 
                data-href="https://www.morningbrew.com/daily/stories/2020/04/22/brews-bookshelf-11-favorite-personal-development-reads?utm_source=morning_brew">
            </div>
        </>
    )
}
const Title = styled.h1`
    font-family: 'Literata'; 
`;