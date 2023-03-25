import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Student Components/Context/AppProvider";
import TeachersBase from "../TeachersBase";


const EditTeacher = () =>{

    const {teacher, setTeacher} = AppState();
    const history = useHistory();

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [batch, setBatch]= useState("");

    const {id} = useParams();

    const selectedTeacher = teacher.find((per) => per.id === id);
    
    useEffect(()=>{
        setIdx(selectedTeacher.id)
        setName(selectedTeacher.name)
        setEmail(selectedTeacher.email)
        setExperience(selectedTeacher.experience)
        setBatch(selectedTeacher.batch)
    },[]);

    const updateTeacher = async ()=>{

        const editIndex = teacher.findIndex(per => per.id === id);

        const updatedData ={
            id: idx,
            name,
            email,
            experience,
            batch
        }
        try{
            const response = await fetch(`https://641003bee1212d9cc926fce7.mockapi.io/teachers/${idx}`,{
                method:"PUT",
                body:JSON.stringify(updatedData),
                headers:{
                    "Content-Type":"application/json"
                }
            });

          const data = await response.json();
        
           teacher[editIndex] = data;
           setTeacher([...teacher]);
           history.push('/teachers');

           if(!data){
            console.log("Cannot Update");
           }
          }catch(error){
          console.log(error);
          }

    }

    return(
        <TeachersBase
        title = "Edit Teacher data">
        <div>
                <input 
                placeholder="id"
                value = {idx}
                onChange={(e)=>setIdx(e.target.value)}
                />
                <input 
                placeholder="name"
                value = {name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input 
                placeholder="email"
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                placeholder="experience"
                value = {experience}
                onChange={(e)=>setExperience(e.target.value)}
                />
                <input 
                placeholder="batch"
                value = {batch}
                onChange={(e)=>setBatch(e.target.value)}
                />
                <button
                onClick={updateTeacher}
                >Update</button>
        </div>
        </TeachersBase>
    )
}
export default EditTeacher;