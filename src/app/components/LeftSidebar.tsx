import NavMenu from "./NavMenu.tsx";
import {useState} from "react";
import {MkButton, MkDivider, MkDropdown, MkNavItem, MkUserAvatar} from "moldekit-react";
import {useAuth} from "react-oidc-context";
import MangosLogo from "./MangosLogo.tsx";

function LeftSidebar( { className }: { className?: string }) {
    const [isColapsed, setIsColapsed] = useState(true);
    const collpasIcon = isColapsed ? "chevrons-right" : "chevrons-left"
    const auth = useAuth();

    return (<section className={`flex flex-col justify-between h-svh ${className}`}>

        <div className={"flex flex-col gap-3 items-center"}>
            <MangosLogo collapsed={isColapsed} />
            <MkButton variant={"transparent"} color={"neutral"} iconOnly={true} iconName={collpasIcon} onClick={() => setIsColapsed(!isColapsed)}/>
            <MkDivider/>
            <NavMenu collapsed={isColapsed} />
        </div>

        <div className={"flex flex-col gap-3 items-center"}>
            <MkDivider/>
            <MkDropdown trigger={<MkUserAvatar initials={"AV"}/>} align={"left-bottom"}>
                <MkNavItem label={"Conta de Usuário"} link={""}/>
                <MkNavItem label={"Configurações"} link={""}/>
                <MkDivider/>
                <MkNavItem label={"Sair"} onClick={() => auth.removeUser()} link={""}/>
            </MkDropdown>

        </div>
    </section>);
}

export default LeftSidebar;