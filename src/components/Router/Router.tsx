import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import SidebarContent from '../SidebarConetent/SidebarContent';
import './Router.scss';
const Router = () => {
	const [title, setTitle] = useState('Add Car');
	return (
		<BrowserRouter>
			<div className='container'>
				<div className='sidebar'>
					<div>
						<SidebarContent />
					</div>
				</div>
				<div className='title-content-container'>
					<div className='title'>
						<h1>{title}</h1>
					</div>
					<div className='content'>
						<Switch>
							<Route path='/feed'>
								<Feed />
							</Route>
							<Route path='/'>
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Router;
