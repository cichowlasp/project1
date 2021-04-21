import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { Controller } from 'react-hook-form';

interface FuncProps {
	register: any;
	control: any;
	getValues: any;
	errors: any;
	setValue: any;
}

const StepTwo: React.FC<FuncProps> = ({
	register,
	control,
	getValues,
	errors,
	setValue,
}) => {
	return (
		<>
			<TextField
				key={'vehicleOperation'}
				error={errors.vehicleOperation}
				type='number'
				defaultValue={getValues('vehicleOperation')}
				{...register('vehicleOperation', {
					required: true,
					min: 1,
					max: 1000000,
				})}
				label='Vehicle operation(km)'
				onChange={(event) =>
					setValue('vehicleOperation', event.target.value, {
						shouldValidate: errors.vehicleOperation ? true : false,
					})
				}
			/>
			<Controller
				name='fuelType'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						label='Type of fuel'
						defaultValue={getValues('fuelType')}
						error={errors.fuelType}
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
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						select
						error={errors.gearbox}
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
				key={'cubicCapacity'}
				label='Cubic capacity (cm3)'
				type='number'
				error={errors.cubicCapacity}
				defaultValue={getValues('cubicCapacity')}
				{...register('cubicCapacity', {
					required: true,
					min: 500,
					max: 10000,
				})}
				onChange={(event) =>
					setValue('cubicCapacity', event.target.value, {
						shouldValidate: errors.cubicCapacity ? true : false,
					})
				}
			/>
		</>
	);
};

export default StepTwo;
