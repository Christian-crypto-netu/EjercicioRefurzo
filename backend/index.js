const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/productoRoutes'))

app.listen(4000, () => {
  console.log(">> Server run in port 4000 pass: 290R44ay6guZNkSE")
});