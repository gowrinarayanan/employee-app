const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
const empRoutes=require('./routes/employeeroutes');
app.use('/basic',empRoutes);

require('./db/connection');




app.listen(4000,()=>{
    console.log('Server is running on PORT 4000');
})
