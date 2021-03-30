import React from 'react';
import {ReactComponent as BackIcon} from './icons/left-arrow.svg';
import styled from "styled-components";

type BackNavProps = {
  label?: string;
  className?: string;
  onClick: () => void;
}

const BackNav:React.FC<BackNavProps> = ({label, className, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
      <BackIcon/>
      <span>{ label }</span>
    </div>
  );
};

BackNav.defaultProps = {
  label: 'Назад',
  className: 'BackNav'
};

const StyledBacklNav = styled(BackNav)`
  
  display: flex;
  align-items: center;
  z-index: 1000;
  cursor: pointer;

  svg {
    width: 40px;
    margin: 0 10px;
  }
`;

export { StyledBacklNav as BackNav };
