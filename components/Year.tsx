import styled from 'styled-components';

export default function Year(props){
    return (
        // this will need to get sheet Title
        // OR have different calls onto different sheets, and then pass the objKey
        <CurrentYear>2020</CurrentYear>
    )
}

const CurrentYear = styled.h2`
    font-family: "Gilroy-bold";
    
    font-size: 12pt; 
`;