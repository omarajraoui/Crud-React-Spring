import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
    const navigate = useNavigate();
    //to check if the data is loaded or not!
    const [loading, setloading] = useState(true);
    const [employees, setEmployees] = useState(null);
     
    useEffect(() => {
        const fetchData = async() =>{
            setloading(true);
            try {
                //data could use some time to render so we use the await
                //so we convert the method to async
                const response =await EmployeeService.getEmployees();
                setEmployees(response.data);
                
            } catch (error) {
                console.log(error);
            }
            setloading(false);
        };
        fetchData();

    }, []);
    

    //we define this function here in the parent 
    const deleteEmployee = (e,id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) =>{
            if(employees){
                setEmployees((prevElement) =>{
                    return prevElement.filter((employee) => employee.id !== id);
                })
            }
        })


    };
    

  return( <div className="container mx-auto my-8">
  <div className="h-12">
      <button onClick={() => navigate("/addEmployee")} className="rounded bg-slate-600 text-white mx-6 px-6 py-2"> Add Employee</button>
  </div>

<div className="flex shadow border-b">

    <table className="min-w-full mt-8">
        <thead className="bg-gray-50">
            <tr>
                <th className="text-left font-medium text-gray-500 upeprcase tracking-wider py-3 px-6">First Name</th>
                <th className="text-left font-medium text-gray-500 upeprcase tracking-wider py-3 px-6">Last Name</th>
                <th className="text-left font-medium text-gray-500 upeprcase tracking-wider py-3 px-6">Email Id</th>
                <th className="text-right font-medium text-gray-500 upeprcase tracking-wider py-3 px-6">Actions </th>
            </tr>
        </thead>
        {!loading && (
        <tbody className="bg-white">
            {/* jsx */}
            {employees.map((employee) => (
                <Employee 
                deleteEmployee={deleteEmployee} 
                employee={employee} 
                key={employee.id}></Employee>
            ) )}
        </tbody>
  )}
    </table>
</div>
  </div>
  
  );
};

export default EmployeeList;
