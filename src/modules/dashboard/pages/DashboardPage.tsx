import {MkDivider, MkHeader, MkSkeleton} from "moldekit-react";
import {useAuth} from "react-oidc-context";
import {useEffect, useState} from "react";
import RegisterTransaction from "../components/RegisterTranasction/RegisterTranasction.tsx";
import RecentTranasctions from "../components/RecentTransactions/RecentTranasctions.tsx";

function DashboardPage() {
    const auth = useAuth();
    const [responseMsg, setResponseMsg] = useState("");
    const [loading, setLoading] = useState(true);

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

    return (<>
        <MkHeader title={`Hello: ${auth.user?.profile.email}`}  subtitle={`Response: ${responseMsg}`} className={"mb-5"}>
            <RegisterTransaction />
        </MkHeader>
        <MkDivider />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            <div className={"flex flex-col items-start justify-items-start gap-[15px]"}>
                <div className={"w-full h-[117px] flex flex-row items-start justify-items-start gap-[15px]"}>
                    { loading && <MkSkeleton className={"w-full h-[117px] rounded-2xl"} />}
                    { loading && <MkSkeleton className={"w-full h-[117px] rounded-2xl"} />}
                </div>
                { loading && <MkSkeleton className={"w-full h-[500px] rounded-2xl"} />}
                <RecentTranasctions setLoading={setLoading} />
            </div>
            <div className={"flex flex-col items-start justify-items-start gap-[15px]"}>
            </div>
            <div className={"flex flex-col items-start justify-items-start gap-[15px]"}>
            </div>
        </div>
    </>);
}

export default  DashboardPage;