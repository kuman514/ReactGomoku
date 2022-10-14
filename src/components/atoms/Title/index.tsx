import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string
}

const TitleElement = styled.div`
  margin-right: 1vw;
  & * {
    display: inline;
  }
`;

function Title({ title }: TitleProps) {
  return (
    <TitleElement>
      { title }
    </TitleElement>
  );
}

export default Title;
