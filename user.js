
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validate: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`,

        }
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    hobbies: [String],
    bestFriend: {
        type: mongoose.SchemaType.ObjectId,
        ref:"User"
    }

});

productSchema.methods.sayhi=function(){
    console.log("hi my name is ${this.name}");
}

// use instead findbyid
userSchema.statics.findByName=function(name){
    return this.where({name:new RegExp(name,'i')})
}

// find().byName
userSchema.query.byName=function(name){
    return this.where({name:new RegExp(name,'i')})
}

userSchema.virtual('namedEmail').get(function(){
    return `${this.name} `
})


module.exports = mongoose.model("User", productSchema);


