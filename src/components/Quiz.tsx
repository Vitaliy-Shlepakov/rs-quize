import React, { useContext } from 'react';
import {QuizeType, ResultType} from "../store/reducer";
import styled from "styled-components";
import QuizOption from "./QuizOption";
import { GlobalContext } from "../store/reducer";
import { setQuizResult } from '../store/action-creators';

type QuizeProps = {
    quiz: QuizeType,
    results: Array<ResultType>
};

const QuizStyled = styled.div`
  background: #fff;
  max-width: 500px;
  width: 100%;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(#222, .3);

  & + & {
    margin-top: 40px;
  }
`;

const Quiz: React.FC<QuizeProps> = ({quiz, results}) => {

    const {dispatch} = useContext(GlobalContext);

    const changeQuizOption = (id: string) => {
        dispatch(setQuizResult({
            question_id: quiz.id,
            answer_id: id
        }));
    };

    const renderQuizItems = () => {
        return quiz.answers.map(answer => (
            <QuizOption
                option={answer}
                key={answer.id}
                changeQuizOption={changeQuizOption}
                optionIsSelected={!!results.find(item => item.answer_id === answer.id)}
            />
        ))
    }

    return (
        <QuizStyled>
            <h3>{quiz.question}</h3>
            { renderQuizItems() }
        </QuizStyled>
    );
};

export default Quiz;