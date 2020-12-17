import React, { useState, useEffect, useContext } from 'react'

// Import Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

// Import Others
import {
	createNote,
	updateNote,
	deleteNote,
	deleteFromArchive,
	archiveNote,
	unArchiveNote
} from '../utils/noteHelpers'

// Import Context
import { LanguageContext } from '../context/LanguageContext'
import { ThemeContext } from '../context/ThemeContext'

const STATUS_INITIAL_VALUE = ''

export default function InputForm({
	selectedNote,
	refreshList,
	setSelectedNote,
	showArchive,
	setShowArchive,
	isArchived
}) {
	const [title, setTitle] = useState(STATUS_INITIAL_VALUE)
	const [body, setBody] = useState(STATUS_INITIAL_VALUE)
	const [status, setStatus] = useState(STATUS_INITIAL_VALUE)
	const [variant, setVariant] = useState(STATUS_INITIAL_VALUE)
	const { lang } = useContext(LanguageContext)
	const theme = useContext(ThemeContext)

	useEffect(
		() => {
			setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 2000)
		},
		[status]
	)

	useEffect(
		() => {
			if (selectedNote) return setTitle(selectedNote.title)
			setTitle(STATUS_INITIAL_VALUE)
		},
		[selectedNote]
	)

	useEffect(
		() => {
			if (selectedNote) return setBody(selectedNote.body)
			setBody(STATUS_INITIAL_VALUE)
		},
		[selectedNote]
	)

	useEffect(
		() => {
			if (selectedNote) return setVariant('')
		},
		[variant, selectedNote]
	)

	const onChangeTitle = (e) => setTitle(e.target.value)
	const onChangeBody = (e) => setBody(e.target.value)

	const onSave = (e) => {
		e.preventDefault()
		setTitle(STATUS_INITIAL_VALUE)
		setStatus('The note is saved')
		setVariant('success')
		setTitle('')
		setBody('')
		if (selectedNote) {
			updateNote(selectedNote.id, title, body)
			return refreshList()
		}

		createNote(title, body)
		refreshList()
	}

	const onDelete = (e) => {
		e.preventDefault()
		const { id } = selectedNote
		deleteNote(id)
		deleteFromArchive(id)
		refreshList()
		setTitle(STATUS_INITIAL_VALUE)
		setBody(STATUS_INITIAL_VALUE)
		setStatus('The note is deleted')
		setVariant('danger')
	}

	const handleArchive = (e) => {
		e.preventDefault()
		if (isArchived) {
			unArchiveNote(selectedNote)
		} else {
			archiveNote(selectedNote)
		}
		refreshList()
		setTitle('')
	}

	return (
		<Form style={{ ...theme }}>
			<Form.Group>
				<Form.Label>{lang['title']}</Form.Label>
				<Form.Control style={buttonStyles.marginBottom} size="lg" value={title} onChange={onChangeTitle} />
			</Form.Group>
			<Form.Group>
				<Form.Label>{lang['body']}</Form.Label>
				<Form.Control style={buttonStyles.marginBottom} size="lg" value={body} onChange={onChangeBody} as="textarea" />
			</Form.Group>
			<Button onClick={onSave} style={buttonStyles.marginRight} variant="success">
				<i className="fas fa-check" /> {lang['Save']}
			</Button>
			{selectedNote && (
				<Button onClick={onDelete} style={buttonStyles.marginRight} variant="danger">
					<i className="fas fa-trash" /> {lang['Delete']}
				</Button>
			)}
			{selectedNote && (
				<Button onClick={handleArchive} style={buttonStyles.marginRight} variant="secondary">
					<i class="fas fa-inbox" /> {isArchived ? (lang['UnArchive']) : (lang['Archive'])}
				</Button>
			)}
			{status && (
				<Alert className="mt-3" variant={variant}>
					{status}
				</Alert>
			)}
		</Form>
	)
}

const buttonStyles = {
	marginRight: {
		marginRight: 10
	},
	marginBottom: {
		marginBottom: 20
	}
}