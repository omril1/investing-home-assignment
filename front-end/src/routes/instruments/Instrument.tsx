import * as React from 'react';
import * as style from './style.scss';
import { InstrumentType } from './instrumentsAPI';

interface Props {
  instrument: InstrumentType;
  onDelete: (id: number) => void;
}

const Instrument: React.FC<Props> = props => {
  const content = JSON.stringify(props.instrument, null, 2).split('"');
  const onDeleteButtonClicked = () => props.onDelete(props.instrument.instrumentId);

  return (
    <li className={style.instrument} data-test={`instrument-${props.instrument.instrumentId}`}>
      <button className={style.deleteButton} data-test="delete-btn" onClick={onDeleteButtonClicked}>
        ❌
      </button>
      <pre>
        {content.map((c, i) => (
          <span key={i} style={{ color: `hsl(${Math.random() * 360}, 60%, 40%)` }}>
            {c}
          </span>
        ))}
      </pre>
    </li>
  );
};

export default Instrument;
