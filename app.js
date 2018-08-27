const express=require('express');
const app=express();
//引入模板引擎
const exphbs=require('express-handlebars');
//引入路径模块
const path=require('path');
// 配置模板引擎,告诉express项目所使用的是哪个模板引擎
app.engine('handlebars',exphbs({
    //配置公共部分的路径
    partialsDir:[{
        dir:path.join(__dirname,'views','home','partials'),
        namespace:'home'
    },{
        dir:path.join(__dirname,'views','admin','partials'),
        namespace:'admin'
    }],
    //模板架构所在路径
    layoutsDir:path.join(__dirname,'views','layouts'),
    //渲染模板时默认使用模板架构
    defaultLayout:'home'
}))
//配置模板的路径
app.set('views',path.join(__dirname,'views'));
//指定模板后缀
app.set('view engine','handlebars');
//开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));
//创建前端主路由
const home=express.Router();
//创建后端主路由
const admin=express.Router();
//当用户以/home访问的时候,走home路由
app.use('/home',home);
//当用户以/admin访问的时候,走admin路由
app.use('/admin',admin);
//当客户端以get方式请求的时候
home.get('/index',(req,res)=>{
    //向客户端做出响应
    // res.send('Hello Blog');
    // 渲染模板
    res.render('home/index');   
});
home.get('/about',(req,res)=>{
    //向客户端做出响应
    // res.send('Hello Blog');
    // 渲染模板
    res.render('home/about');
    
});
home.get('/join',(req,res)=>{
    res.render('home/join');
});
home.get('/register',(req,res)=>{
    res.render('home/register');
});
home.get('/login',(req,res)=>{
    res.render('home/login');
});
admin.get('/index',(req,res)=>{
    res.render('admin/index',{
        layout:'admin'
    });
});
//添加文章页面路由
admin.get('/add',(req,res)=>{
    res.render('admin/add',{
        layout:'admin'
    });
});
//添加文章列表路由
admin.get('/list',(req,res)=>{
    res.render('admin/list',{
        layout:'admin'
    })
});
admin.get('/settings',(req,res)=>{
    res.render('admin/settings',{
        layout:'admin'
    })
});
app.listen(3000,(err)=>{
    if(!err){
        console.log('服务器启动成功');
    }
})