import React from 'react';
import styled from "styled-components";

const Button : React.FC = ({children}) => {
    return (
        <StyledButton>
            { children }
        </StyledButton>
    );
};

const StyledButton = styled.button`
    color: red;
    padding: 10px 20px;
`

export default Button;