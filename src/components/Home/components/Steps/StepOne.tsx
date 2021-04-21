import React from 'react';
import { TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Controller } from 'react-hook-form';

interface FuncProps {
	register(name: string): void;
	control: any;
	getValues: any;
	watch: any;
	setValue: any;
}

const StepOne: React.FC<FuncProps> = ({
	register,
	control,
	getValues,
	watch,
	setValue,
}) => {
	return (
		<>
			<TextField
				label='Brand'
				defaultValue={getValues('brand')}
				{...register('brand')}
			/>
			<TextField
				defaultValue={getValues('model')}
				label='Model'
				{...register('model')}
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
