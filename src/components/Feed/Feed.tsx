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
	search: string;
	darkMode: boolean;
	setSearch(arg: string): void;
}

const Feed: React.FC<FuncProps> = ({
	setTitle,
	fetchedData,
	search,
	setSearch,
	darkMode,
}) => {
	useEffect(() => {
		setTitle('Collection');
		setSearch('');
	}, [setTitle, setSearch]);

	return (
		<div className='cards-container'>
			{fetchedData
				// eslint-disable-next-line array-callback-return
				.filter((car: data) => {
					if (search === '') {
						return car;
					} else if (
						car.brand
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						car.model
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						(car.brand + car.model)
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						(car.model + car.brand)
							.toLowerCase()
							.includes(search.toLowerCase())
					) {
						return car;
					}
				})
				.map((car: data) => {
					return <CarInfo car={car} darkMode={darkMode} />;
				})}
		</div>
	);
};

export default Feed;
