// eslint-disable-next-line
import { useTransform, useSpring } from "framer-motion";

export default function useParallax(value, start, end) {
    const y= useSpring(value, {
        stiffness: 500,
        damping: 40,
        restDelta: 0.001,
        ease: 'easeout'
    });
    return useTransform(y, [0, 1], [start, end]);
    
}
    
    