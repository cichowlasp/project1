import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Paper, Button } from '@material-ui/core';
import { BlockPicker } from 'react-color';
import styled, { css } from 'styled-components';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PaletteIcon from '@material-ui/icons/Palette';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import { ThemeContext, ColorsContext } from '../Context/Context';
import { BackgroundColor, DarkMode, WhiteMode } from '../../consts/colors';

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
		<div>
			<StyledLink darkMode={darkMode} to='/'>
				<div className='text'>Add Car</div>
				<AddIcon className='icon' />
			</StyledLink>
			<StyledLink darkMode={darkMode} to='/feed'>
				<div className='text'>Collection</div>
				<FormatListBulletedIcon className='icon' />
			</StyledLink>
			<StyledDiv onClick={toggleDarkMode} darkMode={darkMode}>
				{darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
			</StyledDiv>
			<StyledDiv
				onClick={(event) => handleClick(event)}
				darkMode={darkMode}>
				<PaletteIcon />
			</StyledDiv>
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
				<StyledPaper>
					<BlockPicker
						onChange={(color) => setColor(color.hex)}
						color={color}
						width={'200px'}
					/>
					<ButtonsContainer>
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
					</ButtonsContainer>
				</StyledPaper>
			</Popover>
		</div>
	);
};

interface darkMode {
	darkMode: Boolean;
}
const SidebarContentStyle = css<darkMode>`
	display: flex;
	justify-content: center;
	padding: 1rem;
	text-decoration: none;
	text-transform: uppercase;
	color: ${DarkMode};
	font-weight: 500;
	margin: 0.5rem;
	border-radius: 10px;
	border: 2px solid ${DarkMode};
	height: 20px;

	&:hover {
		background-color: ${BackgroundColor};
		border-radius: 10px;
		cursor: pointer;
	}
	.icon {
		display: none;
	}
	${({ darkMode }) =>
		darkMode
			? `color: ${WhiteMode};
		border-color: ${WhiteMode};`
			: ''}
	@media (max-width: 831px) {
		.icon {
			display: block;
		}
		.text {
			display: none;
		}
	}
`;
const StyledLink = styled(Link)<darkMode>`
	${SidebarContentStyle}
`;
const StyledDiv = styled.div<darkMode>`
	${SidebarContentStyle}
`;

const StyledPaper = styled(Paper)`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ButtonsContainer = styled.div`
	display: flex;
	height: 80px;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
`;

export default SidebarContent;
