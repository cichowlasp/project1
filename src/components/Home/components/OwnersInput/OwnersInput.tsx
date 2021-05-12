import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import {
	FieldValues,
	UseFormSetValue,
	UseFormRegister,
	UseFormGetValues,
} from 'react-hook-form';
import { ThemeContext } from '../../../Context/Context';
import { DarkMode, WhiteMode } from '../../../../consts/colors';

interface FuncProps {
	label: string;
	error: boolean;
	key: string;
	style: {
		color: string;
	};
	helperText: string;
	setValue: UseFormSetValue<FieldValues>;
	validation: boolean;
	register: UseFormRegister<FieldValues>;
	getValues: UseFormGetValues<FieldValues>;
}

const OwnersInput: React.FC<FuncProps> = ({
	label,
	error,
	key,
	style,
	helperText,
	validation,
	setValue,
	register,
	getValues,
}) => {
	const [owners, setOwners] = useState<string[]>(getValues('owners') || []);
	const [owner, setOwner] = useState(getValues('owner') || '');
	const { darkMode } = useContext(ThemeContext);
	const handleClick = () => {
		const tempOwners = [...owners, owner];
		setOwners(tempOwners);
		setValue('owners', tempOwners);
		setOwner('');
		setValue('owner', '');
	};

	const remove = (index: number) => {
		const tempOwners = owners.filter((el) => el !== owners[index]);
		setOwners(tempOwners);
		setValue('owners', tempOwners);
	};

	return (
		<Container>
			<Wrapper>
				<StyledTextField
					label={label}
					error={error}
					key={key}
					style={style}
					helperText={helperText}
					value={owner}
					defaultValue={owner}
					onChange={(event) => {
						setOwner(event.target.value);
						setValue('owner', event.target.value);
					}}
				/>
				<Button
					disabled={owner.trim().length < 3 || error}
					variant='contained'
					color='primary'
					onClick={handleClick}>
					Add
				</Button>
			</Wrapper>
			<Owners darkMode={darkMode}>
				Owners:
				{owners.map((name, index) => (
					<Item>
						<div className='name'>{name}</div>
						<div className='remove' onClick={() => remove(index)}>
							x
						</div>
					</Item>
				))}{' '}
			</Owners>
		</Container>
	);
};

interface darkMode {
	darkMode: Boolean;
}

const Container = styled.div`
	width: 100%;
`;
const StyledTextField = styled(TextField)`
	width: 90%;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Owners = styled.div<darkMode>`
	display: flex;
	height: 10vh;
	width: 100%;
	align-items: center;
	color: ${({ darkMode }) => (darkMode ? WhiteMode : DarkMode)};
	overflow: scroll; /* Show horizontal scrollbar */
`;

const Item = styled.div`
	display: flex;
	background-color: #bbbbbb;
	margin-left: 5px;
	padding: 5px;
	.name {
		margin: 0 0.5vw;
	}
	border-radius: 10px;

	.remove {
		text-align: center;
		font-size: 13px;
		font-weight: bold;
		width: 17px;
		height: 17px;
		background-color: red;
		border-radius: 100%;
		&:hover {
			cursor: pointer;
		}
	}
`;

export default OwnersInput;
