'use client'

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopButton() {
    return (
        <button className="w-fit p-4 border rounded-lg hover:border-negro hover:bg-negro hover:text-blanco transition-all" onClick={scrollToTop}>
            <span></span> Volver arriba
        </button>
    );
}