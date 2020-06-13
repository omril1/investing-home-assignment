import * as React from 'react';
import * as style from './style.scss';
import AddInstrumentDialog from './AddInstrumentDialog';
import AddInstrumentDialogModel from './AddInstrumentDialogModel';
import Instrument from './Instrument';
import instrumentsAPI, { InstrumentType } from './instrumentsAPI';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class InstrumentsList extends React.Component {
  @observable.ref private addInstrumentDialog?: AddInstrumentDialogModel;
  @observable.ref private instruments: InstrumentType[] = [];
  @observable private searchText = '';

  @action private setInstruments = (instruments: InstrumentType[]) => (this.instruments = instruments);
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

  @action private addInstrument = () => (this.addInstrumentDialog = new AddInstrumentDialogModel());
  @action private cancelAddInstrument = () => (this.addInstrumentDialog = undefined);
  private saveInstrument = async () => {
    try {
      instrumentsAPI.addInstrument(this.addInstrumentDialog!);
      this.updateInstruments();
    } finally {
      this.cancelAddInstrument();
    }
  };

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

        <button onClick={this.addInstrument}>Add Instrument</button>

        {this.addInstrumentDialog && (
          <AddInstrumentDialog
            model={this.addInstrumentDialog}
            onCancel={this.cancelAddInstrument}
            onSave={this.saveInstrument}
          />
        )}

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
