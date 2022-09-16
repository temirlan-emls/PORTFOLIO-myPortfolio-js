import React from "react";
import { motion } from "framer-motion";

const SalemBlock = () => {
    const textAmin = {
        hidden: { y: 150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 3, type: "spring" },
        },
    };
    const handAmin = {
        hidden: { y: -200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            rotate: [-20, 40],
            transition: {
                duration: 2,
                type: "spring",
            },
        },
    };
    return (
        <div className="w-full h-screen flex justify-end select-none">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                className="h-screen mx-auto lg:max-w-6xl md:max-w-3xl xs:max-w-xl flex justify-center items-center "
            >
                <motion.h2
                    variants={handAmin}
                    className="font-myFont lg:text-10xl md:text-9xl sm:text-8xl xs:text-7xl"
                >
                    &#128075;
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                className="h-screen mx-auto lg:max-w-6xl md:max-w-3xl xs:max-w-xl flex justify-center items-center "
            >
                <motion.h2
                    variants={textAmin}
                    className="font-myFont lg:text-8xl md:text-6xl sm:text-6xl xs:text-4xl"
                >
                    Salem, Alem!
                </motion.h2>
            </motion.div>
        </div>
    );
};

export default SalemBlock;
