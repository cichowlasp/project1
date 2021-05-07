import React, { useContext } from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Theme,
	createStyles,
	makeStyles,
} from '@material-ui/core';
import moment, { Moment } from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { ThemeContext } from '../../../Context/Context';

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
				<div
					className={`card-title ${
						darkMode ? 'dark' : ''
					}`}>{`${car.brand} ${car.model}`}</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className={`card-information ${darkMode ? 'dark' : ''}`}>
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
				</div>
			</AccordionDetails>
		</Accordion>
	);
};
export default CarInfo;
