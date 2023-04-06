import styled from 'styled-components';
import { palette } from '^/theme';

const BottomButtonElement = styled.button`
  all: unset;
  background-color: gray;
  margin-top: 1vh;
  margin-left: 0.25vw;
  margin-right: 0.25vw;
  padding-left: 0.25vw;
  padding-right: 0.25vw;

  cursor: pointer;

  &:hover {
    background-color: ${palette.mainTheme};
  }
`;

export default BottomButtonElement;
