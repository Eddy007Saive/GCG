import * as yup from "yup";

export const congeSchema = yup.object().shape({
  leave_type_id: yup.number().required("Le type de congé est requis"),
  date_debut: yup.date().required("La date de début est requise"),
  date_fin: yup
    .date()
    .min(yup.ref("date_debut"), "La date de fin doit être après la date de début")
    .required("La date de fin est requise"),
  jours_pris: yup
    .number()
    .positive("Le nombre de jours doit être positif")
    .integer("Le nombre de jours doit être un entier")
    .required("Le nombre de jours est requis"),
  motif: yup.string().required("Le motif est requis"),
});
