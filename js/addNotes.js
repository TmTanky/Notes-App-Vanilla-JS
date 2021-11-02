const notesInput = document.querySelector('.notesInput')
const addNotesButton = document.querySelector('.addNotes')
const statusTxt = document.querySelector('.status')
const allNotesContainer = document.querySelector('.allNotes')
import { generateID } from "./utils/generateID.js"

export const addNotesHandler = () => {
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
}