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

//getAllSalesByCountries
router.get('/sales', function (req, res, next) {
  connection.query('select country, country_code, item_revenue, sum(sales_count) as value FROM sales LEFT JOIN pricing ON pricing.item_id = sales.item_id_fk group by country_code', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getSalesByCountryGroupedByProduct
router.get('/sales/:country_code', function (req, res, next) {
  connection.query(`select country, country_code, sum(sales_count) as sold_units, product_name from sales left join products on product_id = product_id_fk where country_code='${req.params.country_code}' group by product_name`, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

// get Sales count by SKU
router.get('/skuSalesCount',(req,res)=>{
  connection.query('select sum(sales_count) as value, sku_id_fk, sku_name, item_revenue from sales left join pricing on pricing.item_id = item_id_fk left join sku on sku.sku_id = sku_id_fk group by sku_name',(err,result)=>{
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  });
});

// get Sales revenue by SKU
router.get('/skuSalesRev',(req,res)=>{
  connection.query('select sales_count * item_revenue as value, sku_id_fk, sku_name, item_revenue from sales left join pricing on pricing.item_id = item_id_fk left join sku on sku.sku_id = sku_id_fk group by sku_name',(err,result)=>{
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  });
});

router.get('/countriessales', function (req, res, next) {
  connection.query("SELECT state, sum(sales_count) as state_sum  FROM fanco.sales   WHERE country='United States' GROUP BY state", function(err, rows, fields) {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});



//getUnitAmountByDate
router.get('/amount', (req,res)=>{
  connection.query('select date, sum(sales_count) as value from sales group by date',(err,rows)=>{
    if(!err) {
      res.send(rows)
    } else {
      res.send(err)
    }
  })
});

//getUnitAmountByDateByUser
router.get('/amount/:id',(req,res)=>{
  connection.query('SELECT user_id_fk, username, product_id_fk, product_name, date, SUM(sales_count) AS value FROM sales JOIN users ON sales.user_id_fk = ? JOIN products ON products.product_id = sales.product_id_fk GROUP BY date',[req.params.id],(err,result)=>{
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
});

//getProducts
router.get('/products', function (req, res, next) {
  connection.query('select * from products', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getSkuByProducts
router.get('/sku/:product_id', function (req, res, next) {
  connection.query('SELECT * FROM pricing LEFT JOIN sku ON sku.sku_id = pricing.sku_id_fk LEFT JOIN products ON products.product_id = sku.product_id_fk where product_id = ?', req.params.product_id, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getUserSalesForTargetGraph
router.get('/usersaels/:userID', function (req, res, next) {
  connection.query('SELECT user_id_fk, sum(sales_count) as user_sum FROM fanco.sales  where user_id_fk= ?   GROUP BY user_id_fk', req.params.userID, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//get the most selling product as name and rev
router.get('/bestsellerproduct', function (req, res, next) {
  connection.query('SELECT products.product_name as Name , sum(sales_count * item_revenue) as rev FROM sales  inner join pricing on pricing.item_id = item_id_fk inner join products on products.product_id=sales.product_id_fk group by sales.product_id_fk order by rev desc limit 1', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

// get the country with the best rev
router.get('/bestcountyrev', function (req, res, next) {
  connection.query('SELECT  sales.country as country  , sum(sales_count * item_revenue) as Sums FROM sales  inner join pricing on pricing.item_id = item_id_fk group by sales.country order by Sums desc limit 1', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});


//yestrday  global rev 
router.get('/ysglobalrev', function (req, res, next) {
  connection.query("select sum(sales_count * item_revenue) as value from sales  left join pricing on pricing.item_id = item_id_fk where sales.date=DATE(NOW()-interval 1 DAY)", function(err, rows, fields) {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});



//getUserSalesLog
router.get('/usersaelslog/:userID', function (req, res, next){
  connection.query('SELECT date,country,city, sales_count, sku.sku_name  as model_name FROM fanco.sales INNER JOIN  fanco.pricing  ON  fanco.pricing.item_id = fanco.sales.item_id_fk INNER JOIN fanco.sku  on fanco.sku.sku_id=fanco.pricing.sku_id_fk WHERE user_id_fk= ? ', req.params.userID, function (err, rows, fields) {
    if (!err){
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});

//logNewSale
router.post('/logSale', function (req, res, next) {
  connection.query('insert into sales set ?', req.body, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getUnitSoldAneWeatherByMonthBy
router.get('/weathersale', function (req, res, next) {
  connection.query('SELECT DATE_FORMAT(date, "%m") AS Month, SUM(sales_count) as sales_count, ROUND( AVG(weather) ) as weather FROM sales WHERE date GROUP BY DATE_FORMAT(date, "%m")', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getAllTasks
router.get('/tasks', function (req, res, next) {
  connection.query('select task_id, task_creator_id, assign_to_id, task_text, done, username FROM tasks LEFT JOIN users ON users.user_id = tasks.assign_to_id', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getMyTasks
router.get('/myTasks/:user_id', function (req, res, next) {
  connection.query('select task_id, task_creator_id, assign_to_id, task_text, done, username FROM tasks LEFT JOIN users ON users.user_id = tasks.assign_to_id where assign_to_id = ?', req.params.user_id, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//addNewTask
router.post('/addTask', function (req, res, next) {
  connection.query('insert into tasks set ?', req.body, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//reviseTaskDone
router.put('/:task_id', function (req, res, next) {
  connection.query(`update tasks set done = ${req.body.done} where task_id = ?`, req.params.task_id, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getAllUsers
router.get('/users', function (req, res, next) {
  connection.query('select * from users', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getAllLevels
router.get('/levels', function (req, res, next) {
  connection.query('select level from users group by level', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getAllChannels
router.get('/channels', function (req, res, next) {
  connection.query('select * from channel', function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//ChangeUserDetails
router.put('/changeDetails/:user_id', function (req, res, next) {
  connection.query(`update users set channel_id_fk = ${req.body.channel_id_fk}, level = '${req.body.level}' where user_id = ${req.params.user_id}`, function (err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

//getBestSellers
router.get('/bestSellers', function (req, res, next) {
  connection.query('select sales_count, user_id_fk, username, item_revenue, sales_count * item_revenue as \'total_revenue\' from sales join users on users.user_id = sales.user_id_fk join pricing where sales.product_id_fk = pricing.product_id_fk group by username order by sales_count desc', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});


// getTheBestSellerOfTheMonth
router.get('/monthlyBestSeller', function (req, res, next) {
  connection.query('select user_id, username, sum(sales_count) as sum, sales_count*item_revenue as revenue from sales inner join users on users.user_id = sales.user_id_fk inner join pricing on sales.product_id_fk = pricing.product_id_fk and sales.item_id_fk = pricing.item_id WHERE MONTH(date) = MONTH(CURRENT_DATE()) group by username order by revenue desc limit 1', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send(err);
  });
});

module.exports = router;
