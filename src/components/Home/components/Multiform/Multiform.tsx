import React, { useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';
import './Multiform.scss';

const Multiform: React.FC = () => {
	const [step, setStep] = useState(1);
	const [message, setMessage] = useState('');
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(true);
	const [errors, setErrors] = useState({
		brand: '',
		model: '',
		productionDate: '',
		vehicleOperation: '',
		fuelType: '',
		gearbox: '',
		cubicCapacity: '',
		accidentFree: '',
		servicedASS: '',
		color: '',
		condition: '',
	});
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

	const checkIfError = (tempErrors: any) => {
		for (const error in tempErrors) {
			if (tempErrors[error].length !== 0) {
				return true;
			}
		}
		return false;
	};
	const validateObject = () => {
		if (step === 1 && (data.brand === '' || data.model === '')) {
			return false;
		}
		return true;
	};
	const validateInput = (event: any) => {
		const { name, value } = event.target;
		let tempErrors = errors;

		switch (name) {
			case 'brand':
				tempErrors.brand =
					value.length === 0 ? "This field can't be empty" : '';
				break;
			case 'model':
				tempErrors.model =
					value.length === 0 ? "This field can't be empty" : '';
				break;
			case 'vehicleOperation':
				tempErrors.vehicleOperation =
					value === 0 || value < 0
						? "Number can't be lower or equal 0"
						: '';
				break;
			default:
				break;
		}
		setErrors(tempErrors);
		setError(checkIfError(tempErrors));
		console.log(errors);
		console.log(error);
	};

	const returnStep = () => {
		switch (step) {
			case 1:
				return (
					<StepOne
						data={data}
						validateInput={validateInput}
						errors={errors}
						setData={setData}
					/>
				);
			case 2:
				return <StepTwo data={data} setData={setData} />;
			case 3:
				return <StepThree data={data} setData={setData} />;
			default:
		}
	};
	const nextStep = () => {
		console.log(validateObject());
		if (validateObject()) {
			setMessage(' ');
			setStep(step + 1);
		} else {
			setMessage('check if all fields are filled!');
		}
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
						disabled={step === 3 || error ? true : false}
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
			<div className='message'>{message}</div>
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
