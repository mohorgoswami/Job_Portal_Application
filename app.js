
const express = require('express');
// const userRoutes = require('./routes/index');
const indexRoutes = require('./routes/index');
const sequelize = require('./config/db'); 
// const User = require('./model/userModel'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/api', indexRoutes);



sequelize.sync().then(() => {
  console.log('Database synced successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error syncing database:', err);
});
