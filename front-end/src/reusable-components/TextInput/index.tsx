import * as React from 'react';
import * as style from './style.scss';

interface Props {
  value: string;
  label?: string;
  onChange?: (newValue: string) => void;
}

const TextInput: React.FC<Props> = props => {
  return (
    <div className={style.TextInput}>
      <label className={style.label}>{props.label}</label>
      <input
        className={style.input}
        type="text"
        placeholder={props.label}
        value={props.value}
        // 😎 New syntax here:
        onChange={e => props.onChange?.(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
