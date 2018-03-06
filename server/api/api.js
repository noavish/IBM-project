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
  connection.query('select country, country_code, item_revenue, sum(sales_count) as value FROM sales LEFT JOIN pricing ON pricing.item_id = sales.item_id_fk group by country_code', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

// get Sales by SKU
router.get('/skusales',(req,res)=>{
  connection.query('select sku_id,sku_name,sum(sales_count) as value from sku join sales on sales.product_id_fk = sku.product_id_fk group by sku_id',(err,result)=>{
    if(!err){
      res.send(result)
    } else {
      console.log(err)
    }
  })
})


router.get('/countriessales', function (req, res, next) {
  connection.query("SELECT state, sum(sales_count) as state_sum  FROM fanco.sales   WHERE country='United States' GROUP BY state", function(err, rows, fields) {
    if (!err){
      res.send(rows);
      console.log(rows);}
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
  connection.query('select * from products', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.get('/sku/:product_id', function (req, res, next) {
  connection.query('SELECT * FROM pricing LEFT JOIN sku ON sku.sku_id = pricing.sku_id_fk LEFT JOIN products ON products.product_id = sku.product_id_fk where product_id = ?', req.params.product_id, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query. ');
  });
});

router.post('/logSale', function (req, res, next) {
  connection.query('insert into sales set ?', req.body, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

//************** */
router.get('/weathersale', function (req, res, next) {
  connection.query('SELECT DATE_FORMAT(date, "%m") AS Month, SUM(sales_count),AVG(weather) FROM sales WHERE date GROUP BY DATE_FORMAT(date, "%m")', function (err, rows, fields) {
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

//getAllTasks
router.get('/tasks', function (req, res, next) {
  connection.query('select * from tasks', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

//getAllUsers
router.get('/users', function (req, res, next) {
  connection.query('select * from users', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

//addNewTask
router.post('/addTask', function (req, res, next) {
  connection.query('insert into tasks set ?', req.body, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

//reviseTaskDone
router.put('/:task_id', function (req, res, next) {
  connection.query(`update tasks set done = ${req.body.done} where task_id = ?`, req.params, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});


module.exports = router;
