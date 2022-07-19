import Navbar from "./Components/Navbar";
import "./App.css";
import AddEmployee from "./Components/AddEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./Components/EmployeeList";
import UpdateEmployee from "./Components/UpdateEmployee";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;