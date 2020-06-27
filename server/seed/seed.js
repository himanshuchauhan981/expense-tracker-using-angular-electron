const mongoose = require('mongoose')
const { category } = require('../models')

// const url = 'mongodb://expense-tracker:expense-tracker0018@ds061158.mlab.com:61158/expense-tracker'
const url = 'mongodb://127.0.0.1:27017/expenseTracker'


mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }, (err,conn) => {
    if (err) {
        console.log('Mongo error ', err)
    }
    else {
        console.log('Mongoose Connection is Successful')
    }
})


categoryList = [
    {
        'category': 'Bills',
        'type': 'Expense'
    },
    {
        'category': 'Health',
        'type': 'Expense'
    },
    {
        'category': 'Entertainment',
        'type': 'Expense'
    },
    {
        'category': 'Telephone',
        'type': 'Expense'
    },
    {
        'category': 'Education',
        'type': 'Expense'
    },
    {
        'category': 'Salary',
        'type': 'Income'
    },
    {
        'category': 'Funds',
        'type': 'Income'
    },
    {
        'category': 'Medical',
        'type': 'Income'
    },
    {
        'category': 'Loan',
        'type': 'Income'
    }
]

async function saveCategory(){
    for(i=0;i<categoryList.length;i++){
        let categoryObject = new category(categoryList[i])
        await categoryObject.save().then(data =>{
            console.log('data saved')
        });
    }
}

saveCategory()