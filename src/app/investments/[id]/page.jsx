
'use client';

import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0/client';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


const fetchCreateInvestment = async (investmentData,investmentId) => {
    const response = await fetch(`http://localhost:3000/api/Investments/${investmentId}`, {
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


export default function InvestmentDetails(request) {
    const { user } = useUser()
    var amount;
    var currency = "COP";
    const responseInvestment = useSWR(`http://localhost:3000/api/Investments/${request.params.id}`, fetcher)

    
    if (responseInvestment.error) return <div>{error.message}</div>;
    if (responseInvestment.isLoading) return <div>Loading...</div>;
    const investment = responseInvestment.data.response

    const handleSubmit = async (e) => {
        e.preventDefault();
        const investmentData = {
            user: {
                email: user.email,
            },
            investment: {
                amount: amount,
                currency: currency
            },
            business: {
                socialMedia: {
                    website: investment.socialMedia.website,
                    facebook: investment.socialMedia.facebook,
                    instagram: investment.socialMedia.instagram,
                    youtube: investment.socialMedia.youtube,
                    x: ""
                },
                company: investment.company,
                campaign: investment.campaign,
                start: investment.start,
                end: investment.end
            }
        };
    
        try {
            await fetchCreateInvestment(investmentData, request.params.id);
            alert('Investment posted successfully!');
        } catch (error) {
            alert('Failed to post investment details');
        }
    };
    

    return (
        <main className="container mx-auto p-8 bg-gray-100 min-h-screen">

            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Detalles de la Inversión</h1>
                {investment.imageUrl && (
                <img src={investment.imageUrl} alt="Imagen de la inversión" className="mx-auto mb-8" />
            )}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">{investment.company}</h2>
                    <h3 className="text-xl font-medium text-gray-600">{investment.campaign}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Recaudación</h4>
                        <p className="text-gray-700">Cantidad: {investment.fundraising.amount} {investment.fundraising.currency}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Meta</h4>
                        <p className="text-gray-700">Cantidad: {investment.goal.amount} {investment.goal.currency}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Sobre Nosotros</h4>
                    <ul className="list-disc pl-5">
                        <li className="text-gray-700">{investment.aboutUs.whatWillWeDo}</li>
                        <li className="text-gray-700">{investment.aboutUs.whyTrustOurProject}</li>
                        <li className="text-gray-700">{investment.aboutUs.howWillWeMakeItReality}</li>
                        <li className="text-gray-700">{investment.aboutUs.someRisks}</li>
                        <li className="text-gray-700">{investment.aboutUs.positiveImpact}</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Redes Sociales</h4>
                    <ul className="list-disc pl-5">
                        {investment.socialMedia.website && (
                            <li className="text-gray-700"><a href={investment.socialMedia.website}>{investment.socialMedia.website}</a></li>
                        )}
                        {investment.socialMedia.facebook && (
                            <li className="text-gray-700"><a href={investment.socialMedia.facebook}>{investment.socialMedia.facebook}</a></li>
                        )}
                        {investment.socialMedia.instagram && (
                            <li className="text-gray-700"><a href={investment.socialMedia.instagram}>{investment.socialMedia.instagram}</a></li>
                        )}
                        {investment.socialMedia.youtube && (
                            <li className="text-gray-700"><a href={investment.socialMedia.youtube}>{investment.socialMedia.youtube}</a></li>
                        )}
                    </ul>
                </div>
                <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Condiciones</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700"><span className="font-semibold">Nombre:</span> {investment.conditions.name}</p>
                            <p className="text-gray-700"><span className="font-semibold">Tasa Fija:</span> {investment.conditions.fixedRate}</p>
                            <p className="text-gray-700"><span className="font-semibold">Pago de Intereses:</span> {investment.conditions.interestPayment}</p>
                            <p className="text-gray-700"><span className="font-semibold">Pago del Principal:</span> {investment.conditions.principalPayment}</p>
                            <p className="text-gray-700"><span className="font-semibold">Garantía:</span> {investment.conditions.guarantee}</p>
                            <p className="text-gray-700"><span className="font-semibold">Plazo:</span> {investment.conditions.term}</p>
                        </div>
                        <div>
                            <p className="text-gray-700"><span className="font-semibold">Acciones en la Ronda:</span> {investment.conditions.sharesInTheRound}</p>
                            <p className="text-gray-700"><span className="font-semibold">Clasificación:</span> {investment.conditions.classification}</p>
                            <p className="text-gray-700"><span className="font-semibold">Tipo de Acción:</span> {investment.conditions.typeOfShare}</p>
                            <p className="text-gray-700"><span className="font-semibold">Precio por Acción:</span> {investment.conditions.pricePerShare}</p>
                            <p className="text-gray-700"><span className="font-semibold">Número de Acciones por Paquete:</span> {investment.conditions.numberOfSharesPerPackage}</p>
                            <p className="text-gray-700"><span className="font-semibold">Inversión Mínima por Paquete:</span> {investment.conditions.minimumInvestmentPackage}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        <div>
                            <p className="text-gray-700"><span className="font-semibold">Porcentaje de Participación:</span> {investment.conditions.percentageOfEquity}</p>
                            <p className="text-gray-700"><span className="font-semibold">Valoración de la Compañía:</span> {investment.conditions.companyValuation}</p>
                        </div>
                        <div>
                            <p className="text-gray-700"><span className="font-semibold">Tipo de Ronda de Inversión:</span> {investment.conditions.typeOfInvestmentRound}</p>
                            <p className="text-gray-700"><span className="font-semibold">Sector:</span> {investment.conditions.sector}</p>
                            <br />
                            <p className="text-gray-700"><span className="font-semibold">Fecha de inico de la inversión:</span> {investment.start}</p>
                            <p className="text-gray-700"><span className="font-semibold">Fecha de fin de la Inversión:</span> {investment.end}</p>
                        </div>
                    </div>

                </div>
                {user ?
                    <form onSubmit={handleSubmit} className="mt-8">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                Monto de la Inversión
                            </label>
                            <input
                                id="amount"
                                type="number"
                                value={amount}
                                onChange={(e) => amount = e.target.value}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                            >
                                Invertir
                            </button>
                        </div>
                    </form> : <div className="text-center mt-8">
        <p className="text-gray-700">Inicia sesión para invertir</p>
    </div>
                }
            </div>

        </main>
    );
};