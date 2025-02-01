import apiClient from "../utils/ApiClient";
const url="/conge"
// Fonction pour récupérer tous les utilisateurs
export const getConge = () => apiClient.get(`${url}`);

export const findConge = () => apiClient.get(`${url}/${id}`);

// Fonction pour créer un utilisateur
export const createConge= async (data) => {
    try {
        const response=await apiClient.post(`${url}/create`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Fonction pour mettre à jour un utilisateur
export const updateConge  = (id, data) => apiClient.put(`${url}/${id}`, data);

// Fonction pour supprimer un utilisateur
export const deleteConge  = (id) => apiClient.delete(`${url}/${id}`);