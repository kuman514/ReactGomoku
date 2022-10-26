import styled from 'styled-components';

interface UIButtonProps {
  readonly color?: string;
  readonly disabled?: boolean;
  readonly width?: string;
}

const UIButton = styled.button`
  all: inset;
  margin: 0;
  box-sizing: border-box;
  background: transparent;
  width: ${({ width }: UIButtonProps) => width ?? 'auto'};
  height: calc(10px + 2vmin + 0.8vh);
  font-size: calc(8px + 2vmin);
  padding-left: 0.25vw;
  padding-right: 0.25vw;
  padding-top: 0.25vh;
  padding-bottom: 0.25vh;
  color: ${({ color }: UIButtonProps) => color ?? '#61dafb'};
  border: 1px solid ${({ color }: UIButtonProps) => color ?? '#61dafb'};
  border-radius: 10px;
  transition: all linear 120ms;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: ${({ color }: UIButtonProps) => color ?? '#61dafb'};
  }

  &:disabled {
    background-color: #000000;
    border: #282c34;
  }
`;

export default UIButton;