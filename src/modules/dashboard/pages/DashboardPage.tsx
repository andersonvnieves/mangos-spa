import {MkDivider, MkHeader, MkSkeleton} from "moldekit-react";
import { useState} from "react";
import RegisterTransaction from "../components/RegisterTranasction/RegisterTranasction.tsx";
import RecentTranasctions from "../components/RecentTransactions/RecentTranasctions.tsx";

function DashboardPage() {
    const [loading, setLoading] = useState(true);



    return (<>
        <MkHeader title={`Visão Geral`}  subtitle={`Junho de 2026`} className={"mb-5"}>
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