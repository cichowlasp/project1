import React from 'react';
import { TextField } from '@material-ui/core';
const StepTwo: React.FC = () => {
	return (
		<>
			<TextField label='Vehicle operation' />
			<TextField label='Fuel type' />
			<TextField label='Gearbox' />
			<TextField label='Cubic capacity' />
		</>
	);
};

export default StepTwo;
