 const express = require('express');
const Stuff = require('./myStuff');
 const dbOperation = require('./dbfiles/dbOperation');
 const cors = require('cors');
const { response } = require('express');
const { default: Product } = require('./Components/Product');

 const API_PORT = process.env.PORT || 5000;
 const app = express();




app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.post('/api', function (req, res){
    console.log('called');
    rest.send({result: 'go away'})
})
app.post('/hello', function (req, res){
    console.log('called');
    rest.send({result: 'OMG hi'})
});

let Pam = new Product('testing', 12.99)


dbOperation.getProducts().then(res => {
    console.log(res.recordset)
})

// dbOperation.createProduct(Pam)
app.listen(API_PORT, () => console.log('Listening on ${API_PORT}'))