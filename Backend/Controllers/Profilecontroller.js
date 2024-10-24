const User = require("../Model/Register");

const getAllUsers = async (req, res, next) => {
    try {
        const regi = await User.find(); // Change regi to User in the find method
        // not found
        if (!regi || regi.length === 0) {
            return res.status(404).json({ message: "User not Found" });
        }
        // Display all users
        return res.status(200).json({ regi });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" }); // Add error response for catch block
    }
};

// data insert
const addUsers = async (req, res, next) => {
    const { Firstname, Lastname, Age, Country, Email,Password } = req.body;


    let regi;

    try{

        regi = new User ({ Firstname, Lastname, Age, Country, Email, Password });
        await regi.save();
    }catch(err){
        console.log(err);
    }

    // not inserting user
    if (!regi) {
        return res.status(404).json({ message: "Unable to add users" });
    }
    return res.status(200).json({ regi});

};


const getById = async (req, res, next) => {
    const id = req.params.id;

    let regi;

    try {
        regi = await User.findById(id);
    } catch (err) {
        console.log(err); 
    }

    // not available user
    if (!regi) {
        return res.status(404).json({ message: "User not Available" });
    }
    return res.status(200).json({ regi });
};

//update details

const updateUser = async (req, res, next) => {

    const id = req.params.id;
    const { Firstname, Lastname, Age, Country, Email,Password } = req.body;

    let regi;

    try{
        regi =await User.findByIdAndUpdate(id,{Firstname :Firstname, Lastname:Lastname, Age:Age, Country:Country, Email:Email,Password:Password});
        regi =await regi.save();
    }catch(err){
        console.log(err);
    }
    if (!regi) {
        return res.status(404).json({ message: "Unable to update user details" });
    }
    return res.status(200).json({ regi });
};

//Delete User Details
const DeleteUser = async (req, res, next) => {
    const id = req.params.id;

    let regi;

    try{
        regi =await User.findByIdAndDelete(id);
    }catch (err){
    console.log(err);
}
if (!regi) {
    return res.status(404).json({ message: "Unable to Delete user details" });
}
return res.status(200).json({ regi });
};


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.DeleteUser = DeleteUser;
