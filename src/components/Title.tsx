import React from 'react';
import styled from "styled-components";

type TitleProps = {
    size?: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({
         size,
         children,
         className
     }) => {
    return (
        <h2 className={className}>
            {children}
        </h2>
    );
};

const StyledTitle = styled(Title)`
  font-size: ${({size}) => {
    switch(size){
      case 'small':
        return '16px';
      case 'middle':
        return '22px';
      case 'large':
        return '36px';
    }
  }};
  text-align: center;
`;

Title.defaultProps = {
    size: 'middle',
    className: 'title'
}


export {
  StyledTitle as Title
};
