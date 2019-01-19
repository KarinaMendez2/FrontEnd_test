import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ButtonAppBar from './ButtonAppBar';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import InputWithIcon from './InputWithIcon';
import GoogleMaps from './GoogleMapsContainer';
import MediaCard from './MediaCard';
import CenteredGrid from './CenteredGrid';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ButtonAppBar />, document.getElementById('menu'));

ReactDOM.render(<PrimarySearchAppBar />, document.getElementById('menu'));

ReactDOM.render(<InputWithIcon />, document.getElementById('filters'));
ReactDOM.render(<GoogleMaps />, document.getElementById('locations'));

ReactDOM.render(<CenteredGrid />, document.getElementById('grid_container'));
ReactDOM.render(<SimpleBottomNavigation />, document.getElementById('foot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
