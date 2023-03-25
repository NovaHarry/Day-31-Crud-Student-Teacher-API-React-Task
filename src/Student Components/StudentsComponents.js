import React from "react";
import { useHistory } from "react-router-dom";
import StudentsBase from "../StudentsBase";
import { AppState } from "./Context/AppProvider";


export default function StudentsComponent() {
    const {student, setStudent} = AppState();
    const history = useHistory();
    

    const deleteStudent = async (idx)=>{
        try{
            const response = await fetch(`https://641003bee1212d9cc926fce7.mockapi.io/users/${idx}`,{
                method:"Delete",
            })

            const data = await response.json();

            const deletedStudentdata = student.filter((stud)=>stud.id !== idx)
            setStudent(deletedStudentdata);
            if(!data){
                console.log("Cannot Delete")
               }
            } 
              catch (error){
                console.log(error)
               }
            }
    
return (
        <StudentsBase
            title="Student Details">
            <div className="user-content">
                {student.map((student, idx) => (
                    <div key = {idx}className="user-card">
                        <h1>{student.name}</h1>
                        <p>Batch : {student.batch}</p>
                        <p>Email : {student.email}</p>
                        <p>Exp : {student.experience}</p>

                        <div className="btn-group">
                           <button className="btn card-btn"
                           onClick={()=>history.push(`/student/${idx}`)}
                           >
                            View</button>
                            <button className="btn card-btn"
                            onClick={()=>history.push(`/editStudent/${student.id}`)}
                            >
                            Edit</button>
                            <button className="btn del-btn"
                            onClick={()=>deleteStudent(student.id)}
                            >Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </StudentsBase>
    )
}