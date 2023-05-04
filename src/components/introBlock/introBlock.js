import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import {
    enterText,
    enterDrag,
    textLeave,
} from '../../store/slices/cursorSlice';
import { useDispatch } from 'react-redux';

const IntroBlock = () => {
    const dispatch = useDispatch();

    const constraintsRef = useRef(null);

    const myNameAnim = {
        hidden: { y: -200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, type: 'spring' },
        },
    };
    const reactFrontAnim = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 1.5, duration: 2, type: 'spring' },
        },
    };
    const reactLogoAnim = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 1.5, duration: 2, type: 'spring' },
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

    const BgColorAnim = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 2, type: 'spring', delay: 1 },
        },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={BgColorAnim}
            className="snap-center w-full h-screen grid lg:grid-cols-2 xs:grid-rows-2 select-none relative bg-gradient-to-bl from-[#ae8b9c] via-[#8baaaa] to-[#8baaaa]"
            ref={constraintsRef}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.65, once: true }}
                className="lg:h-screen w-full h-full flex flex-col gap-10 items-center justify-center"
                onMouseEnter={() => dispatch(enterDrag())}
                onMouseLeave={() => dispatch(textLeave())}
            >
                <motion.div
                    variants={reactLogoAnim}
                    className="w-96
                         h-96
                         lg:w-96 md:w-64 sm:w-56 xs:w-44
                         lg:h-96 md:h-64 sm:h-56 xs:h-44
                         rounded-full bg-hero bg-no-repeat bg-contain align-middle"
                    drag
                    whileTap={{ scale: 1.05 }}
                    dragConstraints={constraintsRef}
                ></motion.div>
                <motion.h2
                    variants={notionAnim}
                    className="lg:text-4xl md:text-2xl sm:text-xl xs:text-xl font-thin font-extralight text-slate-600"
                    onMouseEnter={() => dispatch(enterText())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    ^It's too^{' '}
                </motion.h2>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.65, once: true }}
                className="lg:h-screen mx-auto lg:max-w-6xl md:max-w-3xl sm:max-w-xl flex flex-col justify-center items-center "
            >
                <motion.h2
                    variants={myNameAnim}
                    className="lg:text-7xl md:text-6xl sm:text-6xl xs:text-4xl text-slate-800"
                    onMouseEnter={() => dispatch(enterText())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    I'm Temirlan Emls
                </motion.h2>
                <motion.h2
                    variants={reactFrontAnim}
                    className="lg:text-5xl md:text-4xl sm:text-4xl xs:text-2xl font-thin text-slate-700"
                    onMouseEnter={() => dispatch(enterText())}
                    onMouseLeave={() => dispatch(textLeave())}
                >
                    react front-end developer
                </motion.h2>
            </motion.div>
        </motion.div>
    );
};

export default IntroBlock;
