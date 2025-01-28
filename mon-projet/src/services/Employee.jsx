import apiClient from "../utils/ApiClient";
const url="/employees"
// Fonction pour récupérer tous les utilisateurs
export const getEmployees = () => apiClient.get(`${url}`);

export const findEmploye = () => apiClient.get(`${url}/${id}`);

// Fonction pour créer un utilisateur
export const createEmploye= async (data) => {
    try {
        const response=await apiClient.post(`${url}`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Fonction pour mettre à jour un utilisateur
export const updateEmploye  = (id, data) => apiClient.put(`${url}/${id}`, data);

// Fonction pour supprimer un utilisateur
export const deleteEmploye  = (id) => apiClient.delete(`${url}/${id}`);



