import React from 'react';

interface TitleProps {
  title: String
}

function Title(props: TitleProps) {
  return (
    <div className="Title">
      { props.title }
    </div>
  );
}

export default Title;
