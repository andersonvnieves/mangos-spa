import { useAuth } from "react-oidc-context";
import { MkButton } from 'moldekit-react';
import LandingPage from "./landing/pages/LandingPage.tsx";

function App() {
    const auth = useAuth();



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

    return (<LandingPage auth={auth}/>);
}

export default App;
