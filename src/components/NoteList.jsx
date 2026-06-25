import React from 'react'

function NoteList({notes,onDelite,onCompleted,sortBy}) {

    
   let sortedNotes = notes;
   if(sortBy === "earlist")sortedNotes=[...notes].sort((a,b)=> new Date(a.createdAt)- new Date(b.createdAt));


   if(sortBy === "latest")sortedNotes=[...notes].sort((a,b)=> new Date(b.createdAt)- new Date(a.createdAt));


   if(sortBy === "completed")sortedNotes=[...notes].sort((a,b)=> Number(a.completed)-Number(b.completed))

  return (
    <div className='note-list'>

        
        {
           sortedNotes.map((note)=><NoteItem key={note.id} note={note} onDelite={onDelite} onCompleted={onCompleted}/>)
        }

    </div>
  )
}

export default NoteList


function NoteItem({note,onDelite,onCompleted}){

     const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

    return(<div className={`note-item ${note.completed ? "completed":""}`}>

    <div className='note-item__header'>

        <div>
            <p className="title">{note.titel}</p>
            <p className='desc'>{note.desdcription}</p>
        </div>

        <div className='actions'>

            <button onClick={()=>onDelite(note.id)}>✖</button>
            <input type="checkbox" id={note.id} value={note.id} checked={note.completed} onChange={onCompleted}/>

        </div>
    </div>
    <div className='note-item__footer'>
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
    </div>

    </div>
    )

}