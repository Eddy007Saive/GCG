import * as yup from "yup";

export const posteSchema = yup.object().shape({
  nom: yup.string().required("Le nom est requis"),
  description: yup.string().required("La description est requise"),
  departementId: yup.string().required("Le département est requis")
});
