import './App.css';
import StudentsComponents from './Student Components/StudentsComponents';
import { Route, Switch } from 'react-router-dom';
import { AddStudents } from './Student Components/AddStudents';
import { StudentDetails } from './Student Components/StudentDetails';
import EditStudent from './Student Components/EditStudent';
import MainPage from './MainPage';
import TeachersComponent from './Teachers Components/TeachersComponents';
import { AddTeachers } from './Teachers Components/AddTeachers';
import { TeacherDetails } from './Teachers Components/TeacherDetails';
import EditTeacher from './Teachers Components/EditTeachers';


function App() {
 
  return (
    <div className="App">

      <Switch>
        <Route exact path ="/">
          <MainPage/>
        </Route>
        <Route exact path = "/students">
        <StudentsComponents/>
        </Route>
        <Route path = "/add/student">
          <AddStudents/>
        </Route>
        <Route path="/student/:id">
          <StudentDetails/>
        </Route>
        <Route path="/editStudent/:id">
          <EditStudent/>
        </Route>
        <Route exact path = "/teachers">
        <TeachersComponent/>
        </Route>
        <Route path = "/add/teacher">
          <AddTeachers/>
        </Route>
        <Route path="/teacher/:id">
          <TeacherDetails/>
        </Route>
        <Route path="/editTeacher/:id">
          <EditTeacher/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
