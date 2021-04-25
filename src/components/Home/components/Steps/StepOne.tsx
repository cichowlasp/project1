import React from 'react';
import { TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Controller } from 'react-hook-form';

interface FuncProps {
	register: any;
	control: any;
	getValues: any;
	watch: any;
	setValue: any;
	errors: any;
	validation: boolean;
}

const StepOne: React.FC<FuncProps> = ({
	register,
	control,
	getValues,
	watch,
	setValue,
	errors,
	validation,
}) => {
	return (
		<>
			<TextField
				label='Brand'
				error={errors.brand}
				key={'brand'}
				style={{ color: 'white' }}
				helperText={
					errors.brand
						? 'This field is required(min 3 letters and max 20)'
						: ''
				}
				defaultValue={getValues('brand')}
				{...register('brand', {
					required: true,
					minLength: 3,
					maxLength: 20,
				})}
				onChange={(event) =>
					setValue('brand', event.target.value, {
						shouldValidate: validation,
					})
				}
			/>

			<TextField
				key={'model'}
				defaultValue={getValues('model')}
				error={errors.model}
				label='Model'
				helperText={
					errors.model
						? 'This field is required(min 3 letters and max 20)'
						: ''
				}
				{...register('model', {
					required: true,
					minLength: 3,
					maxLength: 20,
				})}
				onChange={(event) =>
					setValue('model', event.target.value, {
						shouldValidate: validation,
					})
				}
			/>
			<Controller
				name='productionDate'
				control={control}
				render={({ field }) => (
					<KeyboardDatePicker
						{...field}
						autoOk
						variant='inline'
						label='Production Date'
						format='DD/MM/yyyy'
						value={watch('productionDate')}
						disableFuture
						InputAdornmentProps={{ position: 'start' }}
						onChange={(newDate) => {
							setValue('productionDate', newDate);
						}}
					/>
				)}
			/>
		</>
	);
};

export default StepOne;
