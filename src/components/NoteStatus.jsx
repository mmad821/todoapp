import React from 'react'

function NoteStatus({notes}) {

    const allnotes = notes.length;
    const completedNotes = notes.filter((note)=> note.completed).length;
    const openNotes = allnotes - completedNotes

    if(!allnotes) return <h2> No Notes has already been added</h2>
  return (
    <ul className='note-status'>

        <li>
            All <span>{allnotes}</span>
        </li>

        <li>
            Completed <span>{completedNotes}</span>
        </li>

        <li>
            Open <span>{openNotes}</span>
        </li>

    </ul>
  )
}

export default NoteStatus