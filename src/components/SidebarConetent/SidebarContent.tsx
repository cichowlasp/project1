import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarContent.scss';

export default function SidebarContent() {
	return (
		<div className='sidebar-container'>
			<Link className='sidebar-link' to='/'>
				Add Car
			</Link>
			<Link className='sidebar-link' to='/feed'>
				Collection
			</Link>
		</div>
	);
}
