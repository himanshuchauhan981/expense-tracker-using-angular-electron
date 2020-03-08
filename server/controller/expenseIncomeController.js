const { expenseIncomeHandler } = require('../handlers')

let expenseIncomeController = {
    saveNewExpenseIncome : async (req,res) =>{
        let response = await expenseIncomeHandler.saveNewExpenseIncome(req,res)
        return response
    },

    getAllCategory : async (req,res) =>{
        let response = await expenseIncomeHandler.getAllCategory(req,res)
        return response
    },

    saveNewCategory : async (req,res) =>{
        let response = await expenseIncomeHandler.saveNewCategory(req,res)
        return response
    }
}

module.exports = expenseIncomeController