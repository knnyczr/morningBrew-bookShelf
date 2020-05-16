import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { useContext } from 'react';
import { GlobalContext } from '../components/GlobalState'

const HeroImage = () => {
    const { sheetData } = useContext(GlobalContext)
    return (
        <Hero>
            {  
                sheetData.values[1] && (
                    <>
                        <Title>bookShelf</Title>
                        <Image src={sheetData.values[1][6]} />
                    </>
                )
            }
        </Hero>
    )
}

const Image = styled.img`
    width: 100%; 
    height: 40vh;
    object-fit: cover;
`
const Hero = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    margin-bottom: 10%; 
`;

const Title = styled.h1`
    color: white; 
    font-size: 3em; 
    position: absolute;
    font-family: "Literata";
    margin: 10% 0 0 10%;
    /* top: 50%;  */
`;

export default HeroImage;