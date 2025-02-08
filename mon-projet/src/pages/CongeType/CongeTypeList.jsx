import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getConge } from '../../services/Conge';



function CongeList() {
    const [conges, setConges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getConge();
                setConges(res.data);
            } catch (err) {
                console.error("Erreur lors du chargement des congés :", err);
                setError("Erreur lors du chargement des données.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-blue-600">Chargement en cours...</p>;
    }

    if (error) {
        return <p className="text-red-600">{error}</p>;
    }

    if (conges.length === 0) {
        return (
            <div>
                <div className="w-full flex items-center pb-5">
                    <Link to="create" className="flex gap-2 bg-green-200 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                        <p>Nouveau</p>
                    </Link>
                </div>
                <p>Aucun congé trouvé.</p>
            </div>
        );
    }

    return (
        <div className="relative overflow-x-auto">
            <h1 className="text-lg pb-4 font-bold">Liste des congés</h1>
            <div className="w-full flex items-center pb-5">
                <Link to="create" className="flex gap-2 bg-green-600 p-3 text-white hover:bg-green-300 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                    <p>Nouveau</p>
                </Link>
                
            </div>
            <div className="w-full pb-4 flex">
            <form action="">
          <input type="text" className=" w-100 focus:border-white  bg-blue-100 p-3  " placeholder="Rechercher" name="select"  />
          <input type="submit" className="bg-blue-600 p-3  hover:bg-blue-300 text-white " value="Rechercher" />
        </form>
            </div>
            <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-white uppercase bg-blue-600 rounded-lg">
                    <tr>
                        <th scope="col" className="px-6 py-4">Matricule</th>
                        <th scope="col" className="px-6 py-4">Type</th>
                        <th scope="col" className="px-6 py-4">Date début</th>
                        <th scope="col" className="px-6 py-4">Date fin</th>
                        <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {conges.map((conge) => (
                        <tr key={conge.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-blue-50">
                            <td className="px-6 py-4">{conge.matricule}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{conge.nom}</td>
                            <td className="px-6 py-4">{conge.adresse}</td>
                            <td className="px-6 py-4">{conge.poste}</td>
                            <td className="px-6 py-4">{conge.departement}</td>
                            <td className="px-6 py-4">
                                <Link to={`/dashboard/employe/${conge.id}`} className="inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </Link>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
}

export default CongeList;
