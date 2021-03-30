import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const Row = styled.div`
    display: flex;
    
    & + & {
      margin-top: 50px;
    }
`;

const Column = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0 10px;
`;

export {
    Container,
    Column,
    Row
}
