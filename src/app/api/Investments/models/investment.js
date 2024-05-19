import { Schema, model, models } from "mongoose"

export const conditionsSchema = new Schema({
    _id: false,
    name: { type: String, required: true }, // Nombre
    fixedRate: { type: String, required: true }, // Tasa fija
    interestPayment: { type: String, required: true }, // Pago de intereses
    principalPayment: { type: String, required: true }, // Pago capital
    guarantee: { type: String, required: true }, // Garantía
    term: { type: Number, required: true }, // Plazo
    gracePeriodForPrincipal: { type: String }, // Periodo de gracia de capital
    gracePeriodForInterest: { type: String }, // Periodo de gracia de intereses
    sharesInTheRound: { type: Number }, // Acciones en la ronda
    classification: { type: String }, // Clasificación

    typeOfShare: { type: String }, // Tipo de acción
    pricePerShare: { type: Number }, // Precio de la acción
    numberOfSharesPerPackage: { type: Number }, // Número de acciones por paquete
    minimumInvestmentPackage: { type: String }, // Paquete mínimo de inversión
    percentageOfEquity: { type: Number }, // Porcentaje del patrimonio
    companyValuation: { type: String }, // Valoración de la empresa
    typeOfInvestmentRound: { type: String }, // Tipo de ronda de inversión
    sector: { type: String, required: true } // Sector

})

export const shareholdersSchema = new Schema({
    email: { type: String, required: true },
    amount: { type: Number, required: true },

})

export const investmentSchema = new Schema({
    company: { type: String, required: true },
    campaign: { type: String, required: true },
    fundraising: {
        amount: Number,
        currency: { type: String, maxlength: 3 }
    },
    goal: {
        amount: { type: Number, required: true },
        currency: { type: String, maxlength: 3 }
    },
    conditions: { type: conditionsSchema, required: true },
    investments: { type: Number, default: 0 },
    shareholders: [shareholdersSchema],
    aboutUs: {
        whatWillWeDo: { type: String, required: true },
        whyTrustOurProject: { type: String, required: true },
        howWillWeMakeItReality: { type: String, required: true },
        someRisks: { type: String, required: true },
        positiveImpact: { type: String, required: true },
    },
    socialMedia: {
        website: { type: String },
        email:{type:String},
        facebook: { type: String },
        instagram: { type: String },
        youtube: { type: String },
        x: { type: String }

    },
    start: { type: String, required: true },
    end: { type: String, required: true },

})

export const InvestmentModel = models.Investments || model("Investments", investmentSchema) 