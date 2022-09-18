import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollAnimTop = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    return (
        <motion.div
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 7,
            }}
            style={{ scaleX }}
            className="w-full h-2 fixed top-0 left-0 right-0 bg-myYellow"
        ></motion.div>
    );
};

export default ScrollAnimTop;
