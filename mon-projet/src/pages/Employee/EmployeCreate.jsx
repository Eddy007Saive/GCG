import React, { useState } from 'react';
import { createEmploye } from '../../services/Employee';

function EmployeCreate() {
  const[formData,setFormData]=useState({
    nom:"",
    prenom:"",
    tel:"",
    sexe:"",
    image:null,
    poste:"",
    dateN:"",
    statu:"",
    departement:"",
    adresse:"",
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit=async()=>{
    await createEmploye(formData).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl lg:py-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Ajouter un Employé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Image Upload */}
          <div className="flex flex-col items-center ">
            <div className="relative w-48 h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            {formData.image && (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Employer"
                className=" w-full h-full"
              />
            )}
            </div>
           

          </div>

          {/* Right: Form Inputs */}
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Informations personnelles */}
              <div className="w-full">
                  <label
                    htmlFor="nom"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    onChange={handleImageChange}
                    type="file"
                    id="nom"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="image"
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
                  htmlFor="telephone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Téléphone
                </label>
                <input
                onChange={handleChange}
                value={formData.tel}
                  type="text"
                  name="telephone"
                  id="telephone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sexe"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sexe
                </label>
                <select
                onChange={handleChange}
                value={formData.sexe}
                  id="sexe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date_naissance"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date de naissance
                </label>
                <input
                  onChange={handleChange}
                  value={formData.dateN}
                  type="date"
                  name="date_naissance"
                  id="date_naissance"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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

              {/* Statut */}
              <div>
                <label
                  htmlFor="statut"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Statut
                </label>
                <select
                  onChange={handleChange}
                  value={formData.statu}
                  id="statut"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="Permanent">Permanent</option>
                  <option value="Temporaire">Temporaire</option>
                  <option value="Contrat">Contrat</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 text-sm font-medium text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 hover:bg-red-800"
            >
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EmployeCreate;
