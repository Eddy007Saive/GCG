import React ,{useEffect}from "react";
import { getEmployees } from "../../services/Employee";
function EmployeList() {
  const employees = [
    { name: "Alice Dupont", role: "Développeur", department: "IT", salary: "€3,500" },
    { name: "Jean Martin", role: "Designer", department: "Marketing", salary: "€2,800" },
    { name: "Sophie Lambert", role: "Manager", department: "RH", salary: "€4,200" },
  ];

  useEffect(()=>{
        getEmployees().then(res=>{
          console.log(res)
        }).catch(error=>{
          console.log(error)
        })
     },[])

  return (
   

<div class="relative overflow-x-auto">
<table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-white uppercase bg-blue-600">
            <tr>
              <th scope="col" className="px-6 py-4">Nom</th>
              <th scope="col" className="px-6 py-4">Rôle</th>
              <th scope="col" className="px-6 py-4">Département</th>
              <th scope="col" className="px-6 py-4">Salaire</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr
                key={index}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-blue-50"
              >
                <th className="px-6 py-4 font-medium text-gray-900">{emp.name}</th>
                <td className="px-6 py-4">{emp.role}</td>
                <td className="px-6 py-4">{emp.department}</td>
                <td className="px-6 py-4 font-semibold text-gray-700">{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
</div>

  );
}

export default EmployeList;
