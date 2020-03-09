const { category,expense } = require('../models')

let expenseIncomeHandler = {
    saveNewExpenseIncome : async (req,res) =>{
        let newExpense = new expense(req.body)
        await newExpense.save()
        res.status(200).send({status: 200, msg: `New ${req.body.Type} created`})
    },

    getAllCategory : async (req,res) =>{
        let categories = await category.find()
        res.status(200).send({status: 200, categories: categories})
    },

    saveNewCategory : async (req,res) =>{
        let categoryObject = new category(req.body)
        let newCategory = await categoryObject.save()
        res.status(200).send({status: 200, data: newCategory})
    },

    getUserExpense : async (req,res) =>{
        let expenseDetails = await expense.find({UserId : req.query.userId}).select({ Date: 1, Category: 1, Type: 1, Amount: 1 })
        res.status(200).json({status: 200, data: expenseDetails})
    }
}

module.exports = expenseIncomeHandler