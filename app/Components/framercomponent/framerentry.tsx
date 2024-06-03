// components/PageTransition.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const pageVariants = {
    initial: {
        opacity: 0,
        x: '-100vw',
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: '100vw',
    },
};

const pageTransition = {
    type: 'spring',
    stiffness: 50,
    damping: 12,
};

interface PageTransitionProps {
    children: ReactNode;
    onAnimationComplete?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, onAnimationComplete }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            onAnimationComplete={onAnimationComplete}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
