const mongoose=require ('mongoose');
//schema creating
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDesignation:String,
    employeeLocation:String,
    employeeSalary:Number
})
const empData=mongoose.model('empapp',employeeSchema)
module.exports=empData;