'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const meWelcomeVariants = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 50,
    },
};

const meWelcomeTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    duration: 0.1,
};

interface MeWelcomeWrapperProps {
    children: ReactNode;
}

const MeWelcomeWrapper: React.FC<MeWelcomeWrapperProps> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={meWelcomeVariants}
            transition={meWelcomeTransition}
        >
            {children}
        </motion.div>
    );
};

export default MeWelcomeWrapper;
