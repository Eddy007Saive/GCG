import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { congeSchema } from "../../validations/congeSchema";
import EmployeSelect from "../../components/EmployeSelect";

const CongeCreate = () => {
  const methods = useForm({
    resolver: yupResolver(congeSchema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },reset
  } = methods;

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await createEmploye(data);
      console.log(response);
      reset()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 w-full gap-6 bg-white shadow-lg p-4"
        >
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Congé</h2>

          {/* Sélection de l'employé */}
          <EmployeSelect
            onChange={(option) => setValue("employee_id", option?.value)}
          />
          <ErrorMessage
            errors={errors}
            name="employee_id"
            as="p"
            className="text-red-500"
          />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

            <div className="w-full">
              {/* Dates de début et de fin */}
              <input
                type="date"
                {...register("date_debut")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              <ErrorMessage
                errors={errors}
                name="date_debut"
                as="p"
                className="text-red-500"
              />
            </div>

            <div className="w-full">
            <input
            type="date"
            {...register("date_fin")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
          <ErrorMessage
            errors={errors}
            name="date_fin"
            as="p"
            className="text-red-500"
          />
            </div>
          </div>


          <div  className="grid gap-4 sm:grid-cols-2 sm:gap-6">


          <div className="w-full">
              {/* Sélection du type de congé */}
              <select
                {...register("leave_type_id")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Sélectionner un type de congé</option>
                <option value="1">Congé Annuel</option>
                <option value="2">Congé Maladie</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="leave_type_id"
                as="p"
                className="text-red-500"
              />
            </div>

            <div className="w-full">
                {/* Nombre de jours */}
                <input
                  type="number"
                  {...register("jours_pris")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                <ErrorMessage
                  errors={errors}
                  name="jours_pris"
                  as="p"
                  className="text-red-500"
                />
            </div>
          </div>
          


        


          {/* Motif */}
          <textarea
            {...register("motif")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          ></textarea>
          <ErrorMessage
            errors={errors}
            name="motif"
            as="p"
            className="text-red-500"
          />

          {/* Bouton Soumettre */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Ajouter
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CongeCreate;
