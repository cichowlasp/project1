import React, { useEffect } from 'react';
import './Feed.scss';
import CarInfo from './components/CarInfo/CarInfo';
import { Moment } from 'moment';

interface data {
	brand: string;
	model: string;
	productionDate: Moment;
	vehicleOperation: number;
	fuelType: string;
	gearbox: string;
	cubicCapacity: number;
	accidentFree: boolean;
	servicedASS: boolean;
	color: string;
	condition: string;
}

interface FuncProps {
	setTitle(arg: string): void;
	fetchedData: data[];
}

const Feed: React.FC<FuncProps> = ({ setTitle, fetchedData }) => {
	useEffect(() => {
		setTitle('Collection');
	}, [setTitle]);
	return (
		<div className='cards-container'>
			{fetchedData.map((car: data) => {
				return <CarInfo car={car} />;
			})}
		</div>
	);
};

export default Feed;
