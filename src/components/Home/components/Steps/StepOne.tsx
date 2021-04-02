import React from 'react';
import { TextField } from '@material-ui/core';
const StepOne: React.FC = () => {
	return (
		<>
			<TextField label='Brand' />
			<TextField label='Model' />
			<TextField
				id='date'
				label='Manufacture Year'
				type='date'
				defaultValue={new Date().toISOString().slice(0, 10)}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</>
	);
};

export default StepOne;
