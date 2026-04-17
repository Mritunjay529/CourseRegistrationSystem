const ApplyTask = require('../models/apply')
async function  applyController( req,res){


    try{
       const {fullname, email, number, message}=req.body;
       console.log(req.body)
      if(!fullname || !email || !number || !message){
        return res.status(400).json({
            message:"All fields are required"
        })
      }
    console.log("runinnhgggg")
      const data = await ApplyTask.create({ fullname, email, number, message });

    return res.status(201).json({
        message:"Applied succesfully",
        data:{
           id: data._id
        }
    })

    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
        
    }
}
module.exports = { applyController }