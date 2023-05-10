require('dotenv').config()

const express = require ('express')
const sequelize = require ('./db')
const cors = require ('cors')
const router = require ('./routes/index')
const errorHandler = require ('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')


const PORT = process.env.PORT || 5000
const models = require ('./models/models')
const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)



//errors handler is alwayes plased at the end of calls
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))

    }
    catch(er) {
        console.log(er)

    }
}

start()
