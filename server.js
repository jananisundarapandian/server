const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/auth',authRoutes);

const PORT= 27;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

    mongoose.connect("mongodb://localhost:27017/janani")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

