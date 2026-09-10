import {useMediaQuery} from "../../shared/hooks/UseMediaQuery.ts";
import {MkBottomSheet} from "moldekit-react";

function RightSidebar( { children }: { children?: React.ReactNode }) {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (<>
        { !isMobile &&
            <section className={`flex flex-col justify-between h-svh w-[320px]`}>
            { children }
            </section>
        }

        { isMobile &&
            <MkBottomSheet height={"lg"}>
                { children }
            </MkBottomSheet>
        }
    </>);
}

export default RightSidebar;