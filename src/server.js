const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/chepkorir-webfolio'));

app.get('/*', (req,res) => {
    
res.sendFile(path.join(__dirname+'/dist/chepkorir-webfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
