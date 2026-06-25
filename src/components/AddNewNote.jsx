import React, { useState } from 'react'

function AddNewNote({onAddNote}) {
    const [titel,setTitel]= useState("")
    const [desdcription,setDescription] = useState("")
   

    const handelsubmite = (e)=>{

        if(!titel || !desdcription) return null

        e.preventDefault();
        const newNote = {
            titel,desdcription,
            id:Date.now(),
            completed:false,
            createdAt: new Date().toISOString()
        }
        onAddNote(newNote)
       setTitel("")
       setDescription("")
      
        
    }


  return (
    <div className='add-new-note'>
        
        <h2>Add new note</h2>
        <form className='note-form' onSubmit={handelsubmite}>
            <input type="text" className='text-field' value={titel} onChange={(e)=>setTitel(e.target.value)} placeholder='Note title'/>
            <input type="text" className='text-field' value={desdcription} onChange={(e)=> setDescription(e.target.value)} placeholder='Note description' />
            <button type='submit' className='btn btn--primary'>Add New Note</button>
        </form>

    </div>
  )
}

export default AddNewNote