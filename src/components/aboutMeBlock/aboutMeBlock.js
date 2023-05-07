import React, { useState } from 'react';
import myPic from '../../data/IMG_5790.png';
import { motion } from 'framer-motion';
import { enterText, textLeave } from '../../store/slices/cursorSlice';
import { useDispatch } from 'react-redux';

const AboutMeBlock = () => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="snap-center w-full h-screen flex justify-center select-none relative bg-gradient-to-tr from-[#ae8b9c] via-[#8baaaa] to-[#8baaaa]">
            <motion.h2
                onMouseEnter={() => dispatch(enterText())}
                onMouseLeave={() => dispatch(textLeave())}
                className="lg:text-8xl md:text-6xl sm:text-6xl xs:text-4xl mt-16"
            >
                about me
            </motion.h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                {' '}
                <img
                    onClick={() => setIsActive(!isActive)}
                    src={myPic}
                    alt="myPic"
                    className={`lg:w-96 md:w-72 sm:w-64 xs:w-52 rounded-full shadow-xl transition-all duration-300 ease-in-out outline outline-red-100 hover:outline-4 ${
                        isActive ? 'scale-110 outline-8' : ' outline-2'
                    } `}
                />
                <p
                    className={`${
                        isActive ? '-translate-y-16 opacity-0' : ''
                    } w-full text-center mt-4 transition-all duration-300 ease-in-out text-slate-800`}
                >
                    ^tap plz^
                </p>
            </div>
            <motion.p
                onMouseEnter={() => dispatch(enterText())}
                onMouseLeave={() => dispatch(textLeave())}
                className={`absolute transition-all duration-700 ease-in-out text-slate-800 font-semibold text-center xs:text-sm xs:w-40 sm:text-sm sm:w-44 md:text-lg md:w-48 lg:text-xl lg:w-64 ${
                    isActive
                        ? 'top-48 xs:left-12 sm:left-16 md:left-24 lg:left-28 scale-100'
                        : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'
                } `}
            >
                I'm Temirlan Emls, from Astana, Kazakhstan{' '}
                <span>&#x1F4CD;</span>
            </motion.p>
            <motion.p
                onMouseEnter={() => dispatch(enterText())}
                onMouseLeave={() => dispatch(textLeave())}
                className={`absolute transition-all duration-700 ease-in-out text-slate-800 font-semibold text-center text-xl  xs:text-sm xs:w-40 sm:text-sm sm:w-44 md:text-lg md:w-48 lg:text-xl lg:w-64 ${
                    isActive
                        ? 'top-1/2 xs:right-12 sm:right-16 md:right-24 lg:right-24 scale-100 sm:mt-28 xs:mt-24 xs:ml-36'
                        : 'top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-0'
                } `}
            >
                As a hobby I like to play video games, take photos and listen to
                music. In my free time I watch YouTube videos, movies and I also
                want to learn to play a musical instrument{' '}
                <span>&#127929;</span>
            </motion.p>
            <motion.p
                onMouseEnter={() => dispatch(enterText())}
                onMouseLeave={() => dispatch(textLeave())}
                className={`absolute transition-all duration-700 ease-in-out text-slate-800 font-semibold text-center text-xl  xs:text-sm xs:w-40 sm:text-sm sm:w-44 md:text-lg md:w-48 lg:text-xl lg:w-64 ${
                    isActive
                        ? 'top-1/2 xs:left-12 sm:left-16 md:left-24 lg:left-28 scale-100 sm:mt-28 xs:mt-24 xs:mr-36'
                        : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'
                } `}
            >
                I graduated from the Kazakh-Turkish Lyceum, Kostanay{' '}
                <span>&#x1F4DA;</span>. I have incomplete higher education.
                Then, I took a course from JustCode
            </motion.p>
            <motion.p
                onMouseEnter={() => dispatch(enterText())}
                onMouseLeave={() => dispatch(textLeave())}
                className={`absolute transition-all duration-700 ease-in-out text-slate-800 font-semibold text-center text-xl  xs:text-sm xs:w-40 sm:text-sm sm:w-44 md:text-lg md:w-48 lg:text-xl lg:w-64 ${
                    isActive
                        ? 'top-48 xs:right-12 sm:right-16 md:right-24 lg:right-24 scale-100'
                        : 'top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-0'
                } `}
            >
                My main focus on frontend <span>&#127760;</span>, but I'm also
                interested in other technologies and sometimes I like to dig in
                something new
            </motion.p>

            <motion.p
                onMouseEnter={() => dispatch(enterText())}
                onMouseLeave={() => dispatch(textLeave())}
                className={`absolute transition-all duration-700 ease-in-out text-slate-800 font-semibold text-center text-xl xs:text-sm sm:text-sm md:text-lg lg:text-xl ${
                    isActive
                        ? 'lg:bottom-24 md:bottom-16 sm:bottom-16 xs:bottom-10 left-1/2 -translate-x-1/2 scale-100'
                        : 'bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'
                } `}
            >
                <p>
                    {' '}
                    "Güzel gören güzel düşünür. <br />
                    Güzel düşünen, hayatından lezzet alır."
                </p>

                <span className="pt-4 inline-block">Bediüzzaman</span>
            </motion.p>
        </div>
    );
};

export default AboutMeBlock;
