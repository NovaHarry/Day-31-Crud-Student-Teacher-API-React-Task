import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StudentsBase from "../StudentsBase";
import { AppState } from "./Context/AppProvider";


export function AddStudents(){

    const {student, setStudent} = AppState();

    const history = useHistory();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [batch, setBatch]= useState("");

    const addNewStudent =async ()=>{

        const newStudent ={
            id,
            name,
            email,
            batch,
            experience
        }
        try{
        const response = await fetch(`https://641003bee1212d9cc926fce7.mockapi.io/users`,{
            method:"POST",
            body : JSON.stringify(newStudent),
            headers :{
                "Content-Type" :"application/json"
            }
        });

        const data = await response.json();

        setStudent([...student,data]);
        history.push('/students');
        if(!data){
            console.log("Cannot Add")
           }
        }
        catch(error){
            console.log(error);
        }
        
        
        
    }
    return(
        <StudentsBase
        title = "Add new Student">
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
                onClick={addNewStudent}>Add</button>
        </div>
        </StudentsBase>
    )

}