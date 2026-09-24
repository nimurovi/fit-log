import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
const LinksCC = () => {
    const pathname = usePathname();
    const link=<>
     
    <li><Link className={pathname === '/' ? 'text-lime-400' : ''} href="/">
        Workouts
    </Link></li>
    <li><Link className={pathname === '/myplan' ? 'text-lime-400' : ''} href="/myplan">
        My Plan
    </Link></li>
    </>
    return (
        <div className="flex space-x-4">
            {link}
        </div>
    );
};

export default LinksCC;