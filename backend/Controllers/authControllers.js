import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const generatetoken =user =>{
    return jwt.sign({id: user._id, role:user.role},process.env.JWT_SECRET_KEY)
    expiresIn:"5d"
}

export const register = async(req, res) =>{
    
    const {email, password, name, role, phoneNumber, birthday, photo, gender} = req.body

    try {
        
        let user = null
        if(role=="patient"){
            user= await User.findOne({email});
        }
            else if(role=="doctor"){
                user= await Doctor.findOne({email});
            }
        if(user){
            return res.status(400).json({message:'User already exist'});

        }
        const salt= await bcrypt.genSalt(10)
        const hashPassword= await bcrypt.hash(password, salt)
        if (role =='patient'){
            user= new User({
                name,
                phoneNumber,
                email,
                password: hashPassword,
                birthday,
                photo,
                gender,
                role
            });
        }
        if (role =='doctor'){
            user= new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
            
                role
            });
        }
        await user.save()
        res.status(200).json({success:true, message:'User succussfully created'});


    } catch (err) {
        console.log(err);
        res.status(500).json({success:true, message:'Internal Server error, try again'});
    }
}





export const login =async(req, res) =>{
    const {email}=req.body;
    try {
        let user= null
        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})
        if(patient){
            user=patient
        }
        if (doctor){
            user=doctor
        }
        if (!user) {
            return res.status(404).json({message:"User not found."});
        }
        const isPasswordMatch =await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordMatch){
            return res.status(404).json({message:"Invalid Email or Password"});}
            //generate token
            const token = generatetoken(user);
            console.log(token)
            const {password, role, appointments, ...rest} = user._doc
            res.status(200)
            .json({status: true, message: "successfully login", token, data:{...rest},role});
    } catch (err) {
        console.error(err);
        res.status(404).json({status: false,message:"failed to login"});
    }
}