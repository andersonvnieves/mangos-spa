import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import {MkDetailedList, MkPanel, MkSectionHeader} from "moldekit-react";

type RecentTransactionsProps = {
    setLoading: (loading: boolean) => void;
};

type CreditCard = {
    transactionId: string;
    value: number;
    createdAt: string;
};

function RecentTransactions({ setLoading }: RecentTransactionsProps) {
    const auth = useAuth();
    const [cards, setCards] = useState<CreditCard[]>([]);

    useEffect(() => {
        const loadCreditCards = async () => {
            if (!auth.isAuthenticated) {
                return;
            }

            try {
                setLoading(true);

                const response = await fetch(
                    "https://api.mangos.avn.dev.br/creditcard",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${auth.user?.access_token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Erro ao carregar cartões");
                }

                const data = await response.json();
                setLoading(false);
                setCards(data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadCreditCards();
    }, [auth, setLoading]);

    return (
        <>
            <MkSectionHeader title="Cartões de Crédito" />
            { cards.length > 0 &&  <MkDetailedList
                data={cards.map((card) => ({
                    id: card.transactionId,
                    title: card.transactionId,
                    description: card.createdAt,
                    numericValue: `R$ ${card.value.toFixed(2)}`,
                    icon: {
                        color: "neutral",
                        iconName: "credit-card",
                    },
                }))}
                onClick={(item) => {
                    console.log(item);
                }}
            />}

            { cards.length == 0 &&  <MkPanel><span className={"mk-content"}>Sem transações recentes</span></MkPanel>}

        </>
    );
}

export default RecentTransactions;