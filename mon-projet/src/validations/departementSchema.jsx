import * as yup from "yup";

export const departementSchema = yup.object().shape({
  nom:  yup.string().required("Le nom du département est requis"),
  description:  yup.string().required("Le description du département  est requis"),
});
