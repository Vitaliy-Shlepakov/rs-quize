import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    onClick: () => void;
    style?: object
}

const Button : React.FC<ButtonPropsType> = (props) => {
    return (
        <StyledButton
            {...props}
        >
            { props.children }
        </StyledButton>
    );
};

const StyledButton = styled.button`
    color: #222;
    font-size: 16px;
    font-weight: bold;
    background-color: #fff;
    border-radius: 60px;
    padding: 15px 30px;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.1);
`;

export {
    Button
};