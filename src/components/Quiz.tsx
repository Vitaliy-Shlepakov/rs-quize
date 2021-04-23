import React, { useContext } from 'react';
import {AnswerType, QuizeType, ResultType} from "../store/reducer";
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
  flex-shrink: 0;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.1);

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

    const isSelected = (answer: AnswerType) => {
        const currentQuiz = results.find(item => item.question_id === quiz.id);
        if(currentQuiz) {
            return answer.id === currentQuiz.answer_id
        }
       return false
    };

    const renderQuizItems = () => {
        return quiz.answers.map(answer => (
            <QuizOption
                option={answer}
                key={answer.id}
                changeQuizOption={changeQuizOption}
                optionIsSelected={isSelected(answer)}
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