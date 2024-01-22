import { useTransform } from "framer-motion";

export default function useParallax(value, start, end) {
    return useTransform(value, [0, 1], [start, end]);
}
    
    