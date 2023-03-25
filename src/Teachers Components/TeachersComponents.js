import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Student Components/Context/AppProvider";
import TeachersBase from "../TeachersBase";

export default function TeachersComponent() {
    const {teacher, setTeacher} = AppState();
    const history = useHistory();
    

    const deleteTeacher = async (idx)=>{
        try{
            const response = await fetch(`https://641003bee1212d9cc926fce7.mockapi.io/teachers/${idx}`,{
                method:"Delete",
            })

        const data = await response.json();

        const deletedTeachersdata = teacher.filter((teach)=>teach.id !== idx)
        setTeacher(deletedTeachersdata);
        if(!data){
            console.log("Cannot Delete")
           }
        }catch(error){
            console.log(error)
        }
    

}
return (
        <TeachersBase
            title="Teacher Details">
            <div className="user-content">
                {teacher.map((teacher, idx) => (
                    <div key = {idx}className="user-card">
                        <h1>{teacher.name}</h1>
                        <p>Batch : {teacher.batch}</p>
                        <p>Email : {teacher.email}</p>
                        <p>Exp : {teacher.experience}</p>

                        <div className="btn-group">
                           <button className="btn card-btn"
                           onClick={()=>history.push(`/teacher/${idx}`)}
                           >
                            View</button>
                            <button className="btn card-btn"
                            onClick={()=>history.push(`/editTeacher/${teacher.id}`)}
                            >
                            Edit</button>
                            <button className="btn del-btn"
                            onClick={()=>deleteTeacher(teacher.id)}
                            >Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </TeachersBase>
    )
}