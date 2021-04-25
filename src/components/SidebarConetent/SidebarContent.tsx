import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarContent.scss';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';

interface FuncProps {
	darkMode: boolean;
	setDarkMode(arg: boolean): void;
}

const SidebarContent: React.FC<FuncProps> = ({ darkMode, setDarkMode }) => {
	const onClick = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	};

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
			<div
				role='button'
				onClick={onClick}
				className={`sidebar-link ${darkMode ? 'dark' : ''}`}>
				{darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
			</div>
		</div>
	);
};
export default SidebarContent;
