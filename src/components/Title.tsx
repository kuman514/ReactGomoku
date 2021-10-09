import React from 'react';

interface TitleProps {
  title: string
}

function Title(props: TitleProps) {
  return (
    <div className="Title">
      { props.title }
    </div>
  );
}

export default Title;
