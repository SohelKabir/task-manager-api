const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()



router.post('/tasks', auth,  async (req, res) => {
   

    const task = new Task({
        ...req.body,               //copies evrything from req body including description and completed fields
        owner: req.user._id
    }) 

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// app.post('/tasks', (req, res) => {
//     //console.log(req.body);  //incoming json
    
//     const task = new Task(req.body)    //creating new user from incoming json

//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((e) => {
//         res.status(400).send(e)
//         //res.send(e)
//     })
// })

//GET /tasks?completed=true
//GET /tasks?limit=10&skip10
//GET /tasks?sortby=createdAt:desc
router.get('/tasks', auth, async (req, res) =>{
    const match = { }
    const sort = {}

    if(req.query.completed) {
        match.completed = req.query.completed === 'true'  //checking and converting String 'true' was provided or not and converting to boolean true  
    
    }

    if(req.query.sortBy) {
        const parts = req.query.sortBy.split(':') //splitting query string into two parts with ':' in the middle
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1   //checking if query string contains 'desc' or 'asc; with ternary operator and  setting value to -1 for desc and 1 for asc accordingly 
    }

    try {
    
        await req.user.populate({
            path: 'tasks',
            match, 
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()

        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }
})


// app.get('/tasks', (req, res) => {
//     Task.find({}).then((tasks) => {
//         res.send(tasks)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

router.get('/tasks/:id', auth, async  (req, res) => {
    const _id = req.params.id
 
    try {
        //const task = await Task.findById(_id)
        const task = await Task.findOne({ _id, owner: req.user._id })

        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
})

// app.get('/tasks/:id', (req, res) => {
//     const _id = req.params.id
//     Task.findById(_id).then((task) => {
//         if(!task) {
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })


router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
         
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})
      
        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => task [update] = req.body[update])
        await task.save()

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})


router.delete('/tasks/:id', auth, async (req, res) => {
    try {

        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id})
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router