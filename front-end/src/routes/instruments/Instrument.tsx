import * as React from 'react';
import { Instrument as InstrumentApi } from './instrumentsAPI';

const Instrument: React.FC<{ instrument: InstrumentApi }> = props => {
  const content = JSON.stringify(props.instrument, null, 2).split('"');

  return (
    <li>
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