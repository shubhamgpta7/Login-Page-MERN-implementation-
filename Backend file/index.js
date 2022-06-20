import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, ()=>{
    console.log("Database Connected");
});

const userSchema = new mongoose.Schema({
    user : String,
    email : String,
    password : String
})

const User = new mongoose.model("User",userSchema);

//Routes
app.get("/", (req, res) => {
    res.send("MY API");
})

app.post("/login", (req, res) => {
    const {email, password } = req.body;
    User.findOne({email : email }, (err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message : "Login Sucessfull"});
            }else{
                res.send({ message : "Password didn't match"});
            }
        }else{
            res.send({message : "User not registered"})
        }
    }) 
})

app.post("/register", (req, res) => {
    const {name, email, password } = req.body;
    User.findOne({email : email}, (err, user)=>{
        if(user){
            res.send({ message : "User already registered"})
        }else{
            const user = new User({
                name,
                email,
                password
            })
        
            user.save(err =>{
                if(err){
                    res.send(err);
                } else{
                    res.send( { message : "Sucessfully Registered !"})
                }
            })
        }
    })    
})

app.listen(9002, () => {
    console.log("BE started at 9002");
})