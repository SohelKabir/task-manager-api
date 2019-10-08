const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false 
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate (value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid!')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Password text cannot be "password" ')
//             }
            
//         }
//     },
    
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0){
//                 throw new Error('Age must be positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: ' Andrew ',
//     email: 'MYEMAIL@Mead.iO  ',
//     password:"800074555"  
   
// })

// me.save().then((me) =>{
//     console.log(me);
    
// }).catch((error) =>{
//     console.log('Error!', error);
    
// })


//challenge Tasks

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//     default: false
//     }
// })

// const task = new Task({
//     description: ' Eat lunch',
//     //completed: false
// })

// task.save().then((task) =>{
//     console.log(task);
    
// }).catch((error) =>{
//     console.log('Error!', error);
    
// })