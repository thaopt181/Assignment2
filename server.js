require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const bookRoute = require('./routes/bookRoute/bookRoute');
const memberRoute = require('./routes/memberRoute/memberRoute');
const loanRoute = require('./routes/loanRoute/loanRoute');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/books', bookRoute);
app.use('/api/members', memberRoute);
app.use('/api/loans', loanRoute);

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});