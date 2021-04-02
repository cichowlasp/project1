import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';
import './Multiform.scss';

const Multiform: React.FC = () => {
	const [step, setStep] = useState(1);
	const returnStep = () => {
		switch (step) {
			case 1:
				return <StepOne />;
			case 2:
				return <StepTwo />;
			case 3:
				return <StepThree />;
			default:
		}
	};
	const nextStep = () => {
		setStep(step + 1);
	};
	const previousStep = () => {
		setStep(step - 1);
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
				<Button onClick={nextStep} variant='contained' color='primary'>
					Next
				</Button>
			</div>
		</div>
	);
};

export default Multiform;
