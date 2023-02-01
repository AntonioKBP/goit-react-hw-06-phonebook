import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;

  flex-direction: column;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #e1d8d8;
  border-radius: 6px;
  background-color: aliceblue;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
`;

export const FilterTitle = styled.p`
  margin-bottom: 3px;
`;

export const FilterInput = styled.input`
  border-radius: 14px;
  font-size: 14px;
  padding: 5px;
  border-color: #ededed;
`;
