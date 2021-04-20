import styled from "styled-components";
import {strict} from "assert";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

type RowProps = {
    justify?: string;
    align?: string;
}


const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${props => props?.justify || 'flex-start'};
  align-items: ${props => props?.align || 'flex-start'};

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
