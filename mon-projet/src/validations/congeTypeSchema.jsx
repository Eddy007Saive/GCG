import * as yup from "yup";

export const congeTypeSchema = yup.object().shape({
  nom: yup.string().required("Le no du type de cogeé"),
    jours_max: yup
    .number()
    .positive("Le nombre de jours doit être positif")
    .integer("Le nombre de jours doit être un entier")
    .required("Le nombre de jours est requis"),
    description: yup.string().required("Le motif est requis"),
});
