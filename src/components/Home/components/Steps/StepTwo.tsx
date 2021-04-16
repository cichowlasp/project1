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
		gearbox: string;
		cubicCapacity: number;
		accidentFree: boolean;
		servicedASS: boolean;
		color: string;
		condition: string;
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
			<Select
				native
				value={data.gearbox}
				onChange={(event) =>
					setData({
						...data,
						gearbox: event.target.value,
					})
				}
				inputProps={{
					name: 'Fuel type',
				}}>
				<option value={'manual'}>Manual</option>
				<option value={'automat'}>Automatic</option>
			</Select>
			<TextField
				label='Cubic capacity'
				onChange={(event) =>
					setData({
						...data,
						cubicCapacity: event.target.value,
					})
				}
				value={data.cubicCapacity}
			/>
		</>
	);
};

export default StepTwo;
