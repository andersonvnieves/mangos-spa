import type {AppLayoutProps} from "./AppLayout.props.ts";
import {
    MkButton,
    MkDivider,
    MkDrawer,
    MkDropdown,
    MkMain,
    MkNavItem,
    MkNavList,
    MkTopBar,
    MkUserAvatar
} from "moldekit-react";
import {Menu} from "lucide-react";
import {useMediaQuery} from "../../shared/hooks/UseMediaQuery.ts";
import {useState} from "react";
import NavMenu from "../components/NavMenu.tsx";
import LeftSidebar from "../components/LeftSidebar.tsx";
import {useAuth} from "react-oidc-context";
import MangosLogo from "../components/MangosLogo.tsx";

function AppLayout({ children }: AppLayoutProps) {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const auth = useAuth();

    return (<div className={isMobile ? "flex flex-col" : "flex flex-row"}>

        <MkDrawer
            position={"left"}
            open={mobileDrawerOpen}
            onClose={() => setMobileDrawerOpen(false)}
        >
            <NavMenu collapsed={false} />
        </MkDrawer>

        { isMobile && <MkTopBar
        left={<button onClick={() => setMobileDrawerOpen(true)}
            className="w-[45px] h-[45px] flex items-center justify-center transition-colors duration-200 hover:bg-neutral-100 rounded-full"
            aria-label="Menu"
        >
            <Menu size={30} color={"var(--color-neutral-700)"} />
        </button>}
        right={<MkDropdown
            className={"mt-[18px]"}
            trigger={
                <MkUserAvatar initials={"AV"}/>
            }
        >
            <nav className="flex flex-col p-2">
                <MkNavItem label={"Conta de Usuário"} />
                <MkNavItem label={"Configurações"} />
                <MkDivider/>
                <MkNavItem label={"Sair"} onClick={() => auth.removeUser()}/>
            </nav>
        </MkDropdown>}
        ><MangosLogo/>
        </MkTopBar> }

        { !isMobile && <LeftSidebar className={"pt-4 pb-4 pl-4 pr-2"}/>}
        <section className={`flex-1 pt-4 pb-4 ${ isMobile ? "pl-4" : "pl-2" } pr-4`}><MkMain>{children}</MkMain></section>
    </div>)
}

export default AppLayout;