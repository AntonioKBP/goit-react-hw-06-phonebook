import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: 5px;
  border: 1px solid #dbdbe9;
  border-radius: 4px;
  background-color: aliceblue;
  box-shadow: rgb(0 0 0 / 2%) 0px 1px 3px 0px,
    rgb(27 31 35 / 15%) 0px 0px 0px 1px;
`;
export const ListItem = styled.li`
  font-size: 10px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  width: 100%;
`;
export const ListItemBtn = styled.button`
  /* border-radius: 50%;
  cursor: pointer;
  color: red;

  border-color: azure; */

  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 50%;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 16px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;

  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 16px;
  width: 23px;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
