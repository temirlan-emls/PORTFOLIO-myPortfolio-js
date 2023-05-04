import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                className="fixed left-0 right-0 bottom-full w-screen h-screen z-50 bg-red-200/70 backdrop-blur-3xl"
                initial={{ y: '100%', height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                exit={{ y: ['0%', '100%'], height: ['0%', '100%'] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed left-0 right-0 bottom-full w-screen h-screen z-40 bg-red-100/40 backdrop-blur-3xl"
                initial={{ y: '100%', height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                exit={{ y: '0%', height: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed left-0 right-0 bottom-full w-screen h-screen z-30 bg-red-100/20 backdrop-blur-3xl"
                initial={{ y: '100%', height: '100%' }}
                animate={{ y: '0%', height: '0%' }}
                exit={{ y: '0%', height: '0%' }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            />
        </>
    );
};

export default TransitionEffect;
