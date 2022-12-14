import React from "react";
import { motion } from "framer-motion";
import Comp3D from "../comp3D/comp3D";
import {
    textEnterName,
    enter3D,
    textLeave,
} from "../../store/slices/cursorSlice";
import { useDispatch } from "react-redux";

const IntroBlock = () => {
    const dispatch = useDispatch();

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

    const BgColorAnim = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, type: "spring" },
        },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={BgColorAnim}
            className="w-full h-screen grid lg:grid-cols-2 xs:grid-rows-2 select-none relative bg-emerald-400"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.65 }}
                className="lg:h-screen w-full h-full"
                onMouseEnter={() => dispatch(enter3D())}
                onMouseLeave={() => dispatch(textLeave())}
            >
                <Comp3D />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.65, once: true }}
                className="lg:h-screen mx-auto lg:max-w-6xl md:max-w-3xl sm:max-w-xl flex flex-col justify-center items-center bg-emerald-400"
            >
                <motion.h2
                    variants={textAmin}
                    className="lg:text-8xl md:text-6xl sm:text-6xl xs:text-4xl text-slate-700"
                    onMouseEnter={() => dispatch(textEnterName())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    I'm Temirlan Emls
                </motion.h2>
                <motion.h2
                    variants={textAminDelay}
                    className="lg:text-6xl md:text-4xl sm:text-4xl xs:text-2xl font-thin text-slate-700"
                    onMouseEnter={() => dispatch(textEnterName())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    React Front-End Developer
                </motion.h2>
            </motion.div>
        </motion.div>
    );
};

export default IntroBlock;
