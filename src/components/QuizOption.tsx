import React, {useCallback} from 'react';
import { AnswerType } from '../store/reducer';
import styled from 'styled-components';
import classNames from 'classnames';

type QuizOptionProps = {
    option: AnswerType;
    changeQuizOption: (id: string) => void;
    optionIsSelected: boolean;
};

const QuizOptionStyled = styled.a`
  display: block;
  padding: 5px 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  text-decoration: none;
  color: #222;
  transition: border-color .3s;
  
  & + & {
    margin-top: 10px;
  }
  
  &:hover {
    border-color: #aaa;
  }
  
  &.active {
    border-color: #c4ffc4;
    background-color: #c4ffc4;
  }
`

const QuizOption:React.FC<QuizOptionProps> = ({
    option: {text, id},
    changeQuizOption,
    optionIsSelected
    }) => {

    const handleClick = useCallback((e) => {
        e.preventDefault();
        changeQuizOption(id)
    }, [])

    return (
        <QuizOptionStyled
            href={'/'}
            onClick={handleClick}
            className={classNames({
                'active': optionIsSelected
            })}
        >
            { text }
        </QuizOptionStyled>
    );
};

export default QuizOption;