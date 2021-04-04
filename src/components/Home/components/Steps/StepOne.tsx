import React, { Fragment } from 'react';
import { TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Moment } from 'moment';

interface FuncProps {
	setData(arg1: any): void;
	data: {
		brand: string;
		model: string;
		productionDate: Date | Moment | null;
		vehicleOperation: number;
		fuelType: string;
	};
}

const StepOne: React.FC<FuncProps> = ({ data, setData }) => {
	return (
		<>
			<TextField
				label='Brand'
				value={data.brand}
				onChange={(event) =>
					setData({
						...data,
						brand: event.target.value,
					})
				}
			/>
			<TextField
				label='Model'
				value={data.model}
				onChange={(event) =>
					setData({
						...data,
						model: event.target.value,
					})
				}
			/>

			<KeyboardDatePicker
				autoOk
				variant='inline'
				label='Production Date'
				format='DD/MM/yyyy'
				value={data.productionDate}
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
