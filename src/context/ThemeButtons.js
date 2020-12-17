import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { ThemeContext } from './ThemeContext'

export default function ThemeButtons({ src, children }) {
	const { setThemeCode } = useContext(ThemeContext)

	return (
		<>
			<Button onClick={() => setThemeCode('dark')} variant="dark" style={buttonStyles.margin}>Dark</Button>
			<Button onClick={() => setThemeCode('light')} variant="light" style={buttonStyles.margin}>Light</Button>
			<Button onClick={() => setThemeCode('party')} variant="warning" style={buttonStyles.margin}>Party</Button>
			<div>{children}</div>
		</>
	)
}

const buttonStyles = {
	margin: {
		marginRight: 10,
		marginBottom: 10
	},
}