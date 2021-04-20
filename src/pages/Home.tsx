import React, {useState, useEffect, useContext} from 'react';
import {Column, Container, Row} from '../common/Layout';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {ReactComponent as FrontIcon} from './icons/frontend.svg';
import {ReactComponent as BackendIcon} from './icons/backend.svg';
import {ReactComponent as FullStackIcon} from './icons/fullstack.svg';
import {ReactComponent as JuniorIcon} from './icons/junior.svg';
import {ReactComponent as MiddleIcon} from './icons/middle.svg';
import {ReactComponent as SeniorIcon} from './icons/senior.svg';
import {ReactComponent as ReactIcon} from './icons/react.svg';
import {ReactComponent as Vue} from './icons/vue.svg';
import {ReactComponent as Angular} from './icons/angular.svg';
import {ReactComponent as Nodejs} from './icons/nodejs.svg';
import {ReactComponent as Ruby} from './icons/ruby.svg';
import {ReactComponent as Php} from './icons/php.svg';
import arrow from './icons/right-drawn-arrow.svg';
import {GlobalContext} from '../reducer/index'
import {
  Title,
  Box,
  BackNav
} from "../components";
import { setProfession, setQualification, setTools } from '../reducer/action-creators'

type HomeProps = {
  className?: string
}


const Home: React.FC<HomeProps> = ({className}) => {

  const {
    state: {
      profession,
      qualification,
      tools
    },
    dispatch
  } = useContext(GlobalContext);


  const resetFilter = () => {
    dispatch(setProfession(null));
    dispatch(setQualification(null));
  };

  useEffect(() => {
    dispatch(setTools(null));
  }, [qualification])

  return (
    <div className={`${className} show--${profession} home`}>
      <StyledLinkWrap>
        <HomeBackNav
          className={'home__back-nav'}
          onClick={resetFilter}
        />
        <Container>
          <HomeRow>


            {/*FRONEND*/}
            <Column className="column">
              <Box
                onClick={() => dispatch(setProfession('frontend'))}
              >
                <FrontIcon/>
                <Title>FrontEnd</Title>

                <Row className="home__row home__row--frontend">
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('junior'))}
                      className={`${qualification === 'junior' && 'active'}`}
                    >
                      <JuniorIcon/>
                      <Title>Junior</Title>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('middle'))}
                      className={`${qualification === 'middle' && 'active'}`}
                    >
                      <MiddleIcon/>
                      <Title>Middle</Title>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('senior'))}
                      className={`${qualification === 'senior' && 'active'}`}
                    >
                      <SeniorIcon/>
                      <Title>Senior</Title>
                    </HomeItem>
                  </Column>
                </Row>

                {profession === 'frontend' && qualification && ['middle', 'senior'].includes(qualification) &&
                <Row className="home__row home__row--frontend">
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setTools('react'))}
                      className={`${tools === 'react' && 'active'}`}
                    >
                      <ReactIcon/>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setTools('vue'))}
                      className={`${tools === 'vue' && 'active'}`}
                    >
                      <Vue/>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setTools('angular'))}
                      className={`${tools === 'angular' && 'active'}`}
                    >
                      <Angular className="home__logo-angular"/>
                    </HomeItem>
                  </Column>
                </Row>
                }

                {
                  (qualification === 'junior' ||
                    (qualification && ['middle', 'senior'].includes(qualification) && tools)) &&
                  <StyledLink to="/testing">Перейти к тестированию</StyledLink>
                }

              </Box>
            </Column>


            {/*BACKEND*/}
            <Column className="column">
              <Box
                onClick={() => dispatch(setProfession('backend'))}
              >
                <BackendIcon/>
                <Title>BackEnd</Title>

                <Row className="home__row home__row--backend">
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('junior'))}
                      className={`${qualification === 'junior' && 'active'}`}
                    >
                      <JuniorIcon/>
                      <Title>Junior</Title>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('middle'))}
                      className={`${qualification === 'middle' && 'active'}`}
                    >
                      <MiddleIcon/>
                      <Title>Middle</Title>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('senior'))}
                      className={`${qualification === 'senior' && 'active'}`}
                    >
                      <SeniorIcon/>
                      <Title>Senior</Title>
                    </HomeItem>
                  </Column>
                </Row>

                {profession === 'backend' &&
                <Row className="home__row home__row--backend">
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setTools('ruby'))}
                      className={`${tools === 'ruby' && 'active'}`}
                    >
                      <Ruby/>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setTools('php'))}
                      className={`${tools === 'php' && 'active'}`}
                    >
                      <Php/>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setTools('node'))}
                      className={`${tools === 'node' && 'active'}`}
                    >
                      <Nodejs/>
                    </HomeItem>
                  </Column>
                </Row>
                }

                {
                  qualification && tools &&
                  <StyledLink to="/testing">Перейти к тестированию</StyledLink>
                }

              </Box>
            </Column>


            {/*MARKUP*/}
            <Column className="column">
              <Box
                onClick={() => dispatch(setProfession('markup'))}
              >
                <FullStackIcon/>
                <Title>MarkUp</Title>

                <Row className="home__row home__row--markup">
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('junior'))}
                      className={`${qualification === 'junior' && 'active'}`}
                    >
                      <JuniorIcon/>
                      <Title>Junior</Title>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('middle'))}
                      className={`${qualification === 'middle' && 'active'}`}
                    >
                      <MiddleIcon/>
                      <Title>Middle</Title>
                    </HomeItem>
                  </Column>
                  <Column>
                    <HomeItem
                      onClick={() => dispatch(setQualification('senior'))}
                      className={`${qualification === 'senior' && 'active'}`}
                    >
                      <SeniorIcon/>
                      <Title>Senior</Title>
                    </HomeItem>
                  </Column>
                </Row>
                {
                  qualification &&
                  <StyledLink to="/testing">Перейти к тестированию</StyledLink>
                }
              </Box>
            </Column>
          </HomeRow>
        </Container>
      </StyledLinkWrap>
    </div>
  );
};

