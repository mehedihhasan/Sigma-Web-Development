// CRUD operation
use("CrudDb")
db.createCollection("courses")
// create CURD operation
db.courses.insertOne({
    name:"Harry web development free courses",
    price: 0,
    assignments: 12,
    projects:45

})
// INSERT
db.courses.insertMany(
    [
        {
            "name": "Harry Web Development Free Courses",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Intro to Python Programming",
            "price": 0,
            "assignments": 10,
            "projects": 30
        },
        {
            "name": "JavaScript Essentials",
            "price": 0,
            "assignments": 15,
            "projects": 25
        },
        {
            "name": "HTML & CSS for Beginners",
            "price": 0,
            "assignments": 8,
            "projects": 20
        },
        {
            "name": "Advanced React Development",
            "price": 0,
            "assignments": 14,
            "projects": 40
        },
        {
            "name": "Full Stack Web Development",
            "price": 0,
            "assignments": 20,
            "projects": 50
        },
        {
            "name": "Data Structures and Algorithms in JavaScript",
            "price": 0,
            "assignments": 18,
            "projects": 35
        },
        {
            "name": "Node.js & Express.js Bootcamp",
            "price": 0,
            "assignments": 16,
            "projects": 28
        },
        {
            "name": "Responsive Web Design",
            "price": 0,
            "assignments": 12,
            "projects": 22
        },
        {
            "name": "Python Data Analysis with Pandas",
            "price": 0,
            "assignments": 10,
            "projects": 32
        }
    ]
    )
//   Read opration
//   let a= db.courses.find({price: 0})

// console.log(a.toArray())

// let b= db.courses.findOne({price: 0})

// console.log(b)

// Update OPERATION
db.courses.updateOne({price:0}, {$set:{price:100}})
db.courses.updateMany({price:0}, {$set:{price:1000}})
