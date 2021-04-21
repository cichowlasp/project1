import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { Controller } from 'react-hook-form';

interface FuncProps {
	register(name: string): void;
	control: any;
	getValues: any;
}

const StepTwo: React.FC<FuncProps> = ({ register, control, getValues }) => {
	return (
		<>
			<TextField
				{...register('vehicleOperation')}
				label='Vehicle operation'
				defaultValue={getValues('vehicleOperation')}
			/>
			<Controller
				name='fuelType'
				control={control}
				render={({ field }) => (
					<TextField
						label='Type of fuel'
						defaultValue={getValues('fuelType')}
						select
						{...field}
						inputProps={{
							name: 'Fuel type',
						}}>
						<MenuItem value={'disel'}>Disel</MenuItem>
						<MenuItem value={'petrol'}>Petrol</MenuItem>
						<MenuItem value={'petrol+gas'}>Petrol+gas</MenuItem>
					</TextField>
				)}
			/>

			<Controller
				name='gearbox'
				control={control}
				render={({ field }) => (
					<TextField
						select
						helperText={'Please select an option'}
						defaultValue={getValues('gearbox')}
						{...field}
						label='Gearbox'
						inputProps={{
							name: 'Fuel type',
						}}>
						<MenuItem key={'manual'} value={'manual'}>
							Manual
						</MenuItem>
						<MenuItem value={'automat'} key={'automat'}>
							Automatic
						</MenuItem>
					</TextField>
				)}
			/>

			<TextField
				label='Cubic capacity'
				name='cubicCapacity'
				defaultValue={getValues('cubicCapacity')}
				{...register('cubicCapacity')}
			/>
		</>
	);
};

export default StepTwo;
