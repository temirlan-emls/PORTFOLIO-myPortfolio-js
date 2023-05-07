import React from 'react';
import SalemBlock from '../components/salemBlock/salemBlock';
import IntroBlock from '../components/introBlock/introBlock';
import TransitionEffect from '../components/transitionEffect/transitionEffect';
import { AnimatePresence } from 'framer-motion';
import NextPageComp from '../components/nextPageComp/nextPageComp';
import AboutMeBlock from '../components/aboutMeBlock/aboutMeBlock';

const IntroPage = () => {
    return (
        <AnimatePresence>
            <TransitionEffect key={333} />
            <div className="cursor-none h-screen snap-y snap-mandatory overflow-y-scroll relative">
                <SalemBlock />
                <IntroBlock />
                <AboutMeBlock />
                <NextPageComp
                    link={'/skillsAndProjects'}
                    pageName={'Skills And Projects page'}
                />
            </div>
        </AnimatePresence>
    );
};

export default IntroPage;
