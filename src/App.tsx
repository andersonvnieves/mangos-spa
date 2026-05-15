import { useAuth } from "react-oidc-context";
import { MkButton } from 'moldekit-react';

function App() {
    const auth = useAuth();

    const signOutRedirect = () => {
        const clientId = "5tu7j65i3d66r1qtrlu8k7os91";
        const logoutUri = "http://localhost:5173/";
        const cognitoDomain = "https://sa-east-1oechf8sjw.auth.sa-east-1.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <section className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="font-bold text-center text-4xl">mangos</h1>
                <pre> Hello: {auth.user?.profile.email} </pre>
                <pre> ID Token: {auth.user?.id_token} </pre>
                <pre> Access Token: {auth.user?.access_token} </pre>
                <pre> Refresh Token: {auth.user?.refresh_token} </pre>

                <MkButton iconName="home" variant="filled" color="primary" onClick={() => auth.removeUser()}>
                    Sign out
                </MkButton>

            </section>
        );
    }

    return (
        <div>
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
            <button onClick={() => signOutRedirect()}>Sign out</button>
        </div>
    );
}

export default App;
