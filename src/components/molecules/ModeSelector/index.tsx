import { AppMode } from 'types';

interface ModeSelectorProps {
  readonly id: string;
  readonly value: AppMode;
  readonly children?: string | JSX.Element;
  readonly defaultChecked?: boolean;
}

function ModeSelector(props: ModeSelectorProps) {
  return (
    <>
      <input
        type="radio"
        id={props.id}
        name="mode"
        value={props.value}
        defaultChecked={props.defaultChecked}
      />
      <label>
        { props.children }
      </label>
    </>
  );
}

export default ModeSelector;
