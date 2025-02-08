import React, { useEffect, useState } from "react";
import { getDepartements } from "../../services/Departement";
import { createPoste } from "../../services/Poste";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { posteSchema } from "../../validations/posteSchema";

function PosteCreate() {
  const [departements, setDepartement] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDepartements();
        setDepartement(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const methods = useForm({
    resolver: yupResolver(posteSchema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },reset
  } = methods;



  const onSubmit = async () => {
 
    try {
      const response = await createPoste(formData);
      console.log(response);
      reset()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...methods}
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-xl p-8 max-w-lg w-full backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Ajouter un Poste
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-900"
            >
              Poste
            </label>
            <input
              {...register("nom")}
              name="nom"
              id="nom"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
             <ErrorMessage
                errors={errors}
                name="nom"
                as="p"
                className="text-red-500"
              />
          </div>

          <div>
            <label
              htmlFor="departementId"
              className="block text-sm font-medium text-gray-900"
            >
              Département
            </label>
            <select
               {...register("departementId")}
              name="departementId"
              id="departementId"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" className="text-center">-- Sélectionnez --</option>
              {departements.map((dep) => (
                <option className="text-center" key={dep.id} value={dep.id}>
                  {dep.nom}
                </option>
              ))}
            </select>
            <ErrorMessage
                errors={errors}
                name="departementId"
                as="p"
                className="text-red-500"
              />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              {...register("description")}
              name="description"
              id="description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
             <ErrorMessage
                errors={errors}
                name="description"
                as="p"
                className="text-red-500"
              />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default PosteCreate;
