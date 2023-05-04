import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomLink from '../customLink/customLink';

const NavBurger = () => {
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const handleNavBurgerAction = (e) => {
            if (e.key === 'Escape') {
                setIsOpened(false);
            }
        };
        document.addEventListener('keyup', handleNavBurgerAction);

        return () => window.removeEventListener('keyup', handleNavBurgerAction);
    }, []);

    const menuVariants = {
        open: {
            opacity: 1,
            top: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
        closed: {
            opacity: 0,
            top: '-62rem',
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };
    return (
        <div className="fixed z-10">
            <div className="relative">
                <button
                    className="absolute m-8 cursor-none [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out z-20 transition-all duration-300 ease-in-out hover:scale-110"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <div
                        className={`w-12 h-1 bg-slate-800 ${
                            isOpened ? 'rotate-45 translate-y-5' : 'rotate-0'
                        }`}
                    />
                    <div
                        className={`w-12 h-1 bg-slate-800 my-4 ${
                            isOpened ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <div
                        className={`w-12 h-1 bg-slate-800 ${
                            isOpened ? '-rotate-45 -translate-y-5' : 'rotate-0'
                        }`}
                    />
                </button>

                <motion.div
                    animate={isOpened ? 'open' : 'closed'}
                    variants={menuVariants}
                    className={`absolute -top-[62rem] w-screen h-screen bg-red-100/30 backdrop-blur-lg`}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="h-2/5 xs:w-3/5  sm:w-3/5 md:w-2/5 lg:w-1/4  bg-emerald-300/10 backdrop-blur-lg rounded-2xl flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
                    >
                        <h2 className="mt-12 text-2xl font-bold">Navigation</h2>
                        <ul className="flex flex-col items-center">
                            <li
                                className="mt-16"
                                onClick={() => setIsOpened(!isOpened)}
                            >
                                <CustomLink
                                    link={'/'}
                                    text={'Home'}
                                    styleProp={'underline underline-offset-4'}
                                />
                            </li>
                            <li
                                className="mt-16"
                                onClick={() => setIsOpened(!isOpened)}
                            >
                                <CustomLink
                                    link={'/skillsAndProjects'}
                                    text={'Skills and Projects'}
                                    styleProp={'underline underline-offset-4'}
                                />
                            </li>
                            <li
                                className="mt-16"
                                onClick={() => setIsOpened(!isOpened)}
                            >
                                <CustomLink
                                    link={'/contacts'}
                                    text={'Contacts'}
                                    styleProp={'underline underline-offset-4'}
                                />
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className=" xs:w-3/5  sm:w-3/5 md:w-2/5 lg:w-1/4 h-2/5 bg-emerald-300/10  backdrop-blur-lg rounded-2xl flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 scale-105"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="xs:w-3/5  sm:w-3/5 md:w-2/5 lg:w-1/4 h-2/5 bg-emerald-100/10 backdrop-blur-lg rounded-2xl flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-110"
                    ></motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NavBurger;
