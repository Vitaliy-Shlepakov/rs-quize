import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import { Container, Row } from "../common/Layout"
import {
    Title,
} from "../components";
import { getQuizes } from '../store/action-creators'
import {GlobalContext, ResultType} from "../store/reducer";
import Loader from "../components/Loader";
import Quiz from "../components/Quiz";
import { QuizeType } from "../store/reducer";

const QuizPage: React.FC = () => {

    const {state, dispatch} = useContext(GlobalContext);
    useEffect(() => {
        dispatch(getQuizes())
    }, []);

    const renderQuizes = () => {
        const { quizes, results } = state;
        return quizes.map((quiz: QuizeType, result: ResultType) => {
            return (
                <Row justify="center" key={quiz.id}>
                    <Quiz
                        quiz={quiz}
                        results={results}
                    />
                </Row>
            )
        })
    }

    return (
        <div>
            <Header/>
            <Container>
                <Title>Выберите правильные варианты ответа</Title>
                {
                    state.loading
                    ?  <Row justify="center">
                            <Loader/>
                        </Row>
                    : renderQuizes()
                }

            </Container>
        </div>
    );
};

export default QuizPage;