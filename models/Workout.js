const { Schema, model } = require(`mongoose`);

const workoutSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now
        },

        sets: [
            {
                type: Schema.Types.ObjectId,
                ref: "set"
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

workoutSchema.virtual(`totalWorkoutLength`).get(function(){
    let workoutDuration = 0;

    for(let i = 0; i< this.sets.length();i++){
        workoutDuration += this.sets[i].duration
    };

    return workoutDuration;
});

const Workout = model(`Workout`, workoutSchema);

module.exports = Workout;