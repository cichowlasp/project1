import React, { useEffect } from 'react';
import Multiform from './components/Multiform/Multiform';

interface FuncProps {
	setTitle(arg: string): void;
}

const Home: React.FC<FuncProps> = ({ setTitle }) => {
	useEffect(() => {
		setTitle('Add Car');
	}, [setTitle]);
	return <Multiform />;
};

export default Home;
