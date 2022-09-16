import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollAnimTop = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            animate={{
                backgroundColor: [
                    "hsl(283, 54, 54)",
                    "hsl(49, 98, 50)",
                    "hsl(177, 83, 50)",
                    "hsl(20, 100, 78)",
                ],
            }}
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 7,
            }}
            style={{ scaleX: scrollYProgress }}
            className="w-full h-2 bg-slate-700 fixed top-0 left-0 right-0 shadow-sm"
        ></motion.div>
    );
};

export default ScrollAnimTop;
