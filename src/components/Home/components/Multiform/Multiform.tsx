import React, { useState, MouseEvent } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import { Moment } from 'moment';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';

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

const Multiform: React.FC = () => {
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
					/>
				);
			default:
		}
	};
	const changeStep = (event: MouseEvent, action?: String) => {
		event.preventDefault();
		setStep((prevStep) => (action === '+' ? ++prevStep : --prevStep));
	};

	const saveData = (data: data) => {
		const savedData = JSON.parse(localStorage.getItem('data') || '[]');
		localStorage.setItem('data', JSON.stringify([...savedData, data]));
	};
	const onSubmit = (data: data) => {
		setValidation(false);
		setMessage('');
		saveData(data);
		reset();
		setStep(1);
		setOpen(true);
	};
	const onError = () => {
		setValidation(true);
		setMessage('Please check all the fields to correct errors');
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<FieldsContainer>{returnStep()}</FieldsContainer>
			<ButtonsContainer>
				<Button
					onClick={(event) => changeStep(event)}
					disabled={step === 1 ? true : false}
					variant='contained'
					color='secondary'>
					Back
				</Button>
				{step !== 3 ? (
					<Button
						type='submit'
						onClick={(event) => changeStep(event, '+')}
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
			</ButtonsContainer>
			<Message>{message}</Message>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message='Car added sucesfully'
			/>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	width: 50vw;
	flex-direction: column;
	justify-content: space-evenly;
`;

const FieldsContainer = styled.div`
	height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const Message = styled.div`
	height: 20px;
	color: red;
`;
export default Multiform;
