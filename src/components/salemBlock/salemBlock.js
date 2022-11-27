import React from "react";
import { motion } from "framer-motion";
import { textEnterSalem, textLeave } from "../../store/slices/cursorSlice";
import { useDispatch } from "react-redux";

const SalemBlock = () => {
    const dispatch = useDispatch();

    const BgColorAnim = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, type: "spring", delay: 1 },
        },
    };
    const SalemAnim = {
        hidden: { y: 150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 3, type: "spring", delay: 2 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={BgColorAnim}
            className="w-full h-screen grid select-none relative bg-yellow-300"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                className="lg:h-screen mx-auto lg:max-w-6xl md:max-w-3xl xs:max-w-xl flex justify-center items-center"
            >
                <motion.h2
                    variants={SalemAnim}
                    className="font-myFont font-bold lg:text-9xl md:text-7xl sm:text-7xl xs:text-4xl text-slate-700"
                    onMouseEnter={() => dispatch(textEnterSalem())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    Salem, Alem!
                </motion.h2>
            </motion.div>
        </motion.div>
    );
};

export default SalemBlock;
