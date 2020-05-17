import styled from 'styled-components';
import './scss/year.scss'

//this is .year in scss
// const CurrentYear = styled.h2`
//     font-family: "Gilroy-bold";
//     font-size: 12pt; 
// `;

export default function Year(props){
    return (
        // this will need to get sheet Title
        // OR have different calls onto different sheets, 
            // then pass the objKey which will be that year
            // value of that key will be the sheet ID to be fed onto API
        <div className="year">2020</div>
    )
}