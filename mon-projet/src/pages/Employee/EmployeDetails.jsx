import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findEmploye } from '../../services/Employee';
function EmployeDetails() {
  const {id}=useParams();
  const [employe,setEmploye]=useState(null)
  const [loading,setLoading]=useState(true)

  useEffect( ()=>{
    const fetchData=async()=>{
      await findEmploye(id)
      .then(employe=>
        {
        setEmploye(employe.data)
        setLoading(false)
      })
      .catch(error=>{
        setLoading(false)
      })

    }
    fetchData()
  },[])

  if (!employe) {
    return <div>Chargement...</div>;
  }
  
  return (
        <section className="bg-white dark:bg-gray-900 p-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Détails de l'Employé
        </h2>
      <div className="">
        <div className="grid grid-cols-1 gap-6">
          {/* Image */}
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {employe.image && (
                <img
                  src={employe.image}
                  alt="Employé"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-900 dark:text-white">Image de l'employé</p>
          </div>

          {/* Informations personnelles */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Matricule</p>
              <p>{employe.matricule}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Nom</p>
              <p>{employe.nom}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Prénom</p>
              <p>{employe.prenom}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Téléphone</p>
              <p>{employe.tel}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Sexe</p>
              <p>{employe.sexe}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Date de Naissance</p>
              <p>{new Date(employe.dateN).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Adresse</p>
              <p>{employe.adresse}</p>
            </div>
          </div>

          {/* Informations professionnelles */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Poste</p>
              <p>{employe.poste}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Département</p>
              <p>{employe.departement}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Date d'Embauche</p>
              <p>{new Date(employe.date_embauche).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Statut</p>
              <p>{employe.statut}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeDetails
