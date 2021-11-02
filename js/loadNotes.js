const allNotesContainer = document.querySelector('.allNotes')
const allNotes = JSON.parse(localStorage.getItem('notes'))

export const loadNotesHandler = () => {
    if (allNotes) {
        allNotes.forEach((element, index) => {
            const noteContainer = document.createElement('div')
            noteContainer.classList.add('note')
            noteContainer.classList.add(`note-${element.id}`)
            const pTag = document.createElement('p')
            pTag.textContent = element.value
            noteContainer.append(pTag)
            allNotesContainer.appendChild(noteContainer)
        })
    }
}