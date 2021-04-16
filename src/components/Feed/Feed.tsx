import React, { useEffect } from 'react';
import './Feed.scss';
import { Moment } from 'moment';

interface FuncProps {
	setTitle(arg: string): void;
}

interface data {
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
}

const Feed: React.FC<FuncProps> = ({ setTitle }) => {
	const fetchedData = JSON.parse(localStorage.getItem('data') || '[]');
	useEffect(() => {
		setTitle('Collection');
	}, [setTitle]);
	return (
		<>
			<div className='cards-container'>
				{fetchedData.map((car: data) => {
					return <h1>{`${car.brand} ${car.model}`}</h1>;
				})}
			</div>
		</>
	);
};

export default Feed;
