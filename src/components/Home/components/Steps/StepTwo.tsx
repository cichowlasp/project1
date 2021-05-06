import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import {
	UseFormRegister,
	FieldValues,
	Control,
	UseFormGetValues,
	UseFormSetValue,
	DeepMap,
	FieldError,
} from 'react-hook-form';

interface FuncProps {
	register: UseFormRegister<FieldValues>;
	control: Control<FieldValues>;
	getValues: UseFormGetValues<FieldValues>;
	setValue: UseFormSetValue<FieldValues>;
	errors: DeepMap<FieldValues, FieldError>;
	validation: boolean;
}

const StepTwo: React.FC<FuncProps> = ({
	register,
	control,
	getValues,
	errors,
	setValue,
	validation,
}) => {
	return (
		<>
			<TextField
				key={'vehicleOperation'}
				error={errors.vehicleOperation}
				helperText={
					errors.vehicleOperation
						? 'This field is required(provide an number form 1 to 1000000)'
						: ''
				}
				defaultValue={getValues('vehicleOperation')}
				{...register('vehicleOperation', {
					required: true,
					pattern: /^[0-9]*$/i,
					min: 1,
					max: 1000000,
				})}
				label='Vehicle operation(km)'
				onChange={(event) =>
					setValue('vehicleOperation', event.target.value, {
						shouldValidate: validation,
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
						helperText={
							errors.fuelType ? 'This field is required' : ''
						}
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
						helperText={
							errors.gearbox ? 'This field is required' : ''
						}
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
				error={errors.cubicCapacity}
				helperText={
					errors.cubicCapacity
						? 'This field is required(provide an number from 500 to 10000)'
						: ''
				}
				defaultValue={getValues('cubicCapacity')}
				{...register('cubicCapacity', {
					required: true,
					pattern: /^[0-9]*$/i,
					min: 500,
					max: 10000,
				})}
				onChange={(event) =>
					setValue('cubicCapacity', event.target.value, {
						shouldValidate: validation,
					})
				}
			/>
		</>
	);
};

export default StepTwo;
