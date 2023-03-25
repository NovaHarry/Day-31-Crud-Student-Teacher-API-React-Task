import React from "react";
import { useHistory, useParams } from "react-router-dom";
import StudentsBase from "../StudentsBase";
import { AppState } from "./Context/AppProvider";


export function StudentDetails(){
    const {student} = AppState();
    const {id} =  useParams();
    const person = student[id];
    const history = useHistory();
    return (
        <StudentsBase
        title = "User Details">
        <div className="user-content">
                    <div className="user-card">
                        <h1>{person.name}</h1>
                        <p>Batch : {person.batch}</p>
                        <p>Email : {person.email}</p>
                        <p>Exp : {person.experience}</p>
                        <button className="btn card-btn"
                        onClick={()=>history.push(`/editStudent/${person.id}`)}
                        >
                        Edit</button>
                    </div>
                    
        </div>
        </StudentsBase>
    )
}