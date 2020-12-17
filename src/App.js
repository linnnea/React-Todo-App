import React from 'react'
import Notes from './components/Notes'

import LanguageProvider from './context/LanguageContext'
import ThemeProvider from './context/ThemeContext'

export default function App() {
	return (
		<LanguageProvider initLangCode="sv">
			<ThemeProvider theme="light">
				<NoteWrapper />
			</ThemeProvider>
		</LanguageProvider>
	)
}

function NoteWrapper() {
	return <Notes />
}
