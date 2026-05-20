import {MkButton, MkDivider, MkDropdown, MkNavItem, MkTopBar} from "moldekit-react";
import type {AuthContextProps} from "react-oidc-context";
import {useMediaQuery} from "../../shared/hooks/UseMediaQuery.ts";

type LandingPageHeaderProps = {
    auth: AuthContextProps;
};

function LandingPageHeader({auth}: LandingPageHeaderProps) {
    const isMobile = useMediaQuery("(max-width: 767px)");

    const signUpRedirect = () => {
        const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;
        const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;

        window.location.href =
            `${cognitoDomain}/signup` +
            `?client_id=${clientId}` +
            `&response_type=${import.meta.env.VITE_COGNITO_RESPONSE_TYPE}` +
            `&scope=${import.meta.env.VITE_COGNITO_SCOPE}` +
            `&redirect_uri=${encodeURIComponent(redirectUri)}`;
    };
    return (<MkTopBar hasBorder={true}
                      left={ <div className="flex items-center gap-3 shrink-0">
                          <img
                              src="/mangos.svg"
                              alt="Mangos Logo"
                              className="h-10 w-auto shrink-0"
                          />

                          <span className="hidden sm:block text-lg font-semibold text-zinc-900">
                            Mangos
                        </span>
                      </div>}

                      right={isMobile ? <MkDropdown
                          className={"mt-[18px]"}
                          trigger={
                              <MkButton
                                  variant={"transparent"}
                                  iconName={"menu"}
                                  iconOnly={true}
                                  size={"lg"}
                              />
                          }
                      >
                          <nav className="flex flex-col p-2">
                              <MkNavItem label={"Entrar"} onClick={() => auth.signinRedirect()}/>
                              <MkNavItem label={"Criar Conta"} onClick={signUpRedirect}/>
                              <MkDivider/>
                              <MkNavItem label={"GitHub Repo"} link={"https://github.com/andersonvnieves/mangos-spa"} color={"neutral"}/>
                          </nav>
                      </MkDropdown> :
                          <div className="flex items-center gap-3">
                          <MkButton variant="transparent" color="primary"
                              onClick={() => auth.signinRedirect()}
                          >Entrar</MkButton>

                          <MkButton
                              variant="filled"
                              color="primary"
                              onClick={signUpRedirect}
                          >
                              Criar Conta
                          </MkButton>
                      </div>
    }>
        { !isMobile && <MkNavItem label={"GitHub Repo"} link={"https://github.com/andersonvnieves/mangos-spa"} color={"neutral"}/> }
    </MkTopBar>)
}
export default LandingPageHeader;