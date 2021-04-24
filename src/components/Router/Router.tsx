import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import SidebarContent from '../SidebarConetent/SidebarContent';
import './Router.scss';
const Router = () => {
	const [title, setTitle] = useState('Add Car');
	const fetchedData = JSON.parse(localStorage.getItem('data') || '[]');
	return (
		<BrowserRouter>
			<div className='container'>
				<div className='sidebar'>
					<SidebarContent />
				</div>
				<div className='title-content-container'>
					<div className='title'>
						{title === 'Collection' ? (
							<TextField
								className='search'
								placeholder='Search'
								variant='outlined'
								onChange={(event) => {}}
							/>
						) : (
							<h1>{title}</h1>
						)}
					</div>
					<div className='content'>
						<Switch>
							<Route path='/feed'>
								<Feed
									fetchedData={fetchedData}
									setTitle={setTitle}
								/>
							</Route>
							<Route path='/'>
								<Home setTitle={setTitle} />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Router;
