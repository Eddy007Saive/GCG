import React, { useEffect, useState } from "react";
import { getEmployees } from "../../services/Employee";
import {Link} from "react-router-dom"
// import { EyeIcon } from '@heroicons/react/solid';

function EmployeList() {
  const [employees, setEmployees] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    getEmployees()
      .then((res) => {
        console.log(res.data); 
        if (Array.isArray(res.data.data)) {
          setEmployees(res.data.data); 
        } else {
          setEmployees([]);
          setError("Les données des employés ne sont pas sous le bon format.");
        }
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des employés :", error);
        setError("Erreur lors du chargement des données.");
        setIsLoading(false); 
      });
  }, []);

  if (isLoading) {
    return <p>Chargement des employés...</p>; 
  }

  if (error) {
    return <p className="text-red-600">{error}</p>; 
  }

  if (employees.length === 0) {
   
    return (
      <div>
          <div className="w-full flex-start flex pb-5 items-center  ">
            <Link to="create">Nouveau</Link>
          </div>
            <p>Aucun employé trouvé.</p>
      </div>
      ); 
  }

  return (
    <div className="relative overflow-x-auto">
      <h1 className="text-lg pb-4 font-bold ">Liste des employées</h1>
      <div className="w-full flex-start flex pb-5 items-center  ">
          <Link to="create">Nouveau</Link>
      </div>
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-white uppercase bg-blue-600">
          <tr>
            <th scope="col" className="px-6 py-4">Matricule</th>
            <th scope="col" className="px-6 py-4">Nom</th>
            <th scope="col" className="px-6 py-4">Adresse</th>
            <th scope="col" className="px-6 py-4">Poste</th>
            <th scope="col" className="px-6 py-4">Département</th>
            <th scope="col" className="px-6 py-4">Action</th>

          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="bg-white border-b transition duration-300 ease-in-out hover:bg-blue-50"
            >
              <td className="px-6 py-4">{emp.matricule}</td>
              <td className="px-6 py-4 font-medium text-gray-900">{emp.nom}</td>
              <td className="px-6 py-4">{emp.adresse}</td>
              <td className="px-6 py-4">{emp.poste}</td>
              <td className="px-6 py-4">{emp.departement}</td>
              <td className="px-6 py-4">
                <button>
                <Link to={`/dashboard/employe/${emp.id}`}>Voir</Link>
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeList;
