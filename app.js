require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const cookieParser = require("cookie-parser");
const cors=require('cors');
const corsOptions=require('./config/corsOptions');
const credentials=require('./middleware/credentials');
const verifyJWT=require('./middleware/verifyJWT');
const verifyRoles=require("./middleware/verifyRoles");
const PORT=process.env.PORT
const URL=process.env.URL
const ROLES_LIST=require("./config/roles_list");
// Connect to MongoDB
const dbconnect= async()=>{
  await mongoose.connect(URL)
  .then(()=>{
      console.log('connected')
    }).catch((err)=>{
      console.log(err)
    })
}

//Handle options credentials check -before CORS!
// and fetch cookies credentials requirement
// app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//routes
app.use('/register',require('./routes/register'));
app.use("/login",require('./routes/auth'));
app.use("/refresh" ,require('./routes/refresh'));
app.use("/logout" ,require("./routes/logout"));

// app.use(verifyJWT);
app.use('/users',require('./routes/user'));

app.use("/product",require("./routes/products"));

// app.use(verifyRoles(ROLES_LIST.Admin));
app.use("/admin", require("./routes/admin"));

app.listen(PORT,()=>{
    console.log("Server is running on Port",PORT);
    dbconnect();
})


