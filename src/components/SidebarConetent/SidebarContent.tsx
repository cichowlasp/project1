import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarContent.scss';

interface FuncProps {
	darkMode: boolean;
}

const SidebarContent: React.FC<FuncProps> = ({ darkMode }) => {
	return (
		<div className='sidebar-container'>
			<Link className={`sidebar-link ${darkMode ? 'dark' : ''}`} to='/'>
				Add Car
			</Link>
			<Link
				className={`sidebar-link ${darkMode ? 'dark' : ''}`}
				to='/feed'>
				Collection
			</Link>
		</div>
	);
};
export default SidebarContent;
