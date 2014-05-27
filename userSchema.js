console.log("Initializing userSchema.js")

var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
	name: String
})

userSchema.methods.speak = function speak() {
	var greeting = this.name
	? "My name is " + this.name
	: "I don't have a name"
	console.log(greeting);
}