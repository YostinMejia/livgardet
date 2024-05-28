import { getSession } from '@auth0/nextjs-auth0';
import { UserService } from '../api/user/services/user.js';
import { connectDb } from '../api/libs/mongodb/connection.js';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(async () => {
    const { user } = await getSession();
    await connectDb()
    const investments = await UserService.getByEmail(user.email)

    return (
        user && (
            <main className="container mx-auto p-8 bg-gray-100 min-h-screen">
                <div className="mt-8">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                        <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">{user.name}</h2>
                        <p className="text-gray-700 text-center">{user.email}</p>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Inversiones</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {investments && investments.length > 0 ? (
                        investments.map((investment, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg cursor-pointer transition-shadow"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inversión #{index + 1}</h2>
                                <p className="text-gray-700">Amount: {investment.investment.amount}</p>
                                <p className="text-gray-700">Currency: {investment.investment.currency}</p>
                                <p className="text-gray-700">Company: {investment.business.company}</p>
                                <p className="text-gray-700">Campaign: {investment.business.campaign}</p>
                                <p className="text-gray-700">Start Date: {investment.business.start}</p>
                                <p className="text-gray-700">End Date: {investment.business.end}</p>
                              
                                <div className="text-gray-700 mt-2">
                                    <p>Social Media:</p>
                                    <ul className="list-disc pl-5">
                                        {investment.business.socialMedia.website && <li><a href={investment.business.socialMedia.website}>{investment.business.socialMedia.website}</a></li>}
                                        {investment.business.socialMedia.facebook && <li><a href={investment.business.socialMedia.facebook}>{investment.business.socialMedia.facebook}</a></li>}
                                        {investment.business.socialMedia.instagram && <li><a href={investment.business.socialMedia.instagram}>{investment.business.socialMedia.instagram}</a></li>}
                                        {investment.business.socialMedia.youtube && <li><a href={investment.business.socialMedia.youtube}>{investment.business.socialMedia.youtube}</a></li>}
                                        {investment.business.socialMedia.x && <li><a href={investment.business.socialMedia.x}>{investment.business.socialMedia.x}</a></li>}
                                    </ul>
                                </div>
                                <div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        <a href={investment.business.url} target="_blank" rel="noopener noreferrer">Visitar</a>
                                    </button>
                                </div>
                                <br />
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No investments found.</p>
                    )}
                </div>
            </main>
        )
    );
});
