const User = require("../Model/Usermodel");

const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.log(err); 
    }

    // not found
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "User not Found" });
    }

    // Display all users
    return res.status(200).json({ users });
};

// data insert
const addUsers = async (req, res, next) => {
    const { Firstname, Lastname, age, country, Email } = req.body;

    let user;

    try {
        user = new User({ Firstname, Lastname, age, country, Email });
        await user.save();
    } catch (err) {
        console.log(err);
    }

    // not inserting user
    if (!user) {
        return res.status(404).json({ message: "Unable to add users" });
    }
    return res.status(200).json({ user });
};

const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err); 
    }

    // not available user
    if (!user) {
        return res.status(404).json({ message: "User not Available" });
    }
    return res.status(200).json({ user });
};
//update details

const updateUser = async (req, res, next) => {

    const id = req.params.id;
    const { Firstname, Lastname, age, country, Email } = req.body;

    let users;

    try{
        users =await User.findByIdAndUpdate(id,{Firstname :Firstname, Lastname:Lastname, age:age, country:country, Email:Email});
        users =await users.save();
    }catch(err){
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "Unable to update user details" });
    }
    return res.status(200).json({ users });
};
//Delete User Details
const DeleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try{
        user =await User.findByIdAndDelete(id);
    }catch (err){
    console.log(err);
}
if (!user) {
    return res.status(404).json({ message: "Unable to Delete user details" });
}
return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.DeleteUser = DeleteUser;
