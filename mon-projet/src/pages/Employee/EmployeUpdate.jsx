import React, { useState, useEffect } from "react";
import { updateEmploye, getEmployeById } from "../../services/Employee";
import { useParams } from "react-router-dom";

function EmployeeUpdate() {
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    matricule: "",
    nom: "",
    prenom: "",
    tel: "",
    sexe: "",
    image: null,
    poste: "",
    dateN: "",
    statut: "",
    departement: "",
    adresse: "",
    date_embauche: ""
  });

  useEffect(() => {
    const fetchEmploye = async () => {
      try {
        const response = await getEmployeById(id);
        setFormData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmploye();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateEmploye(id, formData);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 p-4">
      <div className="mx-auto max-w-4xl lg:py-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Modifier un Employé
        </h2>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1  gap-6">
            {/* Left: Image Upload */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                {formData.image && (
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Employé"
                    className="w-full h-full"
                  />
                )}
              </div>
              <label
                htmlFor="image"
                className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                onChange={handleImageChange}
                type="file"
                id="image"
                name="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>

            {/* Right: Form Inputs */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Informations personnelles */}
             
              <div className="w-full">
                <label
                  htmlFor="nom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Matricule
                </label>
                <input
                  onChange={handleChange}
                  value={formData.matricule}
                  name="matricule"
                  id="matricule"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="nom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom
                </label>
                <input
                  onChange={handleChange}
                  value={formData.nom}
                  type="text"
                  name="nom"
                  id="nom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="prenom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prénom
                </label>
                <input
                  onChange={handleChange}
                  value={formData.prenom}
                  type="text"
                  name="prenom"
                  id="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="adresse"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adresse
                </label>
                <input
                  onChange={handleChange}
                  value={formData.adresse}
                  type="text"
                  name="adresse"
                  id="adresse"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="tel"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Téléphone
                </label>
                <input
                  onChange={handleChange}
                  value={formData.tel}
                  type="number"
                  name="tel"
                  id="tel"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="sexe"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sexe
                </label>
                <select
                  onChange={handleChange}
                  value={formData.sexe}
                  name="sexe"
                  id="sexe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="dateN"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date de naissance
                </label>
                <input
                  onChange={handleChange}
                  value={formData.dateN}
                  type="date"
                  name="dateN"
                  id="dateN"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>

              {/* Informations professionnelles */}
              <div>
                <label
                  htmlFor="poste"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Poste
                </label>
                <input
                  onChange={handleChange}
                  value={formData.poste}
                  type="text"
                  name="poste"
                  id="poste"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="poste"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Departement
                </label>
                <input
                  onChange={handleChange}
                  value={formData.date_embauche}
                  type="date"
                  name="date_embauche"
                  id="date_embauche"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="departement"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Département
                </label>
                <input
                  onChange={handleChange}
                  value={formData.departement}
                  type="text"
                  name="departement"
                  id="departement"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="statut"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Statut
                </label>
                <select
                  onChange={handleChange}
                  value={formData.statut}
                  name="statut"
                  id="statut"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="Permanent">Permanent</option>
                  <option value="Contractuel">Contractuel</option>
                </select>
              </div>
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
    </section>
  );
}

export default EmployeeUpdate;