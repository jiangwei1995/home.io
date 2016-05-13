var app = require('express')();
app.listen(1338);
app.get('/',function(req,res){
  res.send("你好home1338sdafdsjkfdsf");
});
app.get('/test',function(req,res){
  res.send("你好test1338");
});
app.get('/qqq',function(req,res){
  res.send("你好1338");
});
