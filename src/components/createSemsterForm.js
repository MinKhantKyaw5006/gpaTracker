import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./createSemsterForm.css";
export default function CreateSemsterForm({myGPA, createSemster}) {
    return (
            (myGPA.length >= 4 && myGPA.filter(o => o.grade == 0).length == 0)  && 
                <form className="create-semester-form" onSubmit={createSemster}>
                    <input placeholder="Type Semster Name" name="name"></input>
                    <button>Create Semster</button>
                </form>
    )
}


