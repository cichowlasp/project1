import React, { useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';
import './Multiform.scss';

interface FuncProps {
	darkMode: boolean;
}

const Multiform: React.FC<FuncProps> = ({ darkMode }) => {
	const [step, setStep] = useState(1);
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [validation, setValidation] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		getValues,
		watch,
		setValue,
		reset,
		formState: { errors },
	} = useForm();

	const returnStep = () => {
		switch (step) {
			case 1:
				return (
					<StepOne
						register={register}
						control={control}
						getValues={getValues}
						watch={watch}
						setValue={setValue}
						errors={errors}
						validation={validation}
						darkMode={darkMode}
					/>
				);
			case 2:
				return (
					<StepTwo
						register={register}
						control={control}
						getValues={getValues}
						setValue={setValue}
						errors={errors}
						validation={validation}
					/>
				);
			case 3:
				return (
					<StepThree
						register={register}
						control={control}
						getValues={getValues}
						setValue={setValue}
						errors={errors}
						validation={validation}
						darkMode={darkMode}
					/>
				);
			default:
		}
	};
	const nextStep = (event: any) => {
		event.preventDefault();
		setStep(step + 1);
	};
	const previousStep = (event: any) => {
		setStep(step - 1);
	};
	const saveData = (data: any) => {
		setValidation(false);
		setMessage('');
		const savedData = JSON.parse(localStorage.getItem('data') || '[]');
		localStorage.setItem('data', JSON.stringify([...savedData, data]));
		reset();
		setStep(1);
		setOpen(true);
	};

	const onError = () => {
		setValidation(true);
		setMessage('Please check all the fields to correct erros');
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<form
			className='form-container'
			onSubmit={handleSubmit(saveData, onError)}>
			<div className='fields-container'>{returnStep()}</div>
			<div className='button-container'>
				<Button
					onClick={(event) => previousStep(event)}
					disabled={step === 1 ? true : false}
					variant='contained'
					color='secondary'>
					Back
				</Button>
				{step !== 3 ? (
					<Button
						type='submit'
						onClick={(event) => nextStep(event)}
						disabled={step === 3 ? true : false}
						variant='contained'
						color='primary'>
						Next
					</Button>
				) : (
					<Button type='submit' variant='contained' color='primary'>
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
		</form>
	);
};

export default Multiform;
