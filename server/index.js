const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');


app.use(express.json());


app.get('/api/inventory', controller.showInventory);
app.post('/api/product', controller.createProduct);
app.delete('/api/products/:id', controller.deleteProduct);
app.put('/api/products/:id', controller.updateProduct);

app.listen(4000, () => {
     console.log('server listening on port 4000!!');
  }); 
