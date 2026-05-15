import type { AuthContextProps } from "react-oidc-context";
import { MkButton } from "moldekit-react";

type LandingPageProps = {
    auth: AuthContextProps;
};

function LandingPage({ auth }: LandingPageProps) {
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

    return (
        <div className="min-h-screen bg-white">
            {/* HEADER */}
            <header className="border-b border-zinc-200">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* LOGO */}
                    <div className="flex items-center gap-3 shrink-0">
                        <img
                            src="/mangos.svg"
                            alt="Mangos Logo"
                            className="h-10 w-auto shrink-0"
                        />

                        <span className="hidden sm:block text-lg font-semibold text-zinc-900">
                            Mangos
                        </span>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-3">
                        <MkButton
                            variant="transparent"
                            color="primary"
                            onClick={() => auth.signinRedirect()}
                        >
                            Entrar
                        </MkButton>

                        <MkButton
                            variant="filled"
                            color="primary"
                            onClick={signUpRedirect}
                        >
                            Criar Conta
                        </MkButton>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:py-32">

                {/* BADGE */}
                <div className="
                    mb-6
                    rounded-full
                    border
                    border-amber-200
                    bg-amber-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-amber-700
                ">
                    Projeto pessoal em desenvolvimento
                </div>

                {/* TITLE */}
                <h1 className="
                    mk-title
                    max-w-4xl
                    text-4xl
                    font-bold
                    leading-tight
                    text-zinc-900
                    sm:text-5xl
                    lg:text-6xl
                ">
                    Controle suas finanças sem planilhas complicadas.
                </h1>

                {/* SUBTITLE */}
                <p className="
                    mk-subtitle
                    mt-6
                    max-w-2xl
                    text-base
                    text-zinc-600
                    sm:text-lg
                ">
                    Gerencie contas, cartões, investimentos e objetivos
                    financeiros em uma única plataforma moderna construída
                    com React, .NET e AWS Serverless.
                </p>

                {/* ACTIONS */}
                <div className="
                    mt-10
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                ">


                    <a
                        href="https://github.com/andersonvnieves/mangos-spa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex"
                    >
                        <MkButton
                            variant="outlined"
                            color="primary"
                        >
                            Ver GitHub
                        </MkButton>
                    </a>
                </div>

                {/* WARNING CARD */}
                <div className="
                    mt-16
                    max-w-3xl
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-zinc-50
                    p-6
                    text-left
                    shadow-sm
                ">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Aviso importante
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                        O Mangos é um projeto pessoal criado para estudos,
                        experimentação de arquitetura full stack serverless
                        e evolução técnica contínua.
                    </p>

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                        A aplicação ainda não está pronta para uso em produção
                        ou gerenciamento financeiro real. Não é recomendado
                        armazenar dados sensíveis, bancários ou utilizar a
                        plataforma para controle financeiro sério neste momento.
                    </p>

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                        O objetivo atual do projeto é aprendizado, validação
                        de arquitetura, experiência de desenvolvimento e
                        construção de portfólio técnico.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default LandingPage;