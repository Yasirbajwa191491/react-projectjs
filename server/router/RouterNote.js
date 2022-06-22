const express=require("express");
const router=express.Router();
const Note=require("../schema/NoteSchema");
const auth=require("../middleware/auth");
router.post("/addnote",auth,async(req,res)=>{
    try {
        const {username,email,message}=req.body;
        const addnote=new Note({
            userID:req.user._id,username,email,message
        });
        const data=await addnote.save();
        res.status(200).send(data);
    } catch (error) {
       res.status(500).send({error:"internal server error"}); 
    }
})
router.get("/fetchnote",auth,async(req,res)=>{
    try {
     const data=await Note.find({userID:req.user._id});
     res.json(data);
    } catch (error) {
        res.status(500).send({error:"internal server error"}); 
     }
})
router.delete("/deletenote/:_id",auth,async(req,res)=>{
  try {
     const _id=req.params._id; 
     const selectnote=await Note.findById(_id);
     if(!selectnote){
         
        return res.status(404).send("Note not found");
     }
     if(selectnote.userID.toString() !==req.user._id.toString()){
        return res.status(401).send("Not Allowed to delete note");
     }
     const deleteNote=await Note.findByIdAndDelete(_id);
     res.status(200).json({result:"Note has been deleted"})
  }  catch (error) {
    res.status(500).send({error:"internal server error"}); 
 } 
})
router.patch("/updatenote/:_id",auth,async(req,res)=>{
    try {
        const _id=req.params._id; 
        const {username,email,message}=req.body;
        const selectnote=await Note.findById(_id);
        if(!selectnote){
            
           return res.status(404).send("Note not found");
        }
        if(selectnote.userID.toString() !==req.user._id.toString()){
           return res.status(401).send("Not Allowed to update note");
        }
        const update=await Note.findByIdAndUpdate(_id,{
            username,email,message
        },{new: true})
        res.status(200).json(update);
     }  catch (error) {
       res.status(500).send({error:"internal server error"}); 
    }  
})
module.exports=router;