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
                <CardText>Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.</CardText>
                <CardButton>Leia mais...</CardButton>
            </CardBody>
        </Card>
    );
}

const Card = styled.article`
    width: 31%;
`;

const CardHeader = styled.div`
    background-color: ${COLORS.reddish};
    padding: 0.5rem 0 1.5rem 0;
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
    text-align: center;
    margin: 0;
`;

const CardBody = styled.div`
`;

const CardText = styled.p`
`;

const CardButton = styled.button`
`;

// const Card = styled.article`
// `;


export default DesktopCard;