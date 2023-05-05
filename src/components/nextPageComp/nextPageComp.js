import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const NextPageComp = ({ link, pageName }) => {
    return (
        <motion.div
            initial="hidden"
            whileHover="visible"
            className="w-full h-8 bg-red-100 snap-end transition-all duration-300 ease-in-out hover:bg-slate-800 hover:text-white"
        >
            <Link
                className="w-full h-full flex justify-center items-center font-bold"
                to={link}
            >
                {pageName} <FaArrowCircleRight className="ml-4" />
            </Link>
        </motion.div>
    );
};

export default NextPageComp;
