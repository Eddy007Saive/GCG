import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getEmployee, getEmployees } from "../services/Employee";

const EmployeSelect = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployee(); // Assurez-vous que cette fonction retourne une promesse
        console.log(response);
        
        // setOptions(formattedOptions);
      } catch (error) {
        console.error("Erreur de récupération:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Choisissez un Employé :</h2>
      <Select
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        placeholder="Sélectionner un Employé..."
      />
      {selectedOption && <p>Vous avez sélectionné : {selectedOption.label}</p>}
    </div>
  );
};

export default EmployeSelect;
