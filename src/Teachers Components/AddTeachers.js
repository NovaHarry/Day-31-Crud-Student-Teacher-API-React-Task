import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Student Components/Context/AppProvider";
import TeachersBase from "../TeachersBase";


export function AddTeachers(){

    const {teacher, setTeacher} = AppState();

    const history = useHistory();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [batch, setBatch]= useState("");

    const addNewTeacher =async ()=>{
        const newTeacher ={
            id,
            name,
            email,
            batch,
            experience
        }
        try{
            const response = await fetch(`https://641003bee1212d9cc926fce7.mockapi.io/teachers`,{
            method:"POST",
            body : JSON.stringify(newTeacher),
            headers :{
                "Content-Type" :"application/json"
            }
        });

        const data = await response.json();

        setTeacher([...teacher,data]);
        history.push('/teachers');
        if(!data){
            console.log("Cannot Add")
           }

        }catch(error){
            console.log(error);
        }
        
        
    }
    return(
        <TeachersBase
        title = "Add Teacher Data">
        <div>
                <input 
                placeholder="id"
                value = {id}
                onChange={(e)=>setId(e.target.value)}
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
                onClick={addNewTeacher}>Add</button>
        </div>
        </TeachersBase>
    )

}