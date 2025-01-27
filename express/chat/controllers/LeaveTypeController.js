const {LeaveType}=require("../models")
class LeaveTypeController {
    async store(req, res) {
        const {
            nom,
            description,
            jours_max,
            actif
        } = req.body

        try {
            
            const leaveType=await LeaveType.create({
                nom,
                description,
                jours_max,
                actif
            })

            return res.status(201).json({ success: true, data: leaveType });

        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
            
        }


    }

    async getAll(req, res) {
        try {
            const leaveType =await LeaveType.findAll();
            return res.status(201).json({ success: true, data: leaveType });
            
        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
        }

    }

    async getById(req, res) {
        try {
            const id=req.params.id
            const leaveType=await LeaveType.findByPK(id)
            return res.status(200).json({ success: true, data: leaveType });

        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
        }

    }

    async delete(req, res) {
        try {
            const leaveType = await LeaveType.findByPk(req.params.id)
            if(!leaveType) return res.status(404).json({ message: "Employee not found" });
            await leaveType.destroy()
        } catch (error) {
            return res.status(500).json({ success: false, message:error  });
            
        }
    }

    async update() {

    }


}

module.exports = new LeaveTypeController();