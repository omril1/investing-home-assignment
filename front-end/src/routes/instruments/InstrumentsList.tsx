import * as React from 'react';
import * as style from './style.scss';
import Instrument from './Instrument';
import instrumentsAPI, { Instrument as InstrumentApi } from './instrumentsAPI';
import { action, observable, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class InstrumentsList extends React.Component {
  @observable.ref private instruments: InstrumentApi[] = [];
  @observable private searchText = '';

  @action private setInstruments = (instruments: InstrumentApi[]) => (this.instruments = instruments);
  @action private setSearch = (e: React.ChangeEvent<HTMLInputElement>) => (this.searchText = e.target.value);

  /**
   * Filter the list of instruments,
   * if any of the values in the object match the search text ignoring case
   * it will be matched by the filter/search
   */
  @computed private get filteredInstruments() {
    return this.instruments.filter(i =>
      Object.values(i).some(v => String(v).toLowerCase().includes(this.searchText.toLowerCase())),
    );
  }

  // no error handling for now :|
  private updateInstruments = () => instrumentsAPI.getAllInstruments().then(this.setInstruments);
  private deleteInstrument = (id: number) => instrumentsAPI.deleteInstrument(id).then(this.updateInstruments);

  componentDidMount() {
    this.updateInstruments();
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
            <Instrument
              key={instrument.instrumentId}
              instrument={instrument}
              onDelete={this.deleteInstrument}
            />
          ))}
        </ul>
      </div>
    );
  }
}
