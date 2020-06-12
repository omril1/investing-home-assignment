import * as React from 'react';
import * as style from './style.scss';
import * as reactDom from 'react-dom';
import InstrumentsList from './routes/instruments/InstrumentsList';

const Title = () => <div className={style.appTitle}>react app with typescript works</div>;

const appRoot = document.getElementById('app-root');
reactDom.render(
  <>
    <Title />
    <InstrumentsList />
  </>,
  appRoot,
);
