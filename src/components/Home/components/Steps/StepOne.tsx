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
}

const StepOne: React.FC<FuncProps> = ({
	register,
	control,
	getValues,
	watch,
	setValue,
	errors,
}) => {
	return (
		<>
			<TextField
				label='Brand'
				error={errors.brand}
				key={'brand'}
				defaultValue={getValues('brand')}
				{...register('brand', {
					required: true,
					minLength: 3,
					maxLength: 20,
				})}
				onChange={(event) =>
					setValue('brand', event.target.value, {
						shouldValidate: errors.brand ? true : false,
					})
				}
			/>

			<TextField
				key={'model'}
				defaultValue={getValues('model')}
				error={errors.model}
				label='Model'
				{...register('model', {
					required: true,
					minLength: 3,
					maxLength: 20,
				})}
				onChange={(event) =>
					setValue('model', event.target.value, {
						shouldValidate: errors.model ? true : false,
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
