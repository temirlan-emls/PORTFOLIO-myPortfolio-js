import React from "react";
import { motion } from "framer-motion";

const FooterBlock = () => {
    const footerDivAmin = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.5, type: "spring" },
        },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={footerDivAmin}
            className="w-full h-96 bg-myBlack snap-end"
        >
            <motion.div
                className="w-full h-2"
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
                    duration: 5,
                }}
            ></motion.div>
        </motion.div>
    );
};

export default FooterBlock;
