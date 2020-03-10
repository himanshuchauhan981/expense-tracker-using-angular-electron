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
    },

    getUserExpense : async (req,res) =>{
        let response = await expenseIncomeHandler.getUserExpense(req,res)
        return response
    },

    getOneExpense : async (req,res) =>{
        let response = await expenseIncomeHandler.getOneExpense(req,res)
        return response
    },

    updateExpense : async (req,res) =>{
        let response = await expenseIncomeHandler.updateExpense(req,res)
        return response
    },

    deleteExpense : async (req,res) =>{
        let response = await expenseIncomeHandler.deleteExpense(req,res)
        return response
    }
}

module.exports = expenseIncomeController