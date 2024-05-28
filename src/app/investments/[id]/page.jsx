const fetchInvestmentDetails = async (id) => {
    const response = await fetch(`http://localhost:3000/api/Investments/${id}`);
    console.log(response, "llllllll3llllllllllllllllllllllllll");
    if (!response.ok) {
        throw new Error('Failed to fetch investment details');
    }
    const data = await response.json();
    console.log(data.response);
    return data.response;
};



export default async function InvestmentDetails(request) {

    const investment = await fetchInvestmentDetails(request.params.id);

    return (<main className="container mx-auto p-8 bg-gray-100 min-h-screen">
        {investment ? (
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Detalles de la Inversión</h1>
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
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <p className="text-center text-gray-500">No se encontró el Emprendimiento</p>
        )}
    </main>
    );
};

