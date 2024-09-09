import { animate, motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit:    { top: ["100%", "0%"] }
}

// total steps
const totalSteps = 10;

// reverse index calculation
const reverseIndex = (index, totalSteps) => {
    return totalSteps - index - 1;
}

export const Stairs = () => {
    return (
        <>
            {[...Array(totalSteps)].map((_, index) => {
                return (<motion.div 
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    exit="exit"
                    animate="animate"
                    transition={{
                        duration: 0.15,
                        delay: reverseIndex(index, totalSteps) * 0.01,
                        ease: "easeInOut"
                    }}
                    className="h-full w-full bg-slate-600 relative"
                />)
            })}
        </>
    )
}