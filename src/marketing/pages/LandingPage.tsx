import {useAuth} from "react-oidc-context";
import LandingPageHeader from "../components/LandingPageHeader.tsx";

function LandingPage() {
    const auth = useAuth();

    return (
        <div className="min-h-screen bg-white">
            <LandingPageHeader auth={auth}/>


            {/* HERO */}
            <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:py-32">

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

                <h1 className={"mk-header-title"}>
                    Controle suas finanças sem planilhas complicadas.
                </h1>

                <p className={"mk-header-subtitle"}>
                    Gerencie contas, cartões, investimentos e objetivos
                    financeiros em uma única plataforma moderna construída
                    com React, .NET e AWS Serverless.
                </p>

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
                    <h2 className={"mk-section-title text-center"}>
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