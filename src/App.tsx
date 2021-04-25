import React, { useState } from 'react';
import './App.scss';
import Router from './components/Router/Router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const App = () => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('darkMode') || 'false')
	);
	const appliedTheme = createMuiTheme(
		!darkMode
			? {
					palette: {
						type: 'light',
					},
			  }
			: {
					palette: {
						type: 'dark',
					},
			  }
	);
	return (
		<ThemeProvider theme={appliedTheme}>
			<div className='App'>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Router darkMode={darkMode} setDarkMode={setDarkMode} />
				</MuiPickersUtilsProvider>
			</div>
		</ThemeProvider>
	);
};

export default App;
