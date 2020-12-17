import React from 'react'
import { themes } from './Themes'

export const ThemeContext = React.createContext(null)

const getThemeFromString = {
	dark: themes.dark,
	light: themes.light
}

export default function Provider({ children, theme }) {
	return (
		<ThemeContext.Provider value={getThemeFromString[theme]}>{children}</ThemeContext.Provider>
	)
}
