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
        target: {
            type: String,
            required: true
        }
    }
)

const Set = model(`Set`, setSchema);

module.exports = Set;