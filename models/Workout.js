const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration (in minutes)"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],

},
{
    toJSON: { 
        virtuals:true,
    },
}
);

WorkoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = this.exercises.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.duration;
    }, 0);

    return totalDuration;

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;