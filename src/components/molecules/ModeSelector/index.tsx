import { AppMode } from 'types';

interface ModeSelectorProps {
  id: string;
  value: AppMode;
  children?: string | JSX.Element;
  defaultChecked?: boolean;
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
