const { category,users } = require('../models')

let expenseIncomeHandler = {
    saveNewExpenseIncome : async (req,res) =>{
        
    },

    getAllCategory : async (req,res) =>{
        let categories = await category.find()
        res.status(200).send({status: 200, categories: categories})
    }
}

module.exports = expenseIncomeHandler