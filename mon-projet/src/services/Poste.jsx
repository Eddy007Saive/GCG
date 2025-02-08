import apiClient from "../utils/ApiClient";
const url="/poste"
// Fonction pour récupérer tous les utilisateurs
export const getPostes = () => apiClient.get(`postes`).then(res=>res.data).catch(error=>error);


export const findPoste = () => apiClient.get(`${url}/${id}`);

// Fonction pour créer un utilisateur
export const createPoste= async (data) => {
    try {
        const response=await apiClient.post(`${url}/create`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Fonction pour mettre à jour un utilisateur
export const updatePoste  = (id, data) => apiClient.put(`${url}/${id}`, data);

// Fonction pour supprimer un utilisateur
export const deletePoste  = (id) => apiClient.delete(`${url}/${id}`);