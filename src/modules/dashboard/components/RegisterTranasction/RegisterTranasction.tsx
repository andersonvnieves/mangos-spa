import {useState} from "react";
import {useMediaQuery} from "../../../../shared/hooks/UseMediaQuery.ts";
import {MkBottomSheet, MkButton, MkModal, MkSubHeader, MkTextInput} from "moldekit-react";
import {useAuth} from "react-oidc-context";

function RegisterTransaction() {
    const [open, setOpen] = useState(false);
    const [openBs, setBsOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const auth = useAuth();
    const [amount, setAmount] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const resetForm = () => {
        setAmount("0");
    };

    const handleCancel = () => {
        resetForm();
        setOpen(false);
        setBsOpen(false);
    };

    const handleSave = async () => {
        if (!amount.trim()) {
            return;
        }

        try {
            setIsSaving(true);

            const response = await fetch(
                "https://api.mangos.avn.dev.br/creditcard",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${auth.user?.access_token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Value: Number(amount),
                        CreatedAt: new Date().toISOString().split("T")[0]
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao salvar");
            }

            resetForm();
            setOpen(false);
            setBsOpen(false);

            // opcional: recarregar dados do dashboard
            // await loadTransactions();

        } catch (error) {
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

//onChange={(e) => setAmount(e.target.value)}
    const form = <>
        <div className="w-[350px] h-[400px] flex items-start">
            <MkTextInput
                placeholder="R$ 0,00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>


        <div className="flex flex-row justify-between">
            <MkButton color="neutral" onClick={handleCancel}>Cancelar</MkButton>
            <MkButton color="primary" disabled={isSaving} onClick={handleSave}>Salvar</MkButton>
        </div>
    </>


    return (<>
        { !isMobile &&
            <>
                <MkButton iconOnly={true} iconName={"plus"} variant={"filled"} color={"primary"} onClick={() => setOpen(true)} />
                <MkModal open={open} onClose={() => setOpen(false)}>
                    <MkSubHeader title="Nova Transação" subtitle="Cartão de Crédito" />
                    {form}
                </MkModal>
            </>
        }

        {isMobile && <>
            <MkButton iconOnly={true} iconName={"plus"} variant={"filled"} color={"primary"} onClick={() => setBsOpen(true)} />
            <MkBottomSheet
                open={openBs}
                height="lg"
                onClose={() => setBsOpen(false)}
            >
                <MkSubHeader title="Nova Transação" subtitle="Cartão de Crédito" />
                {form}
            </MkBottomSheet>
        </>}
    </>);
}

export default RegisterTransaction;

