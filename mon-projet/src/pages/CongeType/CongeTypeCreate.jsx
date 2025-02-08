import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { congeTypeSchema } from "../../validations/congeTypeSchema";

const CongeTypeCreate = () => {
  const methods = useForm({
    resolver: yupResolver(congeTypeSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = methods;

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await createEmploye(data);
      reset()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div 
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-background.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Type de congé
        </h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Nom</label>
              <input
                type="text"
                {...register("nom")}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage errors={errors} name="nom" as="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Jours pris</label>
              <input
                type="number"
                {...register("jours_max")}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage errors={errors} name="jours_max" as="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Description</label>
              <textarea
                {...register("description")}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <ErrorMessage errors={errors} name="description" as="p" className="text-red-500 text-sm" />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition"
              >
                Ajouter
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CongeTypeCreate;
