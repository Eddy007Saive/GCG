import React, { useState } from 'react'
import EmployeSelect from '../../components/EmployeSelect';

function CongeCreate() {
  const [formData,setFormData]=useState({
    employee_id: null,
    leave_type_id: null,
    date_debut: "",
    date_fin: "",
    jours_pris: 0,
    motif: "",
    status: "",
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await createEmploye(formData);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
  
  return (
    <div className="w-full flex justify-center ">
        
        <form className='grid grid-cols-1 w-full gap-6 bg-white shadow-lg p-4 '  action="">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
         Congé
        </h2>
        <EmployeSelect />
        <div className="w-full">
                <label
                  htmlFor="nom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Employe
                </label>
                <input
                  onChange={handleChange}
                  value={formData.employee_id}
                  name="employee_id"
                  id="employee_id"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
          </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
                  <label
                    htmlFor="nom"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date début
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.date_debut}
                    name="date_debut"
                    id="date_debut"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
            </div>
            <div className="w-full">
                  <label
                    htmlFor="nom"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date fin
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.date_fin}
                    name="date_fin"
                    id="date_fin"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
            </div>
          </div>

         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <div className="w-full">
                <label
                  htmlFor="nom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre de jours
                </label>
                <input
                  onChange={handleChange}
                  value={formData.jours_pris}
                  name="jours_pris"
                  id="jours_pris"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
          </div>

          <div className="w-full">
                <label
                  htmlFor="nom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Motifs
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.motif}
                  name="motif"
                  id="motif"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                ></textarea>
          </div>
         </div>
          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Ajouter
            </button>
          </div>
        </form>
    </div>
  )
}

export default CongeCreate
