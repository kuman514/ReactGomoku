import styled from 'styled-components';

interface UIButtonProps {
  color?: string;
  disabled?: boolean;
  width?: string;
}

const UIButton = styled.button`
  all: inset;
  margin: 0;
  box-sizing: border-box;
  background: transparent;
  width: ${(props: UIButtonProps) => props.width ?? 'auto'};
  height: calc(10px + 2vmin + 0.8vh);
  font-size: calc(8px + 2vmin);
  padding-left: 0.25vw;
  padding-right: 0.25vw;
  padding-top: 0.25vh;
  padding-bottom: 0.25vh;
  color: ${(props: UIButtonProps) => props.color ?? '#61dafb'};
  border: 1px solid ${(props: UIButtonProps) => props.color ?? '#61dafb'};
  border-radius: 10px;
  transition: all linear 120ms;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: ${(props: UIButtonProps) => props.color ?? '#61dafb'};
  }

  &:disabled {
    background-color: #000000;
    border: #282c34;
  }
`;

export default UIButton;
