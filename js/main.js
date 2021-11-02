const notesInput = document.querySelector('.notesInput')
const addNotesButton = document.querySelector('.addNotes')
const statusTxt = document.querySelector('.status')
const allNotesContainer = document.querySelector('.allNotes')
const allNotes = JSON.parse(localStorage.getItem('notes'))

const generateID = (length) => {
	if (length > 15) {
		throw Error('Length must be 15 below.')
	}
	const id = []
	const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*`
	for (let counter = 0; counter < length; counter++) {
		const randomCharacter = Math.floor(Math.random() * 69 + 1)
		id.push(characters[randomCharacter])
	}
	return id.join('')
}

if (allNotes) {
	allNotes.forEach((element, index) => {
		console.log(index)
		const noteContainer = document.createElement('div')
		noteContainer.classList.add('note')
		noteContainer.classList.add(`note-${element.id}`)
		const pTag = document.createElement('p')
		pTag.textContent = element.value
		noteContainer.append(pTag)
		allNotesContainer.appendChild(noteContainer)
	})
}

addNotesButton.addEventListener('click', () => {
	const note = {
		id: generateID(10),
		value: notesInput.value,
		date: new Date().toDateString()
	}

	if (!notesInput.value) {
		notesInput.style.borderColor = 'red'
		statusTxt.innerHTML = 'Please input a valid note.'
		document.body.append(error)
		setTimeout(() => {
			statusTxt.innerHTML = ''
		}, 2000)
	}

	statusTxt.innerHTML = 'Note added.'

	if (!localStorage.getItem('notes')) {
		const newNotes = [note]
		notesInput.value = ''
		localStorage.setItem('notes', JSON.stringify(newNotes))
		return
	}

	const allNotes = JSON.parse(localStorage.getItem('notes'))
	const addingNotes = [...allNotes, note]
	localStorage.setItem('notes', JSON.stringify(addingNotes))
	notesInput.value = ''
	setTimeout(() => {
		statusTxt.innerHTML = ''
	}, 2000)

	const noteContainer = document.createElement('div')
	noteContainer.classList.add('note')
	const pTag = document.createElement('p')
	pTag.textContent = note.value
	noteContainer.appendChild(pTag)
	allNotesContainer.appendChild(noteContainer)
})

// const oneNote = document.querySelectorAll('.note')
const oneNote = document.getElementsByClassName('note')

const yawa = [...oneNote].map((note) => {
	note.addEventListener('click', (ctx) => {
		const allNotes = JSON.parse(localStorage.getItem('notes'))
		const addingNotes = [...allNotes].filter(note => `note-${note.id}` !== `${ctx.target.classList[1]}`)
		localStorage.setItem('notes', JSON.stringify(addingNotes))
	})
})
