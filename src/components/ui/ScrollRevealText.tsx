import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollRevealTextProps {
    text: string;
    className?: string;
    wordClassName?: string;
}

const Word = ({ children, progress, range }: { children: ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <span className="relative mr-[0.2em] mt-[0.1em]">
            <span className="absolute opacity-[0.15]">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

export default function ScrollRevealText({ text, className = "", wordClassName = "" }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "end 60%"]
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        <span className={wordClassName}>{word}</span>
                    </Word>
                );
            })}
        </div>
    );
}
