import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Column, Container, Row} from '../common/Layout';
import styled from "styled-components";
import {ReactComponent as FrontIcon} from './images/frontend.svg';
import {ReactComponent as BackendIcon} from './images/backend.svg';
import {ReactComponent as FullStackIcon} from './images/fullstack.svg';
import {Title, Box} from "../components";

const StyledLink = styled(Link)`
    display: block;
`;

const StyledLinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

type HomeProps = {
  className?: string
}


const Home: React.FC<HomeProps> = ({className}) => {

  const [activeBox, setActiveBox] = useState<null | number>(null);

  return (
    <div className={`${className} show--${activeBox} home`}>
      <Title size="large">
        Выберите категорию
      </Title>
      <StyledLinkWrap>
        <Container>
          <Row>
            <Column className="column">
              <Box
                onClick={() => setActiveBox(1)}
                active={activeBox === 1}
              >
                <FrontIcon/>
                <Title>FrontEnd</Title>
              </Box>
            </Column>

            <Column className="column">
              <Box
                onClick={() => setActiveBox(2)}
                active={activeBox === 2}
              >
                <BackendIcon/>
                <Title>BackEnd</Title>
              </Box>
            </Column>

            <Column className="column">
              <Box
                onClick={() => setActiveBox(3)}
                active={activeBox === 3}
              >
                <FullStackIcon/>
                <Title>MarkUp</Title>
              </Box>
            </Column>
          </Row>
        </Container>
      </StyledLinkWrap>
    </div>
  );
};

Home.defaultProps = {
  className: 'home'
}

const StyledHome = styled(Home)`
    padding: 100px 0;
    
    .column{
      transition: right 2s;
    }
    
     &.show--1{
      .column:nth-child(2),
      .column:nth-child(3){
        position: absolute;
        right: -1000px;
      }
    }
`;


export default StyledHome;
