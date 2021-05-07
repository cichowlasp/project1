import React, { useContext } from 'react';
import Router from './components/Router/Router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import styled from 'styled-components';
import { ThemeContext, ColorsContext } from './components/Context/Context';

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
			<AppStyle className='App'>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Router />
				</MuiPickersUtilsProvider>
			</AppStyle>
		</ThemeProvider>
	);
};

const AppStyle = styled.div`
	height: 100vh;
`;

export default App;
