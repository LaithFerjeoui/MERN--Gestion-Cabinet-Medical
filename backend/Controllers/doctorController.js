import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async(req,res)=> {
    const id=  req.params.id
    try{
        const updatedDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true , message:'successfully updated', data: updatedDoctor})
    }
    catch (err){
        res.status(500).json({success:false , message:'Failed to update'})
    }
}
export const deleteDoctor = async(req,res)=> {
    const id=  req.params.id
    try{
        const deletedDoctor = await Doctor.findByIdAndDelete(id,{$set:req.body},{new:true})
        res.status(200).json({success:true , message:'successfully deleted'})
    }
    catch (err){
        res.status(500).json({success:false , message:'Failed to Delete'})
    }
}
export const getSingleDoctor = async(req,res)=> {
    const id=  req.params.id
    try{
        const doctor = await Doctor.findById(id).select("-password")
        res.status(200).json({
            success: true,
            message: "Doctor Found",
            data: doctor,
        })
    }
    catch (err){
        res.status(500).json({success:false , message:'no Doctor found'})
    }
}
export const getAllDoctors = async(req,res)=> {
  
    try{
        const Doctors = await Doctor.find({}).select("-password")
        res.status(200).json({
            success: true,
            message:"Doctors Found",
            data: Doctors,
        })
    }
    catch (err){
        res.status(500).json({success:false , message:'not found'})
    }
}