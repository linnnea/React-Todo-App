function initializeNotes() {
	localStorage.setItem('notes', JSON.stringify([]))
	return []
}

const archive = []

export function createNote(title, body) {
	const notes = getNotes()
	const note = {
		id: Date.now(),
		title,
		body
	}
	notes.unshift(note)
	const jsonNoteArray = JSON.stringify(notes)
	localStorage.setItem('notes', jsonNoteArray)
}

export function getNote(id) {
	const notes = getNotes()
	return notes.find((note) => note.id === id)
}

export function getNotes() {
	const notes = localStorage.getItem('notes')
	if (!notes) {
		return initializeNotes()
	}
	const parsedNotes = JSON.parse(notes)
	return parsedNotes
}

export function updateNote(id, title, body) {
	const notes = getNotes()
	const indexToUpdate = notes.findIndex((note) => note.id === id)
	const note = {
		id,
		title,
		body
	}
	notes.splice(indexToUpdate, 1)
	notes.splice(0, 0, note)
	const jsonNoteArray = JSON.stringify(notes)
	localStorage.setItem('notes', jsonNoteArray)
}

export function deleteNote(id) {
	const notes = getNotes()
	const indexToDelete = notes.findIndex((note) => note.id === id)
	if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
	const jsonNoteArray = JSON.stringify(notes)
	localStorage.setItem('notes', jsonNoteArray)
}

export function archiveNote(note) {
	archive.unshift(note)
	deleteNote(note.id)
}

export function unArchiveNote(note) {
	const notes = getNotes()
	notes.unshift(note)
	deleteFromArchive(note.id)
	const jsonNoteArray = JSON.stringify(notes)
	localStorage.setItem('notes', jsonNoteArray)
}

export function deleteFromArchive(id) {
	const notes = getNotes()
	const indexToDelete = archive.findIndex((note) => note.id === id)
	if (indexToDelete >= 0) archive.splice(indexToDelete, 1)
	const jsonNoteArray = JSON.stringify(notes)
	localStorage.setItem('notes', jsonNoteArray)
}

export function getArchive() {
	return archive
}
