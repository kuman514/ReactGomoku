import React from 'react';
import styled from 'styled-components';

const TitleElement = styled.div`
  margin-right: 1vw;
  & * {
    display: inline;
  }
`;

interface Props {
  readonly title: string
}

function Title({ title }: Props) {
  return (
    <TitleElement>
      { title }
    </TitleElement>
  );
}

export default Title;
