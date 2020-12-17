import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { LanguageContext } from './LanguageContext'

export default function LanguageButtons({ src, children }) {
	const { setLangCode } = useContext(LanguageContext)

	return (
		<>
			<Button onClick={() => setLangCode('sv')} variant="light" style={buttonStyles.margin}>🇸🇪</Button>
			<Button onClick={() => setLangCode('en')} variant="light" style={buttonStyles.margin}>🇱🇷</Button>
			<Button onClick={() => setLangCode('rvs')} variant="light" style={buttonStyles.margin}>🏴‍☠️</Button>
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