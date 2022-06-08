import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ModeSelector from 'components/molecules/ModeSelector';

const ModeChangerElement = styled.div`
  & * {
    display: inline;
  }
`;

function ModeChanger() {
  const dispatch = useDispatch();

  return (
    <ModeChangerElement onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'MODECHANGE',
        payload: event.target.value
      });
    }}>
      <ModeSelector
        id='game'
        value='GAME'
        defaultChecked
      >
        Game
      </ModeSelector>
      <ModeSelector
        id='replay'
        value='REPLAY'
      >
        Replay
      </ModeSelector>
    </ModeChangerElement>
  );
}

export default ModeChanger;
