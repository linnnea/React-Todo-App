import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { LanguageContext } from '../context/LanguageContext'
import { ThemeContext } from '../context/ThemeContext'
import List from './List'
import Editor from './Editor'
import { getNotes, getArchive } from '../utils/noteHelpers'
import LanguageButtons from '../context/LanguageButtons'

export default function Notes() {
	const [selectedNote, setSelectedNote] = useState(undefined)
	const [showArchive, setShowArchive] = useState(false)
	const [notes, setNotes] = useState([])
	const [archivedNotes, setArchivedNotes] = useState([])
	const { lang } = React.useContext(LanguageContext)
	const theme = useContext(ThemeContext)
	const onClickNewNote = () => setSelectedNote(undefined)

	useEffect(() => {
		const notes = getNotes()
		setNotes(notes)
	}, [])

	const refreshList = () => {
		setSelectedNote(undefined)
		const notes = getNotes()
		const archivedNotes = getArchive()
		setNotes([...notes])
		setArchivedNotes(archivedNotes)
	}

	return (
		<Container>
			<Jumbotron fluid>
				<h1>{lang['Todo_App']}</h1>
			</Jumbotron>
			<Row>
				<Col xs={12} md={3} lg={3}>
					<Button onClick={onClickNewNote} style={buttonStyles.marginBottom} variant="dark" block>
						{lang['New_Note']}
					</Button>
					<List
						notes={showArchive ? archivedNotes : notes}
						selectedNote={selectedNote}
						setSelectedNote={setSelectedNote}
					/>
					<Button
						onClick={() => setShowArchive(!showArchive)}
						style={buttonStyles.marginTop}
						variant={showArchive ? 'primary' : 'secondary'}
						block
					>
						{showArchive ? (
							<i class="far fa-sticky-note" />
						) : (
							<i class="fas fa-inbox" />
						)}{' '}
						{showArchive ? (lang['Notes']) : (lang['Archive'])}
					</Button>
				</Col>
				<Col xs={6} md={7} lg={6}>
					<Editor
						style={{ ...theme }}
						refreshList={refreshList}
						selectedNote={selectedNote}
						showArchive={showArchive}
						setShowArchive={setShowArchive}
						isArchived={showArchive}
					/>
				</Col>
				<Col xs={6} md={2} lg={3}>
					<LanguageButtons>
						<p>{lang['caption']}</p>
					</LanguageButtons>
				</Col>
			</Row>
		</Container>
	)
}

const buttonStyles = {
	marginTop: {
		marginTop: 20
	},
	marginBottom: {
		marginBottom: 20
	}
}