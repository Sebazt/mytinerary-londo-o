const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{

useUnifiedTopology: true, //le permito utilizar controladores no especificamente de mongo.
useNewUrlParser: true,
//si no puede establecer conexion con el controlador actual, le permite conectar con controlares viejos
})
.then(()=>console.log('Database connected'))
.catch(err=>console.error(err))