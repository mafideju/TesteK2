import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo_small.png';
import raia from '../../images/logo_drogaraia.png';
import drogasil from '../../images/logo_drogasil.png';
import farmasil from '../../images/logo_farmasil.png';
import univers from '../../images/logo_univers.png';
import fourbio from '../../images/logo_4bio.png';

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>
                RD 2017. Todos os direitos reservados      
            </Copyright>
            <div>
                <Image src={raia} alt="logotipo raia" />
                <Image src={drogasil} alt="logotipo drogasil" />
                <Image src={farmasil} alt="logotipo farmasil" />
                <Image src={univers} alt="logotipo univers" />
                <Image src={fourbio} alt="logotipo fourbio" />
            </div>
            <div>
                <img src={logo} alt="logotipo" />
            </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 0.25rem 0;
    margin-top: 1rem;
`;

const Image = styled.img`
    margin-right: 0.75rem;
`;

const Copyright = styled.h4`
    font-weight: 400;
`;

export default Footer;