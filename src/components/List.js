import React, { useContext } from 'react'

// Import Bootstrap
import ListGroup from 'react-bootstrap/ListGroup'

// Import Context
import { LanguageContext } from '../context/LanguageContext'

export default function List({ selectedNote, setSelectedNote, notes }) {
	const onSelectNote = (note) => {setSelectedNote(note)}
	const { lang } = useContext(LanguageContext)

  if (!notes.length) return <p>{lang['No_Notes_Found']}</p>
	return (
		<ListGroup as="ul">
			{notes.map((note, index) => (
				<ListGroup.Item
					active={selectedNote ? note.id === selectedNote.id : false}
					onClick={() => onSelectNote(note)}
					as="li"
				>
					{note.title}
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}
