// import React from 'react'

// Import Bootstrap
// import ListGroup from 'react-bootstrap/ListGroup'

// Import helpers
// import { getNotes } from '../utils/noteHelpers'

// export default class List extends React.Component {
// 	state = { selectedNote: undefined }

// 	// const [selectedNote, setselectedNote] = useState(undefined)
// 	onSelectNote = (note) => {
// 		// setselectedNote(note)
// 		this.setState({ selectedNote: note })
// 	}

// 	render() {
// 		const { selectedNote } = this.state // this.state.selectedNote
// 		return (
// 			<ListGroup as="ul">
// 				<Notes onSelectNote={this.onSelectNote} selectedNote={selectedNote} />
// 			</ListGroup>
// 		)
// 	}
// }

// function Notes({ selectedNote, onSelectNote }) {
// 	return getNotes().map((note, index) => {
// 		return (
// 			<ListGroup.Item
// 				active={selectedNote ? note.id === selectedNote.id : false}
// 				onClick={() => onSelectNote(note)}
// 				as="li"
// 			>
// 				{note.title}
// 			</ListGroup.Item>
// 		)
// 	})
// }
