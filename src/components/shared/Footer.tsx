import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
const Footer = () => {
    return (
        <div className="mt-4 border-t border-slate-800">
            <div className="container mx-auto flex flex-row items-center justify-between gap-2   p-4 mb-4 text-center ">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" height={20} width={20} />
                    <h1 className="text-xl font-bold text-white">FITLOG</h1>
                </div>
                <div className="text-xs text-slate-400">
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
