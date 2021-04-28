import React, { useState } from 'react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import SidebarContent from '../SidebarContent/SidebarContent';

interface FuncProps {
	darkMode: boolean;
	setDarkMode(arg: boolean): void;
	setColors(arg: { primary: string; secondary: string }): void;
	colors: { primary: string; secondary: string };
}

const Router: React.FC<FuncProps> = ({
	darkMode,
	setDarkMode,
	setColors,
	colors,
}) => {
	const fetchedData = JSON.parse(localStorage.getItem('data') || '[]');
	const [title, setTitle] = useState('Add Car');
	const [text, setText] = useState('');

	const filterData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value.trim().replace(/\s/g, ''));
	};

	return (
		<BrowserRouter>
			<div className='container'>
				<div className={`sidebar ${darkMode ? 'dark' : ''}`}>
					<SidebarContent
						darkMode={darkMode}
						setDarkMode={setDarkMode}
						setColors={setColors}
						colors={colors}
					/>
				</div>
				<div className={`title-content-container `}>
					<div className={`title ${darkMode ? 'dark' : ''}`}>
						{title === 'Collection' ? (
							<input
								placeholder='Search'
								className={`search ${darkMode ? 'dark' : ''}`}
								onChange={(event) => filterData(event)}
							/>
						) : (
							<h1>{title}</h1>
						)}
					</div>
					<div className={`content ${darkMode ? 'dark' : ''}`}>
						<Switch>
							<Route exact path='/'>
								<Home setTitle={setTitle} darkMode={darkMode} />
							</Route>
							<Route path='/feed'>
								<Feed
									fetchedData={fetchedData}
									search={text}
									setSearch={setText}
									setTitle={setTitle}
									darkMode={darkMode}
								/>
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Router;
