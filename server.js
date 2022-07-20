const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const infoRouter = require("./routes/infoRoutes")

const PORT = 5000;

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use('/api', infoRouter)

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))