// import the json-server
const jsonServer = require("json-server")
//create server for media player
const MPserver = jsonServer.create()
//create middleware used by JSON server
const middleware = jsonServer.defaults()
//set up  routes for json file in server
const route =jsonServer.router('db.json')
// set up port for the running server app
const PORT = 3000 || process.env.PORT


MPserver.use(middleware)
MPserver.use(route)
MPserver.listen(PORT,()=>{
    console.log(`Media player started at ${PORT} and waiting for client request`);
})