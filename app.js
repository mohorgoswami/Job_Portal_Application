
const express = require('express');
// const userRoutes = require('./routes/index');
const indexRoutes = require('./routes/index');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8501;


app.use(express.json());

app.use('/api/v1/', indexRoutes);



sequelize.sync({alter:true}).then(() => {
  console.log('Database synced successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error syncing database:', err);
});
