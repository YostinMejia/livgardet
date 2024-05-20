import { UserModel } from "../models/user";

export class UserService {

    static async addInvestment(email, investment, business) {
        return await UserModel({ email: email, investment, business }).save()
    }

    static async create(user) {
        return await new UserModel(user).save()
    }

    static async getByEmail(email) {
        return await UserModel.find({ email: email }).select("investment business -_id")
    }
}