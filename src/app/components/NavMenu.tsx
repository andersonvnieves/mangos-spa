import {MkDivider, type MkNavItemProps, MkNavList} from "moldekit-react";
import { NavLink } from "react-router-dom";
type NavMenuProps = {
    collapsed: boolean;
}

function NavMenu({collapsed}: NavMenuProps) {
    const menuRoutes: MkNavItemProps[] = [
        {
            label: "Home",
            iconName: "home",
            link: "/",
            as: NavLink,
        },
        {
            label: "Visão Geral",
            iconName: "layout-dashboard",
            link: "/overview",
            as: NavLink,
        },
        {
            label: "Recebimentos",
            iconName: "banknote-arrow-down",
            link: "http://google.com",
            isActive: false,
        },
        {
            label: "Despesas",
            iconName: "banknote-arrow-up",
            link: "http://google.com",
            isActive: false,
        },
        {
            label: "Investimentos",
            iconName: "piggy-bank",
            link: "http://google.com",
            isActive: false,
        },
    ];

    const walletRoutes: MkNavItemProps[] = [
        {
            label: "Cartão de Crédito",
            iconName: "credit-card",
            link: "http://google.com",
            isActive: false,
        },
        {
            label: "Conta Bancária",
            iconName: "landmark",
            link: "http://google.com",
            isActive: false,
        },
    ];

    return (
        <div className={`flex flex-col gap-3 ${ collapsed && "items-center"}`}>
            <span className={"mk-label"}>menu</span>
            <MkNavList data={menuRoutes} collapsed={collapsed}/>
            <MkDivider />
            <span className={"mk-label"}>wallet</span>
            <MkNavList data={walletRoutes} collapsed={collapsed}/>
        </div>
    )
}

export default NavMenu;