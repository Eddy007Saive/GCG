const { where } = require("sequelize");
const { Poste } = require("../models");

class PosteController {
    
    async store(req, res) {
        try {
            console.log(req.body);
            const poste = await Poste.create(req.body);
            return res.status(201).json({ success: true, data: req.body });
        } catch (error) {
            console.error("Erreur lors de la création de l'poste : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la création de l'poste.", 
                error: error.message 
            });
        }
    }



    async getAll(req, res) {
        try {
            const postes = await Poste.findAll();
            return res.status(200).json({ success: true, data: postes });
        } catch (error) {
            console.error("Erreur lors de la récupération des postes : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la récupération des postes.", 
                error: error.message 
            });
        }
    }

    async search(req, res){
            const {matricule}=req.body
            try {
                const poste = await Poste.findAll({where:{matricule}});
                return res.status(200).json({ success: true, data: poste });
            } catch (error) {
                
            }
    }

    async getById(req, res) {
        try {
            const poste = await Poste.findByPk(req.params.id);
            if (!poste) {
                return res.status(404).json({ message: "poste non trouvé" });
            }
            return res.status(200).json({ success: true, data: poste });
        } catch (error) {
            console.error("Erreur lors de la récupération de l'poste : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la récupération de l'poste.", 
                error: error.message 
            });
        }
    }

    async update(req, res) {
        try {
            const poste = await Poste.findByPk(req.params.id);
            if (!poste) {
                return res.status(404).json({ message: "poste non trouvé" });
            }
            await poste.update(req.body);
            return res.status(200).json({ success: true, data: poste });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'poste : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la mise à jour de l'poste.", 
                error: error.message 
            });
        }
    }

    async delete(req, res) {
        try {
            const poste = await poste.findByPk(req.params.id);
            if (!poste) {
                return res.status(404).json({ message: "poste non trouvé" });
            }
            await poste.destroy();
            return res.status(204).json({ success: true });
        } catch (error) {
            console.error("Erreur lors de la suppression de l'poste : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la suppression de l'poste.", 
                error: error.message 
            });
        }
    }
}

module.exports = new PosteController();
