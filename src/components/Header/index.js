/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/COLORS';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt="logotipo" />     
            </div>
            <MainNav>
                <li><MainNavLink href="#">HTML5</MainNavLink></li>
                <li><MainNavLink href="#">CSS3</MainNavLink></li>
                <li><MainNavLink href="#">JavaScript</MainNavLink></li>
                <li><MainNavLink href="#">React</MainNavLink></li>
                <li><MainNavLink href="#">Redux</MainNavLink></li>
            </MainNav>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${COLORS.greyHelper};
`;

const MainNav = styled.ul`
    display: flex;
    list-style-type: none;
`;
    
const MainNavLink = styled.a`
    color: ${COLORS.green};
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
`;

export default Header;