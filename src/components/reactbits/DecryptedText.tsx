"use client";

import { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    className?: string;
    delay?: number;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
    text,
    speed = 50,
    maxIterations = 10,
    className = '',
    delay = 0
}) => {
    const [displayText, setDisplayText] = useState('');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const iterationRef = useRef(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsStarted(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        const interval = setInterval(() => {
            iterationRef.current += 1;
            const resolved = iterationRef.current >= maxIterations;

            setDisplayText(text.split("").map((char, index) => {
                if (char === " " || resolved) return text[index];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join(""));

            if (resolved) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, isStarted, speed, maxIterations]);

    return <span className={className}>{displayText || text.replace(/./g, ' ')}</span>;
};

export default DecryptedText;
