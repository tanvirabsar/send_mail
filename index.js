const app = require('./app')
const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`server is runing http://localhost:${PORT}`)
})