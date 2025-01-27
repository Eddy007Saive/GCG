const {Employee}=require("../models")

class EmployeeController{
    async store(req,res){
        try {
            const employee=await Employee.create(req.body)
            return res.status(201).json({ success: true, data: employee });
        } catch (error) {
            
        }
    }

    async getAll(req,res) {
        try {
            const employees = await Employee.findAll()
            return res.status(201).json({ success: true, data: employees });
        } catch (error) {
            
        }
    }

    async getById(req,res){
        try {
            const employee = await Employee.findByPk(req.params.id)
            if(!employee) return res.status(404).json({ message: "Employee not found" });
            return res.status(200).json({ success: true, data: employee });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Erreur lors de la création de l\'employé.', error });
        }
    }

    async update(req,res){
        try {
            const employee = await Employee.findByPk(req.params.id)
            if(!employee) return res.status(404).json({ message: "Employee not found" });
            await employee.update(req.body)
            return res.status(200).json({ success: true, data: employee });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Erreur lors de la création de l\'employé.', error });
        }
    }

    async delete(req,res){
        try {
            const employee = await Employee.findByPk(req.params.id)
            if(!employee) return res.status(404).json({ message: "Employee not found" });
            await employee.destroy()
            return res.status(204).json({ success: true });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Erreur lors de la création de l\'employé.', error });
        }
    }
}

module.exports=new EmployeeController()