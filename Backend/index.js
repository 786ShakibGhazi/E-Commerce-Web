const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const CustomersModel = require('./modules/Customers');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Customers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


app.post('/SignUp', async (req, res) => {
    CustomersModel.create(req.body)
        .then((Customer) => res.json(Customer))
        .catch((err) => res.status(400).json('Error: ' + err));
});
app.post('/SignIn', async (req, res) => {
    const { email, password } = req.body;
    CustomersModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Incorrect password");
                }
            } else {
                res.json("User not found, Please SignUp first...");
            }
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});
