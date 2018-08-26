const express=require('express');
const app=express();
//当客户端以get方式请求的时候
app.get('/',(req,res)=>{
    //向客户端做出响应
    res.send('Hello Blog');
})
app.listen(3000,(err)=>{
    if(!err){
        console.log('服务器启动成功');
    }
})