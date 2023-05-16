const http=require('http')

const server = http.createServer((req,res)=>{
if(req.url ==='/'){
    res.end('Welcome to our homepage');
}
if(req.url === '/about'){
    res.end('helo world');
}
else{
res.end(`
    <h1>OOPS?</h1> 
    <p>We cant find the page</p>
    <a href="/">Back Home</a>
    `);
}
})
server.listen(5000)


///note this