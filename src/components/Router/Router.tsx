import React, { useState, useContext } from 'react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import SidebarContent from '../SidebarContent/SidebarContent';
import { ThemeContext } from '../Context/Context';
import { DarkMode, WhiteMode, GreyColor } from '../../consts/colors';

const Router: React.FC = () => {
	const fetchedData = JSON.parse(localStorage.getItem('data') || '[]');
	const [title, setTitle] = useState('Add Car');
	const [text, setText] = useState('');
	const { darkMode } = useContext(ThemeContext);

	const filterData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value.trim().replace(/\s/g, ''));
	};

	return (
		<BrowserRouter>
			<Container>
				<Sidebar darkMode={darkMode}>
					<SidebarContent />
				</Sidebar>
				<TitleContainer>
					<Title darkMode={darkMode}>
						{title === 'Collection' ? (
							<Search
								placeholder='Search'
								darkMode={darkMode}
								onChange={(event) => filterData(event)}
							/>
						) : (
							<h1>{title}</h1>
						)}
					</Title>
					<Content darkMode={darkMode}>
						<Switch>
							<Route exact path='/'>
								<Home setTitle={setTitle} />
							</Route>
							<Route path='/feed'>
								<Feed
									fetchedData={fetchedData}
									search={text}
									setSearch={setText}
									setTitle={setTitle}
								/>
							</Route>
						</Switch>
					</Content>
				</TitleContainer>
			</Container>
		</BrowserRouter>
	);
};

interface darkMode {
	darkMode: Boolean;
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	background-color: rgb(29, 28, 28);
`;

const Sidebar = styled.div<darkMode>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 15%;
	max-height: 100%;
	background-color: ${({ darkMode }) => (darkMode ? DarkMode : WhiteMode)};
	margin: 1rem 0 1rem 1rem;
	border-radius: 10px;
	box-shadow: 0 0 1em ${GreyColor};
	&.dark {
		background-color: $dark-mode;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	text-align: center;
`;

const Title = styled.div<darkMode>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${WhiteMode};
	margin: 1rem;
	max-height: 8vh;
	min-height: 8vh;
	max-width: 100%;
	text-transform: uppercase;
	border-radius: 10px;
	box-shadow: 0 0 1em ${GreyColor};
	${({ darkMode }) =>
		darkMode
			? `
                background-color: ${DarkMode};
                color: ${WhiteMode};`
			: ''}
`;

const Search = styled.input<darkMode>`
	width: 90%;
	height: 90%;
	border: none;
	text-align: center;
	border-radius: 10px;
	box-shadow: none;
	font-size: 40px;
	&:focus {
		outline: none;
	}
	${({ darkMode }) =>
		darkMode
			? `
                background-color: ${DarkMode};
                color: ${WhiteMode};`
			: ''}
`;

const Content = styled.div<darkMode>`
	display: flex;
	background-color: ${({ darkMode }) => (darkMode ? DarkMode : WhiteMode)};
	margin: 1rem 0 1rem 1rem;
	margin: 0 1rem 1rem 1rem;
	overflow: auto;
	justify-content: center;
	border-radius: 10px;
	box-shadow: 0 0 1em ${GreyColor};
	height: 100vh;
`;

export default Router;
