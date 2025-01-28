const { Employee } = require("../models");

class EmployeeController {
    
    async store(req, res) {
        try {
            const employee = await Employee.create(req.body);
            return res.status(201).json({ success: true, data: employee });
        } catch (error) {
            console.error("Erreur lors de la création de l'employé : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la création de l'employé.", 
                error: error.message 
            });
        }
    }

    async getAll(req, res) {
        try {
            const employees = await Employee.findAll();
            return res.status(200).json({ success: true, data: employees });
        } catch (error) {
            console.error("Erreur lors de la récupération des employés : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la récupération des employés.", 
                error: error.message 
            });
        }
    }

    async getById(req, res) {
        try {
            const employee = await Employee.findByPk(req.params.id);
            if (!employee) {
                return res.status(404).json({ message: "Employé non trouvé" });
            }
            return res.status(200).json({ success: true, data: employee });
        } catch (error) {
            console.error("Erreur lors de la récupération de l'employé : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la récupération de l'employé.", 
                error: error.message 
            });
        }
    }

    async update(req, res) {
        try {
            const employee = await Employee.findByPk(req.params.id);
            if (!employee) {
                return res.status(404).json({ message: "Employé non trouvé" });
            }
            await employee.update(req.body);
            return res.status(200).json({ success: true, data: employee });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'employé : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la mise à jour de l'employé.", 
                error: error.message 
            });
        }
    }

    async delete(req, res) {
        try {
            const employee = await Employee.findByPk(req.params.id);
            if (!employee) {
                return res.status(404).json({ message: "Employé non trouvé" });
            }
            await employee.destroy();
            return res.status(204).json({ success: true });
        } catch (error) {
            console.error("Erreur lors de la suppression de l'employé : ", error);
            return res.status(500).json({ 
                success: false, 
                message: "Erreur lors de la suppression de l'employé.", 
                error: error.message 
            });
        }
    }
}

module.exports = new EmployeeController();
