import React from 'react';
import { Link } from 'react-router-dom';
import { onLink, textLeave } from '../../store/slices/cursorSlice';
import { useDispatch } from 'react-redux';

const CustomLink = ({ link, text, styleProp }) => {
    const dispatch = useDispatch();

    return (
        <Link
            to={link}
            className={`${styleProp} cursor-none`}
            onMouseEnter={() => dispatch(onLink())}
            onMouseLeave={() => dispatch(textLeave())}
        >
            {text}
        </Link>
    );
};

export default CustomLink;
