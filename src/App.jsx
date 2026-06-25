import React, { useState } from 'react'
import "./App.css"
import AddNewNote from './components/AddNewNote'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus';
import NoteHeader from './components/NoteHeader';

function App() {
   const [notes,setNotes] = useState([]);
   const [sortBy,setSortBy]=useState("latest")


   const handelAddNote =(newNote)=>{

     setNotes((prevNotes)=> [...prevNotes,newNote])

   }
   
   const handelDilet = (id)=>{

    const filterdNotes = notes.filter(note=> note.id !==id)

    setNotes(filterdNotes)
  
   }

   const handelCompletedNote = (e)=>{

    const noteId = Number(e.target.value)
    const newNotes = notes.map(note => note.id === noteId?{...note,completed:!note.completed}:note)
    setNotes(newNotes)

   }


  return (
    <div className='container'>

    <NoteHeader notes={notes} sortBy={sortBy} onsort={(e)=> setSortBy(e.target.value)}/>
    <div className='note-app'>
     <AddNewNote onAddNote={handelAddNote}/>
      <div className='note-container'>
        <NoteStatus notes={notes}/>
        <NoteList notes={notes} sortBy={sortBy} onDelite={handelDilet} onCompleted ={handelCompletedNote} />
      </div>
    </div>

    </div>
  )
}

export default App