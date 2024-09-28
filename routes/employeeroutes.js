const express=require('express');
const router=express.Router();
const empModel=require('../model/empdata');
router.use(express.json())
//GET operation
router.get('/',async (req,res)=>{
    try {
        const data=await empModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }


})
//POST operation
router.post('/addData',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new empModel(item);
        const saveddata=await data1.save();
        res.status(200).send('Post successful');
    } catch (error) {
        res.status(404).send('Post unsuccessful');
    }
})
//UPDATE operation
router.put('/update/:id',async(req,res)=>{
    try {
       const id=req.params.id;
       const data=await empModel.findByIdAndUpdate(id,req.body)
       res.status(200).send('Updated successfully');
    } catch (error) {
       res.status(404).send('Update unsuccessful');
    }
   })
//DELETE operation






router.delete('/delete/:id',async(req,res)=>{
    try {
       const id=req.params.id;
       const data=await empModel.findByIdAndDelete(id,req.body)
       res.status(200).send('Deleted successfully');
    } catch (error) {
       res.status(404).send('Delete unsuccessful');
    }
   })




module.exports=router