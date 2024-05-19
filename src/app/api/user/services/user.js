import { UserModel } from "../models/user";

export class UserService {

    static async addInvestment(email, investment) {
        return await UserModel.findOneAndUpdate({ email: email },
            {
                $push: {investments: investment}
            },
            {
                runValidators: true,
                new: true
            }
        )
    }

    static async create(user) {
        return await new UserModel(user).save()
    }

    static async getByEmail(email) {
        return await UserModel.findOne({email:email})
    }
}