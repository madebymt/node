const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require("./data")

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))


app.get("/", function(request, response){
    const title = ("hello")
  response.render('index', {
     data:data.users
  })
})
// get the value from data user.id
app.get("/users/id", function (request, response) {

const robot = parseInt(request.params.id)
let users = false;
for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].id === robot){
    users = data.users[i]
    }
}
// pull the file from user
response.render ("users", {
    users: users
})

})

app.listen(3000, function(){
console.log("Express started on port 3000")
})
