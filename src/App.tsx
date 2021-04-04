import React from 'react';
import './App.scss';
import Router from './components/Router/Router';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const App = () => {
	return (
		<div className='App'>
			<MuiPickersUtilsProvider utils={MomentUtils}>
				<Router />
			</MuiPickersUtilsProvider>
		</div>
	);
};

export default App;
