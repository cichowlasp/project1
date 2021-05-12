import React, { useContext } from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Theme,
	createStyles,
	makeStyles,
} from '@material-ui/core';
import styled from 'styled-components';
import moment, { Moment } from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { ThemeContext } from '../../../Context/Context';
import { DarkMode } from '../../../../consts/colors';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		accordion: {
			marginBottom: '25px',
			width: '100%',
			background: 'rgb(232, 232, 232)',
		},
	})
);

interface FuncProps {
	car: {
		accidentFree: boolean;
		brand: string;
		color: string;
		condition: string;
		cubicCapacity: number;
		fuelType: string;
		gearbox: string;
		model: string;
		productionDate: Moment;
		servicedASS: boolean;
		vehicleOperation: number;
		owners: string[];
	};
}
const CarInfo: React.FC<FuncProps> = ({ car }) => {
	const { darkMode } = useContext(ThemeContext);
	const classes = useStyles();
	return (
		<Accordion elevation={3} className={classes.accordion}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon htmlColor='black' />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<CardTitle
					darkMode={
						darkMode
					}>{`${car.brand} ${car.model}`}</CardTitle>
			</AccordionSummary>
			<AccordionDetails>
				<CarInformation darkMode={darkMode}>
					<div>
						Prduction Date:{' '}
						<span>
							{moment(car.productionDate).format('MMMM Do YYYY')}
						</span>
					</div>
					<div>
						Vehicle operation: <span>{car.vehicleOperation}km</span>
					</div>
					<div>
						Fuel type: <span>{car.fuelType}</span>
					</div>
					<div>
						Gearbox: <span>{car.gearbox}</span>
					</div>
					<div>
						Cubic capacity: <span>{car.cubicCapacity}cm3</span>
					</div>
					<div>
						Accident free:{' '}
						<span>
							{car.accidentFree ? (
								<CheckBoxIcon />
							) : (
								<CheckBoxOutlineBlankIcon />
							)}
						</span>
					</div>
					<div>
						Serviced at an authorized service station:{' '}
						<span>
							{car.servicedASS ? (
								<CheckBoxIcon />
							) : (
								<CheckBoxOutlineBlankIcon />
							)}
						</span>
					</div>
					<div>
						Condition: <span>{car.condition}</span>
					</div>
					<div>
						Color: <span>{car.color}</span>
					</div>
					<div>
						Owners:{' '}
						<span>
							{car?.owners?.length
								? car.owners.join(', ')
								: 'no informations'}
						</span>
					</div>
				</CarInformation>
			</AccordionDetails>
		</Accordion>
	);
};

interface darkMode {
	darkMode: Boolean;
}

const CardTitle = styled.div<darkMode>`
	font-weight: bold;
	width: 100%;
	padding: 10px;
	font-size: 2rem;
	${({ darkMode }) => (darkMode ? `color: ${DarkMode};` : '')}
	@media (max-width: 630px) {
		font-size: 1rem;
	}
`;

const CarInformation = styled.div<darkMode>`
	width: 100%;
	text-align: left;
	padding-left: 20px;
	div {
		display: flex;
		width: 100%;
		height: 40px;
		align-content: center;
		align-items: center;
		span {
			font-weight: bold;
			margin-left: 10px;
			text-transform: uppercase;
		}
	}
	@media (max-width: 630px) {
		padding-left: 0;
		div {
			font-size: 0.65rem;
			display: flex;
			width: 100%;
			height: 45px;
			align-content: center;
			align-items: center;
			span {
				font-weight: bold;
				text-transform: lowercase;
			}
		}
	}
	${({ darkMode }) => (darkMode ? `color: ${DarkMode};` : '')}
`;

export default CarInfo;
