import React, { useState } from 'react';
type colors = {
	colors: {
		primary: string;
		secondary: string;
	};
	changeColors: (color: string, which: string) => void;
};

export const ColorsContext = React.createContext<colors>({} as colors);

export const ColorsProvider: React.FC = ({ children }) => {
	const [colors, setColors] = useState({
		primary: localStorage.getItem('primary') || '#F47373',
		secondary: localStorage.getItem('secondary') || '#ba68c8',
	});
	const changeColors = (color: string, which: string) => {
		if (which === 'primary') {
			localStorage.setItem('primary', color);
			setColors({ ...colors, primary: color });
		} else if (which === 'secondary') {
			localStorage.setItem('secondary', color);
			setColors({ ...colors, secondary: color });
		}
	};

	return (
		<ColorsContext.Provider value={{ colors, changeColors }}>
			{children}
		</ColorsContext.Provider>
	);
};
