var app = require('express')();
app.listen(1338);
app.get('/',function(req,res){
  res.send("你好home1338");
});
app.get('/test',function(req,res){
  res.send("你好test1338");
});
