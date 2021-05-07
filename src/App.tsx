import React, { useContext } from 'react';
import Router from './components/Router/Router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './scss/styles.scss';
import { ThemeContext } from './components/Context/DarkMode';
import { ColorsContext } from './components/Context/ColorsProvider';

const App = () => {
	const { darkMode } = useContext(ThemeContext);
	const { colors } = useContext(ColorsContext);
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
					<Router />
				</MuiPickersUtilsProvider>
			</div>
		</ThemeProvider>
	);
};

export default App;
