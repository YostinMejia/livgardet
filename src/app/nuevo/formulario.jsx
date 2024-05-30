import { useState } from 'react';

export default function Formulario() {

    const fetchCreateInvestment = async (investmentData) => {
        console.log(investmentData);
        const response = await fetch(`http://localhost:3000/api/Investments/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(investmentData),
        });

        if (!response.ok) {
            throw new Error('Failed to post investment details');
        }

        const data = await response.json();
        return data;
    };

    const [investmentData, setInvestmentData] = useState({
        company: '',
        campaign: '',
        fundraising: {
            amount: 0,
            currency: ''
        },
        goal: {
            amount: 0,
            currency: ''
        },
        conditions: {
            name: '',
            fixedRate: '',
            interestPayment: '',
            principalPayment: '',
            guarantee: '',
            term: 0,
            gracePeriodForPrincipal: '',
            gracePeriodForInterest: '',
            sharesInTheRound: 0,
            classification: '',
            typeOfShare: '',
            pricePerShare: 0,
            numberOfSharesPerPackage: 0,
            minimumInvestmentPackage: '',
            percentageOfEquity: 0,
            companyValuation: '',
            typeOfInvestmentRound: '',
            sector: ''
        },
        shareholders: [],
        aboutUs: {
            whatWillWeDo: '',
            whyTrustOurProject: '',
            howWillWeMakeItReality: '',
            someRisks: '',
            positiveImpact: ''
        },
        socialMedia: {
            website: '',
            email: '',
            facebook: '',
            instagram: '',
            youtube: '',
            x: ''
        },
        start: '',
        end: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchCreateInvestment(investmentData);
            console.log(response);
            // Aquí puedes manejar la respuesta del servidor después de enviar el formulario
        } catch (error) {
            console.error(error);
            // Aquí puedes manejar el error en caso de que falle la solicitud
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvestmentData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                    Nombre de la compañia:
                </label>
                <input
                    id="company"
                    type="text"
                    name="company"
                    value={investmentData.company}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campaign">
                    Campaña:
                </label>
                <input
                    id="campaign"
                    type="text"
                    name="campaign"
                    value={investmentData.campaign}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraisingAmount">
                    Meta de dinero:
                </label>
                <input
                    id="fundraisingAmount"
                    type="number"
                    name="fundraisingAmount"
                    value={investmentData.fundraising.amount}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        fundraising: {
                            ...prevState.fundraising,
                            amount: parseInt(e.target.value)
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraisingCurrency">
                    Tipo de moneda:
                </label>
                <input
                    id="fundraisingCurrency"
                    type="text"
                    name="fundraisingCurrency"
                    value={investmentData.fundraising.currency}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        fundraising: {
                            ...prevState.fundraising,
                            currency: e.target.value
                        }
                    }))}
                    maxLength={3}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            {/* Agrega el resto de los campos aquí */}
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    );
};


