import * as React from 'react';
import * as styles from './style.scss';
import DialogHeader from './DialogHeader';

interface Props {
  visible: boolean;
  title: React.ReactNode;
  style?: React.CSSProperties;
  onCancel?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Dialog: React.FC<Props> = props => {
  return (
    <>
      <div className={styles.backdrop}></div>

      <dialog className={styles.Dialog} open style={props.style}>
        <DialogHeader onCancel={props.onCancel} title={props.title} />
        <div className={styles.content}>{props.children}</div>
      </dialog>
    </>
  );
};

export default Dialog;
