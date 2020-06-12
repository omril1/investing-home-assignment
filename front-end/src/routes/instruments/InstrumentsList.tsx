import * as React from 'react';
import * as style from './style.scss';
import Instrument from './Instrument';
import instrumentsAPI, { Instrument as InstrumentApi } from './instrumentsAPI';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class InstrumentsList extends React.Component {
  @observable private instruments: InstrumentApi[] = [];
  @action private setInstruments = (instruments: InstrumentApi[]) => (this.instruments = instruments);

  componentDidMount() {
    instrumentsAPI.getAllInstruments().then(this.setInstruments);
  }

  render() {
    return (
      <div>
        <ul className={style.InstrumentsList}>
          {this.instruments.map(instrument => (
            <Instrument key={instrument.instrumentId} instrument={instrument} />
          ))}
        </ul>
      </div>
    );
  }
}
