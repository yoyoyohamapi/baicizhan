var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT, function(){
    console.log("百词斩测试查看: http://localhost:"+process.env.PORT);
});