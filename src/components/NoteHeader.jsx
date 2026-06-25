
import { useState } from 'react'

function NoteHeader({notes,sortBy,onsort}) {
    
  return (
    <div className='note-header'>

        <h2>My notes({notes.length})</h2>
        <select value={sortBy} onChange={onsort}>

            <option value="latest">sort based latest notes</option>
            <option value="earlist">sort based earlist notes</option>
            <option value="completed">sort based completed notes</option>


        </select>

    </div>
  )
}

export default NoteHeader