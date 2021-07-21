let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json());

const users = [
    {id: 1, name: "John", email: "john@gmail.com"},
    {id: 2, name: "Smith", email: "smith@gmail.com"},
    {id: 3, name: "Chris", email: "chris@gmail.com"},
    {id: 4, name: "Jack", email: "jack@gmail.com"}
];

app.get('/users', function (req, res) {
  res.send(users);
})

app.get('/users/:id', function (req, res) {
   const found = users.some(user => user.id === parseInt(req.params.id));
   if (found) {
      res.json(users.filter(user => user.id === parseInt(req.params.id)));
   } else {
    res.send('User not found!');
  }
})

app.post('/users', function (req, res) {
  const newUser = {
    id : req.body.id,
    name : req.body.name,
    email : req.body.email
  }

  if(!newUser.id || !newUser.name || !newUser.email) {
    res.sendStatus(400);
  } else {
      users.push(newUser);
      res.json(users);
  }
})

app.put('/users/:id', function (req, res) {
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    const updateUser = req.body;
    users.forEach(user => {
          if (parseInt(req.params.id) === user.id) {
            user.name = updateUser.name ? updateUser.name : user.name;
            user.email = updateUser.email ? updateUser.email : user.email;

            res.json({message : 'User Updated successfully', user});
          }
        }
    );
  } else {
    res.send('User not found!');
  }
})

app.delete('/users/:id', function (req, res) {
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    let newUsers = users.filter(user => user.id !== parseInt(req.params.id));

    res.json({
      'message' : 'User deleted successfully!',
      newUsers
    });
  } else {
    res.send('User not found!');
  }
})

let server = app.listen(3000, function () {
   let port = server.address().port
   console.log(`Server running at http://127.0.0.1:${port}/`)
})