const express=require('express');
const path=require('path')
const router=express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','log_in','index.html'))
    
});
router.post('/calculator',(req,res,next)=>{
    //console.log(req.body);
    const userName=req.body.user_name;
    const password=req.body.password;
    console.log(`user: ${userName}\npassword: ${password}`)

    if(userName=="sutharsan"&&password=="12345"){
        
        res.sendFile(path.join(__dirname,'..','calculator','calculator.html'));
        
       

       
        
    

        
    }
   else{
  
    res.writeHead(302, { Location: "/" });
        res.end()

    
   } 

})


module.exports = router;