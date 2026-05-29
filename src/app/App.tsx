import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import {MkDivider, MkHeader, MkSkeleton, MkSpinner} from "moldekit-react";
import LandingPage from "../marketing/pages/LandingPage.tsx";
import AppLayout from "./layout/AppLayout.tsx";

function App() {
    const auth = useAuth();
    const [responseMsg, setResponseMsg] = useState("");

    useEffect(() => {
        const callApi = async () => {
            if (!auth.isAuthenticated) {
                return;
            }

            try {
                const response = await fetch(
                    "https://api.mangos.avn.dev.br/",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${auth.user?.access_token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const msg = await response.text();

                setResponseMsg(msg);
            } catch (error) {
                console.error(error);
                setResponseMsg("Error calling API");
            }
        };

        callApi();
    }, [auth]);

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

    if (auth.isAuthenticated) {
        return (<AppLayout>
                <MkHeader title={`Hello: ${auth.user?.profile.email}`}  subtitle={`Response: ${responseMsg}`} className={"mb-5"}/>
                <MkDivider />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                    <div className={"flex flex-col items-start justify-items-start gap-[15px]"}>
                        <div className={"w-full h-[117px] flex flex-row items-start justify-items-start gap-[15px]"}>
                            <MkSkeleton className={"w-full h-[117px] rounded-2xl"} />
                            <MkSkeleton className={"w-full h-[117px] rounded-2xl"} />
                        </div>
                        <MkSkeleton className={"w-full h-[117px] rounded-2xl"} />
                        <MkSkeleton className={"w-full h-[250px] rounded-2xl"} />
                    </div>
                    <div className={"flex flex-col items-start justify-items-start gap-[15px]"}>
                        <MkSkeleton className={"w-full h-[250px] rounded-2xl"} />
                        <MkSkeleton className={"w-full h-[117px] rounded-2xl"} />
                        <MkSkeleton className={"w-full h-[250px] rounded-2xl"} />
                    </div>
                    <div className={"flex flex-col items-start justify-items-start gap-[15px]"}>
                        <MkSkeleton className={"w-full h-[120px] rounded-2xl"} />
                        <MkSkeleton className={"w-full h-[500px] rounded-2xl"} />
                    </div>
                </div>

        </AppLayout>

        );
    }

    return <LandingPage auth={auth} />;
}

export default App;