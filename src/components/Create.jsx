import React,{useState} from "react";


function Create(props){
    const [note,setNote]= useState({
        title:"",
        content:""
    });

    function handlechange(event){
            const {name,value} = event.target;

            setNote(prevNote =>{
                return{
                    ...prevNote,
                    [name]:value
                };
            })
    }

    function SubmitNote(event){
        props.onAdd(note)
        event.preventDefault(); //to prevent refreshing of page when button gets clicked
        
    }
    return(
        <div>
            <form className="create-note">
            <input name="title" onChange={handlechange} value={note.title}  placeholder="Title"></input>
            <textarea name="content" onChange={handlechange} value={note.content} placeholder="Take a note.." rows="3"></textarea>
            <button onClick={SubmitNote}>Add</button>



        </form>
        </div>

    );

}

export default Create;