"use client";

import { motion } from 'framer-motion';

const AnimatedGradient = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute -inset-[10%] opacity-30"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 60%)",
                        "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </div>
    );
};

export default AnimatedGradient;
