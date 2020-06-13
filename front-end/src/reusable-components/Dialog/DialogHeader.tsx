import * as React from 'react';
import * as styles from './style.scss';

interface Props {
  title: React.ReactNode;
  onCancel?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const DialogHeader: React.FC<Props> = props => {
  return (
    <div className={styles.DialogHeader}>
      <div className={styles.title}>{props.title}</div>

      <span onClick={props.onCancel} className={styles.close}>
        ×
      </span>
    </div>
  );
};

export default DialogHeader;
