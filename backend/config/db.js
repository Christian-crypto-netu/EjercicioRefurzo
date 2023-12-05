const mongoose = require('mongoose');

require('dotenv').config({ path:  'var.env' });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.db_uri)

    console.log('>> Db Conectada');
  } catch (error) {
    console.error(error);
  }
};

module.exports = conectarDB;