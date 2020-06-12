import * as React from 'react';
import * as style from './style.scss';
import Instrument from './Instrument';
import instrumentsAPI, { Instrument as InstrumentApi } from './instrumentsAPI';
import { action, observable, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class InstrumentsList extends React.Component {
  @observable private instruments: InstrumentApi[] = [];
  @observable private searchText = '';

  @action private setInstruments = (instruments: InstrumentApi[]) => (this.instruments = instruments);
  @action private setSearch = (e: React.ChangeEvent<HTMLInputElement>) => (this.searchText = e.target.value);

  @computed private get filteredInstruments() {
    return this.instruments;
  }

  componentDidMount() {
    instrumentsAPI.getAllInstruments().then(this.setInstruments);
  }

  render() {
    return (
      <div>
        <input
          className={style.searchBox}
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          value={this.searchText}
          onChange={this.setSearch}
        />

        <ul className={style.InstrumentsList}>
          {this.filteredInstruments.map(instrument => (
            <Instrument key={instrument.instrumentId} instrument={instrument} />
          ))}
        </ul>
      </div>
    );
  }
}
