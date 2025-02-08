import React, { useState, useEffect } from "react";
import Select from "react-select";
import {  getEmployees } from "../services/Employee";

const EmployeSelect = ({ onSelectChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remplace cette requête par celle qui récupère tous les employés
        const response = await getEmployees();

        // Formatage des options pour react-select
        const formattedOptions = response.data.data.map((emp) => ({
          value: emp.id,
          label: emp.nom,
        }));

        setOptions(formattedOptions);
      } catch (error) {
        console.error("Erreur de récupération:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelectChange(selected.value); // Appelle la fonction passée en prop
  };

  return (
    <div>
      <h2>Choisissez un Employé :</h2>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Sélectionner un Employé..."
      />
    </div>
  );
};

export default EmployeSelect;
