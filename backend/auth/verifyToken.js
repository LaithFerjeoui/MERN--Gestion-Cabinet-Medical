import jwt from 'jsonwebtoken'


export const authenticate= async (req,res,next)=>{
    const authToken = req.headers.authorization
    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({success: false, message:'no token, authorization denied'})
}
try{
    const token = authToken.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded
    req.role= decoded.role
    
    next();

}catch (err){
    if(err.name=='TokenExpiredError'){
        return res.status(401).json({message :'Token is expired'})

    }
    return res.status(401).json({success:'false',message :'Invalid token'})
    
}
};

export const restrict = async(req,res,next)=> {
    const userId= req.userId
    let user;
    const patient= await UserActivation.findById(userId)
    const doctor= await UserActivation.findById(userId)
    if(patient){
        user=patient
    }
    if(doctor){
        user=doctor
        }
        if (!role.includes(user.role)){
            return res.status(401).json({success: false, message:'You are not athorized'})
        }
        next();
}