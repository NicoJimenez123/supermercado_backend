const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/supermercadoDB';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then( ()=>{
    console.log('se conecto')

}).catch( ()=>{
    console.log('no se conecto: ERROR')

})

module.exports = (mongoose);