import React from 'react';
import {
	TextField,
	FormControlLabel,
	Checkbox,
	Select,
} from '@material-ui/core';
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

const StepThree: React.FC<FuncProps> = ({ data, setData }) => {
	return (
		<>
			<FormControlLabel
				control={
					<Checkbox
						checked={data.accidentFree}
						name='Accident-free'
						color='primary'
						onChange={() => {
							setData({
								...data,
								accidentFree: !data.accidentFree,
							});
						}}
					/>
				}
				label='Accident-free'
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={data.servicedASS}
						name='Serviced at an authorized service station'
						color='primary'
						onChange={() => {
							setData({
								...data,
								servicedASS: !data.servicedASS,
							});
						}}
					/>
				}
				label='Serviced at an ASS'
			/>
			<div></div>
			<Select
				native
				value={data.condition}
				onChange={(event) =>
					setData({
						...data,
						condition: event.target.value,
					})
				}
				inputProps={{
					name: 'condition',
				}}>
				<option value={'new'}>New</option>
				<option value={'used'}>Used</option>
			</Select>
			<TextField
				label='Color'
				onChange={(event) =>
					setData({
						...data,
						color: event.target.value,
					})
				}
				value={data.color}
			/>
		</>
	);
};

export default StepThree;
