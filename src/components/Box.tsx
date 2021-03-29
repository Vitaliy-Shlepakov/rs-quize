import React from 'react';
import styled from "styled-components";


type BoxProps = {
  className?: string;
  onClick: () => void;
  active: boolean;
};


const Box: React.FC<BoxProps> = ({
  className,
  children,
  active,
  onClick
}) => {
  return (
    <div className={`${className} ${active && 'active'}`} onClick={onClick}>
      { children }
    </div>
  );
};

const StyledBox = styled(Box)`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: -2px 0px 12px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: all .2s;
  
  &.active{
    border: 1px solid red;
  }
  
  &:hover {
    box-shadow: -2px 2px 29px 0px rgba(34, 60, 80, 0.2);
  }
`;


Box.defaultProps = {
  className: 'box',
  active: false,
};

export {
  StyledBox as Box
};
