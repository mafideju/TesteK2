import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../utils/COLORS';
import desktopIcon from '../../../images/desktop-responsive-design.png';


const DesktopCard = () => {
    return (
        <Card>
            <CardHeader>
                <ImageContainer>
                    <Image src={desktopIcon} alt="logotipo raia" />
                </ImageContainer>
                <CardTitle>Site Responsivo DESKTOP</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>Quando pressionado o botão <B>Leia mais...</B> o restante da informação deverá aparecer em scroll down.</CardText>
                <ButtonContainer>
                    <CardButton>Leia mais...</CardButton>
                </ButtonContainer>
            </CardBody>
        </Card>
    );
}

const Card = styled.article`
    width: 32%;
`;

const CardHeader = styled.div`
    background-color: ${COLORS.reddish};
    padding: 0.5rem 0 2.5rem 0;
`;

const ImageContainer = styled.figure`
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    width: 80%;
`;

const CardTitle = styled.h1`
    color: white;
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: -0.1rem;
    text-align: center;
    margin: 0;
    padding-top: 0.6rem;
`;

const CardBody = styled.div`
    background-color: white;
    margin-top: -1rem;
`;

const CardText = styled.p`
    padding: 0.5rem;
    font-weight: 300;
    text-align: justify;
`;

const B = styled.b`
    color: ${COLORS.grey}
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem 1rem 0;
`;

const CardButton = styled.button`
    background-color: ${COLORS.reddish};
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.25rem;
    letter-spacing: -0.1rem;
    padding: 0.35rem;
    outline: none;
`;

// const Card = styled.article`
// `;


export default DesktopCard;