import React, { Fragment } from 'react';
import { TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Moment } from 'moment';

interface FuncProps {
	setData(arg1: any): void;
	validateInput(event: any): void;
	errors: {
		brand: string;
		model: string;
		productionDate: string;
		vehicleOperation: string;
		fuelType: string;
		gearbox: string;
		cubicCapacity: string;
		accidentFree: string;
		servicedASS: string;
		color: string;
		condition: string;
	};
	data: {
		brand: string;
		model: string;
		productionDate: Date | Moment | null;
		vehicleOperation: number;
		fuelType: string;
		gearbox: string;
		cubicCapacity: number;
		accidentFree: boolean;
		servicedASS: boolean;
		color: string;
		condition: string;
	};
}

const StepOne: React.FC<FuncProps> = ({
	data,
	validateInput,
	errors,
	setData,
}) => {
	return (
		<>
			<TextField
				label='Brand'
				name='brand'
				value={data.brand}
				error={errors.brand !== ''}
				helperText={errors.brand}
				onChange={(event) => {
					setData({
						...data,
						brand: event.target.value,
					});
					validateInput(event);
				}}
			/>
			<TextField
				label='Model'
				name='model'
				error={errors.model !== ''}
				helperText={errors.model}
				value={data.model}
				onChange={(event) => {
					setData({
						...data,
						model: event.target.value,
					});
					validateInput(event);
				}}
			/>

			<KeyboardDatePicker
				autoOk
				variant='inline'
				label='Production Date'
				format='DD/MM/yyyy'
				value={data.productionDate}
				disableFuture
				InputAdornmentProps={{ position: 'start' }}
				onChange={(date) =>
					setData({
						...data,
						productionDate: date,
					})
				}
			/>
		</>
	);
};

export default StepOne;
