import React from 'react';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
const StepThree: React.FC = () => {
	return (
		<>
			<FormControlLabel
				control={
					<Checkbox
						checked={false}
						name='Accident-free'
						color='primary'
					/>
				}
				label='Accident-free'
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={false}
						name='Serviced at an authorized service station'
						color='primary'
					/>
				}
				label='Serviced at an authorized service station'
			/>
			<div></div>
			<TextField label='Condition' />
			<TextField label='Color' />
		</>
	);
};

export default StepThree;
