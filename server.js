require('dotenv').config()
const app = require('./app')
const dbConnect = require("./db/connect");
//////////////////////////////////
const start = async () => {
    try {
        await dbConnect(process.env.DB)
        console.log('connected to DB')
        app.listen(3000, () => console.log(`welcome from server on port 3000`))
    } catch (err) {
        console.log(err.message)
    }
}
start()