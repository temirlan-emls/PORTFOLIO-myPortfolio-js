import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { enterText, textLeave } from '../../store/slices/cursorSlice';
import { useDispatch } from 'react-redux';

const SalemBlock = () => {
    const dispatch = useDispatch();

    const constraintsRef = useRef(null);

    const BgColorAnim = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, type: 'spring', delay: 1 },
        },
    };
    const SalemAnim = {
        hidden: { y: 150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 3, type: 'spring', delay: 2 },
        },
    };

    const notionAnim = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 4, duration: 2, type: 'spring' },
        },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            ref={constraintsRef}
            viewport={{ once: true }}
            variants={BgColorAnim}
            className="snap-center w-full h-screen grid select-none relative bg-gradient-to-br from-[#8baaaa]  via-[#8baaaa] to-[#ae8b9c]"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                className="lg:h-screen mx-auto lg:max-w-6xl md:max-w-3xl xs:max-w-xl flex flex-col justify-center items-center"
            >
                <motion.h2
                    variants={SalemAnim}
                    drag
                    dragConstraints={constraintsRef}
                    whileTap={{ scale: 1.05 }}
                    className="font-myFont font-semibold lg:text-9xl md:text-7xl sm:text-7xl xs:text-4xl text-slate-800"
                    onMouseEnter={() => dispatch(enterText())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    salem, alem!
                </motion.h2>
                <motion.h2
                    variants={notionAnim}
                    className="lg:text-3xl md:text-xl sm:text-md xs:text-xl font-extralight text-slate-600 text-center mt-2"
                    onMouseEnter={() => dispatch(enterText())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    ^ you can drag it! ^
                </motion.h2>
            </motion.div>
        </motion.div>
    );
};

export default SalemBlock;
