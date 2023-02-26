const mongoose=require("mongoose");
module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    };
    try{
mongoose.connect(process.env.DB,connectionParams)
console.log("Connected to database successfully")
    }catch(error){
        console.log(error);
console.log("could not connect to database!")
    }
}