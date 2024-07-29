'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    href: string;
    children: string;
}

const Nav_Link: React.FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname()
    
    const isActive = pathname === href;

    return (

        <div className={`flex gap-0 text-base lg:text-sm font-medium items-center group hover:gap-2 ease-aggresive ${isActive ? 'gap-2' : ''}`}>
            <div className={`rounded-sm w-0 h-0 bg-verdeSage group-hover:w-2 group-hover:h-2 transition-all duration-500 ease-aggresive ${isActive ? 'w-2 h-2' : ''}`}></div>
            {children}
        </div>
    )
}

export default Nav_Link;
