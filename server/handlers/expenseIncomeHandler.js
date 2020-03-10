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
        let expenseDetails = await expense.find({UserId : req.query.userId}).sort({Date : -1}).select({ Date: 1, Category: 1, Type: 1, Amount: 1 })
        res.status(200).json({status: 200, data: expenseDetails})
    },

    getOneExpense : async (req,res) =>{
        let userExpense = await expense.findById(req.params.id).select({__v: 0, UserId: 0})
        res.status(200).json({status: 200, data: userExpense})
    },

    updateExpense : async (req,res) =>{
        let updatedExpense = await expense.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json({status: 200, msg:'Updated Successfully'})
    }
}

module.exports = expenseIncomeHandler