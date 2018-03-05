const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config);

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express RESTful API');
});

//getAllSales
router.get('/sales', function (req, res, next) {
  connection.query('select country, country_code, item_revenue, sum(sales_count) as value FROM sales LEFT JOIN pricing ON pricing.item_id = sales.item_id_fk group by country_code', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.get('/products', function (req, res, next) {
  connection.query('select * from products', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.get('/sku/:product_id', function (req, res, next) {
  connection.query('SELECT * FROM pricing LEFT JOIN sku ON sku.sku_id = pricing.sku_id_fk LEFT JOIN products ON products.product_id = sku.product_id_fk where product_id = ?', req.params.product_id , function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query. ');
  });
});

router.post('/logSale', function (req, res, next) {
  connection.query('insert into sales set ?',req.body, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
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
