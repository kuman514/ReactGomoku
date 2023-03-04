import styled from 'styled-components';
import { palette } from '^/theme/Theme';

const BottomButtonElement = styled.button`
  all: unset;
  background-color: gray;
  margin-top: 1vh;
  margin-left: 0.25vw;
  margin-right: 0.25vw;
  padding-left: 0.25vw;
  padding-right: 0.25vw;

  &:hover {
    background-color: ${palette.mainTheme};
    cursor: pointer;
  }
`;

export default BottomButtonElement;
