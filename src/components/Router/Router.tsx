import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import SidebarContent from '../SidebarConetent/SidebarContent';
import './Router.scss';

interface FuncProps {
	darkMode: boolean;
	setDarkMode(arg: boolean): void;
}

const Router: React.FC<FuncProps> = ({ darkMode, setDarkMode }) => {
	const fetchedData = JSON.parse(localStorage.getItem('data') || '[]');
	const [title, setTitle] = useState('Add Car');
	const [text, setText] = useState('');

	const filterData = (event: any) => {
		setText(event.target.value.trim().replace(/\s/g, ''));
	};

	return (
		<BrowserRouter>
			<div className='container'>
				<div className={`sidebar ${darkMode ? 'dark' : ''}`}>
					<SidebarContent
						darkMode={darkMode}
						setDarkMode={setDarkMode}
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
							<Route path='/feed'>
								<Feed
									fetchedData={fetchedData}
									search={text}
									setSearch={setText}
									setTitle={setTitle}
									darkMode={darkMode}
								/>
							</Route>
							<Route path='/'>
								<Home setTitle={setTitle} darkMode={darkMode} />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Router;
