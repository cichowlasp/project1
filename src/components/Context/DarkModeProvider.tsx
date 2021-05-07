import React, { useState } from 'react';
type DarkMode = { darkMode: Boolean; toggleDarkMode: () => void };

export const ThemeContext = React.createContext<DarkMode>({} as DarkMode);

export const DarkModeProvider: React.FC = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('darkMode') || 'false')
	);
	const toggleDarkMode = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode));
		setDarkMode((prevState: boolean) => !prevState);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
