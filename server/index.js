require('dotenv').config();
const express = require('express')
const connectDB = require('./db');
const cors = require('cors')
const authRouter=require('./routes/authRouter')
const app = express();

//middleware
app.use(express.json())
app.use(cors())

//routes:
app.use('/api/v1',authRouter)











const PORT = process.env.PORT || 8080;
const startServer = async () => {
    try {
        await connectDB(); // Connect to the database
        const server = app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
        process.exit(1);
    }
};

startServer();
