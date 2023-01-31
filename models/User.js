const { Schema, model } = require(`mongoose`);

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, `Please enter a valid email`]
        },
        password: {
            type: String,
            required: true
        },
        routines: [
            {
                type: Schema.Types.ObjectId,
                ref: "workout"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model(`user`, userSchema);

module.exports = User;