import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './SidebarContent.scss';
import { Popover, Paper, Button } from '@material-ui/core';
import { BlockPicker } from 'react-color';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PaletteIcon from '@material-ui/icons/Palette';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import { ThemeContext, ColorsContext } from '../Context/Context';

const SidebarContent: React.FC = () => {
	const { changeColors } = useContext(ColorsContext);
	const [color, setColor] = useState('#F47373');
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
	const { darkMode, toggleDarkMode } = useContext(ThemeContext);

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<div className='sidebar-container'>
			<Link className={`sidebar-link ${darkMode ? 'dark' : ''}`} to='/'>
				<div className='text'>Add Car</div>
				<AddIcon className='icon' />
			</Link>
			<Link
				className={`sidebar-link ${darkMode ? 'dark' : ''}`}
				to='/feed'>
				<div className='text'>Collection</div>
				<FormatListBulletedIcon className='icon' />
			</Link>
			<div
				role='button'
				onClick={toggleDarkMode}
				className={`sidebar-link ${darkMode ? 'dark' : ''}`}>
				{darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
			</div>
			<div
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
							onClick={() => changeColors(color, 'secondary')}>
							Set Secondary
						</Button>
						<Button
							variant='contained'
							color='primary'
							onClick={() => changeColors(color, 'primary')}>
							Set primary
						</Button>
					</div>
				</Paper>
			</Popover>
		</div>
	);
};
export default SidebarContent;
