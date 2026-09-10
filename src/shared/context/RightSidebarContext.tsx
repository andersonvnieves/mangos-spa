import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface RightSidebarContextType {
    content: ReactNode;
    setContent: (node: ReactNode) => void;
    clearContent: () => void;
}

const RightSidebarContext = createContext<RightSidebarContextType | null>(null);

export function RightSidebarProvider({ children }: { children: ReactNode }) {
    const [content, setContentState] = useState<ReactNode>(null);

    const setContent = useCallback((node: ReactNode) => {
        setContentState(node);
    }, []);

    const clearContent = useCallback(() => {
        setContentState(null);
    }, []);

    return (
        <RightSidebarContext.Provider value={{ content, setContent, clearContent }}>
            {children}
        </RightSidebarContext.Provider>
    );
}

export function useRightSidebar() {
    const ctx = useContext(RightSidebarContext);
    if (!ctx) throw new Error("useRightSidebar must be used within a RightSidebarProvider");
    return ctx;
}
