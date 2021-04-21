import React from 'react';
import {
	TextField,
	FormControlLabel,
	Checkbox,
	MenuItem,
} from '@material-ui/core';
import { Controller } from 'react-hook-form';

interface FuncProps {
	register: any;
	control: any;
	getValues: any;
	errors: any;
	setValue: any;
}

const StepThree: React.FC<FuncProps> = ({
	register,
	control,
	getValues,
	errors,
	setValue,
}) => {
	return (
		<>
			<Controller
				name='accidentFree'
				control={control}
				render={({ field }) => (
					<FormControlLabel
						control={
							<Checkbox
								checked={getValues('accidentFree')}
								{...field}
								name='Accident-free'
								color='primary'
							/>
						}
						label='Accident-free'
					/>
				)}
			/>

			<Controller
				name='servicedASS'
				control={control}
				render={({ field }) => (
					<FormControlLabel
						control={
							<Checkbox
								checked={getValues('servicedASS')}
								{...field}
								name='Serviced at an authorized service station'
								color='primary'
							/>
						}
						label='Serviced at an ASS'
					/>
				)}
			/>

			<Controller
				name='condition'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						select
						error={errors.condition}
						defaultValue={getValues('condition')}
						helperText={'Please select an option'}
						{...field}
						label='condition'
						inputProps={{
							name: 'Fuel type',
						}}>
						<MenuItem key={'new'} value={'new'}>
							New
						</MenuItem>
						<MenuItem value={'used'} key={'used'}>
							Used
						</MenuItem>
					</TextField>
				)}
			/>
			<TextField
				key={'color'}
				defaultValue={getValues('color')}
				error={errors.color}
				label='Color'
				{...register('color', { required: true, maxLength: 20 })}
				onChange={(event) =>
					setValue('color', event.target.value, {
						shouldValidate: errors.color ? true : false,
					})
				}
			/>
		</>
	);
};

export default StepThree;
