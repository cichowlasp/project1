import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarContent() {
	return (
		<div>
			<div>
				<Link to='/'>Home</Link>
			</div>
			<div>
				<Link to='/feed'>Feed</Link>
			</div>
		</div>
	);
}
