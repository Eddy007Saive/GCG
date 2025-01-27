const {Leave}=require("../models")
class LeaveController {
    async store(req, res) {
        const {
            employee_id,
            leave_type_id,
            date_debut,
            date_fin,
            jours_pris,
            motif,
            status,
            date_demande,
            date_approbation
        } = req.body

        try {
            
            const leave=await Leave.create({
                employee_id,
                leave_type_id,
                date_debut,
                date_fin,
                jours_pris,
                motif,
                status,
                date_demande,
                date_approbation
            })

            return res.status(201).json({ success: true, data: leave });

        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
            
        }


    }

    async getAll(req, res) {
        try {
            const leave =await Leave.findAll();
            return res.status(201).json({ success: true, data: leave });
            
        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
        }

    }

    async getById(req, res) {
        try {
            const id=req.params.id
            const leave=await Leave.findByPK(id)
            return res.status(200).json({ success: true, data: leave });

        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
        }

    }

    async delete(req, res) {
        try {
            const leave = await Leave.findByPk(req.params.id)
            if(!leave) return res.status(404).json({ message: "Employee not found" });
            await leave.destroy()
        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
            
        }
    }

    async update() {

    }


}

module.exports = new LeaveController();