import React, { useState } from 'react';
import Router from './components/Router/Router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './scss/styles.scss';

const App = () => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('darkMode') || 'false')
	);
	const [colors, setColors] = useState({
		primary: localStorage.getItem('primary') || '#F47373',
		secondary: localStorage.getItem('secondary') || '#ba68c8',
	});
	const appliedTheme = createMuiTheme({
		palette: {
			type: darkMode ? 'dark' : 'light',
			primary: {
				main: colors.primary,
			},
			secondary: {
				main: colors.secondary,
			},
		},
	});
	return (
		<ThemeProvider theme={appliedTheme}>
			<div className='App'>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Router
						darkMode={darkMode}
						setDarkMode={setDarkMode}
						setColors={setColors}
						colors={colors}
					/>
				</MuiPickersUtilsProvider>
			</div>
		</ThemeProvider>
	);
};

export default App;
