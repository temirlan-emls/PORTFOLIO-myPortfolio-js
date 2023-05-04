import React from 'react';
import ProjectsBlock from '../components/projectsBlock/projectsBlock';
import TransitionEffect from './../components/transitionEffect/transitionEffect';
import { AnimatePresence } from 'framer-motion';

const SkillsAndProjects = () => {
    return (
        <AnimatePresence>
            {' '}
            <TransitionEffect key={222}/>{' '}
            <div className="cursor-none h-screen snap-y snap-mandatory overflow-y-scroll relative">
                <ProjectsBlock />
            </div>
        </AnimatePresence>
    );
};

export default SkillsAndProjects;
