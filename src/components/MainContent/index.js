import React from 'react';
import styled from 'styled-components'

import DesktopCard from './DesktopCard';
import TabletCard from './TabletCard';
import MobileCard from './MobileCard';
import { COLORS } from '../../utils/COLORS'

const MainContent = () => {
    return (
        <ContentBody>
            <ContentCall>
                <ContentCallHeader>Crie este site <S>responsivo</S> com <S>REACT</S> utilizando <S>styled-components</S></ContentCallHeader>
                <ContentCallText>
                    A fonte utilizada é a Open Sans de 300 a 800. <br/>Exemplo: "Open Sans", Helvetica, sans-serif, arial;
                    <br/>Já as cores são:<br/> <GreenDot></GreenDot>#007f56,<GreyDot></GreyDot>#868686,<ReddishDot></ReddishDot>#FE9481,<YellowDot></YellowDot>#FCDA92 e <PurpleDot></PurpleDot>#9C8CB9
                </ContentCallText>
            </ContentCall>
            <CardContainer>
                <DesktopCard />
                <TabletCard />
                <MobileCard />
            </CardContainer>
        </ContentBody>
    );
}

const ContentBody = styled.section`
`;

const ContentCall = styled.div`
    margin: 3rem auto;
    margin-bottom: 1rem;
    width: 90%;
    text-align: center;
`;

const ContentCallHeader = styled.h2`
    color: ${COLORS.green};    
    display: inline;
    font-size: 3.75rem;
    font-weight: 300;
    letter-spacing: -0.2rem;
    line-height: 4rem;
`;

const S = styled(ContentCallHeader)`
    font-weight: 800;
`;

const ContentCallText = styled.h3`
    color: ${COLORS.grey};
    font-size: 1.85rem;
    font-weight: 300;
    letter-spacing: -0.15rem;
    line-height: 2.5rem;
    margin: 3rem auto;
    margin-bottom: 0;
    width: 70%;
`;

const CardContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
`;

const GreenDot = styled.span`
    height: 20px;
    width: 20px;
    background-color: ${COLORS.green};
    border-radius: 50%;
    display: inline-block;
`;

const GreyDot = styled.span`
    height: 20px;
    width: 20px;
    background-color: ${COLORS.grey};
    border-radius: 50%;
    display: inline-block;
`;

const ReddishDot = styled.span`
    height: 20px;
    width: 20px;
    background-color: ${COLORS.reddish};
    border-radius: 50%;
    display: inline-block;
`;

const YellowDot = styled.span`
    height: 20px;
    width: 20px;
    background-color: ${COLORS.yellow};
    border-radius: 50%;
    display: inline-block;
`;

const PurpleDot = styled.span`
    height: 20px;
    width: 20px;
    background-color: ${COLORS.purple};
    border-radius: 50%;
    display: inline-block;
`;

export default MainContent;