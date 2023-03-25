import React, { createContext, useContext, useState, useEffect } from 'react'



const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);


  useEffect(() => {
    const getStudentDetails = async ()=>{
      try{
        const response = await fetch('https://641003bee1212d9cc926fce7.mockapi.io/users',{
          method:"GET",
        });
      const data = await response.json();
      setStudent(data);
      if(!data){
        console.log("Unable to fetch Data")
       } 
      }
      catch (error){
        console.log(error);
       }
      }
      getStudentDetails();
  },[]);


  useEffect(() => {
  const getTeacherDetails = async ()=>{
    try{
      const response = await fetch('https://641003bee1212d9cc926fce7.mockapi.io/teachers',{
        method:"GET",
      });
    const data = await response.json();

    setTeacher(data);
    if(!data){
      console.log("Unable to fecth Data")
     } 
    }
    catch (error){
      console.log(error);
     }
    }
    getTeacherDetails();
},[]);

return (
  <AppContext.Provider
    value={{
        student,
        setStudent,
        teacher,
        setTeacher
    }}
  >
    {children}
  </AppContext.Provider>
)
}

export const AppState = () => {
  return useContext(AppContext)
}

export default AppProvider;