import { getSession } from '@auth0/nextjs-auth0';
import { UserService } from '../api/user/services/user.js';
import { connectDb } from '../api/libs/mongodb/connection.js';
import Logout from "../logout.jsx"

export default async function ProfileServer() {
    const { user } = await getSession();
    await connectDb()
    const investments = await UserService.getByEmail(user.email)
    console.log(investments);
    return (

        user && (
            <main>

                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <br />
                    <ul>
                        {investments && investments.length > 0 ? (
                            investments.map((investment, index) => (
                                <li key={index}>
                                    <div>
                                        <h3>Inversión #{index + 1}</h3>
                                        <p>Amount: {investment.investment.amount}</p>
                                        <p>Currency: {investment.investment.currency}</p>
                                        <p>Company: {investment.business.company}</p>
                                        <p>Campaign: {investment.business.campaign}</p>
                                        <p>Start Date: {investment.business.start}</p>
                                        <p>End Date: {investment.business.end}</p>
                                        <p>URL: <a href={investment.business.url}>{investment.business.url}</a></p>
                                        <div>
                                            <p>Social Media:</p>
                                            <ul>
                                                {investment.business.socialMedia.website && <li>Website: <a href={investment.business.socialMedia.website}>{investment.business.socialMedia.website}</a></li>}
                                                {investment.business.socialMedia.facebook && <li>Facebook: <a href={investment.business.socialMedia.facebook}>{investment.business.socialMedia.facebook}</a></li>}
                                                {investment.business.socialMedia.instagram && <li>Instagram: <a href={investment.business.socialMedia.instagram}>{investment.business.socialMedia.instagram}</a></li>}
                                                {investment.business.socialMedia.youtube && <li>YouTube: <a href={investment.business.socialMedia.youtube}>{investment.business.socialMedia.youtube}</a></li>}
                                                {investment.business.socialMedia.x && <li>X: <a href={investment.business.socialMedia.x}>{investment.business.socialMedia.x}</a></li>}
                                            </ul>
                                        </div>
                                    </div>
                                    <br />
                                </li>
                            ))
                        ) : (
                            <li>No investments found.</li>
                        )}
                    </ul>

                </div>
                <div>
                    <Logout></Logout>
                </div>
            </main>
        )
    );
}