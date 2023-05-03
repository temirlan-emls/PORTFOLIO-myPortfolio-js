import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { enterText, onLink, textLeave } from '../../store/slices/cursorSlice';
import CardBlock from '../cardBlock/cardBlock';
import propfolio from '../../data/portfolio.json';

const ProjectsBlock = () => {
    const dispatch = useDispatch();

    const BgColorAnim = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, type: 'spring' },
        },
    };
    return (
        <div className="snap-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={BgColorAnim}
                className="w-full min-h-screen select-none flex flex-col items-center justify-between bg-gradient-to-tr from-[#ae8b9c] via-[#8baaaa] to-[#8baaaa]"
            >
                <div className="my-12 w-full flex flex-col items-center justify-center snap-start">
                    <motion.h2
                        onMouseEnter={() => dispatch(enterText())}
                        onMouseLeave={() => dispatch(textLeave())}
                        className="lg:text-8xl md:text-6xl sm:text-6xl xs:text-4xl"
                    >
                        my projects
                    </motion.h2>
                </div>
                <div className="w-10/12 grid gap-6 lg:grid-cols-4 md:grid-cols-2">
                    {propfolio &&
                        propfolio.map((item, index) => (
                            <CardBlock key={index} item={item} />
                        ))}
                </div>
                <div className="my-12 w-full flex flex-row gap-3 items-center justify-center snap-start">
                    <motion.h2
                        onMouseEnter={() => dispatch(enterText())}
                        onMouseLeave={() => dispatch(textLeave())}
                        className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl"
                    >
                        more on my
                    </motion.h2>
                    <a
                        href="https://github.com/temirlan-emls"
                        className="underline underline-offset-4 cursor-none lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl"
                        onMouseEnter={() => dispatch(onLink())}
                        onMouseLeave={() => dispatch(textLeave())}
                    >
                        github
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectsBlock;
