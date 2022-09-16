import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const CardBlock = forwardRef(({ text = "text", }, ref) => {
    return (
        <motion.div
            className={`h-1/4 w-11/12 mx-auto rounded-lg shadow-lg bg-gradient-to-br from-[#93a5cf] to-[#e4efe9]`}
            ref={ref}
        ></motion.div>
    );
});

export const MCardBlock = motion(CardBlock);
export default CardBlock;
