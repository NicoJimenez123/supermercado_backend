const mongoose = require('mongoose');
const MongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/supermercadoDB'
// const URI = `mongodb://localhost:27017/supermercadoDB`;

mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then( ()=>{
    console.log('se conecto')

}).catch( (e)=>{
    console.log('no se conecto: ERROR', e)

})

module.exports = mongoose;