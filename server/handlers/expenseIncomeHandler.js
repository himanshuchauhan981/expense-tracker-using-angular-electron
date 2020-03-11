const { category,expense } = require('../models')
var moment = require('moment')

let expenseIncomeHandler = {
    saveNewExpenseIncome : async (req,res) =>{
        let newExpense = new expense(req.body)
        let expenseData = await newExpense.save()

        expenseData = (({_id,Date,Category,Amount,Type}) => ({_id,Date,Category,Amount,Type}))(expenseData)

        if(expenseData.Type === 'Income') expenseData['msg']="SAVE_INCOME"
        else expenseData['msg']="SAVE_EXPENSE"

        res.status(200).send({status: 200, msg: `New ${req.body.Type} created`, data: expenseData})
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
        let momentDate = JSON.parse(req.query.momentDate)

        let expenseDetails = await expense.find({
            $and: [
                {
                    UserId : req.query.userId
                },
                {
                    Date :{
                        $gte: moment(`${momentDate.year}/${momentDate.month}`,'YYYY/MM').startOf('month').format('x'),
                        $lte: moment(`${momentDate.year}/${momentDate.month}`,'YYYY/MM').endOf('month').format('x')
                    }
                }
            ]
        }).sort({Date : -1}).select({ Date: 1, Category: 1, Type: 1, Amount: 1 })
        
        res.status(200).json({status: 200, data: expenseDetails})
    },

    getOneExpense : async (req,res) =>{
        let userExpense = await expense.findById(req.params.id).select({__v: 0, UserId: 0})
        res.status(200).json({status: 200, data: userExpense})
    },

    updateExpense : async (req,res) =>{
        let updatedExpense = await expense.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new: true}
        )

        updatedExpense = (({_id,Date,Category,Amount,Type}) => ({_id,Date,Category,Amount,Type}))(updatedExpense)
        
        if(updatedExpense.Type === 'Income'){
            updatedExpense['msg'] = 'UPDATE_INCOME'
        }
        else updatedExpense['msg'] = 'UPDATE_EXPENSE'

        res.status(200).json({status: 200, msg: 'Updated Successfully', data: updatedExpense})
    },

    deleteExpense : async (req,res) =>{
        let deletedExpense = await expense.findByIdAndRemove(req.params.id)
        res.status(200).json({status: 200, msg:'Deleted Successfully'})
    }
}

module.exports = expenseIncomeHandler