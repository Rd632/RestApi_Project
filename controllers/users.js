import { v4 as uuidv4 } from 'uuid';

let users = []


export const getUser = (req,res)=>{
    console.log(users);
    res.send(users);
    
}

export const createUser = (req,res)=>{
    console.log('post route reached');
    const user = req.body ;

    users.push({...user, id: uuidv4()});

    res.send(`user with last name ${user.lastname} added to the database`);

    res.send('post route reached');
}

export const getidUser = (req,res)=>{
    const {id} = req.params;
 
    const foundUser = users.find((user) => user.id =id);
 
     res.send(foundUser);
 }

 export const deleteUser = (req,res)=>{
    const {id} = req.params;
 
    users=users.filter((user) => user.id !== id);
 
     res.send(`user with the id ${id} deleted from the database`);
 }

 export const patchUser = (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age}= req.body;

    const user = users.find((user) => user.id ===id);

    if(firstName){
        user.firstName=firstName;
    }

    if(lastName){
        user.lastNameName=lastName;
    }

    if(age){
        user.age=age;
    }

    res.send(`user with the id ${id} has been updated`);
    
 }