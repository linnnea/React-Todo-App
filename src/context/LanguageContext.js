import React, { useState } from 'react'
import en from './i18n/en.json'
import sv from './i18n/sv.json'
// Import rövarspråket
import rvs from './i18n/rvs.json'

export const LanguageContext = React.createContext(null)

const getLanguageFromString = {
	sv,
	en,
	rvs
}

export default function Provider({ children, initLangCode }) {
	const [langCode, setLangCode] = useState(initLangCode)
	const lang = getLanguageFromString[langCode]

	return (
		<LanguageContext.Provider value={{ lang, setLangCode }}>
			{children}
		</LanguageContext.Provider>
	)
}