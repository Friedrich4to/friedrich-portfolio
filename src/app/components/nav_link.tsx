import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
    href: string;
    children: string;
}

const Nav_Link: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <Link className="flex gap-0 text-base lg:text-sm font-medium items-center group hover:gap-2" href={href}>
            <div className="rounded-sm w-0 h-0 bg-verdeSage group-hover:w-2 group-hover:h-2 transition-all"></div>
            {children}
        </Link>
    )
}

export default Nav_Link;