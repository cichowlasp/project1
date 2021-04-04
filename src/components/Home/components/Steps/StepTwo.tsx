import React from 'react';
import { TextField, Select } from '@material-ui/core';
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

const StepTwo: React.FC<FuncProps> = ({ data, setData }) => {
	return (
		<>
			<TextField
				label='Vehicle operation'
				onChange={(event) =>
					setData({
						...data,
						vehicleOperation: event.target.value,
					})
				}
				value={data.vehicleOperation}
			/>
			<Select
				native
				label={'Fuel type'}
				value={data.fuelType}
				onChange={(event) =>
					setData({
						...data,
						fuelType: event.target.value,
					})
				}
				inputProps={{
					name: 'Fuel type',
				}}>
				<option value={'disel'}>Disel</option>
				<option value={'petrol'}>Petrol</option>
				<option value={'petrol+gas'}>Petrol+gas</option>
			</Select>
			<TextField label='Gearbox' />
			<TextField label='Cubic capacity' />
		</>
	);
};

export default StepTwo;
