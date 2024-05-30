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
            imageUrl: '',
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagenUrl">
                    Imagen url:
                </label>
                <input
                    id="imagenUrl"
                    type="text"
                    name="imagenUrl"
                    value={investmentData.conditions.imageUrl}
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
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre:
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={investmentData.conditions.name}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            name: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fixedRate">
                    Tasa fija:
                </label>
                <input
                    id="fixedRate"
                    type="text"
                    name="fixedRate"
                    value={investmentData.conditions.fixedRate}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            fixedRate: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestPayment">
                    Pago de intereses:
                </label>
                <input
                    id="interestPayment"
                    type="text"
                    name="interestPayment"
                    value={investmentData.conditions.interestPayment}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            interestPayment: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="principalPayment">
                    Pago capital:
                </label>
                <input
                    id="principalPayment"
                    type="text"
                    name="principalPayment"
                    value={investmentData.conditions.principalPayment}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            principalPayment: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guarantee">
                    Garantía:
                </label>
                <input
                    id="guarantee"
                    type="text"
                    name="guarantee"
                    value={investmentData.conditions.guarantee}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            guarantee: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="term">
                    Plazo:
                </label>
                <input
                    id="term"
                    type="number"
                    name="term"
                    value={investmentData.conditions.term}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            term: parseInt(e.target.value)
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gracePeriodForPrincipal">
                    Periodo de gracia de capital:
                </label>
                <input
                    id="gracePeriodForPrincipal"
                    type="text"
                    name="gracePeriodForPrincipal"
                    value={investmentData.conditions.gracePeriodForPrincipal}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            gracePeriodForPrincipal: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gracePeriodForInterest">
                    Periodo de gracia de intereses:
                </label>
                <input
                    id="gracePeriodForInterest"
                    type="text"
                    name="gracePeriodForInterest"
                    value={investmentData.conditions.gracePeriodForInterest}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            gracePeriodForInterest: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sharesInTheRound">
                    Acciones en la ronda:
                </label>
                <input
                    id="sharesInTheRound"
                    type="number"
                    name="sharesInTheRound"
                    value={investmentData.conditions.sharesInTheRound}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            sharesInTheRound: parseInt(e.target.value)
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classification">
                    Clasificación:
                </label>
                <input
                    id="classification"
                    type="text"
                    name="classification"
                    value={investmentData.conditions.classification}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            classification: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfShare">
                    Tipo de acción:
                </label>
                <input
                    id="typeOfShare"
                    type="text"
                    name="typeOfShare"
                    value={investmentData.conditions.typeOfShare}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            typeOfShare: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pricePerShare">
                    Precio de la acción:
                </label>
                <input
                    id="pricePerShare"
                    type="number"
                    name="pricePerShare"
                    value={investmentData.conditions.pricePerShare}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            pricePerShare: parseFloat(e.target.value)
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfSharesPerPackage">
                    Número de acciones por paquete:
                </label>
                <input
                    id="numberOfSharesPerPackage"
                    type="number"
                    name="numberOfSharesPerPackage"
                    value={investmentData.conditions.numberOfSharesPerPackage}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            numberOfSharesPerPackage: parseInt(e.target.value)
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minimumInvestmentPackage">
                    Paquete de inversión mínima:
                </label>
                <input
                    id="minimumInvestmentPackage"
                    type="text"
                    name="minimumInvestmentPackage"
                    value={investmentData.conditions.minimumInvestmentPackage}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            minimumInvestmentPackage: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="percentageOfEquity">
                    Porcentaje de participación:
                </label>
                <input
                    id="percentageOfEquity"
                    type="number"
                    name="percentageOfEquity"
                    value={investmentData.conditions.percentageOfEquity}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            percentageOfEquity: parseFloat(e.target.value)
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyValuation">
                    Valoración de la compañía:
                </label>
                <input
                    id="companyValuation"
                    type="text"
                    name="companyValuation"
                    value={investmentData.conditions.companyValuation}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            companyValuation: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfInvestmentRound">
                    Tipo de ronda de inversión:
                </label>
                <input
                    id="typeOfInvestmentRound"
                    type="text"
                    name="typeOfInvestmentRound"
                    value={investmentData.conditions.typeOfInvestmentRound}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            typeOfInvestmentRound: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sector">
                    Sector:
                </label>
                <input
                    id="sector"
                    type="text"
                    name="sector"
                    value={investmentData.conditions.sector}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        conditions: {
                            ...prevState.conditions,
                            sector: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatWillWeDo">
                    ¿Qué haremos?
                </label>
                <input
                    id="whatWillWeDo"
                    type="text"
                    name="whatWillWeDo"
                    value={investmentData.aboutUs.whatWillWeDo}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        aboutUs: {
                            ...prevState.aboutUs,
                            whatWillWeDo: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whyTrustOurProject">
                    ¿Por qué confiar en nuestro proyecto?
                </label>
                <input
                    id="whyTrustOurProject"
                    type="text"
                    name="whyTrustOurProject"
                    value={investmentData.aboutUs.whyTrustOurProject}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        aboutUs: {
                            ...prevState.aboutUs,
                            whyTrustOurProject: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="howWillWeMakeItReality">
                    ¿Cómo lo haremos realidad?
                </label>
                <input
                    id="howWillWeMakeItReality"
                    type="text"
                    name="howWillWeMakeItReality"
                    value={investmentData.aboutUs.howWillWeMakeItReality}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        aboutUs: {
                            ...prevState.aboutUs,
                            howWillWeMakeItReality: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="someRisks">
                    Algunos riesgos:
                </label>
                <input
                    id="someRisks"
                    type="text"
                    name="someRisks"
                    value={investmentData.aboutUs.someRisks}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        aboutUs: {
                            ...prevState.aboutUs,
                            someRisks: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="positiveImpact">
                    Impacto positivo:
                </label>
                <input
                    id="positiveImpact"
                    type="text"
                    name="positiveImpact"
                    value={investmentData.aboutUs.positiveImpact}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        aboutUs: {
                            ...prevState.aboutUs,
                            positiveImpact: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                    Sitio web:
                </label>
                <input
                    id="website"
                    type="text"
                    name="website"
                    value={investmentData.socialMedia.website}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        socialMedia: {
                            ...prevState.socialMedia,
                            website: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Correo electrónico:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={investmentData.socialMedia.email}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        socialMedia: {
                            ...prevState.socialMedia,
                            email: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facebook">
                    Facebook:
                </label>
                <input
                    id="facebook"
                    type="text"
                    name="facebook"
                    value={investmentData.socialMedia.facebook}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        socialMedia: {
                            ...prevState.socialMedia,
                            facebook: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagram">
                    Instagram:
                </label>
                <input
                    id="instagram"
                    type="text"
                    name="instagram"
                    value={investmentData.socialMedia.instagram}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        socialMedia: {
                            ...prevState.socialMedia,
                            instagram: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="youtube">
                    YouTube:
                </label>
                <input
                    id="youtube"
                    type="text"
                    name="youtube"
                    value={investmentData.socialMedia.youtube}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        socialMedia: {
                            ...prevState.socialMedia,
                            youtube: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="x">
                    X (Twitter):
                </label>
                <input
                    id="x"
                    type="text"
                    name="x"
                    value={investmentData.socialMedia.x}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        socialMedia: {
                            ...prevState.socialMedia,
                            x: e.target.value
                        }
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start">
                    Fecha de inicio:
                </label>
                <input
                    id="start"
                    type="date"
                    name="start"
                    value={investmentData.start}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        start: e.target.value
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end">
                    Fecha de fin:
                </label>
                <input
                    id="end"
                    type="date"
                    name="end"
                    value={investmentData.end}
                    onChange={(e) => setInvestmentData(prevState => ({
                        ...prevState,
                        end: e.target.value
                    }))}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>


            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    );
};


