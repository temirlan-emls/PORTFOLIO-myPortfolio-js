import React from 'react';
import ProjectsBlock from '../components/projectsBlock/projectsBlock';
import TransitionEffect from './../components/transitionEffect/transitionEffect';
import { AnimatePresence } from 'framer-motion';
import SkillsBlock from './../components/skillsBlock/skillsBlock';
import NextPageComp from './../components/nextPageComp/nextPageComp';

const SkillsAndProjects = () => {
    return (
        <AnimatePresence>
            {' '}
            <TransitionEffect key={222} />{' '}
            <div className="cursor-none h-screen snap-y snap-mandatory overflow-y-scroll relative">
                <SkillsBlock />
                <ProjectsBlock />
                <NextPageComp
                    link={'/contacts'}
                    pageName={'Contacts page'}
                />
            </div>
        </AnimatePresence>
    );
};

export default SkillsAndProjects;
