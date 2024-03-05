const userModel = require("../models/User");

const createUser = async (user) => {
    return await userModel.create(user);
}
const findUserByEmail = async (email) => {
    return await userModel.findOne({ email: email });
}
const findUserById = async (userId) => {
    return await userModel.findOne({ _id: userId }).select('-password').populate('profile');
}
const deleteUserById = async (userId) => {
    return await userModel.deleteOne({ _id: userId });
}
const updateUserByID = async (userId, updatedUserData) => {
    return await userModel.findOneAndUpdate({ _id: userId }, { $set: updatedUserData }, { new: true });
}
const totalUsers = async () => {
    return await userModel.countDocuments({ userType: "User" });
}
const getUsers = async (skip, pageSize, loggedInUserId) => {
    return await userModel.find({ userType: "User", _id: { $ne: loggedInUserId } }).populate('profile').populate('friendRequestsSent').populate('friendRequestsReceived').sort({ createdAt: -1 })
        .skip(skip).limit(pageSize).exec();
}
const generateAccountNumber = async () => {
    const min = 100000000000; // Minimum 12-digit number
    const max = 999999999999; // Maximum 12-digit number
    const accountNumber = Math.floor(min + Math.random() * (max - min + 1)); // Generate random number between min and max
    const existingUser = await userModel.findOne({ accountNumber });
    if (existingUser) {
        return generateAccountNumber(); // If the number already exists, generate a new one recursively
    }
    return accountNumber;
}
const generateReferralCode = async (username) => {
    // Convert username to uppercase and remove any spaces
    const cleanUsername = username.toUpperCase().replace(/\s/g, '');
    // Generate a random string
    const randomString = Math.random().toString(36).substr(2, 8).toUpperCase(); // Adjust length as needed

    // Concatenate username and random string
    const referralCode = cleanUsername.slice(0, 2) + randomString; // Adjust length as needed
    const existingUser = await userModel.findOne({ referralCode });
    if (existingUser) {
        return generateReferralCode(username); // If the number already exists, generate a new one recursively
    }
    return referralCode;
}
module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    deleteUserById,
    updateUserByID,
    totalUsers,
    getUsers,
    generateAccountNumber,
    generateReferralCode
}