import React from "react";
import { motion } from "framer-motion";

const AboutMeBlock = () => {
    const bgAmin = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                type: "weed",
            },
        },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={bgAmin}
            viewport={{ amount: 0.2 }}
            className="w-full h-screen flex justify-end select-none bg-myBlack"
        ></motion.div>
    );
};

export default AboutMeBlock;
