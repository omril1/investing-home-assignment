import * as React from 'react';
import * as style from './style.scss';
import instrumentsAPI, { Instrument as InstrumentApi } from './instrumentsAPI';
import Instrument from './Instrument';

interface State {
  instruments: InstrumentApi[];
}

export default class InstrumentsList extends React.Component {
  state: State = { instruments: [] };

  componentDidMount() {
    instrumentsAPI.getAllInstruments().then(instruments => this.setState({ instruments }));
  }

  render() {
    return (
      <div>
        <ul className={style.InstrumentsList}>
          {this.state.instruments.map(instrument => (
            <Instrument key={instrument.instrumentId} instrument={instrument} />
          ))}
        </ul>
      </div>
    );
  }
}
