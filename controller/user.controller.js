const {User} = require('../models/index');

// const createUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = await User.create({ name, email, password });
//     res.status(201).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: error.message });
//   }
// };


const getUserById=async(req,res)=>{
  const {id}=req.params;
  try{
    const user=await User.findByPk(id);
    if(!user){
      res.status(404).json({message:'User not found'});
    }
    res.status(200).json(user);
    

  }
  catch(error){
    console.log(error);
    res.status(500).json({message:"Error occurred"});

  }
}

const updateUserById=async(req,res)=>{
  const {id}=req.params;
  const{name,role}=req.body;
  try{
    const user=await User.findByPk(id);
    if(!user){
      res.status(404).json({message:'User not found'});
    }
  if(name) 
    user.name=name;
  user.role=role;
  await user.save();

    res.status(200).json({ message: 'User updated successfully', user });

    }
  catch(error){
    console.log(error);
  }
}

module.exports={getUserById,updateUserById};