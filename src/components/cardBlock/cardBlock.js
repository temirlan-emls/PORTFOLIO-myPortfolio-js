import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import {
    SiTailwindcss,
    SiReact,
    SiBootstrap,
    SiRedux,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiTypescript,
    SiDjango,
    SiPython,
} from 'react-icons/si';
import CustomLink from '../customLink/customLink';

const CardBlock = forwardRef(({ item }, ref) => {
    const isInPortfolio = (arr, tech) => {
        return arr.filter((item) => item === tech).length >= 1 ? '' : 'hidden';
    };

    return (
        <motion.div
            className={`w-full flex flex-col items-center rounded-md shadow-lg bg-gradient-to-br from-[#93a5cf] to-[#e4efe9] relative pb-32`}
            ref={ref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
        >
            <img
                src={item.img}
                alt={item.title}
                className="mt-5 w-11/12 rounded-lg"
            />
            <CustomLink
                link={item.link}
                text={item.title}
                styleProp={
                    'underline underline-offset-4 font-bold w-10/12 text-center lg:text-2xl md:text-xl sm:text-xl xs:text-lg mt-5'
                }
            />
            <p className="w-11/12 mt-12 mb-4">{item.description}</p>
            <div className="flex flex-col items-center my-4 w-full absolute bottom-0">
                <p className="mb-4">tech stack</p>
                <hr className="w-8/12 h-[1px] bg-gray-100 rounded border-0 dark:bg-slate-500" />
                <div className="mt-4 flex justify-around w-8/12">
                    <SiReact
                        size={40}
                        className={isInPortfolio(item.stack, 'SiReact')}
                    />
                    <SiTailwindcss
                        size={40}
                        className={isInPortfolio(item.stack, 'SiTailwindcss')}
                    />
                    <SiBootstrap
                        size={40}
                        className={isInPortfolio(item.stack, 'SiBootstrap')}
                    />
                    <SiRedux
                        size={40}
                        className={isInPortfolio(item.stack, 'SiRedux')}
                    />
                    <SiCss3
                        size={40}
                        className={isInPortfolio(item.stack, 'SiCss3')}
                    />
                    <SiHtml5
                        size={40}
                        className={isInPortfolio(item.stack, 'SiHtml5')}
                    />
                    <SiJavascript
                        size={40}
                        className={isInPortfolio(item.stack, 'SiJavascript')}
                    />
                    <SiTypescript
                        size={40}
                        className={isInPortfolio(item.stack, 'SiTypescript')}
                    />
                    <SiDjango
                        size={40}
                        className={isInPortfolio(item.stack, 'SiDjango')}
                    />
                    <SiPython
                        size={40}
                        className={isInPortfolio(item.stack, 'SiPython')}
                    />
                </div>
            </div>
        </motion.div>
    );
});

export const MCardBlock = motion(CardBlock);
export default CardBlock;
