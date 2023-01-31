const { Schema, model } = require(`mongoose`);

const setSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        intensity: {
            type: Number,
            required: true
        },
        target: {
            type: String,
            required: true
        }
    }
)

const Set = model(`set`, setSchema);

module.exports = Set;