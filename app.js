var app = require('express')();
app.listen(1338);
app.get('/',function(req,res){
  res.send("你好home");
});
app.get('/test',function(req,res){
  res.send("你好test");
});
