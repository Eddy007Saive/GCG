import apiClient from "../utils/ApiClient";
const url="/conge"
// Fonction pour récupérer tous les utilisateurs
export const getLeaves = () => apiClient.get(`${url}`);

export const findLeave = () => apiClient.get(`${url}/${id}`);

// Fonction pour créer un utilisateur
export const createLeave= async (data) => {
    try {
        const response=await apiClient.post(`${url}/create`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Fonction pour mettre à jour un utilisateur
export const updateLeave  = (id, data) => apiClient.put(`${url}/${id}`, data);

// Fonction pour supprimer un utilisateur
export const deleteLeave  = (id) => apiClient.delete(`${url}/${id}`);