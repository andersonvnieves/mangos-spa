import {MkSubHeader} from "moldekit-react";

function RightSidebar( { children }: { children?: React.ReactNode }) {


    return (<section className={`flex flex-col justify-between h-svh w-[320px]`}>
        <MkSubHeader title={"Teste"} subtitle={"Teste"}/>
        { children }
    </section>);
}

export default RightSidebar;