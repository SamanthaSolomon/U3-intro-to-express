// IMPORT EXPRESS
const { response } = require('express');
const express = require('express');
// CREATE A NEW INSTANCE OF EXPRESS
const app = express();
//create a get route, app has a function called get that takes in the route and a callback function, which takes in the request that comes in and response that comes out
app.get('/', (req, res)=>{
    // console.log('get - req', req)
    // console.log('get - res', res)
    //response goes here with res.send send is a method
    res.send('<h1>Hello world, welcome to my webpage<h1>');
  });

//create another route
app.get('/somedata', (req, res)=>{
    res.send('<h3>here is your information</h3>');
  });

app.get('/name', (req, res)=> {
    res.send('<h4>Your Name is Sam</h4>');
});

app.get('/fav-foods', (req, res)=>{
    res.send('<h4>Your favorite foods are noodles</h4>');
});

app.get('/fav-books', (req, res)=>{
    res.send('<h4>Your favorite books are Herland and Fanny and Zooey</h4>')
})

app.get('/alldata', (req, res)=>{
    res.send({
        //also use res.json
        name: 'Sam',
        foods: 'noodles',
        books: ['Herland', 'Franny and Zoey']
    })
})

// SET THE DEFAULT PORT NUMBER THE WEB SERVER WILL LISTEN IN ON
const PORT = 3000;
// ACTIVATE THE SERVER TO LISTEN ON THE PORT
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
