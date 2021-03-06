import React, { useContext } from 'react';
import {
	TextField,
	FormControlLabel,
	Checkbox,
	MenuItem,
} from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { ThemeContext } from '../../../Context/Context';
import {
	UseFormRegister,
	FieldValues,
	Control,
	UseFormGetValues,
	UseFormSetValue,
	DeepMap,
	FieldError,
} from 'react-hook-form';
import OwnersInput from '../OwnersInput/OwnersInput';

interface FuncProps {
	register: UseFormRegister<FieldValues>;
	control: Control<FieldValues>;
	getValues: UseFormGetValues<FieldValues>;
	setValue: UseFormSetValue<FieldValues>;
	errors: DeepMap<FieldValues, FieldError>;
	validation: boolean;
}

const StepThree: React.FC<FuncProps> = ({
	register,
	control,
	getValues,
	errors,
	setValue,
	validation,
}) => {
	const { darkMode } = useContext(ThemeContext);
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
						label={
							<div
								style={{
									color: darkMode ? 'white' : 'black',
								}}>
								Accident-free
							</div>
						}
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
						label={
							<div
								style={{
									color: darkMode ? 'white' : 'black',
								}}>
								Serviced at an ASS
							</div>
						}
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
						helperText={
							errors.condition
								? 'This field is required(please select a option)'
								: ''
						}
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
				{...register('color', {
					required: true,
					minLength: 1,
					maxLength: 20,
				})}
				helperText={errors.color ? 'This field is required' : ''}
				onChange={(event) =>
					setValue('color', event.target.value, {
						shouldValidate: validation,
					})
				}
			/>
			<OwnersInput
				label='Owner name'
				error={errors.owner}
				key={'owners'}
				style={{ color: 'white' }}
				helperText={
					errors.owner
						? 'This field is required(min 3 letters and max 20)'
						: ''
				}
				setValue={setValue}
				getValues={getValues}
			/>
		</>
	);
};

export default StepThree;
