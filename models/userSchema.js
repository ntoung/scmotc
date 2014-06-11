console.log("Initializing userSchema.js")

var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
	name: String
	//password: String
	// username: { type: String, required: true, index: { unique: true } },
    // password: { type: String, required: true }
})

userSchema.methods.speak = function speak() {
	var greeting = this.name
	? "My name is " + this.name
	: "I don't have a name"
	console.log(greeting);
}

// SALT Password Hash
userSchema.pre('save', function(next) {
	console.log('Entering userSchema.save()');	
	var user = this;
	// var SALT_WORK_FACTOR = 10;

	// // only hash password if new or modified
	// if (!user.isModified('password')) return next();

	// // generate a salt
	// bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
	//     if (err) return next(err);
	 
	//     // hash the password using our new salt
	//     bcrypt.hash(user.password, salt, function(err, hash) {
	//         if (err) return next(err);
	 
	//         // override the cleartext password with the hashed one
	//         user.password = hash;
	//         next();
	//     });
	// });
})
 
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    // bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    //     if (err) return cb(err);
    //     cb(null, isMatch);
    // });
}
 
exports.User = mongoose.model('User', userSchema);