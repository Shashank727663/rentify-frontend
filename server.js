// serve static files from build folder to express 

// route any request to any path to the index.html file
const express  = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });
app.listen( 8080 , ()=>{ 
    console.log('Server is running on port 6000');
})
