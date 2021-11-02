const oneNote = document.getElementsByClassName('note')

export const deleteNotesHandler = () => {
    [...oneNote].map((note) => {
        note.addEventListener('click', (ctx) => {
            const allNotes = JSON.parse(localStorage.getItem('notes'))
            const addingNotes = [...allNotes].filter(note => `note-${note.id}` !== `${ctx.target.classList[1]}`)
            localStorage.setItem('notes', JSON.stringify(addingNotes))
        })
    })
}