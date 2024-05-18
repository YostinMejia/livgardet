import { getSession } from '@auth0/nextjs-auth0';
import Logout from "../logout"

export default async function ProfileServer() {
    const { user } = await getSession();
    return (

        user && (
            <main>

                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
                <div>
                    <Logout></Logout>
                </div>
            </main>
        )
    );
}