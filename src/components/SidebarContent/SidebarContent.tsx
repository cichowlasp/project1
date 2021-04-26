import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarContent.scss';
import { Popover, Paper, Button } from '@material-ui/core';
import { BlockPicker } from 'react-color';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PaletteIcon from '@material-ui/icons/Palette';

interface FuncProps {
	darkMode: boolean;
	setDarkMode(arg: boolean): void;
	setColors(arg: { primary: string; secondary: string }): void;
	colors: { primary: string; secondary: string };
}

const SidebarContent: React.FC<FuncProps> = ({
	darkMode,
	setDarkMode,
	setColors,
	colors,
}) => {
	const [color, setColor] = useState('#F47373');
	const [anchorEl, setAnchorEl] = useState(null);
	const changeTheme = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	};

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	const setPrimary = () => {
		localStorage.setItem('primary', color);
		setColors({ ...colors, primary: color });
	};
	const setSecondary = () => {
		localStorage.setItem('secondary', color);
		setColors({ ...colors, secondary: color });
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
				onClick={changeTheme}
				className={`sidebar-link ${darkMode ? 'dark' : ''}`}>
				{darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
			</div>
			<div
				role='button'
				onClick={(event) => handleClick(event)}
				className={`sidebar-link ${darkMode ? 'dark' : ''}`}>
				<PaletteIcon />
			</div>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}>
				<Paper className='color-picker'>
					<BlockPicker
						onChange={(color) => setColor(color.hex)}
						color={color}
						width={'200px'}
					/>
					<div className='set-color-buttons'>
						<Button
							variant='contained'
							color='secondary'
							onClick={setSecondary}>
							Set Secondary
						</Button>
						<Button
							variant='contained'
							color='primary'
							onClick={setPrimary}>
							Set primary
						</Button>
					</div>
				</Paper>
			</Popover>
		</div>
	);
};
export default SidebarContent;
