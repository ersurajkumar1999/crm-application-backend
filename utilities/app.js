const cors = require('cors');
const express = require('express');
const dotenv = require("dotenv");
const homeRoutes = require('../routes/homeRoutes');
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const postRoutes = require('../routes/postRoutes');
const connectionRoutes = require('../routes/connectionRoutes');
const friendShipRoutes = require('../routes/friendShipRoutes');
const chatRoutes = require('../routes/chatRoutes');
// const countryRoutes = require('../routes/countryRoutes');
// const stateRoutes = require('../routes/stateRoutes');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: false }));

app.use(cors());


app.use('/', homeRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', postRoutes);
app.use('/api/v1', connectionRoutes);
app.use('/api/v1', friendShipRoutes);
app.use('/api/v1', chatRoutes);
// app.use('/api/v1', stateRoutes)

module.exports = { app };