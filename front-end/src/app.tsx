import * as React from 'react';
import * as style from './style.scss';
import * as reactDom from 'react-dom';

const Title = () => <div className={style.appTitle}>react app with typescript works</div>;

const appRoot = document.getElementById('app-root');
reactDom.render(<Title />, appRoot);