Home.defaultProps = {
  className: 'home'
};

const StyledHome = styled(Home)`
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    
    .column{
      width: 33.3%;
      transition: all .5s;
    }
    
    .home__back-nav{
      opacity: 0;
      pointer-events: none;
    };
    
    .home__row{
      display: none;
    }

    
     &.show--frontend{
     
      .home__row--frontend{
        display: flex;
      }
     
      .home__back-nav{
        opacity: 1;
        pointer-events: initial;
      }
      .column:nth-child(1){
        width: 100%
      }
      .column:nth-child(2),
      .column:nth-child(3){
        transform: translateX(2000px)
      }
    }

    
     &.show--backend{
     
       .home__row--backend{
          display: flex;
        }
      .home__back-nav{
        opacity: 1;
        pointer-events: initial;
      }
      .column:nth-child(2){
        width: 100%;
        transform: translateX(-33.3%)
      }
      .column:nth-child(1){
        transform: translateX(-2000px)
      }
      .column:nth-child(3){
        transform: translateX(2000px)
      }
    }

    
     &.show--markup{
     
      .home__row--markup{
        display: flex;
      }
      .home__back-nav{
        opacity: 1;
        pointer-events: initial;
      }
      .column:nth-child(3){
        width: 100%;
        transform: translateX(-66.6%)
      }
      .column:nth-child(1){
        transform: translateX(-2000px)
      }
      .column:nth-child(2){
        transform: translateX(-2000px)
      }
    }
`;


const StyledLinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;


const HomeRow = styled(Row)`
  position: relative;
  padding-top: 80px;
`;

const HomeBackNav = styled(BackNav)`
  position: fixed;
  left: calc(50% - 600px);
  top: 5%;
  transition: opacity .5s;
`;

const HomeItem = styled.div`
  position: relative;
  padding: 20px 10px;
  
  &.active {
    &::after{
      content: '';
      display: block;
      height: 80px;
      width: 60px;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid #84737b;
  color: #84737b;
  text-decoration: none;
  margin-top: 40px;
  transition: all .2s;
  
  &:hover{
    background-color: #84737b;
    color: #fff;
  }
`


export default StyledHome;
