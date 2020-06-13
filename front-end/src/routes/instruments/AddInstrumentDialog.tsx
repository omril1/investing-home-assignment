import * as React from 'react';
import AddInstrumentDialogModel from './AddInstrumentDialogModel';
import Dialog from '../../reusable-components/Dialog';
import TextInput from '../../reusable-components/TextInput';
import { observer } from 'mobx-react';

interface Props {
  model: AddInstrumentDialogModel;
  onCancel: VoidFunction;
  onSave: VoidFunction;
}

const DIALOG_STYLE = { width: 330, height: 170 };

const AddInstrumentDialog: React.FC<Props> = props => (
  <Dialog visible title="Add Instrument" style={DIALOG_STYLE} onCancel={props.onCancel}>
    <TextInput label="Instrument Name" value={props.model.name} onChange={props.model.setName} />
    <TextInput label="Symbol" value={props.model.symbol} onChange={props.model.setSymbol} />
    <TextInput
      label="Instrument Type"
      value={props.model.instrumentType}
      onChange={props.model.setInstrumentType}
    />

    <br />
    <button onClick={props.onSave}>Save</button>
  </Dialog>
);

export default observer(AddInstrumentDialog);
