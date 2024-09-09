"use client";
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

//components
import { Stairs } from "./Stairs.jsx";

const StairEffect = () => {
    const pathname = usePathname();
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed pointer-events-none right-0 top-0 left-0 z-40 flex">
                        <Stairs />
                    </div>
                </div>
            </AnimatePresence> 
        </>
    )
}

export default StairEffect