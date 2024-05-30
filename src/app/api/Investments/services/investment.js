import { InvestmentModel } from "../models/investment.js"

export class InvestmentService {

    static async create(Investment) {
        return await new InvestmentModel(Investment).save()
    }

    static async invest(user, investment) {
        user.amount = investment.amount
        return await InvestmentModel.findOneAndUpdate({ _id: investment.id },
            {
                $push: { shareholders: user },
                $inc: { investments: 1, "fundraising.amount": investment.amount },
            },
            {
                runValidators: true,
                new: true
            }
        )
    }

    static async get(filter) {
        return await InvestmentModel.find(filter)
    }

    static async getById(id) {
        console.log(id);
        const Investment = await InvestmentModel.findById(id).select("-shareholders")
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


