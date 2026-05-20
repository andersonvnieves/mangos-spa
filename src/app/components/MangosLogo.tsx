
function MangosLogo({ collapsed = true }: { collapsed?: boolean }) {
    const collapsedStyles = [
        "w-[50px] h-[50px]",
        "flex items-center justify-center",
        "rounded-2xl",
        "text-[var(--color-primary-300)]" ,
        "text-3xl font-bold",
        "select-none",
        "cursor-pointer",
        "transition-colors duration-200",
        "hover:text-[var(--color-primary-400)]",
        "font-family: 'Inter'"
    ].join(" ");

    const expandedStyles = [
        "w-[50px] h-[50px]",
        "flex items-center justify-center",
        "rounded-2xl",
        "text-[var(--color-neutral-800)]" ,
        "text-3xl font-bold",
        "select-none",
        "cursor-pointer",
        "transition-colors duration-200",
        "hover:text-[var(--color-neutral-900)]",
        "font-family: 'Inter'"
    ].join(" ");

    const gStyles = [
        "text-[var(--color-primary-300)]" ,
        "transition-colors duration-200",
        "hover:text-[var(--color-primary-400)]"
    ].join(" ");
    return (<>
            { collapsed && <div className={collapsedStyles}>
                g
            </div> }

            { !collapsed && <div className={expandedStyles}>
                man<span className={gStyles}>g</span>os
            </div> }
        </>
    );
}

export default MangosLogo;