import { Schema, model, models } from "mongoose"

export const investmentSchema = new Schema({

    investment: {
        amount: Number,
        currency: String
    },
    business: {
        url: { type: String, required: true },
        company: { type: String, required: true },
        campaign: { type: String, required: true },
        socialMedia: {
            website: { type: String },
            facebook: { type: String },
            instagram: { type: String },
            youtube: { type: String },
            x: { type: String }

        },
        start: { type: String, required: true },
        end: { type: String, required: true },
    }
})

export const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    investments: [investmentSchema]
})

export const UserModel = models.Users || model("Users", userSchema) 