const express = require('express');
const bodyParser = require('body-parser');
const route = require('./src/Routes/route');
const  mongoose  = require('mongoose');
const app = express();
const multer = require('multer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any())

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://syedfaizanali798:qIuO1FNAsWQj7j9T@cluster0.pgdyj.mongodb.net/blog", {
    useNewUrlParser: true,
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});