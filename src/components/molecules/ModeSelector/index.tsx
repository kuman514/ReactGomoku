/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactNode } from 'react';

import { AppMode } from '^/types';

interface ModeSelectorProps {
  readonly id: string;
  readonly value: AppMode;
  readonly children?: ReactNode;
  readonly defaultChecked?: boolean;
}

function ModeSelector({
  id, value, children, defaultChecked,
}: ModeSelectorProps) {
  return (
    <>
      <input
        type="radio"
        id={id}
        name="mode"
        value={value}
        defaultChecked={defaultChecked}
      />
      <label>
        { children }
      </label>
    </>
  );
}

export default ModeSelector;
