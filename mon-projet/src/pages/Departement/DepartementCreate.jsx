import React, { useState } from "react";
import { createDepartement } from "../../services/Departement";
import { showErrorToast, showSuccessToast } from "../../components/ToastNotification";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { departementSchema } from "../../validations/departementSchema";
import { ErrorMessage } from "@hookform/error-message";

function CongeCreate() {
  const methods = useForm({
    resolver: yupResolver(departementSchema),
  });

  const { register, handleSubmit, formState: { errors },reset } = methods;
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (data) => {
    let formErrors = {};
    if (!data.nom) formErrors.nom = "Le nom du département est requis.";
    if (!data.description) formErrors.description = "La description est requise.";
    return formErrors;
  };

  const onSubmit = async (data) => {
    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await createDepartement(data);
      showSuccessToast("Département ajouté avec succès !");
      console.log(response);
      reset();
    } catch (err) {
      showErrorToast("Erreur lors de l'ajout du département !");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4">
        <div className="bg-white bg-opacity-90 shadow-lg rounded-2xl p-8 max-w-md w-full backdrop-blur-md">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Ajouter un Département
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-gray-900"
              >
                Département
              </label>
              <input
                {...register("nom")}
                name="nom"
                id="nom"
                type="text"
                className={`mt-1 block w-full p-3 border ${errors.nom ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
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
                htmlFor="description"
                className="block text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                className={`mt-1 block w-full p-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
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
                disabled={isLoading}
              >
                {isLoading ? "Chargement..." : "Ajouter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}

export default CongeCreate;
