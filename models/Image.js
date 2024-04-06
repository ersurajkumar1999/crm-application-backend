const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    createdBY: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fileId: {
        type: String,
        trim: true,
        required: true,
    },
    fileType: {
        type: String,
        trim: true,
        required: true,
    },
    fileSize: {
        type: String,
        trim: true,
        required: true,
    },
    filePath: {
        type: String,
        trim: true,
        required: true,
    },
    fileUrl: {
        type: String,
        trim: true,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Image", imageSchema);
