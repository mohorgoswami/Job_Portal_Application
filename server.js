/* eslint-disable no-console */
const { app, PORT, sequelize } = require("./app")
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synced successfully')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.error('Error syncing database:', err)
    })
