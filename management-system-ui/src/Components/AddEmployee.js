
import React from "react";
import EmployeeService from "../services/EmployeeService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const[employee , setEmployee]=useState({    
        id:"",
        firstName : "",
        lastName : "",
        emailId : "",
    } );

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({ ...employee , [e.target.name] : value });
    }

    const navigate =useNavigate();
    const saveEmployee = (e) =>{
         //disable refreshing the page
        e.preventDefault();
        //call api now from the service class
        EmployeeService.saveEmployee(employee)
        .then((response) =>{
            console.log(response);
            navigate("/employeeList");
        })
        .catch((err) =>{ console.log(err)});
       }

       const clearEmployee=(e) =>{
           e.preventDefault();
           setEmployee({    
            id:"",
            firstName : "",
            lastName : "",
            emailId : "",
            
        });
       };


  return (
  <div className="flex max-w-2xl mx-auto shadow-md border-b">
      <div className="px-8 py-8 ">
          <div className="font-thin text-2xl">
              <h1 >Add New Employee</h1>
          </div>
          <div className="item-center justify-center h-14 w-full my-4 mt-3">
              <label className="block text-gray-600 text-sm font-normal" htmlFor="">First Name</label>
              <input type="text" 
              name="firstName" 
              id=""  
              value={employee.firstName} 
              onChange={(e) =>handleChange(e)}
               className="h-10 w-96 mt-4 px-2 py-2"/>
          </div>

          <div className="item-center justify-center h-14 w-full my-4 mt-3">
              <label className="block text-gray-600 text-sm font-normal" htmlFor="">Last Name</label>
              <input type="text" 
              name="lastName" 
              id=""  
              value={employee.lastName} 
              onChange={(e) =>handleChange(e)}
               className="h-10 w-96 mt-4 px-2 py-2"/>
          </div>

          <div className="item-center justify-center h-14 w-full my-4 mt-3">
              <label className="block text-gray-600 text-sm font-normal mt-6" htmlFor="">Email</label>
              <input type="email"
               onChange={(e) =>handleChange(e)} 
               name="emailId" id="" 
               value={employee.emailId} 
                className="h-10 w-96 mt-4 px-2 py-2"/>
          </div>

          <div className="item-center justify-center h-14 w-full my-4 mt-3 space-x-4 pt-6">
             <button onClick={saveEmployee}
              className="rounded text-white font-semibold bg-green-500 hover:bg-green-800 py-2 px-6">
                 Save
            </button>
             <button onClick={clearEmployee} className="rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6">Clear</button>
        </div>
          
      </div>
      
  </div> );
};

export default AddEmployee;
