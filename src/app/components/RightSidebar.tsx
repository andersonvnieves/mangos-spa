
function RightSidebar( { children }: { children?: React.ReactNode }) {


    return (<section className={`flex flex-col justify-between h-svh w-[320px]`}>
        { children }
    </section>);
}

export default RightSidebar;