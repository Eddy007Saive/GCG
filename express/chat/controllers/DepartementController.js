const { where } = require("sequelize");
const { Departement } = require("../models");

class DepartementController {
    
    async store(req, res) {
        try {
            console.log(req.body);
            await Departement.create(req.body);
            return res.status(201).json({ success: true, data: req.body });
        } catch (error) {
            console.error("Erreur lors de la création de l'departements : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la création de l'departements.", 
                error: error.message 
            });
        }
    }



    async getAll(req, res) {
        try {
            const departements = await Departement.findAll();
            return res.status(200).json({ success: true, data: departements });
        } catch (error) {
            console.error("Erreur lors de la récupération des departements : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la récupération des departements.", 
                error: error.message 
            });
        }
    }

    async search(req, res){
            const {matricule}=req.body
            try {
                const departement = await Departement.findAll({where:{matricule}});
                return res.status(200).json({ success: true, data: Departement });
            } catch (error) {
                
            }
    }

    async getById(req, res) {
        try {
            const departement = await Departement.findByPk(req.params.id);
            if (!departement) {
                return res.status(404).json({ message: "departements non trouvé" });
            }
            return res.status(200).json({ success: true, data: departement });
        } catch (error) {
            console.error("Erreur lors de la récupération de l'departements : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la récupération de l'departements.", 
                error: error.message 
            });
        }
    }

    async update(req, res) {
        try {
            const departement = await Departement.findByPk(req.params.id);
            if (!departement) {
                return res.status(404).json({ message: "departements non trouvé" });
            }
            await Departement.update(req.body);
            return res.status(200).json({ success: true, data: Departement });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'departements : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la mise à jour de l'departements.", 
                error: error.message 
            });
        }
    }

    async delete(req, res) {
        try {
            const departement = await Departement.findByPk(req.params.id);
            if (!departement) {
                return res.status(404).json({ message: "departements non trouvé" });
            }
            await Departement.destroy();
            return res.status(204).json({ success: true });
        } catch (error) {
            console.error("Erreur lors de la suppression de l'departements : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la suppression de l'departements.", 
                error: error.message 
            });
        }
    }
}

module.exports = new DepartementController();
