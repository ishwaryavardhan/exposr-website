"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const res = await fetch("/api/portal/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            router.push("/portal");
            router.refresh();
        } else {
            setError("Invalid password");
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
                <h1 className="text-3xl font-black mb-2 text-center text-black uppercase tracking-tight">Portal Login</h1>
                <p className="text-center text-black/50 font-medium mb-8">Enter the admin password to view leads.</p>
                <form onSubmit={handleLogin} className="space-y-6">
                    {error && <div className="text-red-500 text-sm font-bold bg-red-50 p-3 rounded-lg text-center">{error}</div>}
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full border-b-2 border-black/10 py-3 font-medium text-black focus:outline-none focus:border-brand-orange transition-colors"
                        required
                    />
                    <button type="submit" className="w-full bg-brand-orange text-black font-black uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-brand-orange/90 transition-colors shadow-xl shadow-brand-orange/20">
                        Enter Portal
                    </button>
                </form>
            </div>
        </div>
    );
}
