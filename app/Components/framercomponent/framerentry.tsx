// components/PageTransition.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
    hidden: { opacity: 0, x: -50, y: -50 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 50, y: 50 },
};

interface PageTransitionProps {
    children: ReactNode;
    onAnimationComplete?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, onAnimationComplete }) => {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'ease' }}
            onAnimationComplete={onAnimationComplete}
            className=""
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
