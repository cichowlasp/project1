import React, { useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';
import './Multiform.scss';

const Multiform: React.FC = () => {
	const [step, setStep] = useState(1);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({
		brand: '',
		model: '',
		productionDate: new Date(),
		vehicleOperation: 0,
		fuelType: '',
		gearbox: '',
		cubicCapacity: 0,
		accidentFree: false,
		servicedASS: false,
		color: '',
		condition: '',
	});

	const returnStep = () => {
		switch (step) {
			case 1:
				return <StepOne data={data} setData={setData} />;
			case 2:
				return <StepTwo data={data} setData={setData} />;
			case 3:
				return <StepThree data={data} setData={setData} />;
			default:
		}
	};
	const nextStep = () => {
		setStep(step + 1);
	};
	const previousStep = () => {
		setStep(step - 1);
	};
	const saveData = () => {
		const savedData = JSON.parse(localStorage.getItem('data') || '[]');
		localStorage.setItem('data', JSON.stringify([...savedData, data]));
		setStep(1);
		setData({
			brand: '',
			model: '',
			productionDate: new Date(),
			vehicleOperation: 0,
			fuelType: '',
			gearbox: '',
			cubicCapacity: 0,
			accidentFree: false,
			servicedASS: false,
			color: '',
			condition: '',
		});
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	return (
		<div className='form-container'>
			<div className='fields-container'>{returnStep()}</div>
			<div className='button-container'>
				<Button
					onClick={previousStep}
					disabled={step === 1 ? true : false}
					variant='contained'
					color='secondary'>
					Back
				</Button>
				{step !== 3 ? (
					<Button
						onClick={nextStep}
						disabled={step === 3 ? true : false}
						variant='contained'
						color='primary'>
						Next
					</Button>
				) : (
					<Button
						onClick={saveData}
						variant='contained'
						color='primary'>
						Add
					</Button>
				)}
			</div>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message='Car added sucesfully'
			/>
		</div>
	);
};

export default Multiform;
