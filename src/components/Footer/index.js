import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.png';
import raia from '../../images/logo_drogaraia.png';
import drogasil from '../../images/logo_drogasil.png';
import farmasil from '../../images/logo_farmasil.png';
import univers from '../../images/logo_univers.png';
import fourbio from '../../images/logo_4bio.png';

const Footer = () => {
    return (
        <FooterContainer>
            <h6>
                RD 2017. Todos os direitos reservados      
            </h6>
            <div>
                <img src={raia} alt="logotipo raia" />
                <img src={drogasil} alt="logotipo drogasil" />
                <img src={farmasil} alt="logotipo farmasil" />
                <img src={univers} alt="logotipo univers" />
                <img src={fourbio} alt="logotipo fourbio" />
            </div>
            <div>
                <img src={logo} alt="logotipo" />
            </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Footer;