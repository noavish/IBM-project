const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config');
const bcrypt = require('bcrypt');


const connection = mysql.createConnection(config);

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express RESTful API');
});

//getAllSales
router.get('/sales', function (req, res, next) {
  connection.query('select * from sales', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.get('/amount', (req,res)=>{
  connection.query('select date, sum(sales_count) as value from sales group by date',(err,rows)=>{
    if(!err) {
      res.send(rows)
    } else {
      res.send(err)
    }
  })
});

router.get('/products', function (req, res, next) {
  connection.query('select * from products', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.get('/sku/:product_name', function (req, res, next) {
  connection.query('select * from  sku left join products on products.product_id = sku.products_sku where Product_name = ?', req.params.product_name , function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query. ');
  });
});


// router.get('/search_places/:location', function (req, res, next) {
//   axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.location}&key=AIzaSyDOVMcO9XGEh9iGT_16wp_s4swj575tj_Y`)
//     .then(function (response) {
//       var places = response.data.predictions.map(function(place) { return {name: place.description, id: place.place_id}});
//       console.log(places);
//       res.json({places: places});
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });



module.exports = router;
