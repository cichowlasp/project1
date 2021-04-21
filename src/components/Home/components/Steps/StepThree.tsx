import React from 'react';
import {
	TextField,
	FormControlLabel,
	Checkbox,
	MenuItem,
} from '@material-ui/core';
import { Controller } from 'react-hook-form';

interface FuncProps {
	register(name: string): void;
	control: any;
	getValues: any;
}

const StepThree: React.FC<FuncProps> = ({ register, control, getValues }) => {
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
				render={({ field }) => (
					<TextField
						select
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
				defaultValue={getValues('color')}
				label='Color'
				{...register('color')}
			/>
		</>
	);
};

export default StepThree;
