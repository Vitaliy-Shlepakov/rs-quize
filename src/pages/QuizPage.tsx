import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import { Container, Row } from "../common/Layout"
import {
    Title,
} from "../components";
import { getQuizes } from '../store/action-creators'
import {GlobalContext } from "../store/reducer";
import Loader from "../components/Loader";
import Quiz from "../components/Quiz";
import { QuizeType } from "../store/reducer";
import styled from "styled-components";
import { Button } from '../components/Button';
import { sendResults } from '../store/action-creators';

const QuizPageStyled = styled.div`
  padding: 80px 0;
`;
const QuizPageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizPage: React.FC = () => {

    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        dispatch(getQuizes())
    }, []);

    const renderQuizes = () => {
        const { quizes, results } = state;
        return quizes.map((quiz: QuizeType) => {
            return (
                <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    results={results}
                />
            )
        })
    };

    const handleClick = () => { dispatch(sendResults()) }

    return (
        <div>
            <Header/>
            <Container>
                <QuizPageStyled>
                    <Title>Выберите правильные варианты ответа</Title>
                    {
                        state.loading
                            ?  <Row justify="center">
                                    <Loader/>
                                </Row>
                            : <QuizPageBody >
                                { renderQuizes() }
                                <Button
                                    style={{marginTop: '50px'}}
                                    onClick={handleClick}
                                >
                                    Отправить результат
                                </Button>
                            </QuizPageBody>
                    }

                </QuizPageStyled>
            </Container>
        </div>
    );
};

export default QuizPage;