import express from 'express';

import { v4 as uuidv4 } from 'uuid';




let user=[
   
]
const router= express.Router();

router.get('/',(req,res)=>{
    console.log(user);
    res.send(user);
})

router.post('/',(req,res)=>{
    try{
        const users= req.body;

    const userId=uuidv4(); 
    const userWithId= {...users, id: userId}

    user.push(userWithId);
    res.send(`User with the name ${users.firstName} added to the database`);
    }
    catch(error){
        console.log("error",error);
        res.send(error);
    }
});

router.get('/:id', (req,res) =>{
    const {id} =req.params;
    const foundUser= user.find((users) => users.id ===id);

    res.send(foundUser);

});

router.delete('/:id', (req,res)=>{
    const {id} =req.params;

    user= user.filter((users) => users.id != id);
    res.send(`User with id ${id} deleted  `);

})

router.patch('/:id',(req,res)=>{
    const {id} =req.params;

    const {firstName, lastName, age} =req.body;

    const users= user.find((users)=> users.id ===id);
    if(firstName){
        users.firstName= firstName;
    }
    if(lastName){
        users.lastName= lastName;
    }
    if(age){
        users.age= age;
    }

    res.send(`User with the id ${id} has been updated`);
})
export default router;