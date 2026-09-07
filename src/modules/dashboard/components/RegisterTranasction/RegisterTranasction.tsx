import {useState} from "react";
import {useMediaQuery} from "../../../../shared/hooks/UseMediaQuery.ts";
import {
    MkBottomSheet,
    MkButton,
    MkComboBox,
    MkModal,
    MkStepper,
    MkTab,
    MkTag,
    MkTextInput
} from "moldekit-react";
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

    const form = <>
        <span className={"mk-label text-center block"}>registrar transação</span>
        <span className={"mk-content text-center block"}>1/3 Informações de Pagamento</span>
        <MkStepper
            currentStep={1}
            steps={3}
        />
        <div className="w-[350px] flex flex-col items-start gap-4">
            <span>Valor</span>
            <MkTextInput placeholder="R$ 0,00" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <span>Descrição</span>
            <MkTextInput placeholder="Descrição..." value={amount} onChange={(e) => setAmount(e.target.value)} />
            <span>Tipo de Operação</span>
            <MkTab
                data={[
                    'Crédito',
                    'Débito'
                ]}
                selectedTab={0}
            />
            <span>Meio Utilizado</span>
            <MkComboBox
                list={[
                    {
                        label: 'Item1',
                        value: '0'
                    },
                    {
                        label: 'Item2',
                        value: '1'
                    },
                    {
                        label: 'Item3',
                        value: '2'
                    }
                ]}
                size="md"
            />
            <div>
                <span>Categoria</span>
                <MkTag
                    data={[
                        {
                            id: '01',
                            label: 'Category 1'
                        },
                        {
                            id: '03',
                            label: 'Category 2'
                        }
                    ]}
                />
            </div>
        </div>


        <div className="flex flex-row justify-between">
            <MkButton color="neutral" onClick={handleCancel}>Cancelar</MkButton>
            <MkButton color="primary" disabled={isSaving} onClick={handleSave}>Salvar</MkButton>
        </div>
    </>


    return (<>
        { !isMobile &&
            <>
                <MkButton iconOnly={false} size={"md"} iconName={"plus"} variant={"filled"} color={"primary"} onClick={() => setOpen(true)}>Add</MkButton>
                <MkModal open={open} onClose={() => setOpen(false)}>
                    {form}
                </MkModal>
            </>
        }

        {isMobile && <>
            <MkButton iconOnly={false} size={"md"} iconName={"plus"} variant={"filled"} color={"primary"} onClick={() => setBsOpen(true)}>Add</MkButton>
            <MkBottomSheet
                open={openBs}
                height="lg"
                onClose={() => setBsOpen(false)}
            >
                {form}
            </MkBottomSheet>
        </>}
    </>);
}

export default RegisterTransaction;

