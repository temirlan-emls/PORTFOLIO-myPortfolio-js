import React from 'react';
import SalemBlock from '../components/salemBlock/salemBlock';
import TransitionEffect from '../components/transitionEffect/transitionEffect';
import { AnimatePresence } from 'framer-motion';

const ContactsPage = () => {
    return (
        <AnimatePresence>
            <TransitionEffect key={111} />{' '}
            <div className="cursor-none h-screen snap-y snap-mandatory overflow-y-scroll relative">
                <SalemBlock />
            </div>
        </AnimatePresence>
    );
};

export default ContactsPage;
