import { action, observable } from 'mobx';

export default class AddInstrumentDialogModel {
  @observable name: string = '';
  @observable symbol: string = '';
  @observable instrumentType: string = '';

  @action setName = (name: string) => (this.name = name);
  @action setSymbol = (symbol: string) => (this.symbol = symbol);
  @action setInstrumentType = (instrumentType: string) => (this.instrumentType = instrumentType);
}
