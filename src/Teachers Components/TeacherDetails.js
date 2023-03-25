import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Student Components/Context/AppProvider";
import TeachersBase from "../TeachersBase";


export function TeacherDetails(){
    const {teacher} = AppState();
    const {id} =  useParams();
    const person = teacher[id];
    const history = useHistory();
    return (
        <TeachersBase
        title = "User Details">
        <div className="user-content">
                    <div className="user-card">
                        <h1>{person.name}</h1>
                        <p>Batch : {person.batch}</p>
                        <p>Email : {person.email}</p>
                        <p>Exp : {person.experience}</p>
                        <button className="btn card-btn"
                        onClick={()=>history.push(`/editTeacher/${person.id}`)}
                        >
                        Edit</button>
                    </div>
                    
        </div>
        </TeachersBase>
    )
}