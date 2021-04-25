import React, { useEffect } from 'react';
import Multiform from './components/Multiform/Multiform';

interface FuncProps {
	setTitle(arg: string): void;
	darkMode: boolean;
}

const Home: React.FC<FuncProps> = ({ setTitle, darkMode }) => {
	useEffect(() => {
		setTitle('Add Car');
	}, [setTitle]);
	return <Multiform darkMode={darkMode} />;
};

export default Home;
