import React, { useState }  from 'react'
import './addBook.css'

export const AddBook= ()=> {

    var [name,setName]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/staff/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been checked in!');
        })
    }

    return (
        <div className='name'>
            <form onSubmit={handleSubmit}>
                <label>Please enter the title of a book you rate highly:</label>
                <input required onChange={nameUpdate}></input>
                <button type="get recs"> Get Recommendations</button>
            </form>
        </div>
    )
    
}

export default AddBook
