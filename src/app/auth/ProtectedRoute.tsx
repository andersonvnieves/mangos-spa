import { useAuth } from "react-oidc-context";
import {MkSpinner} from "moldekit-react";
import LandingPage from "../../marketing/pages/LandingPage.tsx";

export default function ProtectedRoute({
children,
                                       }: {
    children: React.ReactNode;
}) {
    const auth = useAuth();

    if (auth.isLoading) {
        return <section className="flex flex-col items-center justify-center min-h-svh gap-2">
            <MkSpinner color={"primary"} size={"xl"}/> <span className={"mk-label"}>Loading...</span>
        </section>;
    }

    if (auth.error) {
        return <section className="flex flex-col items-center justify-center min-h-svh gap-2">
            <span className={"mk-label"}>Encountering error... {auth.error.message}</span>
        </section>;
    }

    if (!auth.isAuthenticated) {
        return <LandingPage />;//return <Navigate to="/" replace />;
    }

    return children;
}