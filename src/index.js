import app from './app'

require('dotenv').config()

const port = process.env.NODE_PORT;

app.listen(port, () => console.info(`Server running on port ${port}`));