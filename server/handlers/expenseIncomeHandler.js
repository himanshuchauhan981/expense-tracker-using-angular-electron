const { category,users } = require('../models')

let expenseIncomeHandler = {
    saveNewExpenseIncome : async (req,res) =>{
        
    },

    getAllCategory : async (req,res) =>{
        let categories = await category.find()
        res.status(200).send({status: 200, categories: categories})
    },

    saveNewCategory : async (req,res) =>{
        let categoryObject = new category(req.body)
        let newCategory = await categoryObject.save()
        res.status(200).send({status: 200, data: newCategory})
    }
}

module.exports = expenseIncomeHandler