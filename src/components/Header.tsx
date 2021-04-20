import React, {useContext} from 'react';
import styled from "styled-components";
import {GlobalContext} from "../reducer/reducer";
import {Container, Row} from "../common/Layout";
import Logo from './icons/logo.png';

type HeaderProps = {
    title?: string;
};

const HeaderStyled = styled.header`
  padding: 20px 0;
  width: 100%;
  background-color: #e1e1e1;
`;

const HeaderLogo = styled.a`
  display: inline-block;
  max-width: 200px;
`;

const HeaderCategory = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`

const Header: React.FC<HeaderProps> = () => {
    const {state : { profession, tools }} = useContext(GlobalContext)
    return (
        <HeaderStyled>
            <Container>
                <Row justify="space-between" align="center">
                    <HeaderLogo href="/">
                        <img src={Logo} alt=""/>
                    </HeaderLogo>
                    <HeaderCategory>
                        { profession } { tools && `- ${tools}` }
                    </HeaderCategory>
                </Row>

            </Container>
        </HeaderStyled>
    );
};

export default Header;