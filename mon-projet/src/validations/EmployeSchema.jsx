import * as yup from "yup";

export const EmployeSchema = yup.object().shape({
  nom: yup.string().required("Le nom de l'employé est requis"),
  matricule: yup.string().required("Le matricule est requis"), 
  adresse: yup.string().optional(),
  tel: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Numéro de téléphone invalide")
    .optional(),
  date_embauche: yup.date().required("La date d'embauche est requise"),
  statut:  yup
  .string()
  .oneOf(["Permanant", "Contractuel"], "Le sexe doit être masculin ou féminin")
  .required(),
  dateN: yup
  .date()
  .required("La date de naissance est requise")
  .test("age", "L'employer doit  avoir plus de 18 ans", value => {
    const today = new Date();
    const birthDate = new Date(value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 18;
    }

    return age >= 18;
  }),  sexe: yup
    .string()
    .oneOf(["masculin", "féminin"], "Le sexe doit être masculin ou féminin")
    .required(),
  leave_solde: yup
    .number()
    .integer()
    .min(0, "Le solde des congés ne peut pas être inférieur à 0")
    .optional(),
  posteId: yup.number().integer().required("L'ID du poste est requis"),
  // Validation de l'image (si nécessaire)
  image: yup
    .mixed()
    .test("fileSize", "Le fichier est trop grand", (value) => {
      return !value || value.size <= 5 * 1024 * 1024; // Max 5MB
    })
    .test("fileType", "Le fichier doit être une image", (value) => {
      return !value || ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
    })
    .optional(),
});
