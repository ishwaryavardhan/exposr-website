"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = '', prefix = '', className = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else { setCount(Math.floor(start)); }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>;
};

export default CountUp;
