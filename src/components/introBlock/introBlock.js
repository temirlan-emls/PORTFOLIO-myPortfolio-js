import React from "react";
import { motion } from "framer-motion";
import Comp3D from "../comp3D/comp3D";

const IntroBlock = () => {
    const textAmin = {
        hidden: { y: -200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, type: "spring" },
        },
    };
    const textAminDelay = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 1.5, duration: 2, type: "spring" },
        },
    };
    return (
        <div className="w-full h-screen grid lg:grid-cols-2 xs:grid-rows-2 select-none relative">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.65, once: true }}
                className="lg:h-screen mx-auto lg:max-w-6xl md:max-w-3xl sm:max-w-xl flex flex-col justify-center items-center"
            >
                <motion.h2
                    variants={textAmin}
                    className="lg:text-8xl md:text-6xl sm:text-6xl xs:text-4xl text-myGray"
                >
                    I'm Temirlan Emls
                </motion.h2>
                <motion.h2
                    variants={textAminDelay}
                    className="lg:text-6xl md:text-4xl sm:text-4xl xs:text-2xl text-myGray"
                >
                    This is my Portfolio site
                </motion.h2>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.65 }}
                className="lg:h-screen w-full h-full"
            >
                <Comp3D />
            </motion.div>
        </div>
    );
};

export default IntroBlock;
