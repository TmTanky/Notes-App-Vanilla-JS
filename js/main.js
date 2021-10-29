const notesInput = document.querySelector('.notesInput')
const addNotesButton = document.querySelector('.addNotes')
const statusTxt = document.querySelector('.status')
const allNotes = document.querySelector('.allNotes')

addNotesButton.addEventListener('click', () => {

    const note = {
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
})

const myNotes = JSON.parse(localStorage.getItem('notes'))
const noteTexts = myNotes.map(note => {
    const pTag = document.createElement('p')
    const pText = document.createTextNode(note.value)
    return pTag.appendChild(pText)
})

console.log(noteTexts[2].data)

document.body.append(noteTexts.map(item => item.data))


