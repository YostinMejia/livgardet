import { InvestmentModel } from "../models/investment.js"

export class InvestmentService {

    static async create(Investment) {
        return await new InvestmentModel(Investment).save()
    }

    static async get(filter) {
        return await InvestmentModel.find(filter)
    }

    static async getById(id) {
        console.log(id);
        const Investment = await InvestmentModel.findById(id)
        console.log(Investment);
        return Investment
    }

    static async delete(InvestmentId) {
        return await InvestmentModel.findOneAndDelete({ _id: InvestmentId })
    }

    static async patch(InvestmentId, updatedData) {
        return await InvestmentModel.findOneAndUpdate({ _id: InvestmentId }, updatedData, {
            new: true,
        })

    }

}


