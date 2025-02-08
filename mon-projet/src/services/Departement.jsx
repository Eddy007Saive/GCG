import apiClient from "../utils/ApiClient";
const url="/departement"
// Fonction pour récupérer tous les utilisateurs
export const getDepartements = () => apiClient.get(`${url}s`).then(res=>res.data).catch(error=>error);

export const findDepartement = () => apiClient.get(`${url}/${id}`);

// Fonction pour créer un utilisateur
export const createDepartement= async (data) => {
    try {
        const response=await apiClient.post(`${url}/create`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Fonction pour mettre à jour un utilisateur
export const updateDepartement  = (id, data) => apiClient.put(`${url}/${id}`, data);

// Fonction pour supprimer un utilisateur
export const deleteDepartement  = (id) => apiClient.delete(`${url}/${id}`);