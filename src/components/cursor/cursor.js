import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cursor = () => {
    const cursorStatus = useSelector((state) => state.cursor.cursorStatus);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const moveMouse = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };
        window.addEventListener('mousemove', moveMouse);
        return () => {
            window.removeEventListener('mousemove', moveMouse);
        };
    }, []);

    const cursorAnim = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            borderRadius: '100%',
        },
        onText: {
            width: 128,
            height: 128,
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
            mixBlendMode: 'difference',
            backgroundColor: 'rgb(255,255,255)',
            borderRadius: '100%',
        },
        onLink: {
            width: 48,
            height: 48,
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            mixBlendMode: 'difference',
            backgroundColor: 'rgb(255,255,80)',
            borderRadius: '10%',
        },
        onDrag: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            borderRadius: '100%',
            opacity: 0.35,
        },
    };

    return (
        <motion.div
            variants={cursorAnim}
            animate={cursorStatus}
            className="h-6 w-6 bg-slate-800 fixed z-50 pointer-events-none md:hidden sm:hidden xs:hidden"
        ></motion.div>
    );
};

export default Cursor;
